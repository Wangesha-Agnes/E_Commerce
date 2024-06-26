import './index.css'
import marvin from '../Images/marvin.png'

const Store = ()=>{
return(
    <div>
        <h2><b>Simplify<br/> Everything.</b></h2>
        <button>EXPLORE NOW</button>
        <img src={marvin} alt='' />
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
    </div>
);
};

export default Store;