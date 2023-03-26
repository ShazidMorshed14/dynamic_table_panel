import React from "react";
import NavSection from "../../components/NavSection/NavSection";
import "../../commons/common_styles.scss";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <div>
        <NavSection title="Home" />
      </div>
      <div className="not_found_section">
        <img
          src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg"
          alt=""
          className="src"
        />
        <Button size="lg" onClick={() => navigate("/")}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
