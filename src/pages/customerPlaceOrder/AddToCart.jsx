import clsx from 'clsx'
import React from 'react'
import { useState } from 'react'

export default function AddToCart({ selectedMaterialList }) {
  console.log(selectedMaterialList, 'selectedMaterialList')

  const [sampleTests, setSampleTests] = useState([
    {
      testName:
        'Tensile Strength, Yield Stress, Elongation, and Deformation & Surface Characteristics. Weight per meter, Bend Test, Rebend Test',
      ISRef: '7808 ASTM-G-57',
      id: '1'
    },
    {
      testName:
        'Tensile Strength, Yield Stress, Elongation, and Deformation & Surface Characteristics. Weight per meter, Bend Test, Rebend Test',
      ISRef: '7808 ASTM-G-57',
      id: '2'
    },
    {
      testName:
        'Tensile Strength, Yield Stress, Elongation, and Deformation & Surface Characteristics. Weight per meter, Bend Test, Rebend Test',
      ISRef: '7808 ASTM-G-57',
      id: '3'
    },
    {
      testName:
        'Tensile Strength, Yield Stress, Elongation, and Deformation & Surface Characteristics. Weight per meter, Bend Test, Rebend Test',
      ISRef: '7808 ASTM-G-57',
      id: '4'
    },
    {
      testName:
        'Tensile Strength, Yield Stress, Elongation, and Deformation & Surface Characteristics. Weight per meter, Bend Test, Rebend Test',
      ISRef: '7808 ASTM-G-57',
      id: '5'
    },
    //
    {
      testName:
        'Tensile Strength, Yield Stress, Elongation, and Deformation & Surface Characteristics. Weight per meter, Bend Test, Rebend Test',
      ISRef: '7808 ASTM-G-57',
      id: '11'
    },
    {
      testName:
        'Tensile Strength, Yield Stress, Elongation, and Deformation & Surface Characteristics. Weight per meter, Bend Test, Rebend Test',
      ISRef: '7808 ASTM-G-57',
      id: '22'
    },
    {
      testName:
        'Tensile Strength, Yield Stress, Elongation, and Deformation & Surface Characteristics. Weight per meter, Bend Test, Rebend Test',
      ISRef: '7808 ASTM-G-57',
      id: '33'
    },
    {
      testName:
        'Tensile Strength, Yield Stress, Elongation, and Deformation & Surface Characteristics. Weight per meter, Bend Test, Rebend Test',
      ISRef: '7808 ASTM-G-57',
      id: '44'
    },
    {
      testName:
        'Tensile Strength, Yield Stress, Elongation, and Deformation & Surface Characteristics. Weight per meter, Bend Test, Rebend Test',
      ISRef: '7808 ASTM-G-57',
      id: '55'
    }
  ])

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-around">
        {selectedMaterialList.map((material) => {
          const isMaterialSelected = selectedMaterialList.find(
            (m) => m?.id === material.id
          )
          const className = isMaterialSelected
            ? 'bg-darkOrange text-white hover:bg-darkOrange/90'
            : 'bg-white text-black hover:bg-gray-200'

          return (
            <div
              key={material.id}
              className={clsx(
                className,
                'flex items-center gap-2 p-5 rounded-lg w-80 hover:cursor-pointer'
              )}
              // onClick={() => handleMaterialSelection(material)}
            >
              <img
                src={material.img_url}
                alt={material.material_name}
                className="rounded-lg w-20 max-w-20 h-20 max-h-20 object-cover"
              />

              <p>{material.material_name}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
