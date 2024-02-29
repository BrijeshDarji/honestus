import { useEffect } from "react"
import { Menu } from "lucide-react"
import { useNavigate, Link } from "react-router-dom"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu.jsx"

import { Button } from "@/src/components/ui/button"

import HonestusLogo from "../assets/images/HonestusLogo.svg"
import TestingAggregator from "../assets/images/TestingAggregator.svg"
import WhatWeOffer from "../assets/images/WhatWeOffer.svg"
import PartnerWithUs from "../assets/images/PartnerWithUs.svg"

import {
    NAV_MENU,
    BENEFITS,
    WE_OFFER,
    WHY_WE_EXISTS,
    MOBILE_NAV_MENU,
} from "../assets/constants/Constant"

import {
    URL_LOGIN,
    URL_SELECT_MATERIAL,
} from "../assets/constants/SitePath"

import { isUserAuthenticated } from "../helpers/Utils"

function HomeScreen() {
    const navigate = useNavigate()

    useEffect(() => {
        isUserAuthenticated() && navigate(URL_SELECT_MATERIAL)
    }, [navigate])

    return (
        <>
            <div className="flex py-4 px-9 md:px-40 justify-between items-center self-stretch">
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
                                MOBILE_NAV_MENU.map(menu => (
                                    <Link
                                        to={menu.action}
                                        key={menu.title}
                                    >
                                        <DropdownMenuItem
                                        >
                                            {menu.title}
                                        </DropdownMenuItem>
                                    </Link>
                                ))
                            }
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="font-medium hidden md:flex justify-between items-center w-100">
                    {
                        NAV_MENU.map((menu, index) => (
                            <Link
                                key={index + menu.title}
                                className="text-xl"
                                to={menu.action}
                            >
                                {menu.title}
                            </Link>
                        ))
                    }

                    <Button
                        className="bg-darkOrange hover:bg-darkOrange font-semibold text-lg"
                        onClick={() => navigate(URL_LOGIN)}
                    >
                        Login
                    </Button>
                </div>
            </div>

            <div className="relative w-full">
                <img
                    src={TestingAggregator}
                    alt="TestingAggregator"
                    className="w-full h-180 object-cover bg-opacity-20"
                />

                <div className="absolute text-shadow shadow-[#00000040] inset-y-20 right-72 text-white font-semibold text-6.5xl flex flex-col items-start leading-relaxed">
                    <div>End to End</div>
                    <div>Paperless</div>
                    <div>Process</div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between my-6 mx-6 md:mx-44">
                <div className="w-auto flex items-start flex-col">
                    <div className="flex items-center justify-center font-extrabold">
                        <span className="text-darkOrange text-6xl md:text-8xl text-shadow-md shadow-[#00000047]">
                            10+
                        </span>
                        <span className="text-4.5xl ml-5">
                            Expert Partner Labs across India
                        </span>
                    </div>

                    <div className="font-medium text-2xl md:text-3.5xl my-5">
                        Trusted by numerous construction companies
                    </div>

                    <div className="text-darkSlate text-xl md:text-2xl font-roboto">
                        Honestus made our project seamless by connecting us with
                        a reliable material testing lab and taking care of all
                        the logistics.
                    </div>

                    <div className="font-medium text-darkOrange text-xl md:text-2xl mt-3">
                        Pratik Sinha
                    </div>
                </div>

                <div className="w-fit flex flex-col justify-end items-end">
                    <div>
                        <div className="text-8.5xl font-medium ml-6 -mb-8 md:text-8.5xl">
                            A+
                        </div>
                        <div className="flex">
                            {
                                Array.from({ length: 5 }, (v, i) => (
                                    <div
                                        key={i}
                                        className="text-amber-400 text-4.5xl font-medium"
                                    >
                                        ★
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-darkOrange flex flex-col items-center self-stretch gap-12 px-6 md:px-40 py-16">
                <div className="text-center text-white text-3xl md:text-4.5xl font-medium">
                    Why do we exist?
                </div>

                <div className="flex justify-center items-start content-start gap-6 self-stretch flex-wrap">
                    {
                        WHY_WE_EXISTS.map((card, index) => (
                            <div
                                key={card.title + index}
                                className="shadow-xl rounded-lg p-6 bg-white flex flex-col items-start self-stretch w-full md:w-66"
                            >
                                <img
                                    src={card.icon}
                                    alt={card.altText}
                                    className="w-12 h-12"
                                />

                                <div className="text-xl font-medium">
                                    {card.title}
                                </div>

                                <div className="text-base text-darkSlate">
                                    {card.description}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col items-center self-stretch gap-12 px-6 md:px-40 py-16">
                <div className="text-center text-3xl md:text-4.5xl font-medium">
                    What do we offer?
                </div>

                <div className="flex justify-center">
                    <div className="flex items-start justify-center flex-wrap self-stretch gap-12">
                        <div className="flex flex-col justify-center items-start self-stretch gap-7 w-full md:w-105">
                            {
                                WE_OFFER.map((content, index) => (
                                    <div
                                        key={index}
                                        className="bg-darkOrange flex justify-center items-center gap-2 p-5 text-white text-lg md:text-xl rounded-lg w-full"
                                    >
                                        {content}
                                    </div>
                                ))
                            }
                        </div>

                        <div className="w-full md:w-105">
                            <img
                                src={WhatWeOffer}
                                alt="WhatWeOffer"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-darkOrange flex flex-col justify-center items-center gap-6 self-stretch px-6 md:px-40 py-25">
                <div className="text-center text-white text-3xl md:text-4.5xl font-medium">
                    Benefits
                </div>

                <div className="flex justify-center items-start content-start flex-wrap gap-12 self-stretch ">
                    {
                        BENEFITS.map((card, index) => (
                            <div
                                key={card.altText + index}
                                className="flex flex-col justify-center items-center gap-6 shadow-xl bg-white rounded-lg p-6 h-60 w-full md:w-75"
                            >
                                <div className="flex justify-center">
                                    <img
                                        src={card.icon}
                                        alt={card.altText}
                                        className="w-16 h-16"
                                    />
                                </div>

                                <div className="text-lg md:text-xl">
                                    {card.description}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex items-center justify-center self-stretch gap-6 px-6 md:px-40 py-25">
                <div className="flex items-center justify-center flex-wrap self-stretch gap-6 md:gap-25">
                    <div className="flex flex-col justify-center items-start self-stretch gap-6 w-full md:w-105">
                        <div className="text-3xl md:text-3.5xl font-semibold">
                            Partner with Us
                        </div>

                        <div className="text-lg md:text-xl">
                            Our commitment to high standards of quality and
                            reliability in partnering with material testing labs
                            simplifies the construction process and earns the
                            trust of our clients.
                        </div>

                        <button className="bg-darkOrange rounded-lg flex justify-center items-center gap-2 px-8 py-3">
                            <div className="text-white text-xl md:text-2xl font-semibold">
                                Join our Partner Lab Network
                            </div>
                        </button>
                    </div>

                    <div className="w-full md:w-105">
                        <img
                            src={PartnerWithUs}
                            alt="PartnerWithUs"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeScreen
