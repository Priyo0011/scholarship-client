import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import useRole from "../hooks/useRole";


const AMRoute = ({ children }) => {
    const [role, isLoading] = useRole()

  if (isLoading) return <LoadingSpinner />
  if (role === 'moderator',role === 'admin') return children
    return <Navigate to='/dashboard' />
};

export default AMRoute;