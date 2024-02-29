import { Navigate } from "react-router-dom"

import { URL_HOME_SCREEN } from "../assets/constants/SitePath"
import { isUserAuthenticated } from "../helpers/Utils"

function PrivateRoute({ Component }) {
    const isLoggedIn = isUserAuthenticated()

    return (
        <div>
            {
                !isLoggedIn
                    ? <Navigate to={URL_HOME_SCREEN} />
                    : <Component />
            }
        </div>
    )
}

export default PrivateRoute
