import { useState } from "react"
import BackButton from "../../../components/BackButton"
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../../../features/students/studentsSlice";
import { useNavigate } from "react-router-dom";
import { setIsAssigned } from "../../../features/computers/computersSlice";

const AddStudent = () => {
    const initialInput = { name: '', grId: '', pcName: '', course: '', pcNum: '' }
    const [input, setInput] = useState(initialInput);
    const { studentList } = useSelector(state => state.students);
    const { computerList } = useSelector(state => state.computers);
    const availablePc = computerList.filter((computer) => !computer.isAssigned);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fireToastError = (msg) => {
        toast.error(msg, {
            autoClose: 3000,
            pauseOnHover: false,
            position: 'bottom-right',
            className: 'toast'
        })
    }

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.name.trim()) {
            fireToastError('Enter Proper Name');
            return;
        }
        if (!input.grId.trim()) {
            fireToastError('Enter Proper GRID');
            return;
        }
        if (input.grId.length !== 4) {
            fireToastError('GRID must have 4 digit');
            return;
        }
        if (!input.course.trim() || !input.pcName.trim()) {
            fireToastError('Select all Options');
            return;
        }
        // its working 
        // const isExist = studentList.find((student, id) => {
        //     return student.grId === input.grId
        // })

        // its better way 
        // Some returns true or false Find retuens object or array or the original value    
        const isExist = studentList.some((student) => student.grId === input.grId);
        if(isExist){
            fireToastError('Student with this GRID already exists');
            return;
        }
        const num = availablePc.find(pc => pc.pcName === input.pcName).pcNum;
        input.pcNum = num;
        dispatch(addStudent(input))
        dispatch(setIsAssigned(num))
        navigate('/users')
    }
    return (
        <>
            <div className="ml-5 mb-4 flex items-center justify-between">
                <div className="flex items-center">
                    <BackButton path={'/users'} />
                    <h1 className="text-2xl font-semibold whitespace-nowrap">Add Students</h1>
                </div>
            </div>
            <div className="ml-5 border border-gray-300 mb-5"></div>
            <div className="ml-5 mr-5 px-0 flex-1 bg-white shadow-lg rounded-md py-6 sm:w-full xl:w-1/2">
                <form action="" className="px-5" autoComplete="off" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="mb-2 block">Name :</label>
                        <input id="name" type="text" placeholder="Student's name" className="border border-gray-500 form-input w-full py-2 px-4 rounded no-focus focus:border-emerald-700" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="grId" className="mb-2 block">Student GRID :</label>
                        <input id="grId" type="number" className="border border-gray-500 form-input w-full py-2 px-4 rounded no-focus focus:border-emerald-700" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="course" className="mb-2 block">Course :</label>
                        <select id="course" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-700 focus:border-emerald-700 block w-full p-2.5" onChange={handleChange}>
                            <option value="" defaultValue>Choose Course</option>
                            <option value="Full stack development">Full stack development</option>
                            <option value="Animation">Animation</option>
                            <option value="Frontend Development">Frontend Development</option>
                            <option value="Flutter Development">Flutter Development</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="pcName" className="mb-2 block">Assign Computer :</label>
                        <select id="pcName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-emerald-700 focus:border-emerald-700 block w-full p-2.5" onChange={handleChange}>
                            {availablePc.length > 0 ?
                                <>
                                    <option value="" defaultValue>Choose PC</option>
                                    {availablePc.map((pc, id) =>
                                        <option value={pc.pcName} key={id}>{pc.pcName}</option>
                                    )}
                                </>
                                : <option value="" defaultValue>All Computers are assigned</option>
                            }
                        </select>
                    </div>
                    <button type="submit" className="px-4 py-2 mt-3 shadow-lg shadow-emerald-50 bg-emerald-600 rounded-md text-white hover:bg-emerald-700 hover:shadow-md transition">Submit</button>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default AddStudent