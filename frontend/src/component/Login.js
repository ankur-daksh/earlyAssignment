import React ,{useState} from "react";


const Login =()=>{
    const intial={
        username:'',
        password:'',
        confirmPassword:'',
        role:''
    }
    const [userData,setUserData]=useState(intial);
    const [errors,setErrors] = useState('');
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setUserData({...userData,[name]:value})
    }


    return(
<>
<h1>login</h1>
{/* <form onSubmit={handleSubmit}>
            username
            <input type="text" name="username"onChange={handleChange}/>
            
            <br/>
            password
            <input type="password" name="password"onChange={handleChange}/>
           
            <br/>
         
           
            <input type="submit" value="submit"/>
        
        </form> */}


</>
    )
}
export default Login