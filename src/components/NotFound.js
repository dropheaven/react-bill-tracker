import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="container text-center">
    <h1>404</h1>
    <Link to="/">Return to Dashboard</Link>
  </div>
);

export default NotFound;
