import {FaShoppingCart} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div >
      <div  className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to='/' >
          <img src="../logo.png" className='h-14' />
        </NavLink>
        
        <div>
          <NavLink to='/'>
            <p>Home</p>
          </NavLink>
          <NavLink to='/cart'>
            <FaShoppingCart/>
          </NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
