const UserCard = ({title, price, description, image, category}) =>{
    return(
        <div>
            <img src={image} alt={`${title} profile`}/>
            <h2>{title}</h2>
            <h2>{price}</h2>
            <h2>{description}</h2>
            <h2>{category}</h2>
        </div>
    );
};

export default UserCard;