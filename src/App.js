import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { API_URL } from "./commons/utils";
import { logo } from "./logo.svg";
import Search from "./components/search/Search";
import DataTable from "./components/Table/DataTable";
import Pagination from "./components/Pagination/Pagination";
import Sort from "./components/Sort/Sort";
import PageSelect from "./components/PageSelect/PageSelect";
import OrderTypes from "./components/OrderTypes/OrderTypes";
import PaymentTypes from "./components/PaymentTypes/PaymentTypes";
import NavSection from "./components/NavSection/NavSection";

function App() {
  const [obj, setObj] = useState({});
  const [sort, setSort] = useState({ sort: "_id", order: "desc" });
  const [filterOrderStatus, setFilterOrderStatus] = useState([]);
  const [filterPaymentStatus, setFilterPaymentStatus] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(10);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const getAllOrders = async () => {
      try {
        const url = `${API_URL}/filtering?page=${page}&sort=${sort.sort},${
          sort.order
        }&order_status=${filterOrderStatus.toString()}&payment_status=${filterPaymentStatus.toString()}&search=${search}&start_date=${startDate.toString()}&end_date=${endDate.toString()}&limit=${limit}`;

        console.log("url->", url);
        const { data } = await axios.get(url);
        setObj(data);

        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    getAllOrders();
  }, [
    sort,
    filterOrderStatus,
    filterPaymentStatus,
    page,
    search,
    limit,
    startDate,
    endDate,
  ]);

  return (
    <div className="App">
      {/* <div className="head">
        <h2>Orders</h2>
        <Search setSearch={(search) => setSearch(search)} />
      </div> */}
      <div>
        <NavSection
          setSearch={(search) => setSearch(search)}
          sort={sort}
          setSort={(sort) => setSort(sort)}
          setStartDate={(startDate) => setStartDate(startDate)}
          startDate={startDate}
          endDate={endDate}
          setEndDate={(endDate) => setEndDate(endDate)}
        />
      </div>
      <div className="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-sm-12">
              <DataTable orders={obj.orders ? obj.orders : []} />
            </div>
            <div className="col-md-2 col-sm-12">
              <div className="filter_container">
                {/* <Sort sort={sort} setSort={(sort) => setSort(sort)} /> */}
                <OrderTypes
                  filterOrderStatus={filterOrderStatus}
                  orderTypes={
                    obj.order_status_options ? obj.order_status_options : []
                  }
                  setFilterOrderStatus={(orderStatus) =>
                    setFilterOrderStatus(orderStatus)
                  }
                />
                <PaymentTypes
                  filterPaymentStatus={filterPaymentStatus}
                  paymentTypes={
                    obj.payment_status_options ? obj.payment_status_options : []
                  }
                  setFilterPaymentStatus={(paymentStatus) =>
                    setFilterPaymentStatus(paymentStatus)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row bottom_section">
        <Pagination
          page={page}
          limit={obj.limit ? obj.limit : 0}
          total={obj.total ? obj.total : 0}
          setPage={(page) => setPage(page)}
        />
        <PageSelect setLimit={(limit) => setLimit(limit)} />
      </div>
    </div>
  );
}

export default App;
