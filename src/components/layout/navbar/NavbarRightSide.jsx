import NavbarNotification from "./NavbarNotification";
import NavbarDarkMode from "./NavbarDarkMode";
import NavbarProfileDropdown from "./NavbarProfileDropdown";

export default function NavbarRightSide(props) {
  return (
    <div>
      <div className="flex items-center gap-3 md:gap-5">

        <NavbarNotification />
        <NavbarDarkMode />

        <NavbarProfileDropdown
          profileDropdown={props.profileDropdown}
          setProfileDropdownCard={props.setProfileDropdownCard}
          profileDropdownCard={props.profileDropdownCard}
          user={props.user}
          dispatch={props.dispatch}
          setToken={props.setToken}
        ></NavbarProfileDropdown>
      </div>
    </div>
  );
}
