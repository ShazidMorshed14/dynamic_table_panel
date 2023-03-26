import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "../../commons/common_styles.scss";
const Buttons = () => {
  const navigate = useNavigate();
  return (
    <div className="buttons_wrapper">
      <Button
        variant="primary"
        size="sm"
        onClick={() => navigate("/order/add")}
      >
        Add New Order
      </Button>
      <Button
        variant="secondary"
        size="sm"
        onClick={() => navigate("/title/edit")}
      >
        Edit Title
      </Button>
      <Button variant="success" size="sm" onClick={() => navigate("/columns")}>
        Columns
      </Button>
    </div>
  );
};

export default Buttons;
