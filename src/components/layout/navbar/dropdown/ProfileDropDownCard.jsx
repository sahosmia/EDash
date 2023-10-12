import { BsGearFill } from "react-icons/bs";
import { BiSolidUser, BiSolidEditAlt, BiLogOutCircle } from "react-icons/bi";
import { themeSettingsTrue } from "../../../../features/common/commonSlice";
import { useNavigate } from "react-router-dom";

export default function ProfileDropDownCard(props) {
  const navigate = useNavigate();
  return (
    <div className=" absolute top-16 right-2 bg-white rounded shadow p-5 w-56 h-auto overflow-auto">
      <ul className=" divide-y-2">
        <li
          className="py-2 pl-1 last:pb-0 first:pt-0 font-medium text-gray-600 flex items-center gap-1"
          onClick={() => (
            props.setProfileDropdownCard(false), navigate("/profile")
          )}
        >
          <BiSolidUser />
          <span> Profile</span>
        </li>
        <li
          className="py-2 pl-1 last:pb-0 first:pt-0 font-medium text-gray-600 flex items-center gap-1"
          onClick={() => (
            props.setProfileDropdownCard(false), navigate("/edit-profile")
          )}
        >
          <BiSolidEditAlt />
          <span> Edit Profile</span>
        </li>
        <li
          className="py-2 pl-1 last:pb-0 first:pt-0 font-medium text-gray-600 flex items-center gap-1"
          onClick={() => (
            props.setProfileDropdownCard(false),
            props.dispatch(themeSettingsTrue())
          )}
        >
          <BsGearFill />
          <span> Settings Theme</span>
        </li>
        <li
          className="py-2 pl-1 last:pb-0 first:pt-0 font-medium text-gray-600 flex items-center gap-1"
          onClick={() => (
            props.setProfileDropdownCard(false), props.setToken()
          )}
        >
          <BiLogOutCircle />
          <span> Logout</span>
        </li>
      </ul>
    </div>
  );
}
