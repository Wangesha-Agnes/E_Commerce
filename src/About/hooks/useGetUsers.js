const About = ({isLoggedIn}) => {
    const { users, error, loading} = useGetUsers();
    console.log({users});
    return(
        <>
        { 
        <div>
            {loading && <h2>loading users.......</h2>}
            {error.length> 0 && <h2>{error}</h2>}
            key={users.id}
            image={users.image}
            title={users.title}
            price={users.price}
            description={users.description}
            category={users.category}

        </div>
        
    
    
    }
        
        </>
    )
}