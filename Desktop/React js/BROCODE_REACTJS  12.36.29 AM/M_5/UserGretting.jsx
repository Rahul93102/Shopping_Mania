function UserGreetting(props) { 
    return (
        props.isLoggedIn ? <h2>Welcome {props.username},</h2> : <h2>Please login {props.username}</h2>
    );
}

export default UserGreetting;
