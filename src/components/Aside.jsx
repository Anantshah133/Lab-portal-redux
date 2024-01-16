import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom"

const Aside = () => {
    const url = useLocation();
    const path = url.pathname;
    const { studentList } = useSelector(state => state.students);
    return (
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-emerald-700 sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link to={'/'} className={`flex items-center p-3 rounded-lg ${path === '/' ? 'bg-emerald-700 text-white' : 'text-gray-800 hover:bg-gray-200'} group cursor-pointer`}>
                            <i className="ri-dashboard-line text-xl"></i>
                            <span className={`${path === '/' ? '' : 'group-hover:text-emerald-800'} ms-3`}>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/users'} className={`flex items-center p-3 rounded-lg ${path === '/users' ? 'bg-emerald-700 text-white' : 'text-gray-800 hover:bg-gray-200'} group cursor-pointer`}>
                            <i className="ri-user-line text-xl"></i>
                            <span className={`${path === '/users' ? '' : 'group-hover:text-emerald-800'} flex-1 ms-3 whitespace-nowrap`}>Students</span>
                            <span className="inline-flex items-center justify-center w-[18px] h-[18px] p-3 ms-3 text-sm font-medium text-white bg-emerald-500 rounded-full">{studentList.length}</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/computers'} className={`flex items-center p-3 rounded-lg ${path === '/computers' ? 'bg-emerald-700 text-white' : 'text-gray-800 hover:bg-gray-200'} group cursor-pointer`}>
                            <i className="ri-computer-line text-xl"></i>
                            <span className={`${path === '/computers' ? '' : 'group-hover:text-emerald-800'} flex-1 ms-3 whitespace-nowrap`}>Computers</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside >
    )
}

export default Aside