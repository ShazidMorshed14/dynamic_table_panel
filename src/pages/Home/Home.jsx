import { useEffect } from "react";

import "../../App.css";

import NavSection from "../../components/NavSection/NavSection";
import DataTable from "../../components/Table/DataTable";
import OrderTypes from "../../components/OrderTypes/OrderTypes";
import PaymentTypes from "../../components/PaymentTypes/PaymentTypes";
import Pagination from "../../components/Pagination/Pagination";
import PageSelect from "../../components/PageSelect/PageSelect";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncOrders } from "../../features/orders/orderSlice";
import Buttons from "../../components/Buttons/Buttons";

function Home() {
  const obj = useSelector((state) => state.orders.obj);
  const sort = useSelector((state) => state.orders.sort);
  const filterOrderStatus = useSelector(
    (state) => state.orders.filterOrderStatus
  );
  const filterPaymentStatus = useSelector(
    (state) => state.orders.filterPaymentStatus
  );
  const page = useSelector((state) => state.orders.page);
  const search = useSelector((state) => state.orders.search);
  const limit = useSelector((state) => state.orders.limit);
  const startDate = useSelector((state) => state.orders.startDate);
  const endDate = useSelector((state) => state.orders.endDate);
  const expand = useSelector((state) => state.orders.expand);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchAsyncOrders({
        page,
        sort,
        filterOrderStatus,
        filterPaymentStatus,
        search,
        startDate,
        endDate,
        limit,
      })
    );
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
      <div>
        <NavSection title={obj.title ? obj.title : "Loading..."} />
      </div>
      <div className="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className={`${expand ? "col-md-10" : "col-md-12"} col-sm-12`}>
              <DataTable
                orders={obj.orders ? obj.orders : []}
                columns={obj.columns ? obj.columns : []}
              />
            </div>
            <div className={`${expand ? "col-md-2" : "col-md-12 hide_lg"}`}>
              <div className="filter_container">
                <OrderTypes
                  orderTypes={
                    obj.order_status_options ? obj.order_status_options : []
                  }
                />
                <PaymentTypes
                  paymentTypes={
                    obj.payment_status_options ? obj.payment_status_options : []
                  }
                />
                <Buttons />
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
        />
        <PageSelect />
      </div>
    </div>
  );
}

export default Home;
