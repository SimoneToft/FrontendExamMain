import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Prototype from "./Javascript/1Prototypes/prototype";
import Components from "./Questions/Question1/Components";
import Callback from "./Questions/Question2/Callback";
import Bubbling from "./Questions/Question8/Bubbling";
import JSXExample from "./React/2JSX/JSXExample";
import LiftingState from "./Questions/Question11/LiftingState";
import Promises from "./Javascript/5Promise/Promises";
import UseEffectsExample from "./React/3UseEffects/UseEffectsExample";
import HandlingEvents from "./React/4HandlingEvents/HandlingEvents";
import ConditionalRendering from "./React/5ConditionalRendering/ConditionalRendering";
import Storage from "./Javascript/8Storage/Storage";
import HigherOrder from "./Questions/Question1/HigherOrder";
import Flexbox from "./Questions/Question2/Flexbox";
import JSX from "./Questions/Question2/JSX";
import Grid from "./Questions/Question2/Grid";
import Promise from "./Questions/Question4/Promise";
import EventHandling from "./Questions/Question7/EventHandling";
import OnChange from "./Questions/Question9/OnChange";

// Define the data for each section
const sections = [
  {
    title: "Question 1",
    routes: [
      { path: "/Question1/HigherOrder", content: <HigherOrder/> },
      { path: "/Question1/Components", content: <Components /> },
    ]
  },
  {
    title: "Question 2",
    routes: [
      { path: "/Question2/Callback", content: <Callback /> },
      { path: "/Question2/Flexbox", content: <Flexbox /> },
      { path: "/Question2/JSX", content: <JSX /> },
      { path: "/Question2/Grid", content: <Grid /> },
    ]
  },
  {
    title: "Question 3",
    routes: [
      { path: "/Question3/Props", content: <Components /> },
      { path: "/Question3/State", content: <JSX /> },
    ]
  },
  {
    title: "Question 4",
    routes: [
      { path: "/Question4/Promise", content: <Promise /> },
      { path: "/Question2/Flexbox", content: <Flexbox /> },
    ]
  },
  {
    title: "Question 7",
    routes: [
      { path: "/Question7/EventHandling", content: <EventHandling/> },
    ]
  },
  {
    title: "Question 8",
    routes: [
      { path: "/Question2/Bubbling", content: <Bubbling /> },
    ]
  },
  {
    title: "Question 9",
    routes: [
      { path: "/Question9/OnChange", content: <OnChange /> },
    ]
  },
  {
    title: "Question 11",
    routes: [
      { path: "/Question11/LiftingState", content: <LiftingState /> },
      { path: "/Question2/Flexbox", content: <Flexbox /> },
    ]
  },
  {
    title: "Question 12",
    routes: [
      { path: "/Question2/Callback", content: <Callback /> },
      { path: "/Question2/Flexbox", content: <Flexbox /> },
    ]
  },
  {
    title: "Question 13",
    routes: [
      { path: "/Question4/Promise", content: <Promise /> },
      { path: "/Question2/Flexbox", content: <Flexbox /> },
      { path: "/Question2/Grid", content: <Grid /> },
    ]
  }

];

const Overview = () => {
  return (
    <div className="container-fluid" style={{width:"100vw"}}>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start"}}> 
        <div className="sidebar collapse" style={{  top: 0, left: 0 }}>
          <h2>Examples</h2>
          {sections.map((section, index) => (
            <div key={index}>
              <h4 style={{ margin: 0 }}>{section.title}</h4>
              <ul>
                {section.routes.map((route, routeIndex) => (
                  <li key={routeIndex}>
                    <Link to={route.path}>{route.path}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="maincontent" style={{ display:"display",flexDirection:"row", justifyContent:"center", width:"100%"}}>
          <Routes>
          <Route path="/" element={<div>Default Content</div>} />
            {sections.map((section, sectionIndex) => (
              section.routes.map((route, routeIndex) => (
                <Route
                  key={`${sectionIndex}-${routeIndex}`}
                  path={route.path}
                  element={<div>{route.content}</div>}
                />
              ))
            ))}
          </Routes>
        </div>
        <div className="sidebar collapse"></div>
        </div>
    </div>
  );
};

export default Overview;