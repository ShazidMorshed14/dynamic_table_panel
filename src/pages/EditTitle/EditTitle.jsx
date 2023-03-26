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

const EditTitle = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const title = useSelector((state) => state.orders.title);
  const titleData = useSelector((state) => state.orders.titleData);

  const handleEdit = async (e) => {
    e.preventDefault();
    await axios
      .put(`${API_URL}/titles/edit`, {
        title: title,
        _id: titleData._id,
      })
      .then((response) => {
        if (response.data.title) {
          toast.success("Edited Successfully!");
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error("Something went wrong!");
        console.log(err);
      });
  };

  useEffect(() => {
    dispatch(fetchAsyncTitle());
  }, []);

  return (
    <div className="App">
      <div>
        <NavSection title="Edit Title" />
        <div className="form_wrapper">
          <Form className="common_form" onSubmit={handleEdit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => dispatch(setTitle(e.target.value))}
              />
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

export default EditTitle;
