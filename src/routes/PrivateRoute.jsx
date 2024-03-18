import { Navigate } from 'react-router-dom'

import Container from '@/src/components/containers/Container'

import { URL_HOME_SCREEN } from '@/src/assets/constants/SitePath'
import { isUserAuthenticated } from '@/src/helpers/Utils'

function PrivateRoute({ Component, ...rest }) {
  const isLoggedIn = isUserAuthenticated()

  return (
    <Container {...rest}>
      {!isLoggedIn ? <Navigate to={URL_HOME_SCREEN} /> : <Component />}
    </Container>
  )
}

export default PrivateRoute
