import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Signup from './pages/Signup'

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' exact element={[<Home />]} />
                    <Route path='/signup' exact element={[<Signup />]} />
                </Routes>
            </Router>
        </>
    )
}

export default App;