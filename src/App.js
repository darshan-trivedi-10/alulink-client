import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home'
import Signup from './pages/Signup'
import Profile from './pages/Profile';
import { useSelector } from 'react-redux';

function App() {
  const isLogged = useSelector((state) => (state.organizationReducer.organizationData?.success === true))
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={isLogged ? <Navigate to="/organization/dbt" /> : <Home />} />
          <Route path='/signup' exact element={[<Signup />]} />
          <Route path='/organization/:username' element={isLogged ? <Profile /> : <Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;

/*
{
  "message": "Organization Profile Created SuccesFully",
  "data": {
    "user": {
      "name": "Darshan Trivedi",
      "location": "Ahmedabad",
      "established": "1948-01-01T00:00:00.000Z",
      "website": "https://trivedi.in",
      "phoneNumber": "",
      "email": "",
      "logo": "",
      "description": "Update the package that requires node-waf: Check if there is an updated version of the jwt package available that doesn't rely on node-waf. You can try searching for an alternative package or check if the current version of jwt has an updated release.",
      "programType": "MBBS",
      "isVerified": false,
      "admin": {
        "name": "Darshan Trivedi",
        "email": "trivedidarshan30@gmail.com",
        "password": "node-waf",
        "phone": "9898363695"
      },
      "_id": "6480916991192bb955f95d10",
      "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODA5MTY5OTExOTJiYjk1NWY5NWQxMCIsImlhdCI6MTY4NjE0NzQzNCwiZXhwIjoxNjg4NzM5NDM0fQ.r58-Ru9KKPd1iN9iWFRMOWEdu9idbYf_3rLcdmPqfAQ"
  },
  "success": true,
  "err": {}
}
*/