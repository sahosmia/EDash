import { TbAlignJustified } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import {
  activeMenuToggle,
  hideMenuToggle,
} from "../../../features/common/commonSlice";
import NavbarSearchSection from "./NavbarSearchSection";

export default function NavbarLeftSide(props) {
  const commonState = useSelector((state) => state.common);
  const { screenSize } = commonState;
  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(activeMenuToggle());
    if (screenSize <= 640) {
      dispatch(hideMenuToggle());
    }
  };

  return (
    <div className="flex items-center">
      <TbAlignJustified
        className="text-2xl text-gray-600 dark:text-gray-300 cursor-pointer"
        onClick={toggleMenu}
      />

      <NavbarSearchSection searchCardList={props.searchCardList} />
    </div>
  );
}
