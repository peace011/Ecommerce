import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const[info,setInfo]=useState({name:'', lastname:'', username:'', email:'', password:'', confirmpassword:''});
  const[usererr,setUserErr]=useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const Navigate=useNavigate();

  
  // const handleonChange = (e) => {
  //   const { name, value } = e.target;
  //   setInfo((prevInfo) => {
  //     const updatedInfo = { ...prevInfo, [name]: value };
  //     console.log('Updated Info:', updatedInfo);
  //     return updatedInfo;
  //   });
  // };

  const handleonChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };
  
  const renderError = (fieldName, fieldValue) => {
    return (
      <span className='text-red-500 text-[11px] absolute mt-12'>
        {usererr && fieldValue !== undefined && fieldValue.length <= 3 ? `* ${fieldName} should be at least 3 digits` : null}
      </span>
    );
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    // Basic validation checks
    if (info.name.length <= 3 || info.lastname.length <= 3 || info.email.length <= 3 || info.password.length <= 3) {
      setUserErr(true);
      return;
    }
    
    // Check if passwords match
    if (info.password !== info.confirmpassword) {
      setPasswordMatchError(true);
      return;
    }

    axios.post('https://jsonplaceholder.typicode.com/users',{...info,lastname:info.lastname,password:info.password,confirmpassword:info.confirmpassword}
     )
     .then(resp=>{
      console.log(resp.data);
      console.log('Post successful!');
      Navigate('/');
    })
    .catch(error=>
      console.log('Error',error));
      
  }
  

  return (
    <div className="register w-[100vw] h-[100vh] flex items-center justify-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1598121496628-9d8b7578e290?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}>
    <div className='wrapper bg-white h-[60%] w-[40%] p-[20px]'>
        <div className="title text-[24px] font-medium">CREATE AN ACCOUNT</div>

          <form  onSubmit={handleSubmit}> 
              <div className="form flex flex-wrap">
                <div className="name flex flex-col flex-1 min-w-[40%] mt-[20px] mb-[10px]">
                   <input placeholder="name" type="text" name='name' value={info.name} onChange={handleonChange} className='p-[10px] border border-gray-300'/>
                   {renderError('Name', info.name)}
                </div>
                <div className="lastname flex flex-col flex-1 min-w-[40%] mt-[20px] mb-[10px]">
                  <input placeholder="last name" type="text" name='lastname' value={info.lastname} onChange={handleonChange} className='p-[10px] border border-gray-300'/>
                  {renderError('lastname', info.lastname)}
                </div>
                <div className="username flex flex-col flex-1 min-w-[40%] mt-[20px] mb-[10px]">
                  <input placeholder="username" type="text" name='username' value={info.username} onChange={handleonChange}  className='p-[10px] border border-gray-300'/>
                  {renderError('username',info.username)}
                </div>
                <div className="email flex flex-col flex-1 min-w-[40%] mt-[20px] mb-[10px]">
                  <input placeholder="email" type="email" name='email' value={info.email} onChange={handleonChange} className='p-[10px] border border-gray-300'/>
                </div>
                <div className="password flex flex-col flex-1 min-w-[40%] mt-[20px] mb-[10px]">
                  <input placeholder="password" type="text" name='password' value={info.password} onChange={handleonChange} className='p-[10px] border border-gray-300'/>
                  {renderError('password',info.password)}
                </div>
                <div className="confirm password flex flex-col flex-1 min-w-[40%] mt-[20px] mb-[10px]">
                  <input placeholder="confirm password" type="text" name='confirmpassword' value={info.confirmpassword} onChange={handleonChange} className='p-[10px] border border-gray-300'/>
                  {renderError('confirmpassword',info.confirmpassword)}
                  <span>{passwordMatchError ? 'Passwords do not match' : null}</span>
                </div>
               
                <div className="aggrement text-[12px] my-[20px]">
                  By creating an account, I consent to the processing of my persinal data in accordance with the <b>PRIVACY POLICY</b>
                </div>
                <button className='w-[40%] border-none px-[10px] py-[10px] bg-teal-700 text-white cursor-pointer'>Create</button>
            </div>
        </form>

        </div>
    </div>
  )
}

export default Register