import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'

import Header from '@/src/components/Header'

import PartnerWithUs from '@/src/assets/images/PartnerWithUs.svg'
import image1 from '@/src/assets/images/banner/image1.png'
import image2 from '@/src/assets/images/banner/image2.png'
import image3 from '@/src/assets/images/banner/image3.png'
import image4 from '@/src/assets/images/banner/image4.png'
import image5 from '@/src/assets/images/banner/image5.png'
import WhatWeOffer from '@/src/assets/images/WhatWeOffer.svg'

import {
  BENEFITS,
  WE_OFFER,
  WHY_WE_EXISTS,
  headerSpacing
} from '@/src/assets/constants/Constant'

import { isAuthenticated } from '@/src/helpers/utils'

function HomeScreen() {
  const navigate = useNavigate()

  useEffect(() => {
    isAuthenticated() && navigate('/customer-place-order')
  }, [navigate])

  return (
    <>
      <Header className={headerSpacing} />

      <main className="max-w-[1920px] w-full mx-auto">
        <Slider
          className="w-full mt-20"
          {...{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          }}
        >
          <div className="relative w-full">
            <img
              src={image1}
              alt="image1"
              className="w-full h-180 object-cover bg-opacity-20"
            />
            <div className="absolute text-shadow shadow-[#00000040] inset-y-20 right-8 md:right-11 lg:right-16 xl:right-16 text-white font-semibold text-5xl md:text-6.5xl flex flex-col items-start leading-relaxed">
              <div>End to End</div>
              <div>Paperless</div>
              <div>Process</div>
            </div>
          </div>
          <div>
            <img
              src={image2}
              alt="image2"
              className="w-full h-180 object-cover bg-opacity-20"
            />
            <div className="absolute text-shadow shadow-[#00000040] inset-y-20 right-8 md:right-11 lg:right-16 xl:right-16 text-white font-semibold text-5xl md:text-6.5xl flex flex-col items-start leading-relaxed">
              <div>End to End</div>
              <div>Paperless</div>
              <div>Process</div>
            </div>
          </div>
          <div>
            <img
              src={image3}
              alt="image3"
              className="w-full h-180 object-cover bg-opacity-20"
            />
            <div className="absolute text-shadow shadow-[#00000040] inset-y-20 right-8 md:right-11 lg:right-16 xl:right-16 text-white font-semibold text-5xl md:text-6.5xl flex flex-col items-start leading-relaxed">
              <div>End to End</div>
              <div>Paperless</div>
              <div>Process</div>
            </div>
          </div>
          <div>
            <img
              src={image4}
              alt="image4"
              className="w-full h-180 object-cover bg-opacity-20"
            />
            <div className="absolute text-shadow shadow-[#00000040] inset-y-20 right-8 md:right-11 lg:right-16 xl:right-16 text-white font-semibold text-5xl md:text-6.5xl flex flex-col items-start leading-relaxed">
              <div>End to End</div>
              <div>Paperless</div>
              <div>Process</div>
            </div>
          </div>
          <div>
            <img
              src={image5}
              alt="image5"
              className="w-full h-180 object-cover bg-opacity-20"
            />
            <div className="absolute text-shadow shadow-[#00000040] inset-y-20 right-8 md:right-11 lg:right-16 xl:right-16 text-white font-semibold text-5xl md:text-6.5xl flex flex-col items-start leading-relaxed">
              <div>End to End</div>
              <div>Paperless</div>
              <div>Process</div>
            </div>
          </div>
        </Slider>

        <div className="flex flex-col md:flex-row justify-between py-16 px-6">
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
              Honestus made our project seamless by connecting us with a
              reliable material testing lab and taking care of all the
              logistics.
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
                {Array.from({ length: 5 }, (v, i) => (
                  <div
                    key={i}
                    className="text-amber-400 text-4.5xl font-medium"
                  >
                    ★
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 bg-darkOrange py-16 px-6">
          <div className="text-center text-white text-3xl md:text-4.5xl font-medium">
            Why do we exist?
          </div>

          <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {WHY_WE_EXISTS.map((card, index) => (
              <div
                key={card.title + index}
                className="flex flex-col gap-4 items-start self-stretch shadow-xl rounded-lg p-6 bg-white w-[280px]"
              >
                <img src={card.icon} alt={card.altText} className="w-12 h-12" />
                <div className="text-xl font-medium">{card.title}</div>
                <div className="text-base text-darkSlate">
                  {card.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 py-16 px-6">
          <div className="text-center text-3xl md:text-4.5xl font-medium">
            What do we offer?
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center">
            <div className="flex flex-col justify-center items-start self-stretch gap-6 w-full text-center">
              {WE_OFFER.map((content, index) => (
                <div
                  key={index}
                  className="bg-darkOrange flex justify-center items-center gap-2 p-5 text-white text-lg md:text-xl rounded-lg w-full"
                >
                  {content}
                </div>
              ))}
            </div>

            <img src={WhatWeOffer} alt="WhatWeOffer" />
          </div>
        </div>

        <div className="flex flex-col gap-8 bg-darkOrange py-16 px-6">
          <div className="text-center text-white text-3xl md:text-4.5xl font-medium">
            Benefits
          </div>

          <div className="grid mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {BENEFITS.map((card, index) => (
              <div
                key={card.altText + index}
                className="shadow-xl rounded-lg py-12 px-4 bg-white flex flex-col gap-4 items-center self-stretch max-w-[380px] text-center"
              >
                <div className="flex justify-center">
                  <img
                    src={card.icon}
                    alt={card.altText}
                    className="w-16 h-16"
                  />
                </div>

                <div className="text-lg md:text-xl">{card.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-items-center py-16 px-6">
          <div className="flex flex-col gap-6">
            <div className="text-3xl md:text-3.5xl font-semibold">
              Partner with Us
            </div>

            <div className="text-lg md:text-xl">
              Our commitment to high standards of quality and reliability in
              partnering with material testing labs simplifies the construction
              process and earns the trust of our clients.
            </div>

            <button className="bg-darkOrange rounded-lg flex justify-center items-center gap-2 px-8 py-3">
              <div className="text-white text-xl md:text-2xl font-semibold">
                Join our Partner Lab Network
              </div>
            </button>
          </div>

          <img src={PartnerWithUs} alt="PartnerWithUs" />
        </div>
      </main>
    </>
  )
}

export default HomeScreen
