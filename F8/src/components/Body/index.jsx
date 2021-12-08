import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import Sidebar from "../Sidebar";
import Home from "../../pages/Home";
import Courses from "../../pages/Courses";
import Question from "../../pages/Question";
import Blog from "../../pages/Blog";
import Code from "../../pages/Code";


import config from "../../config";

import "./style.scss";
import "./rps.scss";

function Body(props) {
  return (
    <Router>
      <div className="content">
        <div className="content__sidebar">
          {" "}
          <Sidebar />
        </div>

        <div className="content__pages">
          <Route path={config.routes.home} exact component={Home} />
          <Route path={config.routes.courses} component={Courses} />
          <Route path={config.routes.question} component={Question} />
          <Route path={config.routes.blog} component={Blog} />
          <Route path={config.routes.code} component={Code} />
        </div>
      </div>
    </Router>
  );
}

export default Body;
