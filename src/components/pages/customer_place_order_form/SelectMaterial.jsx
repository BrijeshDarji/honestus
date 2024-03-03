import { memo, useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { ChevronLast, CopyCheck } from 'lucide-react'

import SearchBar from '../../form_elements/SearchBar'
import PageLoading from '../../form_elements/PageLoading'
import { Button } from '../../ui/button'
import { useToast } from "@/src/components/ui/use-toast"

import { getApi } from '../../../helpers/ApiHelper'
import { LAB } from '../../../assets/constants/ApiPath'
import { ERROR_MESSAGES } from '../../../assets/constants/Messages'

function SelectMaterial(props) {
    const { toast } = useToast()

    const [loading, setLoading] = useState(true)
    const [originalMaterialList, setOriginalMaterialList] = useState([])
    const [materialList, setMaterialList] = useState([])

    const {
        selectedMaterialList,
        setSelectedMaterialList,
    } = props

    useEffect(() => {
        getApi(LAB.MATERIAL.BASE)
            .then(response => {
                if (response.data) {
                    setOriginalMaterialList(response.data)
                    setMaterialList(response.data)
                }
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
        //eslint-disable-next-line
    }, [])

    const handleMaterialSearch = (e) => {
        const value = e.target.value

        if (value && value.trim()) {
            const filteredData = originalMaterialList.filter(
                item => item.material_name.toLowerCase().includes(value.toLowerCase())
            )
            setMaterialList(filteredData)
        }
        else {
            setMaterialList(originalMaterialList)
        }
    }

    const handleMaterialSelection = (material) => {
        if (material) {
            const stateData = JSON.parse(JSON.stringify(selectedMaterialList))
            const selectedIndex = selectedMaterialList.findIndex(item => item.id === material.id)

            if (selectedIndex > -1) {
                stateData.splice(selectedIndex, 1)
            }
            else {
                stateData.push(material)
            }
            setSelectedMaterialList(stateData)
        }
    }

    return (
        <div className='h-full'>
            {loading
                ? (
                    <PageLoading className="h-full" />
                )
                : (
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-4">
                            <div className='font-semibold text-lg'> Search material </div>

                            <SearchBar
                                placeholder="Search material..."
                                onChange={handleMaterialSearch}
                            />
                        </div>

                        {materialList.length
                            ? (
                                <>
                                    <div className="flex flex-wrap gap-4 justify-around">
                                        {materialList.map(material => {
                                            const isMaterialSelected = selectedMaterialList.find(m => m?.id === material.id)
                                            const className =
                                                isMaterialSelected
                                                    ? "bg-darkOrange text-white hover:bg-darkOrange/90"
                                                    : "bg-white text-black hover:bg-gray-200"

                                            return (
                                                <div
                                                    key={material.id}
                                                    className={clsx(className, "flex items-center gap-2 p-5 rounded-lg w-80 hover:cursor-pointer")}
                                                    onClick={() => handleMaterialSelection(material)}
                                                >
                                                    <img
                                                        src={material.img_url}
                                                        alt={material.material_name}
                                                        className='rounded-lg w-20 max-w-20 h-20 max-h-20 object-cover'
                                                    />

                                                    <p>{material.material_name}</p>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <Button variant="outline">
                                            <CopyCheck />
                                            &nbsp; Select All
                                        </Button>

                                        <Button>
                                            Next &nbsp;
                                            <ChevronLast />
                                        </Button>
                                    </div>
                                </>
                            )
                            : (
                                <p>
                                    No materials found.
                                </p>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default memo(SelectMaterial)
