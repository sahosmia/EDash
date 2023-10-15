import { themeSettingsFalse } from "../../../features/common/commonSlice";
import { IoClose } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

export default function HeadThemeSettings() {
  const commonState = useSelector((state) => state.common);
  const { currentColor } = commonState;
  const dispatch = useDispatch();
  return (
    <div
      className="flex justify-between px-8 h-16 items-center"
      style={{
        backgroundColor: currentColor,
      }}
    >
      <div className="flex items-center gap-2">
        <FiSettings className="text-white text-2xl" />
        <h2 className="text-xl text-white ">Settings</h2>
      </div>
      <IoClose
        className="text-2xl text-gray-100 cursor-pointer"
        onClick={() => dispatch(themeSettingsFalse())}
      />
    </div>
  );
}
