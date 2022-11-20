const ColorTag = ({ color }) => {
  const borderColor = (color === 'White') ? '#bbb' : color
  
  return (
    <div className="item-color-tag" style={{ backgroundColor: color, borderColor }}></div>
  )
}

export default ColorTag