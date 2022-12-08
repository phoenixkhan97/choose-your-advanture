const signIn = ()=>{

    return(
        <div className="background">
            <div className="box">
                <div className="signIn">
               <h1>Sign In</h1>
               <input
               type="text"
               placeholder="UserName"
               name="username"/>
               <input
               type="password"
               placeholder="Password"
               name="password"/>
               </div>
               <div className="signUp">
                 <h3>Not A Member? Sign Up!</h3>
                 <button>Register</button>
               </div>
            </div>
        </div>
    )
}

export default signIn