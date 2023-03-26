import React from "react";
import Table from "react-bootstrap/Table";
import { formateDate } from "../../commons/utils";
import "../../commons/common_styles.scss";
import { useSelector } from "react-redux";
import Spinner from "../../commons/images/spinner.gif";

const DataTable = ({ orders, columns }) => {
  const loading = useSelector((state) => state.orders.loading);
  return (
    <div className="table_wrapper">
      {!loading ? (
        <Table width={100} style={{ borderRadius: "8px !important" }}>
          <thead>
            <tr>
              {columns.map((column_name) => {
                return <th>{column_name}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              let formattedDate = formateDate(order.createdAt);
              return (
                <tr>
                  <td className="make_bold">{order.uid}</td>
                  <td>{order.order_quantity}</td>
                  <td>{order.total_price}</td>
                  <td>
                    <div
                      className={`status_box  ${
                        order.order_status == "confirmed" ? "make_green" : ""
                      } ${
                        order.order_status == "delivered" ? "fill_green" : ""
                      } ${
                        order.order_status == "pending" ? "make_yellow" : ""
                      } ${order.order_status == "cancelled" ? "fill_red" : ""}`}
                    >
                      {order.order_status}
                    </div>
                  </td>
                  <td>
                    <div
                      className={`status_box  ${
                        order.payment_status == "unpaid"
                          ? "fill_red"
                          : "fill_green"
                      }`}
                    >
                      {order.payment_status}
                    </div>
                  </td>
                  <td>{formattedDate}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <div className="loading_wrapper">
          <img src={Spinner} alt="" className="src" />
        </div>
      )}
    </div>
  );
};

export default React.memo(DataTable);
