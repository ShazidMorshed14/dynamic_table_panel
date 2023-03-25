import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../../commons/common_styles.scss";

const EndDate = ({ endDate, setEndDate }) => {
  return (
    <div className="d-flex ml-2 date_picker_wrapper">
      <p>To</p>
      <Form.Control
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        placeholder="End Date"
        size="sm"
      />
    </div>
  );
};

export default EndDate;
