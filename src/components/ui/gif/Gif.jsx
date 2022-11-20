import './Gif.scss'

const Gif = ({ scrUrl, classes }) => (

  <div className={`${classes} gif__wrapper`}>
    
    <iframe title={scrUrl} src={scrUrl} width="100%" height="100%" frameBorder="0" className="gif__embed" allowFullScreen></iframe>
  
  </div>
)

export default Gif