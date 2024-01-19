import { Link } from 'react-router-dom'

const AddAnythingButton = ({ title, path }) => {
    return (
        <Link to={path} className='bg-emerald-700 text-sm shadow-lg shadow-emerald-50 hover:bg-emerald-800 hover:shadow-none transition-all rounded-md text-white py-2 px-5 flex justify-center gap-2 items-center'>
            <i className="ri-add-fill"></i>
            Add {title}
        </Link>
    )
}

export default AddAnythingButton