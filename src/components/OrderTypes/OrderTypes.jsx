import React from "react";
import "../../commons/common_styles.scss";

const OrderTypes = ({
  orderTypes,
  filterOrderStatus,
  setFilterOrderStatus,
}) => {
  const onChange = ({ currentTarget: input }) => {
    if (input.checked) {
      const state = [...filterOrderStatus, input.value];
      setFilterOrderStatus(state);
    } else {
      const state = filterOrderStatus.filter((val) => val !== input.value);
      setFilterOrderStatus(state);
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
