import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

function AdminRoute({children}) {
    let user = JSON.parse(localStorage.getItem("user"));
    const token = Cookies.get("token");
    return ( 
        <div>
            {children}
        </div>
     );
}

export default AdminRoute;

//{(token && !!user && ((user.role === "admin" || user.role === "employee"))) ? children : <Navigate to="/" /> } 