import "./App.css";
import useSWR from "swr";
import { useState } from "react";
import OrderSelect from "./components/OrderSelect";
import SortSelect from "./components/SortSelect";
import TextForm from "./components/TextForm";
import { Blocks } from "react-loader-spinner";
import { TagProps, Order, Sort } from "./utils/types";
import Data from "./components/Data";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import Button from "@mui/material/Button";

function App() {
  const [page, setPage] = useState<number>(1);
  const [apiPage, setApiPage] = useState<number>(1);
  const [apiPagesize, setApiPageSize] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(1);
  const [order, setOrder] = useState<Order>(Order.desc);
  const [sort, setSort] = useState<Sort>(Sort.popular);
  const [isFetchReady, setIsFetchReady] = useState<boolean>(false);

  const handleSubmit = () => {
    if (page < 1 || pageSize < 1) {
      setIsFetchReady(false);
      return;
    }

    setApiPage(page);
    setApiPageSize(pageSize);
    setIsFetchReady(true);
  };

  const API = `https://api.stackexchange.com/2.3/tags?page=${apiPage}&pagesize=${apiPagesize}&order=${order}&sort=${sort}&site=stackoverflow`;

  const fetcher = () => fetch(API).then((res) => res.json());
  const {
    data: tags,
    error,
    isLoading,
  } = useSWR<TagProps>(isFetchReady ? API : null, fetcher);

  if (isLoading)
    return (
      <div>
        <Blocks
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="blocks-loading"
          wrapperClass="blocks-wrapper"
          visible={true}
        />
      </div>
    );

  return (
    <>
      <div id="Contener">
        <div id="Custom-inputs">
          <TextForm page={page} setPage={setPage} label="Page" />;
          <TextForm page={pageSize} setPage={setPageSize} label="Pagesize" />
          <OrderSelect order={order} setOrder={setOrder} />
          <SortSelect sort={sort} setSort={setSort} />
        </div>

        <div>
          <Button variant="outlined" onClick={handleSubmit}>
            Apply
          </Button>
        </div>

        {error && (
          <div>
            Failed to fetch data
            <div id="error-icon">
              <ExclamationTriangleIcon width={30} />
            </div>
          </div>
        )}

        {tags && <Data items={tags.items} />}
      </div>
    </>
  );
}

export default App;
