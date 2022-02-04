import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import routes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './routes/NotFound'

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={<route.component />} />
                ))}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    )
}
