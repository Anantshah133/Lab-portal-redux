import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import { deleteComputer } from "../../../features/computers/computersSlice";
import { setPcName, setStudentDetail } from "../../../features/students/studentsSlice";

const ComputersTable = () => {
    const { computerList } = useSelector(state => state.computers)
    const dispatch = useDispatch();
    const fireToastSuccess = (msg) => {
        toast.success(msg, {
            autoClose: 3000,
            pauseOnHover: false,
            position: 'bottom-right',
            className: 'toast'
        })
    }

    const handleDelete = (pcNum, pcName) => {
        dispatch(setStudentDetail(pcNum))
        dispatch(deleteComputer(pcNum));
        fireToastSuccess('Data Deleted Successfully...');
    }
    return (
        <div className="relative overflow-x-auto shadow-lg sm:rounded-lg border border-emerald-600">
            <table className="w-full text-base text-left rtl:text-right text-gray-500">
                <thead className="text-sm border-b border-emerald-600 text-white uppercase bg-emerald-700">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Pc Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Company
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        computerList.length > 0 ? computerList.map((computer, idx) => (
                            <tr className="bg-white border-b hover:bg-emerald-50" key={idx}>
                                <th scope="row" className="px-5 text-base py-3 font-medium text-gray-900 whitespace-nowrap">
                                    {computer.pcName}
                                </th>
                                <td className="px-5 py-3">
                                    {computer.company}
                                </td>
                                <td className="px-5 py-3">
                                    {computer.isAssigned ? 'Assigned' : 'Not Assigned'}
                                </td>
                                <td className="px-5 py-3 text-center flex gap-8 justify-center">
                                    {/* <Link className="font-medium text-teal-600 dark:text-teal-500 hover:underline">View</Link> */}
                                    <Link to={`/computers/edit-computer/${computer.pcNum}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    <button className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => handleDelete(computer.pcNum, computer.pcName)}>Delete</button>
                                </td>
                            </tr>
                        )) : <tr className="bg-white border-b hover:bg-emerald-50">
                            <th scope="row" className="text-center font-bold px-5 text-base py-3 text-gray-900 whitespace-nowrap" colSpan={4}>
                                No PC available
                            </th>
                        </tr>
                    }
                </tbody>
            </table>
            <ToastContainer />
        </div>
    )
}

export default ComputersTable