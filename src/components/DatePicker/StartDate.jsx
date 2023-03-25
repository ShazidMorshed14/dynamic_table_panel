import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../../commons/common_styles.scss";

const StartDate = ({ startDate, setStartDate }) => {
  return (
    <div className="d-flex ml-2 date_picker_wrapper">
      <p>From</p>
      <Form.Control
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        placeholder="Start Date"
        size="sm"
      />
    </div>
  );
};

export default StartDate;
