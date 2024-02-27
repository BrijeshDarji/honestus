import { Route, Navigate } from "react-router-dom"

import { URL_LOGIN } from "../assets/constants/SitePath"
import { isUserAuthenticated } from "../helpers/Utils"

function PrivateRoute({ Component }) {
    const isLoggedIn = isUserAuthenticated()

    return (
        <div>
            {
                !isLoggedIn
                    ? <Navigate to={URL_LOGIN} />
                    : <Component />
            }
        </div>
    )
}

export default PrivateRoute