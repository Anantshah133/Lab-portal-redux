import AddAnythingButton from "../../components/AddAnythingButton"
import ComputersTable from "./components/ComputersTable"

const Computers = () => {
    return (
        <>
            <div className="ml-5 mb-4 flex items-center justify-between">
                <h1 className="text-3xl font-semibold whitespace-nowrap">Computers</h1>
                <AddAnythingButton title={'Computer'} />
            </div>
            <div className="ml-5 border border-gray-300 mb-5"></div>
            <div className="pl-5">
                <ComputersTable />
            </div>
        </>
    )
}

export default Computers