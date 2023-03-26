import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import "../../commons/common_styles.scss";
import { setStartDate } from "../../features/orders/orderSlice";

const StartDate = () => {
  const startDate = useSelector((state) => state.orders.startDate);
  const dispatch = useDispatch();
  return (
    <div className="d-flex ml-2 date_picker_wrapper">
      <p>From</p>
      <Form.Control
        type="date"
        value={startDate}
        onChange={(e) => dispatch(setStartDate(e.target.value))}
        placeholder="Start Date"
        size="sm"
      />
    </div>
  );
};

export default StartDate;
