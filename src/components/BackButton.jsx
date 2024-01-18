import { Link } from "react-router-dom"

const BackButton = ({ path }) => {
    return (
        <Link to={path}>
            <i className="ri-arrow-left-line mr-3 text-2xl text-emerald-800"></i>
        </Link>
    )
}

export default BackButton