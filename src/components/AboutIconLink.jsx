import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function aboutIconLink() {
  return (
    <div>
      <div className='about-link'>
        <Link to={{
          pathname: '/about',
          search: '?sort=name',
          hash: '#hello',
        }}>
          <FaQuestion size={30}/>
        </Link>
      </div>
    </div>
  )
}

export default aboutIconLink
