# Work in Progress

# The DevOps Inn - Full-Stack Hotel Booking Application

The DevOps Inn is a full-stack hotel booking web application designed to showcase modern design and technology integration. This project is built using a Node.js/Express backend (with TypeScript) and a React frontend (with TypeScript, Vite, Material UI, and React Router).

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Responsive Design:** Fully responsive layout with a modern UI.
- **Hotel Booking:** Browse and book hotel rooms seamlessly.
- **User Authentication:** (Optional) User login and registration functionalities.
- **Data Fetching:** Integration with a RESTful API built on Node.js/Express.
- **Modern UI:** Built with Material UI (MUI) for a sleek, professional look.
- **Client-Side Routing:** Seamless navigation using React Router.
- **TypeScript:** End-to-end type safety on both frontend and backend.

## Technologies Used

### Frontend
- **React** with **TypeScript**
- **Vite** (for fast builds and development)
- **Material UI (MUI)**
- **React Router v6.4+** (using Data Router APIs)
- **CSS** (with the MUI `sx` prop for custom styling)

### Backend
- **Node.js** with **Express**
- **TypeScript**
- **CORS** (to handle cross-origin requests)


**Setup Instructions**

_Backend Setup_

1.Navigate to the backend folder:
cd backend

2.Install dependencies:
npm install
Run the backend server (it runs on port 5000 by default):

3.npm run dev
Verify the API by visiting http://localhost:5000/api/rooms.


_Frontend Setup_

1.Open a new terminal, navigate to the frontend folder:
cd frontend

2.Install dependencies:
npm install

3.Run the frontend development server (by default on port 5173):
npm run dev

4.Open http://localhost:5173 in your browser.

_API Endpoints_
The backend provides a simple API endpoint:

GET /api/rooms — Returns a list of sample hotel rooms.
You can expand these endpoints as needed (e.g., for booking, authentication, etc.).

_Contributing_
Contributions are welcome! Please fork the repository, create a branch for your changes, and submit a pull request. Ensure that your changes adhere to the coding style and include appropriate tests.

License
This project is licensed under the MIT License.
