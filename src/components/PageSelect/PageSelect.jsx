import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../commons/common_styles.scss";
import { setLimit } from "../../features/orders/orderSlice";

const PageSelect = ({}) => {
  const limit = useSelector((state) => state.orders.limit);
  const dispatch = useDispatch();
  const onSelectChange = (e) => {
    dispatch(setLimit(e.target.value));
  };
  return (
    <div className="page_select_wrapper">
      <div className="container">
        <p className="sort_by">Show :</p>
        <select
          onChange={onSelectChange}
          className="select"
          defaultValue={limit}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
    </div>
  );
};

export default PageSelect;
