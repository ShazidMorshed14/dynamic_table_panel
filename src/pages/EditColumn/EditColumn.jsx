import React, { useEffect, useState } from "react";
import NavSection from "../../components/NavSection/NavSection";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncTitle, setTitle } from "../../features/orders/orderSlice";
import axios from "axios";
import { API_URL } from "../../commons/utils";
import { toast } from "react-toastify";

const EditColumn = () => {
  const navigate = useNavigate();
  const [columnName, setColumnName] = useState("");
  const [serial, setSerial] = useState(1);
  const { id } = useParams();
  const handleEditColumn = async (e) => {
    e.preventDefault();
    if (id && columnName && serial) {
      await axios
        .put(`${API_URL}/columns/edit`, {
          _id: id,
          column_name: columnName,
          serial: serial,
        })
        .then((response) => {
          if (response.data.column) {
            toast.success("Edited Successfully!");
            navigate("/columns");
          }
        })
        .catch((err) => {
          toast.error("Something went wrong!");
          console.log(err);
        });
    } else {
      toast.error("Something is missing!");
    }
  };

  const getColumnDetails = async (id) => {
    console.log("ID", id);
    await axios
      .get(`${API_URL}/columns/details/${id}`)
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          setColumnName(response.data.columns.column_name);
          setSerial(response.data.columns.serial);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    //columns/details/641f783ce3edb688b1aab034
  };

  useEffect(() => {
    getColumnDetails(id);
  }, [id]);

  return (
    <div className="App">
      <div>
        <NavSection title="Edit Title" />
        <div className="form_wrapper">
          <Form className="common_form" onSubmit={handleEditColumn}>
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
                type="text"
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

export default EditColumn;
