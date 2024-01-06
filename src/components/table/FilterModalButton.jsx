import FilterSvg from "../svg/FilterSvg";

export default function FilterModalButton({ handleModal }) {
  return (
    <button
      className="inline-flex font-medium items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-4 py-2 text-sm rounded-md bg-transparent border focus-visible:ring-offset-2 border-gray-300 hover:enabled:border-gray-1000 focus-visible:enabled:border-gray-1000 focus-visible:ring-gray-900/30 me-2.5 h-9 pe-3 ps-2.5 dark:text-gray-200"
      type="button"
      onClick={handleModal}
    >
      <FilterSvg />
      Filters
    </button>
  );
}
