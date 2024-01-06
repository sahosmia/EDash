import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function TablePagination(props) {
  return (
    <div className="flex justify-between items-center p-3 my-5 bg-gray-100 dark:bg-gray-700 rounded">
      <button
        onClick={props.prevPaginate}
        type="button"
        disabled={props.limit > props.skip}
        className=" disabled:cursor-not-allowed text-xl inline-block align-middle rounded-md py-0 text-gray-500"
      >
        <MdOutlineKeyboardArrowLeft />
      </button>
      <div className="flex gap-1">
        {props.paginateArray.map((item) => (
          <button
            type="button"
            className={`${
              props.skip === (item - 1) * props.limit
                ? "bg-gray-800"
                : "bg-gray-500"
            }  text-white text-sm rounded w-7 py-1 flex items-center justify-center`}
            key={item}
            onClick={() => props.handlePaginateItem(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <button
        onClick={props.nextPaginate}
        type="button"
        disabled={props.total <= props.skip + props.limit}
        className=" disabled:cursor-not-allowed text-xl inline-block align-middle rounded-md py-0 text-gray-500"
      >
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
}
