import ComputersTable from "./components/ComputersTable"

const Computers = () => {
    return (
        <>
            <h1 className="text-3xl ml-5 mb-4 font-semibold whitespace-nowrap">Computers</h1>
            <div className="ml-5 border border-gray-300 mb-5"></div>
            <div className="pl-5">
                <ComputersTable />
            </div>
        </>
    )
}

export default Computers