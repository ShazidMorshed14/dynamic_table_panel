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

const AddColumn = () => {
  const navigate = useNavigate();

  const [columnName, setColumnName] = useState("");
  const [serial, setSerial] = useState(1);

  const handleAddColumn = async (e) => {
    e.preventDefault();
    if (columnName && serial) {
      await axios
        .post(`${API_URL}/columns/add`, {
          column_name: columnName,
          serial: serial,
        })
        .then((response) => {
          if (response.data.column) {
            toast.success("Added Successfully!");
            navigate("/columns");
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
        <NavSection title="Add Column" />
        <div className="form_wrapper">
          <Form className="common_form" onSubmit={handleAddColumn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Column Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Column Name"
                value={columnName}
                onChange={(e) => setColumnName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Serial</Form.Label>
              <Form.Control
                type="number"
                value={serial}
                onChange={(e) => setSerial(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="danger"
              className="mr-2"
              onClick={() => navigate("/columns")}
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

export default AddColumn;
