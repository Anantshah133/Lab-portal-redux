import { useNavigate, useParams } from "react-router-dom"
import BackButton from "../../components/BackButton"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { addComputer, editComputer } from "../../features/computers/computersSlice";
import { setPcName } from "../../features/students/studentsSlice";

const AddEditComputer = () => {
    const initialInput = {
        pcName: '', company: '', isAssigned: false
    }
    const [isEdit, setIsEdit] = useState(false);
    const [input, setInput] = useState(initialInput);
    const { id } = useParams();
    console.log(id);
    const { computerList } = useSelector(state => state.computers);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const editComputer = computerList.find((computer) => computer.pcNum == id);
        if (editComputer) {
            setInput(editComputer);
            setIsEdit(true)
        }
    }, [id, computerList])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.pcName.trim()) {
            fireToastError('Please enter Name');
            return;
        }
        if (!input.company.trim()) {
            fireToastError('Please enter Company');
            return;
        }
        if (isEdit) {
            dispatch(editComputer(input))
            dispatch(setPcName({name: input.pcName, pcNum: parseInt(input.pcNum)}))
        } else {
            const isExist = computerList.some((computer) => computer.pcName === input.pcName);
            if (isExist) {
                fireToastError('Pc with this name already exist');
                return;
            }
            dispatch(addComputer({ pcNum: parseInt(Math.random() * 9999), ...input }));
        }
        navigate('/computers');
    }

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

    return (
        <>
            <div className="ml-5 mr-5 mb-4 flex items-center justify-between">
                <div className="flex items-center">
                    <BackButton path={'/computers'} />
                    <h1 className="text-2xl font-semibold whitespace-nowrap">
                        {isEdit ? 'Edit' : 'Add'}  Computer
                    </h1>
                </div>
            </div>
            <div className="ml-5 border border-gray-300 mb-5"></div>
            <div className="ml-5 mr-5 px-0 flex-1 bg-white shadow-lg rounded-md py-6 sm:w-full xl:w-1/2">
                <form action="" className="px-5" autoComplete="off" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="pcName" className="mb-2 block">Name :</label>
                        <input id="pcName" type="text" value={input.pcName} placeholder="Computer's name" className="border border-gray-500 form-input w-full py-2 px-4 rounded no-focus focus:border-emerald-700" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="company" className="mb-2 block">Company :</label>
                        <input id="company" type="text" value={input.company} placeholder="Company name" className="border border-gray-500 form-input w-full py-2 px-4 rounded no-focus focus:border-emerald-700" onChange={handleChange} />
                    </div>
                    <button type="submit" className="px-4 py-2 mt-3 shadow-lg shadow-emerald-50 bg-emerald-600 rounded-md text-white hover:bg-emerald-700 hover:shadow-md transition">{isEdit ? 'Update' : 'Submit'}</button>
                </form>
            </div>
            <ToastContainer />
        </>
    )
}

export default AddEditComputer