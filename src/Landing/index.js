import './index.css'
import marvin from '../Images/marvin.png'

const Store = ()=>{
return(
    <div className='store'>
          <div className='landing'>
        <p>#APRILSTORE</p>
        <h2><b>Simplify<br/> Everything.</b></h2>
        <button>EXPLORE NOW</button>
        <li>Men</li>
        <li><u>women</u></li>
        <li>Kids</li>
        </div>
        <div id='lady'>
        <img src={marvin} alt='' />
        </div>
    </div>
);
};

export default Store;