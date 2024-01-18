import { useSelector } from "react-redux";
import StudentsTable from "./components/StudentsTable";
import AddAnythingButton from "../../components/AddAnythingButton";

const Students = () => {
    const { studentList } = useSelector(state => state.students)
    return (
        <>
            <div className="ml-5 mb-4 flex items-center justify-between">
                <h1 className="text-3xl font-semibold whitespace-nowrap">Students</h1>
                <AddAnythingButton title={'Student'} path={'/users/add-student'} />
            </div>
            <div className="ml-5 border border-gray-300 mb-5"></div>
            <div className="pl-5">
                <StudentsTable />
            </div>
        </>
    )
}

export default Students