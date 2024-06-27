import './index.css'
import { FaCartPlus} from 'react-icons/fa';
import { IoMenu } from "react-icons/io5";

const Navbar =()=>{
    return(
        <div className="text">
           <div>
            <ul id='nav'>
                <h4>april</h4>
                <li><u>HOME</u></li>
                <li>SHOP</li>
                <li>BLOG</li>
                <li>PAGES</li>
                <li>CONTACT US</li>
                <FaCartPlus/>
                <IoMenu/>
                </ul>
                </div>
          
         
        </div>
    );
};

export default Navbar;