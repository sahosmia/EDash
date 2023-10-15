import FilterSvg from "../svg/FilterSvg";
import CloseSvg from "../svg/CloseSvg";

export default function FilterModal({ filterModal, handleModal }) {
  return (
    <div className=" absolute bg-black bg-opacity-80 w-full h-screen top-0 left-0 ">
      <div
        ref={filterModal}
        className="px-4 py-5  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-100 w-760 rounded shadow"
      >
        <div className="flex justify-between  items-center">
          <div className="flex items-center">
            <FilterSvg width="1.5em" height="1.5em"></FilterSvg>

            <h4 className="text-2xl font-bold">Filters</h4>
          </div>
          <div>
            <span className="text-sm cursor-pointer" onClick={handleModal}>
              <CloseSvg></CloseSvg>
            </span>
          </div>
        </div>

        <div className="border-t flex gap-2 justify-end pt-3">
          <button className="inline-flex font-medium items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-4 py-2 text-sm h-10 rounded-md border border-transparent focus-visible:ring-offset-2 bg-white hover:enabled::bg-gray-800 active:enabled:bg-gray-1000 focus-visible:ring-gray-900/30 text-gray-0 w-full lg:w-auto dark:bg-white text-gray-800 shadow ">
            Cancel
          </button>
          <button className="inline-flex font-medium items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 px-4 py-2 text-sm h-10 rounded-md border border-transparent focus-visible:ring-offset-2 bg-gray-900 hover:enabled::bg-gray-800 active:enabled:bg-gray-1000 focus-visible:ring-gray-900/30 text-gray-0 w-full lg:w-auto dark:bg-gray-800 text-white">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}
