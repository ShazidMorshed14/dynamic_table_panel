import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import "../../commons/common_styles.scss";
import { setEndDate } from "../../features/orders/orderSlice";

const EndDate = ({}) => {
  const endDate = useSelector((state) => state.orders.endDate);
  const dispatch = useDispatch();
  return (
    <div className="d-flex ml-2 date_picker_wrapper">
      <p>To</p>
      <Form.Control
        type="date"
        value={endDate}
        onChange={(e) => dispatch(setEndDate(e.target.value))}
        placeholder="End Date"
        size="sm"
      />
    </div>
  );
};

export default EndDate;
