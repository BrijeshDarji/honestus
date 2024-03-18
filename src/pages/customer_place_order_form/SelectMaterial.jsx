import { clsx } from 'clsx'
import difference from 'lodash.difference'
import { ChevronLast, CopyCheck, CopyMinus } from 'lucide-react'
import { memo, useEffect, useMemo, useState } from 'react'

import PageLoading from '@/src/components/form_elements/PageLoading'
import SearchBar from '@/src/components/form_elements/SearchBar'
import { Button } from '@/src/components/ui/button'
import { useToast } from '@/src/components/ui/use-toast'

import { LAB } from '@/src/assets/constants/ApiPath'
import { ERROR_MESSAGES } from '@/src/assets/constants/Messages'
import { getApi } from '@/src/helpers/ApiHelper'

function SelectMaterial(props) {
  const { toast } = useToast()

  const [loading, setLoading] = useState(true)
  const [originalMaterialList, setOriginalMaterialList] = useState([])
  const [materialList, setMaterialList] = useState([])

  const { selectedMaterialList, setSelectedMaterialList } = props

  const areAllMaterialSelected = useMemo(() => {
    if (materialList.length && selectedMaterialList.length) {
      const materialIds = materialList.map((item) => item.id)
      const selectedMaterialIds = selectedMaterialList.map((item) => item.id)

      const differentIds = difference(materialIds, selectedMaterialIds)

      if (!differentIds.length) {
        return true
      }
    }
    return false
  }, [materialList, selectedMaterialList])

  useEffect(() => {
    getApi(LAB.MATERIAL.BASE)
      .then((response) => {
        if (response.data) {
          setOriginalMaterialList(response.data)
          setMaterialList(response.data)
        }
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
    //eslint-disable-next-line
  }, [])

  const handleMaterialSearch = (e) => {
    const value = e.target.value

    if (value && value.trim()) {
      const filteredData = originalMaterialList.filter((item) =>
        item.material_name.toLowerCase().includes(value.toLowerCase())
      )
      setMaterialList(filteredData)
    } else {
      setMaterialList(originalMaterialList)
    }
  }

  const handleMaterialSelection = (material) => {
    if (material) {
      const stateData = JSON.parse(JSON.stringify(selectedMaterialList))
      const selectedIndex = selectedMaterialList.findIndex(
        (item) => item.id === material.id
      )

      if (selectedIndex > -1) {
        stateData.splice(selectedIndex, 1)
      } else {
        stateData.push(material)
      }
      setSelectedMaterialList(stateData)
    }
  }

  const handleSelectAll = () => {
    let finalArray = materialList

    if (selectedMaterialList.length) {
      const stateData = JSON.parse(JSON.stringify(materialList))

      selectedMaterialList.forEach((material) => {
        const selectedIndex = stateData.findIndex(
          (item) => item.id === material.id
        )

        if (selectedIndex > -1) {
          stateData.splice(selectedIndex, 1)
        }
      })
      finalArray = selectedMaterialList.concat(stateData)
    }
    setSelectedMaterialList(finalArray)
  }

  const handleDeselectAll = () => {
    let finalArray = []

    if (materialList.length) {
      const stateData = JSON.parse(JSON.stringify(selectedMaterialList))

      materialList.forEach((material) => {
        const selectedIndex = stateData.findIndex(
          (item) => item.id === material.id
        )

        if (selectedIndex > -1) {
          stateData.splice(selectedIndex, 1)
        }
      })
      finalArray = stateData
    }
    setSelectedMaterialList(finalArray)
  }

  const ActionButtons = () => (
    <div className="flex justify-between items-center">
      {areAllMaterialSelected ? (
        <Button variant="outline" onClick={handleDeselectAll}>
          <CopyMinus />
          &nbsp; Deselect All
        </Button>
      ) : (
        <Button variant="outline" onClick={handleSelectAll}>
          <CopyCheck />
          &nbsp; Select All
        </Button>
      )}

      <Button>
        Next &nbsp;
        <ChevronLast />
      </Button>
    </div>
  )

  return (
    <div className="h-full">
      {loading ? (
        <PageLoading className="h-full" />
      ) : (
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="font-semibold text-lg"> Search material </div>

            <SearchBar
              placeholder="Search material..."
              onChange={handleMaterialSearch}
            />
          </div>

          {materialList.length ? (
            <>
              <ActionButtons />

              <div className="flex flex-wrap gap-4 justify-around">
                {materialList.map((material) => {
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
                      onClick={() => handleMaterialSelection(material)}
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

              <ActionButtons />
            </>
          ) : (
            <p>No materials found.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default memo(SelectMaterial)
