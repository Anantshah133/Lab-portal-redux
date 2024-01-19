import { Link, useNavigate } from "react-router-dom"
import Logo from "./Logo"
import { useDispatch } from "react-redux"
import { setIsLoggedIn } from '../features/user/userSlice'
import { useEffect, useRef, useState } from "react"
const Navbar = () => {
    const dropdownRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        // console.log('i am clicked');
        dispatch(setIsLoggedIn(false))
        navigate('/');
        // console.log('i am runed');
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);


    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-emerald-700">
            <div className="px-4 py-4 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
                            </svg>
                        </button>
                        <Logo extraStyle={`h-8 w-8 ml-1`} />
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center ms-3">
                            <div className="relative" ref={dropdownRef}>
                                <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300" onClick={() => setIsOpen(true)}>
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-9 h-9 rounded-full object-cover" src="/images/user.jpg" alt="user photo" />
                                </button>
                            </div>
                            {isOpen ? <div className="absolute right-3 top-14 z-50 my-4 text-base list-none border-2 border-gray-100 bg-white divide-y divide-gray-100 rounded shadow-lg" onBlur={() => setIsOpen(false)}>
                                <div className="px-4 py-3" role="none">
                                    <p className="text-sm text-gray-900" role="none">
                                        Anant Shah
                                    </p>
                                    <p className="text-sm font-medium text-gray-900 truncate" role="none">
                                        anantshah@gmail.com
                                    </p>
                                </div>
                                <ul className="py-1" role="none">
                                    <li>
                                        <Link to={'/profile'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                                            <i className="ri-profile-line mr-3"></i>
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100" role="menuitem" onClick={handleLogout}>
                                            <i className="ri-logout-circle-line mr-3"></i>
                                            Log Out
                                        </Link>
                                    </li>
                                </ul>
                            </div> : null}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar