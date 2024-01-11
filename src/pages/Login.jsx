import React from 'react'

const Login = () => {
  return (
    <div className="Login w-[100vw] h-[100vh] flex items-center justify-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1598121496628-9d8b7578e290?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}>
    <div className='wrapper bg-white h-[50%] w-[30%] p-[20px]'>
        <div className="title text-[24px] font-medium">SIGN IN</div>
        <div className="form flex flex-col">
          <input placeholder="email" type="text" className='flex-1 min-w-[40%] mt-[20px] mb-[10px] p-[10px] border border-gray-300'/>
          <input placeholder="password" type="text" className='flex-1 min-w-[40%] mt-[20px] mb-[10px] p-[10px] border border-gray-300'/>
         
          <button className='w-[40%] border-none mt-[10px] py-[10px] bg-teal-700 text-white cursor-pointer'>Login</button>
        
             
          <div className="aggrement text-[12px] my-[20px]">
           Forgot Password?
           Create a new Account
          </div>
        </div>

        </div>
    </div>
  )
}

export default Login