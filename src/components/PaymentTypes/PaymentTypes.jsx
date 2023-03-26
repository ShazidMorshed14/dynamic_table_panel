import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../commons/common_styles.scss";
import { setFilterPaymentStatus } from "../../features/orders/orderSlice";

const PaymentTypes = ({ paymentTypes }) => {
  const dispatch = useDispatch();
  const filterPaymentStatus = useSelector(
    (state) => state.orders.filterPaymentStatus
  );
  const onChange = ({ currentTarget: input }) => {
    if (input.checked) {
      const state = [...filterPaymentStatus, input.value];
      dispatch(setFilterPaymentStatus(state));
    } else {
      const state = filterPaymentStatus.filter((val) => val !== input.value);
      dispatch(setFilterPaymentStatus(state));
    }
  };

  return (
    <div className="order_type_container">
      <div className="container">
        <h1 className="heading">Filter By Payment Types</h1>
        <div className="genre_container">
          {paymentTypes.map((payment_type) => (
            <div className="genre" key={payment_type}>
              <input
                className="genre_input"
                type="checkbox"
                value={payment_type}
                onChange={onChange}
              />
              <p className="genre_label">{payment_type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentTypes;
