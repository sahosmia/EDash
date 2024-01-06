import { BiSearchAlt } from "react-icons/bi";
import PlusSvg from "../svg/PlusSvg";
import ColumnListDropdown from "../dropdown/ColumnListDropdown";
import FilterModalButton from "./FilterModalButton";

export default function TableNavbar(props) {
  return (
    <div className="flex justify-between items-center py-2">
      <div className=" p-2 px-2 gap-2 relative rounded border border-gray-200 dark:border-gray-400 flex items-center   overflow-hidden">
        <div className="text-xl text-gray-600 dark:text-gray-100">
          <BiSearchAlt />
        </div>
        <input
          className="border-0 focus:border-0 ring-0 focus:ring-0 focus:outline-0 text-gray-700 dark:text-gray-100 text-sm w-56 tracking-wide bg-transparent"
          type="text"
          placeholder="Search Here by product name....."
          onChange={(e) => props.handleSearch(e.target.value)}
        />
      </div>
      <div className="flex items-center">
        <div>
          <select
            name="limit"
            id="limit"
            onChange={(e) => props.handleLimit(e.target.value)}
            className="inline-flex font-medium items-center justify-center  focus:outline-none   transition-colors duration-200 px-2 py-2 text-sm rounded-md bg-transparent border focus-visible:ring-offset-2 border-gray-300 hover:enabled:border-gray-1000 focus-visible:enabled:border-gray-1000  me-2.5 h-9 pe-1 ps-1 dark:text-gray-200"
          >
            {props.limitArray.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <FilterModalButton handleModal={props.handleModal}></FilterModalButton>

        <div className="relative">
          <button
            className="inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 p-1 w-9 h-9 rounded-md bg-transparent border focus-visible:ring-offset-2 border-gray-300 hover:enabled:border-gray-1000 focus-visible:enabled:border-gray-1000 focus-visible:ring-gray-900/30 dark:text-gray-200"
            type="button"
            title="Toggle Columns"
            onClick={props.handleColumnShow}
          >
            <PlusSvg width="1.5em" height="1.5em"></PlusSvg>
          </button>

          {props.columnShow && (
            <ColumnListDropdown
              columnList={props.columnList}
              selectedArray={props.selectedArray}
              changeColumnListItem={props.changeColumnListItem}
            ></ColumnListDropdown>
          )}
        </div>
      </div>
    </div>
  );
}
