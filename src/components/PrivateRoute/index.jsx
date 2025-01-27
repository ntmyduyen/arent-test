import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children, path }) => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)

    return isLoggedIn
        ? children
        : <Navigate to="/" state={{ from: path }} replace />
}
export default PrivateRoute