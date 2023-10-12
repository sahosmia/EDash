import { IoSearch } from "react-icons/io5";
import SearchCard from "./dropdown/SearchCard";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchCard,
  setSearchInput,
} from "../../../features/common/commonSlice";

export default function NavbarSearchSection(props) {
  const commonState = useSelector((state) => state.common);
  const { searchInput, searchCard } = commonState;
  const dispatch = useDispatch();
  return (
    <div className="hidden md:flex items-center p-1 bg-gray-200 dark:bg-dark-light-bg shadow shadow-gray-200 dark:shadow-gray-900 ml-5 w-60 relative ">
      <IoSearch className="mx-1 text-gray-600" />
      <input
        type="text"
        className="text-sm text-gray-600 dark:text-gray-200 p-1 focus:outline-none bg-transparent"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => (
          dispatch(setSearchInput(e.target.value)),
          dispatch(setSearchCard(true))
        )}
      />

      {searchCard && (
        <div
          ref={props.searchCardList}
          className=" absolute top-10 left-0 bg-white rounded shadow p-5 w-72 h-96 overflow-auto"
        >
          <SearchCard />
        </div>
      )}
    </div>
  );
}
