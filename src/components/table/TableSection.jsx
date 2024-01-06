import { TableEditButton, TableDetailsButton } from "./component";

export default function TableSection(props) {
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              {props.selectedArray.map((item, i) => (
                <th key={i} scope="col" className="px-6 py-3">
                  {item}
                </th>
              ))}
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="relative">
            {props.loading ? (
              <tr className="text-center">
                <td colSpan={50}>Loading....</td>
              </tr>
            ) : (
              props.datas.products &&
              (props.datas.products.length > 0 ? (
                props.datas.products.map((data) => (
                  <tr
                    key={data.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="flex items-center gap-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img
                        className="w-10 h-10 rounded object-cover shadow"
                        src={data.thumbnail}
                        alt={data.title}
                      />
                      <div className="">
                        <span className="block"> {data.title}</span>
                        <span className="block text-xs font-normal text-gray-400">
                          {data.brand}
                        </span>
                      </div>
                    </td>
                    {props.selectedArray.map((item, i) => (
                      <td key={i} className="px-6 py-4">
                        {data[item]}
                      </td>
                    ))}

                    <th>
                      <div className="flex gap-1">
                        <TableEditButton
                          url={`/pages/products/update/${data.id}`}
                        ></TableEditButton>

                        <TableDetailsButton
                          url={`/pages/products/${data.id}`}
                        ></TableDetailsButton>

                        <button
                          className="inline-flex items-center justify-center active:enabled:translate-y-px focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 transition-colors duration-200 p-0.5 w-7 h-7 rounded-md bg-transparent border focus-visible:ring-offset-2 border-gray-300 hover:enabled:border-gray-1000 focus-visible:enabled:border-gray-1000 focus-visible:ring-gray-900/30 cursor-pointer hover:!border-gray-900 hover:text-gray-700"
                          type="button"
                          aria-label="Delete Item"
                          onClick={() => props.handleDelete(data.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-4 w-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </th>
                  </tr>
                ))
              ) : (
                <tr className="text-center">
                  <td colSpan={50}>No data Found</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
