import { clsx } from 'clsx'
import { lazy, memo, useState } from 'react'

const SelectMaterial = lazy(
  () => import('./SelectMaterial.jsx' /* webpackChunkName: 'SelectMaterial'*/)
)

import { TOTAl_CUSTOMER_STEPS } from '@/src/assets/constants/Constant.js'

function CustomerPlaceOrderForm() {
  const [activeStep, setActiveStep] = useState(1)
  const [selectedMaterialList, setSelectedMaterialList] = useState([])

  const getStepContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <SelectMaterial
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            selectedMaterialList={selectedMaterialList}
            setSelectedMaterialList={setSelectedMaterialList}
          />
        )

      default:
        return null
    }
  }

  return (
    <div className="flex flex-col gap-10 h-full">
      <div className="flex gap-2 w-full justify-center items-center">
        {Array.from({ length: TOTAl_CUSTOMER_STEPS }, (v, i) => {
          const border =
            i + 1 <= activeStep ? 'border-darkOrange' : 'border-darkSlate'

          return (
            <span
              key={i}
              className={clsx(border, 'border-2 rounded-xl w-full  flex')}
            />
          )
        })}
      </div>

      {getStepContent()}
    </div>
  )
}

export default memo(CustomerPlaceOrderForm)
