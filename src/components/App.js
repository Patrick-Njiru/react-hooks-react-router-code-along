import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Messages from "./Messages";
import SignUp from "./SignUp";
import NotFound from "./NotFound";


function App() {
    return (
        <div>
            {/* Add NavBar outside routes so it appears on top ofevery page */}
            <NavBar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App