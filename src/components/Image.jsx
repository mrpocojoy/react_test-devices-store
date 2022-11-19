const Image = ({ source, altText, ...props }) => {
  return (
    <img className="item-image" src={source} alt={altText} />
  )
}

export default Image