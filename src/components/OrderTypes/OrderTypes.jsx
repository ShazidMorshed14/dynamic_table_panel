import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../commons/common_styles.scss";
import { setFilterOrderStatus } from "../../features/orders/orderSlice";

const OrderTypes = ({ orderTypes }) => {
  const dispatch = useDispatch();

  const filterOrderStatus = useSelector(
    (state) => state.orders.filterOrderStatus
  );

  const onChange = ({ currentTarget: input }) => {
    if (input.checked) {
      const state = [...filterOrderStatus, input.value];
      dispatch(setFilterOrderStatus(state));
    } else {
      const state = filterOrderStatus.filter((val) => val !== input.value);
      dispatch(setFilterOrderStatus(state));
    }
  };

  return (
    <div className="order_type_container">
      <div className="container">
        <h1 className="heading">Filter By Order Types</h1>
        <div className="genre_container">
          {orderTypes.map((order_type) => (
            <div className="genre" key={order_type}>
              <input
                className="genre_input"
                type="checkbox"
                value={order_type}
                onChange={onChange}
              />
              <p className="genre_label">{order_type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderTypes;
