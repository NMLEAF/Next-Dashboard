import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { classesData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Class = {
  id: number;
  name: string;
  grade: number;
  capacity: string;
  supervisor: string;
};

const columns = [
  {
    header: "Class Name",
    accessor: "info",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ClassListPage = () => {
  const renderRow = (item: Class) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 hover:bg-ePurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        <h3 className="font-semibold">{item.name}</h3>
      </td>

      <td className="hidden pr-4 md:table-cell">{item.capacity}</td>
      <td className="hidden pr-4 md:table-cell">{item.grade}</td>
      <td className="hidden pr-4 md:table-cell">{item.supervisor}</td>
      <td>
        <div className="flex items-center gap-2">
          {/* <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center bg-eSky rounded-full">
              <Image src="/edit.png" alt="view" width={16} height={16} />
            </button>
          </Link> */}
          {role === "admin" && (
            <>
              <FormModal table="class" type="update" data={item} />
              <FormModal table="class" type="delete" id={item.id} />
            </>
            // <button className="w-7 h-7 flex items-center justify-center bg-ePurple rounded-full">
            //   <Image src="/delete.png" alt="view" width={16} height={16} />
            // </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-lg m-1 flex flex-col h-full overflow-hidden">
      {/* TOP */}
      <div className="flex items-center justify-between pb-4">
        <h1 className="hidden md:block font-semibold text-lg">All Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center self-end gap-4">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-eYellow">
              <Image src="/filter.png" alt="Filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-eYellow">
              <Image src="/sort.png" alt="Filter" width={14} height={14} />
            </button>
            {role === "admin" && (
              // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-eYellow">
              //   <Image src="/plus.png" alt="Filter" width={14} height={14} />
              // </button>
              <FormModal table="class" type="create" />
            )}
          </div>
        </div>
      </div>

      {/* LIST */}
      <div className="overflow-y-auto flex-1">
        <Table columns={columns} renderRow={renderRow} data={classesData} />
      </div>

      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ClassListPage;
