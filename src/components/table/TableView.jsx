import { useState } from "react";
import useFetchData from "../../hook/useFetchData";
import {
  TableNavbar,
  TableSection,
  
  TablePagination,
  FilterModal,
} from "./component";

export default function TableView(props) {
  const {
    datas,
    // setDatas,
    limit,
    limitArray,
    skip,
    loading,
    paginateArray,
    prevPaginate,
    nextPaginate,
    handleLimit,
    handleSearch,
    handlePaginateItem,
  } = useFetchData();

  const [isModal, setIsModal] = useState(false);

  const [columnShow, setColumnShow] = useState(false);

  const [selectedArray, setSelectedArray] = useState(props.columnList);

  const handleModal = () => {
    setIsModal(!isModal);
    console.log(isModal);
  };

  const handleColumnShow = () => {
    setColumnShow(!columnShow);
  };

  const changeColumnListItem = (key) => {
    if (selectedArray.includes(key)) {
      setSelectedArray(selectedArray.filter((item) => item !== key));
    } else {
      setSelectedArray([...selectedArray, key]);
    }
  };
  return (
    <div>
      {/* search  */}
      <TableNavbar
        columnList={props.columnList}
        limitArray={limitArray}
        handleLimit={handleLimit}
        handleSearch={handleSearch}
        columnShow={columnShow}
        selectedArray={selectedArray}
        handleModal={handleModal}
        handleColumnShow={handleColumnShow}
        changeColumnListItem={changeColumnListItem}
      ></TableNavbar>

      <TableSection
        handleDelete={props.handleDelete}
        datas={datas}
        loading={loading}
        selectedArray={selectedArray}
      ></TableSection>

      <TablePagination
        total={datas.total}
        limit={limit}
        skip={skip}
        paginateArray={paginateArray}
        prevPaginate={prevPaginate}
        nextPaginate={nextPaginate}
        handlePaginateItem={handlePaginateItem}
      ></TablePagination>

      {isModal && <FilterModal handleModal={handleModal}></FilterModal>}
    </div>
  );
}
