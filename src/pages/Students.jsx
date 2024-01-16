import { useSelector } from "react-redux";

const Students = () => {
    const { studentList } = useSelector(state => state.students)
    console.log(studentList);
    return (
        <>
            <h1 className="text-3xl ml-5 mb-4 font-semibold whitespace-nowrap">Students</h1>
        </>
    )
}

export default Students