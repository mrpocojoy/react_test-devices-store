import { useState, useEffect } from 'react'

export const useCustomization = ({ id, options }) => {
  const [customization, setCustomization] = useState({})
    
  useEffect(() => {
    if (options) { 
      const { colors, storages } = options
      const newCustom = { id, colorCode: 0, storageCode: 0 }

      if (colors.length === 1)
        newCustom.colorCode = colors[0].code
      
      if (storages.length === 1)
        newCustom.storageCode = storages[0].code
      
      setCustomization({ ...newCustom })
    }    
  }, [id, options])



  const updateCustomization = ({ type, option }) => {
    if (type === 'color')
      return setCustomization({ ...customization, colorCode: option.code })
    
    if (type === 'storage')
      return setCustomization({ ...customization, storageCode: option.code })
  }



  const getCustomization = () => {
    const { id, colorCode, storageCode } = customization
    
    if (!id || !colorCode || !storageCode)
      return null                             // Case: Missing some code selections
      
    return customization
  }


  
  return { updateCustomization, getCustomization }
}
