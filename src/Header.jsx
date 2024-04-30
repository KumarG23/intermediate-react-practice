import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='pt-3'>
      <Link to='/' className='p-5'>Home</Link>
      <Link to='/About'>Edit Team</Link>
    </div>
  )
}

export default Header