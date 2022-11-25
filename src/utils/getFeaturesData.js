import { features } from 'data/techFeatures'

const getDescription = (data, utils) => (
  Array.isArray(data)
    ? data.join(utils?.splitter || ', ')
    : data
)
const getLabel = (utils) => (utils?.label || '')
const getUnits = (utils) => (utils?.units || '')
const getIcon  = (utils) => (utils?.icon  || '')



export const obtainFeatureData = ({ feature, item }) => {
  if (!feature || !item)
    return {}

  let utils, description, label
    
  if (Array.isArray(feature)) {

    description = feature.map((ft) => {
      const ftUtils = features[ft]
      const ftData = item[ft]
      return getDescription(ftData, ftUtils)
    }).join(' + ')

    utils = features[feature[0]]
    label = utils?.cat || ''
  }
  else {

    utils = features[feature]
    const data = item[feature]
    description = getDescription(data, utils)  
    label = getLabel(utils) 

  }
  
  const units = getUnits(utils)
  const icon = getIcon(utils)
  const info = `${label}: ${description}`    

  return { label, description, info, units, icon }
}
