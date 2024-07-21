import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Contact from '../pages/contact'
import Courses from '../pages/courses'
import Hobbies from "../pages/hobbies";
import Home from '../pages/home'
import Projects from '../pages/projects'

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/courses' element={<Courses />} />
          <Route exact path='/hobbies' element={<Hobbies />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
