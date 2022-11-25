import './NotFound.scss'

import { Link } from 'react-router-dom'
import PageNotFound from 'assets/images/PageNotFound.svg'
import Image from 'components/ui/image/Image'

const NotFound = () => {
  return (
    <div className='not-found__wrapper'>
  
      <Image
        classes="not-found__image"
        source={PageNotFound}
        altText="Not found. HTTP404" 
      />
  
      <div className='not-found__button-wrapper'>
        <Link className='button not-found__button-link' to="/">Go Back Home</Link>
      </div>
    </div>
  )
}
export default NotFound