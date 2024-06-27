import './index.css'
import marvin from '../Images/marvin.png'

const Store = ()=>{
return(
    <div className='store'>
          <div className='landing'>
        <p>#APRILSTORE</p>
        <h2 id='simplify'><b>Simplify<br/> Everything.</b></h2>
        <button>EXPLORE NOW</button>
        <ul id='nav2'>
        <li>Men</li>
        <li><u>women</u></li>
        <li>Kids</li>
        </ul>
        </div>
        <div id='lady'>
        <img src={marvin} alt='' id='marvin'/>
        </div>
    </div>
);
};

export default Store;