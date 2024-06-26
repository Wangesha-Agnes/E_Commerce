import './index.css'
import { FaCartPlus} from 'react-icons/fa';

const Navbar =()=>{
    return(
        <div className="text">
           <div id="nav">
                <li>HOME</li>
                <li>SHOP</li>
                <li>BLOG</li>
                <li>PAGES</li>
                <li>CONTACT US</li>
                </div>
         <div id="image">
         <FaCartPlus/>
         </div>
          
         
        </div>
    );
};

export default Navbar;