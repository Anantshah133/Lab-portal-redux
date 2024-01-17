import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const ComputersTable = () => {
    const { computerList } = useSelector(state => state.computers)
    console.log(computerList)
    return (
        <div className="relative overflow-x-auto shadow-lg sm:rounded-lg border border-emerald-600">
            <table className="w-full text-base text-left rtl:text-right text-gray-500">
                <thead className="text-sm border-b border-emerald-600 text-white uppercase bg-emerald-700">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Pc Number
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
                        computerList.map((computer, idx) => (
                            <tr className="bg-white border-b hover:bg-emerald-50" key={idx}>
                                <th scope="row" className="px-5 text-base py-3 font-medium text-gray-900 whitespace-nowrap">
                                    {computer.pcNum}
                                </th>
                                <td className="px-5 py-3">
                                    {computer.company}
                                </td>
                                <td className="px-5 py-3">
                                    {computer.isAssigned ? 'Assigned' : 'Not Assigned'}
                                </td>
                                <td className="px-5 py-3 text-center flex gap-8 justify-center">
                                    <Link className="font-medium text-teal-600 dark:text-teal-500 hover:underline">View</Link>
                                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    <Link className="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ComputersTable