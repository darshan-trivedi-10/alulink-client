import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Signup from './pages/Signup';
import OrganizationProfile from './pages/Profile/organizationProfile';
import UserProfile from './pages/Profile/userProfile';
import Feed from './pages/Feed';

function App() {
  const organizationData = useSelector((state) => state.organizationReducer.organizationData);
  const userData = useSelector((state) => state.userReducer.userData);

  const isOrganizationLogged = organizationData?.success === true;
  const isUserLogged = userData?.success === true;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={isOrganizationLogged ? (<Navigate to="/organization/dbt" />) : isUserLogged ? (<Navigate to="/user/profile" />) : (<Home />)} />
          <Route path="/signup" element={isOrganizationLogged ? (<Navigate to="/organization/dbt" />) : isUserLogged ? (<Navigate to="/user/profile" />) : (<Signup />)} />
          <Route
            path="/organization/:username"
            element={isOrganizationLogged ? <OrganizationProfile /> : <Navigate to="/" />}
          />
          <Route
            path="/user/:username"
            element={isUserLogged ? <UserProfile /> : <Navigate to="/" />}
          />
          <Route path='/feed' element={<Feed />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// /*
// {
//   "message": "Organization Profile Created SuccesFully",
//   "data": {
//     "user": {
//       "name": "Darshan Trivedi",
//       "location": "Ahmedabad",
//       "established": "1948-01-01T00:00:00.000Z",
//       "website": "https://trivedi.in",
//       "phoneNumber": "",
//       "email": "",
//       "logo": "",
//       "description": "Update the package that requires node-waf: Check if there is an updated version of the jwt package available that doesn't rely on node-waf. You can try searching for an alternative package or check if the current version of jwt has an updated release.",
//       "programType": "MBBS",
//       "isVerified": false,
//       "admin": {
//         "name": "Darshan Trivedi",
//         "email": "trivedidarshan30@gmail.com",
//         "password": "node-waf",
//         "phone": "9898363695"
//       },
//       "_id": "6480916991192bb955f95d10",
//       "__v": 0
//     },
//     "token": "eyJhbGciOiJIUzI1NifIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODSA5MTY5OTExOTJiYjk1NWY5NWQxMCIsImlhdCfI6MTY4NjE0NzQzNCwiZXhwIjoxNjg4NzM5NDM0fQ.r58-Ru9KKPd1iN9iWFRMOWEdu9idbYf_3rLcdmPqfAQ"
//   },
//   "success": true,
//   "err": {}
// }
// */