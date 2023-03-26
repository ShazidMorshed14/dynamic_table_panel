import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../features/orders/orderSlice";
import "../../commons/common_styles.scss";

const Sort = ({}) => {
  const sort = useSelector((state) => state.orders.sort);
  const dispatch = useDispatch();
  const onSelectChange = (e) => {
    dispatch(setSort({ sort: e.target.value, order: sort.order }));
  };

  const onArrowChange = () => {
    if (sort.order === "asc") {
      dispatch(setSort({ sort: sort.sort, order: "desc" }));
    } else {
      dispatch(setSort({ sort: sort.sort, order: "asc" }));
    }
  };

  return (
    <div className="sort_container">
      <div className="container">
        <p className="sort_by">Sort By :</p>
        <select
          onChange={onSelectChange}
          className="select"
          defaultValue={sort.sort}
        >
          <option value="_id">ID</option>
          <option value="order_quantity">Quantity</option>
          <option value="total_price">Price</option>
        </select>
        <div className="arrow_btn" onClick={onArrowChange}>
          <img src="https://img.icons8.com/material-outlined/24/null/sorting-arrows.png" />
        </div>
      </div>
    </div>
  );
};

export default Sort;
