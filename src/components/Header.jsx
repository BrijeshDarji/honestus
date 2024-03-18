import { clsx } from 'clsx'
import { Menu } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/src/components/ui/dropdown-menu.jsx'

import { URL_HOME_SCREEN, URL_LOGIN } from '@/src/assets/constants/SitePath'
import HonestusLogo from '@/src/assets/images/HonestusLogo.svg'
import LoaderButton from '@/src/components/form_elements/LoaderButton'
import { useToast } from '@/src/components/ui/use-toast'

import {
  ERROR_MESSAGES,
  SUCCESS_MESSAGES
} from '@/src/assets/constants/Messages'
import { isAuthenticated } from '@/src/helpers/Utils'
import { server } from '../helpers/api'

export default function Header(props) {
  const navigate = useNavigate()
  const { toast } = useToast()

  const [loading, setLoading] = useState(false)

  const handleLogout = () => {
    setLoading(true)

    server
      .post('/auth/logout/')
      .then((response) => {
        toast({
          title: SUCCESS_MESSAGES.TOAST_TITLE,
          description: response.data.detail
        })

        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        navigate('/')
      })
      .catch((error) => {
        toast({
          title: ERROR_MESSAGES.TOAST_TITLE,
          description: error.response.data.message,
          variant: 'destructive'
        })
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const NAV_MENU = [
    {
      title: 'About Us',
      action: () => navigate(URL_HOME_SCREEN),
      disabled: false
    },
    {
      title: 'Sectors',
      action: () => navigate(URL_HOME_SCREEN),
      disabled: false
    }
  ]

  const MOBILE_NAV_MENU = [
    ...NAV_MENU,
    {
      title: 'Login',
      action: () => navigate(URL_LOGIN),
      disabled: false
    }
  ]

  const LOGGED_IN_NAV_MENU = [
    {
      title: 'Home',
      action: () => {},
      disabled: false
    },
    {
      title: 'Portal',
      action: () => {},
      disabled: false
    },
    {
      title: 'How it Works',
      action: () => {},
      disabled: false
    }
  ]

  const MOBILE_LOGGED_IN_NAV_MENU = [
    ...LOGGED_IN_NAV_MENU,
    {
      title: 'Logout',
      action: handleLogout,
      disabled: loading
    }
  ]

  const isUserLoggedIn = useMemo(() => {
    return isAuthenticated()
  }, [])

  const desktopNavMenu = isUserLoggedIn ? LOGGED_IN_NAV_MENU : NAV_MENU

  const mobileNavMenu = isUserLoggedIn
    ? MOBILE_LOGGED_IN_NAV_MENU
    : MOBILE_NAV_MENU

  return (
    <>
      <div
        className={clsx(
          props.className,
          'flex justify-between items-center self-stretch fixed top-0 w-full z-10 bg-white drop-shadow-xl'
        )}
      >
        <img src={HonestusLogo} alt="Honestus" className="w-52 h-12" />

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {mobileNavMenu.map((menu) => (
                <DropdownMenuItem
                  key={menu.title}
                  onClick={menu.action}
                  disabled={menu.disabled}
                >
                  {menu.title}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="font-medium hidden md:flex justify-end items-center gap-2 w-100">
          {desktopNavMenu.map((menu, index) => (
            <span
              key={index + menu.title}
              className="md:text-base lg:text-lg hover:bg-gray-100 hover:cursor-pointer hover:rounded-lg px-5 py-2 min-w-fit"
              onClick={menu.action}
            >
              {menu.title}
            </span>
          ))}

          <LoaderButton
            className="text-lg"
            loading={loading}
            text={
              isUserLoggedIn ? (loading ? 'Logging out' : 'Logout') : 'Login'
            }
            onClick={() => {
              isUserLoggedIn ? handleLogout() : navigate(URL_LOGIN)
            }}
          />
        </div>
      </div>
    </>
  )
}
