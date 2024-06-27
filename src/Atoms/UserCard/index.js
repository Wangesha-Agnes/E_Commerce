import "./index.css"


const UserCard = ({title, price, description, image, category}) =>{
    return(
        <div>
            <img src={image} alt={`${title} profile`} id="img"/>
            <h2>{title}</h2>
            <h2>Price: ${price}</h2>
            {/* <h2>{description}</h2>
            <h2>{category}</h2> */}
        </div>
    );
};

export default UserCard;