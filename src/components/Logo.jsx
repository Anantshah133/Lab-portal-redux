import { Link } from "react-router-dom"

const Logo = ({ extraStyle }) => {
    return (
        <Link to={'/'} className={`flex items-center ${extraStyle || 'mb-8'} text-3xl font-semibold text-gray-900 cursor-pointer`}>
            <img className={`${extraStyle || 'w-10 h-10'} mr-3`} src="/images/logo.png" alt="logo" />
            <span className="mt-[-3px]">Portul</span>
        </Link>
    )
}

export default Logo