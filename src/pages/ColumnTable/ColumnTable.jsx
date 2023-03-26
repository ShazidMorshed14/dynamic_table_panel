import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../commons/utils";
import NavSection from "../../components/NavSection/NavSection";
import Table from "react-bootstrap/Table";
import "../../commons/common_styles.scss";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ColumnTable = () => {
  const [columns, setColumns] = useState([]);
  const navigate = useNavigate();

  const getColumns = async () => {
    await axios
      .get(`${API_URL}/columns`)
      .then((response) => {
        if (response.data.columns) {
          setColumns(response.data.columns);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteColumn = async (_id) => {
    console.log(_id);
    await axios
      .post(`${API_URL}/columns/delete`, { _id })
      .then((response) => {
        if (response.data) {
          toast.error("Deleted Successfully!");
          getColumns();
        }
      })
      .catch((err) => {
        toast.error("Something went wrong!");
        console.log(err);
      });
  };

  useEffect(() => {
    getColumns();
  }, []);

  return (
    <div className="App">
      <NavSection title="Columns" />
      <div>
        <div className="table_wrapper">
          <Table width={80} style={{ borderRadius: "8px !important" }}>
            <thead>
              <tr>
                <th>Column Name</th>
                <th>Column Serial</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {columns.length > 0 &&
                columns.map((column) => {
                  return (
                    <tr>
                      <td className="make_bold">{column.column_name}</td>
                      <td>{column.serial}</td>
                      <td>
                        <div>
                          <Button
                            size="sm"
                            onClick={() => navigate(`/columns/${column._id}`)}
                          >
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            className="ml-2"
                            variant="danger"
                            onClick={() => handleDeleteColumn(column._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
        <div className="m-3">
          <Button onClick={() => navigate("/")}>Back</Button>
          <Button
            className="ml-2"
            variant="success"
            onClick={() => navigate("/new/columns")}
          >
            Add Column
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ColumnTable;
