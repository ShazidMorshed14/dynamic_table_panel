import React from "react";
import "../../commons/common_styles.scss";

const PageSelect = ({ limit, setLimit }) => {
  const onSelectChange = (e) => {
    setLimit(e.target.value);
  };
  return (
    <div className="page_select_wrapper">
      <div className="container">
        <p className="sort_by">Show :</p>
        <select
          onChange={onSelectChange}
          className="select"
          defaultValue={limit}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
    </div>
  );
};

export default PageSelect;
