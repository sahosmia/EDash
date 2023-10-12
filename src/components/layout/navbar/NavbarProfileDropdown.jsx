import ProfileDropDownCard from "./dropdown/ProfileDropDownCard";

export default function NavbarProfileDropdown(props) {
  return (
    <div ref={props.profileDropdown}>
      <div
        className="flex items-center hover:cursor-pointer "
        onClick={() => props.setProfileDropdownCard(!props.profileDropdownCard)}
      >
        <img
          src="/images/avatar.jpg"
          alt="profile"
          className="w-8 h-8 rounded-full mr-2"
        />
        <span className="font-medium md:font-bold text-xs md:text-sm text-gray-600">
          {props.user}
        </span>
      </div>
      {props.profileDropdownCard && (
        <ProfileDropDownCard
          setProfileDropdownCard={props.setProfileDropdownCard}
          dispatch={props.dispatch}
          setToken={props.setToken}
        ></ProfileDropDownCard>
      )}
    </div>
  );
}
