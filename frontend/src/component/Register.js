import React,{useState} from "react";
import axios from 'axios'


const Register =()=>{
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
    const optionsHandler=(e)=>{
      console.log(e.target.value);
      const {name,value} =e.target;
      console.log("hello",name,value)
      
      setUserData({...userData,[name]:value})

    }
     const validate =(value)=>{
        let errors ={};
        let isValid = true;
        if(value.password ==='')
        {
            errors.password ="password is required";
            isValid=false
        }
        else if(value.confirmPassword ==='')
        {
            errors.confirmPassword ="confirm password is required";
            isValid=false
        }
        else if(value.username ==='')
        {
            errors.username="username is required";
            isValid=false
        }
        else if(value.role ==='')
        {
            errors.role="roles is required";
            isValid = false
        }
        if(value.password !== value.confirmPassword )
        {
            errors.confirmPassword="password is incorrect";
            isValid=false
        }
        return {isValid,errors}

     }
    const handleSubmit =async(e)=>{

        e.preventDefault();
        try{
        const validation = validate(userData)
        const { confirmPassword , password,username,role} = userData;
        console.log("userData",userData,role);
        setErrors(validation.errors)
        
        if(Object.keys(validation.errors).length !==0)
        {
            return
        }
        const payload ={password,username,role}

        const res = await axios.post('http://localhost:6969/user/Register',payload)
       
    
       
    }
    catch(error){
       console.log(error)
    }

    }

    return(
        <>
        <h1>
       Register
       {console.log("errors.confirmPassword",errors.confirmPassword)}
        </h1>
        <form onSubmit={handleSubmit}>
            username
            <input type="text" name="username"onChange={handleChange}/>
            {errors && errors.username && (
                <span className="text-danger">{errors.username}</span>
            )}
            <br/>
            password
            <input type="password" name="password"onChange={handleChange}/>
            {errors && errors.password &&(
                <span className="text-danger">{errors.password}</span>
            )}
            <br/>
            confirmPassword
            <input type ="password" name="confirmPassword" onChange={handleChange}/>
            {errors && errors.confirmPassword &&(
                <span className="text-danger">{errors.confirmPassword}</span>
            )}
            <br/>
            role
            <select name="role" value={userData.role} onChange={optionsHandler}>
  <option value="admin">admin</option>
  <option value="client">client</option>
  
</select>
            <input type="submit" value="submit"/>
        
        </form>
        </>
        
    )
}
export default Register