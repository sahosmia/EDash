import { Fragment } from "react";
import TableSelectedInput from "../table/TableSelectedInput";

export default function ColumnListDropdown(props) {
  return (
    <div className=" absolute right-0  overflow-hidden w-72 z-10 bg-white">
      <div className="border p-2 rounded">
        <h6 className="mb-1 px-0.5 text-sm font-semibold">Columns List</h6>

        <div className="grid grid-cols-2 gap-x-6 gap-y-5 px-1.5 pb-3.5 pt-4 ">
          {props.columnList.map((column, key) => (
            <Fragment key={key}>
              <TableSelectedInput
                name={column}
                selectedArray={props.selectedArray}
                changeColumnListItem={props.changeColumnListItem}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
