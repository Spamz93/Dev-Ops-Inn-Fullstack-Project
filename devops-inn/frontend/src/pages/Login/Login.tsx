import React, { useState, useContext } from 'react';
import { Container, Typography, TextField, Button, Box, Link as MuiLink } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import { AuthContext, DecodedToken } from '../../context/AuthContext';

const AuthPage: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const toggleMode = () => {
    setIsSignUp(prev => !prev);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (isSignUp) {
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
      if (!name.trim()) {
        setError('Full Name is required.');
        return;
      }
    }
    
    setLoading(true);
    const endpoint = isSignUp ? '/signup' : '/login';
    const payload = isSignUp 
      ? { email, password, name }
      : { email, password };
    
    try {
      const response = await fetch(`http://localhost:5000/api/auth${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Authentication failed');
      }
      
      const data = await response.json();
      localStorage.setItem('token', data.token);
      const decoded = jwtDecode<DecodedToken>(data.token);
      setUser(decoded);
      
      alert(`${isSignUp ? 'Sign Up' : 'Login'} successful!`);
      navigate('/');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        {isSignUp ? 'Sign Up' : 'Login'}
      </Typography>
      {error && (
        <Typography variant="body1" color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {isSignUp && (
          <>
            <TextField
              label="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <TextField
              label="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </>
        )}
        <Button variant="contained" type="submit" disabled={loading}>
          {loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Login'}
        </Button>
      </Box>
      <Box sx={{ mt: 2 }}>
        <MuiLink component="button" onClick={toggleMode}>
          {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </MuiLink>
      </Box>
    </Container>
  );
};

export default AuthPage;
