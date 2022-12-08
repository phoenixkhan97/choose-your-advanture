import {Link} from 'react-router-dom'

const Home = ()=>{
    return(
        <div >
               <div className='nav'>
                <h1 className="nav-1">Great Adventures</h1>
                   <Link to='./signin'>
                <button className="btn">Sign Up</button>
                <button className="btn1">Sign In</button></Link>
                <input
                     className="search"
                     type="text"
                     placeholder="Search"/>
              </div>
              
           <h1 className="home1">Start Your Adventure!</h1>
           <h3 className="home2">Personalize your charcter and embark on an exciting journey! Keep track of your progress with friends or go solo! Start Here!</h3>
           <img className="map" src="https://i.pinimg.com/564x/1a/9d/66/1a9d66c0c8fd8cf06f45e1d99a1fd2da.jpg" alt="map" title="Go To Map"/>

           <button className="btn2">Let's Begin</button>
           
        </div>
    )
}

export default Home