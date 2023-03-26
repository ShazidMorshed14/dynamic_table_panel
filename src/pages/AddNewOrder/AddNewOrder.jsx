import React, { useEffect, useState } from "react";
import NavSection from "../../components/NavSection/NavSection";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncTitle, setTitle } from "../../features/orders/orderSlice";
import axios from "axios";
import { API_URL } from "../../commons/utils";
import { toast } from "react-toastify";

const AddNewOrder = () => {
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(1);
  const [orderStatus, setOrderStatus] = useState("pending");
  const [paymentStatus, setPaymentStatus] = useState("unpaid");

  const handleAddOrder = async (e) => {
    e.preventDefault();
    if (quantity && totalPrice && orderStatus && paymentStatus) {
      await axios
        .post(`${API_URL}/orders/add`, {
          order_quantity: quantity,
          total_price: totalPrice,
          order_status: orderStatus,
          payment_status: paymentStatus,
        })
        .then((response) => {
          if (response.data.order) {
            toast.success("Added Successfully!");
            navigate("/");
          }
        })
        .catch((err) => {
          toast.error("Something went wrong!");
          console.log(err);
        });
    } else {
      toast.error("Something missing!");
    }
  };
  return (
    <div className="App">
      <div>
        <NavSection title="New Order" />
        <div className="form_wrapper">
          <Form className="common_form" onSubmit={handleAddOrder}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Total Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Total Price"
                value={totalPrice}
                onChange={(e) => setTotalPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Order Status</Form.Label>
              <select
                onChange={(e) => setOrderStatus(e.target.value)}
                defaultValue={orderStatus}
                style={{ marginLeft: "5px" }}
              >
                <option value="pending">pending</option>
                <option value="confirmed">confirmed</option>
                <option value="delivered">delivered</option>
                <option value="cancelled">cancelled</option>
              </select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Payment Status</Form.Label>
              <select
                onChange={(e) => setPaymentStatus(e.target.value)}
                defaultValue={paymentStatus}
                style={{ marginLeft: "5px" }}
              >
                <option value="unpaid">unpaid</option>
                <option value="paid">paid</option>
              </select>
            </Form.Group>
            <Button
              variant="danger"
              className="mr-2"
              onClick={() => navigate("/")}
            >
              Back
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddNewOrder;
