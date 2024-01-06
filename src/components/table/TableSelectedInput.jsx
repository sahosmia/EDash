
const TableSelectedInput = ({ selectedArray, name, changeColumnListItem }) => {
  function capitalizeFLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  return (
    <div className="flex flex-col">
      <label className="flex flex-row items-center cursor-pointer capitalize">
        <span className="relative leading-none">
          
          <input
            id="default-checkbox"
            type="checkbox"
            // value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
            checked={selectedArray.includes(name)}
            onChange={() => changeColumnListItem(name)}
          />  
        </span>
        <span className="ml-2 rtl:mr-2 text-[13px] font-medium">
          {capitalizeFLetter(name)}
        </span>
      </label>
    </div>
  );
};

export default TableSelectedInput;
