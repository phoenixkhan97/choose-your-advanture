const signIn = ()=>{

    return(
        <div className="background">
            <div className="box">
                <div>
               <h1 className="signIn">Sign In</h1>
               <input 
               className="username"
               type="text"
               placeholder="UserName"
               name="username"/>
               <input
               className="username"
               type="password"
               placeholder="Password"
               name="password"/>
               <button className="btnSignIn">Sign In</button>
               </div>
               <div className="signUp">
                 <h3>Not A Member? Sign Up!</h3>
                 <button className="btnSignUp">Register</button>
               </div>
            </div>
        </div>
    )
}

export default signIn