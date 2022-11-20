const Image = ({ source, altText }) => {
  return (
    <img className="item-image" src={source} alt={altText} />
  )
}

export default Image