import { useMemo, useState } from "react"
import { Menu } from "lucide-react"
import { useNavigate } from "react-router-dom"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu.jsx"

import { useToast } from "@/src/components/ui/use-toast"

import LoaderButton from "../LoaderButton"

import HonestusLogo from "../../assets/images/HonestusLogo.svg"

import {
    URL_HOME_SCREEN,
    URL_LOGIN,
} from "../../assets/constants/SitePath"

import { isUserAuthenticated } from "@/src/helpers/Utils"
import { postApi } from "@/src/helpers/ApiHelper"
import { LOGOUT_API_PATH } from "@/src/assets/constants/ApiPath"
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "@/src/assets/constants/Messages"

function Header() {
    const navigate = useNavigate()
    const { toast } = useToast()

    const [loading, setLoading] = useState(false)

    const handleLogout = () => {
        setLoading(true)

        postApi(LOGOUT_API_PATH)
            .then(response => {
                toast({
                    title: SUCCESS_MESSAGES.TOAST_TITLE,
                    description: response.data.detail,
                })

                localStorage.removeItem("accessToken")
                localStorage.removeItem("refreshToken")
                navigate(URL_HOME_SCREEN)
            })
            .catch(error => {
                toast({
                    title: ERROR_MESSAGES.TOAST_TITLE,
                    description: error.response.data.message,
                    variant: "destructive",
                })
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const NAV_MENU = [
        {
            title: "About Us",
            action: () => navigate(URL_HOME_SCREEN),
            disabled: false
        },
        {
            title: "Sectors",
            action: () => navigate(URL_HOME_SCREEN),
            disabled: false
        },
    ]

    const MOBILE_NAV_MENU = [
        ...NAV_MENU,
        {
            title: "Login",
            action: () => navigate(URL_LOGIN),
            disabled: false
        },
    ]

    const LOGGED_IN_NAV_MENU = [
        {
            title: "Home",
            action: () => { },
            disabled: false
        },
        {
            title: "Portal",
            action: () => { },
            disabled: false
        },
        {
            title: "How it Works",
            action: () => { },
            disabled: false
        },
    ]

    const MOBILE_LOGGED_IN_NAV_MENU = [
        ...LOGGED_IN_NAV_MENU,
        {
            title: "Logout",
            action: handleLogout,
            disabled: loading
        },
    ]

    const isUserLoggedIn = useMemo(() => {
        return isUserAuthenticated()
    }, [])

    const desktopNavMenu =
        isUserLoggedIn
            ? LOGGED_IN_NAV_MENU
            : NAV_MENU

    const mobileNavMenu =
        isUserLoggedIn
            ? MOBILE_LOGGED_IN_NAV_MENU
            : MOBILE_NAV_MENU

    return (
        <>
            <div className="flex py-4 px-9 md:px-40 justify-between items-center self-stretch fixed top-0 w-full z-10 bg-white drop-shadow-xl">
                <img
                    src={HonestusLogo}
                    alt="Honestus"
                    className="w-52 h-12"
                />

                <div className="md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Menu />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {
                                mobileNavMenu.map(menu => (
                                    <DropdownMenuItem
                                        key={menu.title}
                                        onClick={menu.action}
                                        disabled={menu.disabled}
                                    >
                                        {menu.title}
                                    </DropdownMenuItem>
                                ))
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="font-medium hidden md:flex justify-end items-center gap-2 w-100">
                    {
                        desktopNavMenu.map((menu, index) => (
                            <span
                                key={index + menu.title}
                                className="text-xl hover:bg-gray-100 hover:cursor-pointer hover:rounded-lg px-5 py-2 min-w-fit"
                                onClick={menu.action}
                            >
                                {menu.title}
                            </span>
                        ))
                    }

                    <LoaderButton
                        className="text-lg"
                        loading={loading}
                        text={isUserLoggedIn
                            ? loading
                                ? "Logging out"
                                : "Logout"
                            : "Login"
                        }
                        onClick={() => {
                            isUserLoggedIn
                                ? handleLogout()
                                : navigate(URL_LOGIN)
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default Header
