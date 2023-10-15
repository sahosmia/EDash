import { useSelector } from "react-redux";
import { BiSearchAlt } from "react-icons/bi";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useEffect, useState, useRef } from "react";

import PlusSvg from "../components/svg/PlusSvg";
import FilterSvg from "../components/svg/FilterSvg";
import FilterModal from "../components/modal/FilterModal";
import BreadCaumb from "../components/breadcumb/BreadCaumb";
import ExportButton from "../components/button/ExportButton";
import CreateButton from "../components/button/CreateButton";
import ColumnListDropdown from "../components/dropdown/ColumnListDropdown";
import TableEditButton from "../components/table/TableEditButton";
import TableDetailsButton from "../components/table/TableDetailsButton";

const ProductList = () => {
  const { limitArray } = useSelector((state) => state.common);
  const [isModal, setIsModal] = useState(false);

  const [datas, setDatas] = useState({});
  const [limit, setLimit] = useState(30);
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [columnShow, setColumnShow] = useState(false);
  const [selectedArray, setSelectedArray] = useState([
    "category",
    "price",
    "stock",
  ]);
  const columnList = ["category", "price", "stock"];

  const url =
    "https://dummyjson.com/products/search?q=" +
    search +
    "&limit=" +
    limit +
    "&skip=" +
    skip;

  useEffect(() => {
    try {
      setLoading(true);
      setTimeout(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setDatas(data);
            setLoading(false);
          });
      }, 1000);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [url]);

  const paginateList = Math.ceil(datas.total / limit);
  const paginateArray = [];

  for (let i = 1; i <= paginateList; i++) {
    paginateArray.push(i);
  }

  const prevPaginate = () => {
    setSkip(skip - limit);
  };
  const nextPaginate = () => {
    setSkip(skip + limit);
  };

  const handleModal = () => {
    setIsModal(!isModal);
    console.log(isModal);
  };

  const handleColumnShow = () => {
    setColumnShow(!columnShow);
  };
  const filterModal = useRef(null);

  const changeColumnListItem = (key) => {
    if (selectedArray.includes(key)) {
      setSelectedArray(selectedArray.filter((item) => item !== key));
    } else {
      setSelectedArray([...selectedArray, key]);
    }
  };
  const handleDelete = (id) => {
    fetch("https://dummyjson.com/products/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const newProducts = datas.products.filter(
          (item) => item.id !== data.id
        );
        setDatas({ ...datas, total: datas.total - 1, products: newProducts });
      });
  };

  console.log(datas.total);

  // console.log(datas.total);
  // console.log(skip);

  // document.addEventListener("click", ({ target }) => {
  //   if (filterModal.current === target || filterModal) {
  //     console.log(filterModal.current);
  //     console.log(target);
  //   }
  // });
  return (
    <div className="p-2">
      <BreadCaumb
        title="Products"
        parentUrl="/pages/products"
        parentTitle="Products"
        pageUrl="/pages/products/list"
        pageTitle="List"
        buttonGroup={
          <>
            <ExportButton></ExportButton>
            <CreateButton url="/pages/products/create"></CreateButton>
          </>
        }
      ></BreadCaumb>

      <div className="flex justify-between items-center py-2">
        <div className=" p-2 px-2 gap-2 relative rounded border border-gray-200 dark:border-gray-400 flex items-center   overflow-hidden">
          <div className="text-xl text-gray-600 dark:text-gray-100">
            <BiSearchAlt />
          </div>
          <input
            className="border-0 focus:border-0 ring-0 focus:ring-0 focus:outline-0 text-gray-700 dark:text-gray-100 text-sm w-56 tracking-wide bg-transparent"
            type="text"
            placeholder="Search Here by product name....."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <div>
            <select
              name="limit"
              id="limit"
              onChange={(e) => setLimit(e.target.value)}
              defaultValue={limit}
              className="inline-flex font-medium items-center justify-center  focus:outline-none   transition-colors duration-200 px-2 py-2 text-sm rounded-md bg-transparent border focus-visible:ring-offset-2 border-gray-300 hover:enabled:border-gray-1000 focus-visible:enabled:border-gray-1000  me-2.5 h-9 pe-1 ps-1 dark:text-gray-200"
            >
              {limitArray.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <button
            className="inline-flex font-medium items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-4 py-2 text-sm rounded-md bg-transparent border focus-visible:ring-offset-2 border-gray-300 hover:enabled:border-gray-1000 focus-visible:enabled:border-gray-1000 focus-visible:ring-gray-900/30 me-2.5 h-9 pe-3 ps-2.5 dark:text-gray-200"
            type="button"
            onClick={handleModal}
          >
            <FilterSvg />
            Filters
          </button>

          <div className="relative">
            <button
              className="inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 p-1 w-9 h-9 rounded-md bg-transparent border focus-visible:ring-offset-2 border-gray-300 hover:enabled:border-gray-1000 focus-visible:enabled:border-gray-1000 focus-visible:ring-gray-900/30 dark:text-gray-200"
              type="button"
              title="Toggle Columns"
              onClick={handleColumnShow}
            >
              <PlusSvg width="1.5em" height="1.5em"></PlusSvg>
            </button>

            {columnShow && (
              <ColumnListDropdown
                columnList={columnList}
                selectedArray={selectedArray}
                changeColumnListItem={changeColumnListItem}
              ></ColumnListDropdown>
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                {selectedArray.map((item, i) => (
                  <th key={i} scope="col" className="px-6 py-3">
                    {item}
                  </th>
                ))}
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="relative">
              {loading ? (
                <tr className="text-center">
                  <td colSpan={50}>Loading....</td>
                </tr>
              ) : (
                datas.products &&
                (datas.products.length > 0 ? (
                  datas.products.map((data) => (
                    <tr
                      key={data.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td
                        scope="row"
                        className="flex items-center gap-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          className="w-10 h-10 rounded object-cover shadow"
                          src={data.thumbnail}
                          alt={data.title}
                        />
                        <div className="">
                          <span className="block"> {data.title}</span>
                          <span className="block text-xs font-normal text-gray-400">
                            {data.brand}
                          </span>
                        </div>
                      </td>
                      {selectedArray.map((item, i) => (
                        <td key={i} className="px-6 py-4">
                          {data[item]}
                        </td>
                      ))}

                      <th>
                        <div className="flex gap-1">
                          <TableEditButton
                            url={`/pages/products/update/${data.id}`}
                          ></TableEditButton>

                          <TableDetailsButton
                            url={`/pages/products/${data.id}`}
                          ></TableDetailsButton>

                          <button
                            className="inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 p-0.5 w-7 h-7 rounded-md bg-transparent border focus-visible:ring-offset-2 border-gray-300 hover:enabled:border-gray-1000 focus-visible:enabled:border-gray-1000 focus-visible:ring-gray-900/30 cursor-pointer hover:!border-gray-900 hover:text-gray-700"
                            type="button"
                            aria-label="Delete Item"
                            onClick={() => handleDelete(data.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-4 w-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </th>
                    </tr>
                  ))
                ) : (
                  <tr className="text-center">
                    <td colSpan={50}>No data Found</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-between items-center p-3 my-5 bg-gray-100 dark:bg-gray-700 rounded">
        <button
          onClick={prevPaginate}
          type="button"
          disabled={limit > skip}
          className=" disabled:cursor-not-allowed text-xl inline-block align-middle rounded-md py-0 text-gray-500"
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <div className="flex gap-1">
          {paginateArray.map((item) => (
            <button
              type="button"
              className={`${
                skip === (item - 1) * limit ? "bg-gray-800" : "bg-gray-500"
              }  text-white text-sm rounded w-7 py-1 flex items-center justify-center`}
              key={item}
              onClick={() => setSkip((item - 1) * limit)}
            >
              {item}
            </button>
          ))}
        </div>
        <button
          onClick={nextPaginate}
          type="button"
          disabled={datas.total <= skip + limit}
          className=" disabled:cursor-not-allowed text-xl inline-block align-middle rounded-md py-0 text-gray-500"
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>

      {isModal && (
        <FilterModal
          handleModal={handleModal}
          filterModal={filterModal}
        ></FilterModal>
      )}
    </div>
  );
};

export default ProductList;
