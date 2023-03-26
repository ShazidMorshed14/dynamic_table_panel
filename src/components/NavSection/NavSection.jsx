import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Sort from "../Sort/Sort";
import "../../commons/common_styles.scss";
import StartDate from "../DatePicker/StartDate";
import EndDate from "../DatePicker/EndDate";
import {
  setSearch,
  setStartDate,
  setEndDate,
  setSort,
  setExpand,
} from "../../features/orders/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavSection = ({ title }) => {
  const navigate = useNavigate();
  const search = useSelector((state) => state.orders.search);
  const expand = useSelector((state) => state.orders.expand);
  const dispatch = useDispatch();
  return (
    <div className="nav_section_wrapper">
      <Navbar bg="light" expand="lg" className="nav_wrapper">
        <Container fluid>
          <Navbar.Brand
            href="#"
            className="title"
            onClick={() => navigate("/")}
          >
            {title}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search OID"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={(e) => dispatch(setSearch(e.target.value))}
                size="sm"
              />
            </Form>
            <div className="d-flex">
              <StartDate />
              <EndDate />
            </div>
            <div>
              <Sort />
            </div>
            <div
              className="arrow_btn"
              onClick={() => dispatch(setExpand(!expand))}
            >
              <img src="https://img.icons8.com/fluency/48/null/low-indicator-filter.png" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavSection;
