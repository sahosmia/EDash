import { MdOutlineDarkMode } from "react-icons/md";
import { HiOutlineSun } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { setModeOption } from "../../../features/common/commonSlice";

export default function NavbarDarkMode() {
  const commonState = useSelector((state) => state.common);
  const { modeOption, } = commonState;
  const dispatch = useDispatch();

  const theme = localStorage.theme;
  const handleDarkMode = () => {
    dispatch(setModeOption(modeOption === "light" ? "dark" : "light"));
    localStorage.theme = theme === "dark" ? "light" : "dark";

  };

  return (
    <div
      onClick={handleDarkMode}
      className=" bg-neutral-200  w-7 h-7 flex justify-center items-center rounded-full cursor-pointer"
    >
      {theme == "light" ? <MdOutlineDarkMode /> : <HiOutlineSun />}
    </div>
  );
}
