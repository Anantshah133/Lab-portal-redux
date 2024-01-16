import { useSelector } from "react-redux"

const Dashboard = () => {
    const { studentList } = useSelector(state => state.students);
    const { computerList } = useSelector(state => state.computers);
    return (
        <>
            <h1 className="text-3xl ml-5 mb-4 font-semibold whitespace-nowrap">Dashboard</h1>
            <div className="p-1 border-emerald-700 rounded-lg flex-wrap flex">
                <div className="w-full md:w-1/2 mt-4 lg:w-1/3 lg:mt-0 px-3">
                    <div className="p-6 transition-shadow border border-emerald-700 rounded-lg shadow-lg hover:shadow-lg bg-white flex">
                        <div className="flex flex-col items-start justify-between w-3/4">
                            <div className="flex flex-col space-y-2">
                                <span className="text-gray-500 text-lg">Total Students</span>
                                <span className="text-2xl font-semibold">{studentList.length}</span>
                            </div>
                        </div>
                        <div className="w-1/4">
                            <div className="bg-emerald-100 text-emerald-900 rounded-md h-full flex items-center justify-center">
                                <i className="ri-graduation-cap-line text-4xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-4 lg:w-1/3 lg:mt-0 px-3">
                    <div className="p-6 transition-shadow border border-emerald-700 rounded-lg shadow-lg hover:shadow-lg bg-white flex">
                        <div className="flex flex-col items-start justify-between w-3/4">
                            <div className="flex flex-col space-y-2">
                                <span className="text-gray-500 text-lg">Total Computers</span>
                                <span className="text-2xl font-semibold">{computerList.length}</span>
                            </div>
                        </div>
                        <div className="w-1/4">
                            <div className="bg-emerald-100 text-emerald-900 rounded-md h-full flex items-center justify-center">
                                <i className="ri-computer-line text-4xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 mt-4 lg:w-1/3 lg:mt-0 px-3">
                    <div className="p-6 transition-shadow border border-emerald-700 rounded-lg shadow-lg hover:shadow-lg bg-white flex">
                        <div className="flex flex-col items-start justify-between w-3/4">
                            <div className="flex flex-col space-y-2">
                                <span className="text-gray-500 text-lg">Lab usage</span>
                                <span className="text-2xl font-semibold">{(studentList.length * 100 / computerList.length).toFixed(2)}% Used</span>
                            </div>
                        </div>
                        <div className="w-1/4">
                            <div className="bg-emerald-100 text-emerald-900 rounded-md h-full flex items-center justify-center">
                                <i className="ri-bar-chart-line text-4xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard