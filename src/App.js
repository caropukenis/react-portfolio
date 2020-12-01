import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import About from "./components/about";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/testimonials";
import ContactUs from "./components/contact";
import Footer from "./components/footer";
import resumeData from "./resumeData";

class App extends Component {
  render() {
    return (
      <div>
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;