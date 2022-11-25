import './Footer.scss'

import CustomAnchor from 'components/ui/custom-anchor/CustomAnchor'
import Image from 'components/ui/image/Image'
import GithubLogo from 'assets/images/GithubLogo.svg'


const Footer = () => {
  return (
    <footer>
      <div className="footer__wrapper">
        <CustomAnchor href="https://github.com/mrpocojoy" classes="footer__link">

          <span>MrJow</span>
          <Image
            classes="footer__icon"
            source={GithubLogo}
            altText="Github logo" 
          />
          <span>Jow Digital</span>

        </CustomAnchor>
      </div>
    </footer>
  )
}

export default Footer