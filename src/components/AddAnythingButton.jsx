import React from 'react'

const AddAnythingButton = ({ title }) => {
    return (
        <button className='bg-emerald-700 text-sm shadow-lg shadow-emerald-100 hover:bg-emerald-800 hover:shadow-sm transition-all rounded-md text-white py-2 px-5 flex justify-center gap-2 items-center'>
            <i className="ri-add-fill"></i>
            Add {title}
        </button>
    )
}

export default AddAnythingButton