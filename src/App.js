import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddColumn from "./pages/AddColumn/AddColumn";
import AddNewOrder from "./pages/AddNewOrder/AddNewOrder";
import AddOrder from "./pages/AddOrder/AddOrder";
import ColumnTable from "./pages/ColumnTable/ColumnTable";
import EditColumn from "./pages/EditColumn/EditColumn";
import EditTitle from "./pages/EditTitle/EditTitle";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/order/add" element={<AddNewOrder />} />
          <Route exact path="/title/edit" element={<EditTitle />} />
          <Route exact path="/columns" element={<ColumnTable />} />
          <Route exact path="/columns/:id" element={<EditColumn />} />
          <Route exact path="/new/columns" element={<AddColumn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
