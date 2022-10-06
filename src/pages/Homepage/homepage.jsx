import './homepage.styles.scss';
import React, { Component }  from 'react';
import AboutUs from "../../components/about_us.component/about_us.component";
import Intro from "../../components/intro.component/intro.component";

export default function Homepage() {
  return (
    <div className="homepage">
      <Intro />
      <AboutUs />
    </div>
  );
}