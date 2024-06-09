import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/Shared/LoadingSpinner";
import useRole from "../hooks/useRole";


const ModeratorRoute = ({ children }) => {
    const [role, isLoading] = useRole()

  if (isLoading) return <LoadingSpinner />
  if (role === 'moderator') return children
    return <Navigate to='/dashboard' />
};

export default ModeratorRoute;