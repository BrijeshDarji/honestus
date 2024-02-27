/**
 *  @description This file contains helper methods. 
 */

export const isUserAuthenticated = () => {
    return Boolean(
        localStorage.getItem("accessToken") &&
        localStorage.getItem("refreshToken")
    )
}
