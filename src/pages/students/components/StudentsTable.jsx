import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteStudent } from "../../../features/students/studentsSlice";
import { setIsAssigned } from "../../../features/computers/computersSlice";
import { ToastContainer, toast } from "react-toastify";

const StudentsTable = () => {
    const { studentList } = useSelector(state => state.students)
    const dispatch = useDispatch();

    const fireToastSuccess = (msg) => {
        toast.success(msg, {
            autoClose: 3000,
            pauseOnHover: false,
            position: 'bottom-right',
            className: 'toast'
        })
    }

    const handleDelete = (studentId, pcNum) => {
        // const deleteStudentId = studentList.findIndex((student)=>student.grId === studentId);
        dispatch(deleteStudent(studentId));
        dispatch(setIsAssigned({ pcNum: parseInt(pcNum), value: false }))
        fireToastSuccess('Data deleted successfully..')
    }

    return (
        <div className="relative overflow-x-auto shadow-lg sm:rounded-lg border border-emerald-600">
            <table className="w-full text-base text-left rtl:text-right text-gray-500">
                <thead className="text-sm border-b border-emerald-600 text-white uppercase bg-emerald-700">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Student Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            GRID
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            PC Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Course
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentList.length > 0 ? studentList.map((student, idx) => (
                            <tr className="bg-white border-b hover:bg-emerald-50" key={idx}>
                                <th scope="row" className="px-5 text-base py-3 font-medium text-gray-900 whitespace-nowrap">
                                    {student.name}
                                </th>
                                <td className="px-5 py-3 text-center">
                                    {student.grId}
                                </td>
                                <td className="px-5 py-3 text-center">
                                    {student.pcName}
                                </td>
                                <td className="px-5 py-3 capitalize">
                                    {student.course}
                                </td>
                                <td className="px-5 py-3 text-center flex gap-8 justify-center">
                                    <Link className="font-medium text-teal-600 dark:text-teal-500 hover:underline">View</Link>
                                    <Link to={`/users/edit-student/${student.grId}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    <button className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => {
                                        handleDelete(student.grId, student.pcNum)
                                    }}>Delete</button>
                                </td>
                            </tr>
                        )) : <tr className="bg-white border-b hover:bg-emerald-50">
                            <td className="px-5 py-3 text-black font-bold text-center" colSpan={5}>No data Found</td>
                        </tr>
                    }
                </tbody>
            </table>
            <ToastContainer />
        </div>
    )
}

export default StudentsTable