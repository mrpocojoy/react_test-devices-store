import * as SolidIcons from '@fortawesome/free-solid-svg-icons'
import * as RegularIcons from '@fortawesome/free-regular-svg-icons'

const faIcons = { ...SolidIcons, ...RegularIcons }
const faIconKeys = Object.keys(faIcons)



export const getIconsListFromName = (iconKey) => {
  const filteredByName = faIconKeys
    .filter((key) => key === iconKey)
    .map((icon) => faIcons[icon])

  if (filteredByName.length === 0)
    throw new Error(`Icon name not found -> ${iconKey}`)

  return filteredByName
}

export const getIconFromName = (iconKey) => (
  getIconsListFromName(iconKey)[0]
)


export const getIconFromObject = ({ prefix, iconName }) => {
  if ( !prefix || !iconName)
    throw new Error(`Missing icon information -> ${{ prefix, iconName }}`)

  const filteredByName = getIconsListFromName(iconName)
  let filteredByStyle = filteredByName.filter(({ prefix }) => (
    this?.prefix === prefix
  ))
  
  if (filteredByStyle.length === 0) {
    console.error(`Icon style not found -> ${{ prefix, iconName }}. Using an alternative style`)
    return filteredByName[0]
  }
  
  return filteredByStyle[0]
}
