/**
 *  @description This file contains helper methods.
 */

export const isAuthenticated = () => {
  return Boolean(
    localStorage.getItem('accessToken') && localStorage.getItem('refreshToken')
  )
}

export function LogOut(forcedLogout) {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')

  if (forcedLogout) {
    window.location.href = window.location.origin + '/login'
  } else {
    // Navigate /login using router
  }
}
