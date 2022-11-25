import { Link } from 'react-scroll'

const ScrollLink = ({ to, classes, ...props }) => (
  <Link
    className='button main-features__see-more'
    to="tech-details"
    smooth={true}
    offset={-props.offset || 0}
    duration={props.duration || 400}
  >
    {props.children}
  </Link>
)
export default ScrollLink