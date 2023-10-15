import { IoClose } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { themeSettingsToggle } from "../../../features/common/commonSlice";

export default function ThemeSettingButton() {
  const commonState = useSelector((state) => state.common);
  const { themeSettings, currentColor } = commonState;
  const dispatch = useDispatch();

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <button
        type="button"
        onClick={() => dispatch(themeSettingsToggle())}
        style={{
          background: currentColor,
          borderRadius: "50%",
        }}
        className="text-2xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray rotate-36 transition-all duration-300 ease-in-out"
      >
        {themeSettings ? <IoClose /> : <FiSettings />}
      </button>
    </div>
  );
}
