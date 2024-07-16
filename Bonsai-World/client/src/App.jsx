import { Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Login from "./components/Login"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import Footer from "./components/Footer"
import ForumPage from "./components/Forum"


function App() {
    return (
        <div id="wrapper" className="bg-white">
            <Navigation />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forum" element={<ForumPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </div>
    )
}

export default App
