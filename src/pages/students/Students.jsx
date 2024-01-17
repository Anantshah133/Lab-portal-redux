import { useSelector } from "react-redux";
import StudentsTable from "./components/StudentsTable";

const Students = () => {
    const { studentList } = useSelector(state => state.students)
    return (
        <>
            <h1 className="text-3xl ml-5 mb-4 font-semibold whitespace-nowrap">Students</h1>
            <div className="ml-5 border border-gray-300 mb-5"></div>
            <div className="pl-5">
                <StudentsTable />
            </div>
        </>
    )
}

export default Students