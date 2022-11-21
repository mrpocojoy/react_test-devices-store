const Image = ({ source, altText, classes }) => (
  <img className={`${classes}`} src={source} alt={altText} />
)

export default Image