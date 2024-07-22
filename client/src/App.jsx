import { Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Login from "./components/Login"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import Footer from "./components/Footer"
import Guides from "./components/Guides"


function App() {
    return (
        <div id="wrapper" className="bg-white">
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/tree-species" element={<Guides />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App
