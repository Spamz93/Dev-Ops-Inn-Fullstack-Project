import { Box, Typography, Button, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import PoolIcon from '@mui/icons-material/Pool';
import { Link } from 'react-router-dom';
import { JSX } from '@emotion/react/jsx-runtime';

export default function HomePage(): JSX.Element {
  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          height: '70vh',
          backgroundImage: 'url("/public/DevOps-01.webp")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
          px: 2,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          The DevOps Inn
        </Typography>
        <Typography variant="h5" sx={{ maxWidth: 600, mb: 3 }}>
          Where Cloud Meets Comfort. Enjoy a relaxing stay with top-notch amenities and cutting-edge conveniences.
        </Typography>
        <Button variant="contained" size="large" component={Link} to="/rooms" sx={{ backgroundColor: '#3f51b5' }}>
          Book Now
        </Button>
      </Box>

      {/* Home Picture */}
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" textAlign="center" sx={{ mb: 3 }}>
          Experience Modern Innovation
        </Typography>
        <Card sx={{ maxWidth: 900, margin: 'auto', mb: 4, boxShadow: 3 }}>
          <CardMedia
            component="img"
            height="450"
            image="/public/DevOps.webp" 
            alt="IT Hotel Lobby"
          />
          <CardContent>
            <Typography variant="h5" gutterBottom>
              A Perfect Blend of Tech and Tranquility
            </Typography>
            <Typography variant="body1">
              Step into our state-of-the-art lobby, designed for modern travelers who need to stay connected.
              Whether you're here for a corporate retreat or a weekend getaway, our IT-inspired interiors and cloud-inspired design create the perfect fusion of comfort and productivity.
            </Typography>
          </CardContent>
        </Card>

        {/* Highlights */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 3, boxShadow: 3, borderRadius: 2 }}>
              <WifiIcon fontSize="large" color="primary" sx={{ mb: 1 }} />
              <Typography variant="h6">Free High-Speed Wi-Fi</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Stay connected with our enterprise-grade internet.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 3, boxShadow: 3, borderRadius: 2 }}>
              <LocalDiningIcon fontSize="large" color="primary" sx={{ mb: 1 }} />
              <Typography variant="h6">Gourmet Dining</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Enjoy a variety of delectable cuisines prepared by top chefs.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 3, boxShadow: 3, borderRadius: 2 }}>
              <PoolIcon fontSize="large" color="primary" sx={{ mb: 1 }} />
              <Typography variant="h6">Rooftop Pool & Spa</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Unwind in our rooftop pool and spa with panoramic city views.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
