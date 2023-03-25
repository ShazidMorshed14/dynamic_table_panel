import React from "react";
import "../../commons/common_styles.scss";

const PaymentTypes = ({
  paymentTypes,
  filterPaymentStatus,
  setFilterPaymentStatus,
}) => {
  const onChange = ({ currentTarget: input }) => {
    if (input.checked) {
      const state = [...filterPaymentStatus, input.value];
      setFilterPaymentStatus(state);
    } else {
      const state = filterPaymentStatus.filter((val) => val !== input.value);
      setFilterPaymentStatus(state);
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
