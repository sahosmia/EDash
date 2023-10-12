const darkItemClass =
  "flex items-center py-3 pl-5 pr-6 rounded-full cursor-pointer ring-inset ring-main hover:ring-2 bg-gray-100 dark:bg-dark-light-bg text-gray-700 dark:text-gray-400 transition-all ease-in-out duration-300";

const DarkItem = ({ title, icon, handelmethod }) => (
  <div className={darkItemClass} onClick={handelmethod}>
    {icon}
    <div className="flex items-center ml-2 font-medium leading-5 text-secondary">
      {title}
    </div>
  </div>
);

export default DarkItem;
