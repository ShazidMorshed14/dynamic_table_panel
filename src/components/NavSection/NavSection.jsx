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

const NavSection = ({
  setSearch,
  sort,
  setSort,
  setStartDate,
  startDate,
  endDate,
  setEndDate,
}) => {
  return (
    <div className="nav_section_wrapper">
      <Navbar bg="light" expand="lg" className="nav_wrapper">
        <Container fluid>
          <Navbar.Brand href="#" className="title">
            Purchase History
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search OID"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
                size="sm"
              />
            </Form>
            <div className="d-flex">
              <StartDate startDate={startDate} setStartDate={setStartDate} />
              <EndDate endDate={endDate} setEndDate={setEndDate} />
            </div>
            <div>
              <Sort sort={sort} setSort={(sort) => setSort(sort)} />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavSection;
