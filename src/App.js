import React, { Component } from "react";
import Nametag from "./Nametag";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Nametag fullName="Patrick McDonagh" />
                <Contact email="patrickjmcd@gmail.com" githubHandle="patrickjmcd" location="Kansas City, MO" />
                <AboutMe />
                <Experience />
                <Footer />
            </div>
        );
    }
}

export default App;
