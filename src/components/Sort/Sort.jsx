import styles from "./styles.module.css";

const Sort = ({ sort, setSort }) => {
  const onSelectChange = (e) => {
    setSort({ sort: e.target.value, order: sort.order });
  };

  const onArrowChange = () => {
    if (sort.order === "asc") {
      setSort({ sort: sort.sort, order: "desc" });
    } else {
      setSort({ sort: sort.sort, order: "asc" });
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.sort_by}>Sort By :</p>
      <select
        onChange={onSelectChange}
        className={styles.select}
        defaultValue={sort.sort}
      >
        <option value="_id">ID</option>
        <option value="order_quantity">Quantity</option>
        <option value="total_price">Price</option>
      </select>
      <div className={styles.arrow_btn} onClick={onArrowChange}>
        <img src="https://img.icons8.com/material-outlined/24/null/sorting-arrows.png" />
      </div>
    </div>
  );
};

export default Sort;
