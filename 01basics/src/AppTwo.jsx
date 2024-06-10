const user = {
    name : "Ms. Bella",
    profileImage: 'https://i.imgur.com/yXOvdOSs.jpg',
    role : "admin",
    age : 32,
    isLoggedIn: true,
    loginCount : 2,
};

function UserInfo(){
   return(
    <>
        <h1>
        {user.loginCount}
        </h1>
        <img src={user.profileImage} alt={"photo of " + user.role} style={{border : "2px solid green" }}/>
    </>
   )
}

/* style={{}} is not a special syntax, but a regular {} object inside the style={ } JSX curly braces. You can use the style attribute when your styles depend on 
JavaScript variables. */

export default UserInfo;