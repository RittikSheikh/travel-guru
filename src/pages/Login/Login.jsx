import React from 'react';
import './Login.css';
import fb from '../../assets/images/images/icons/fb.png';
import google from '../../assets/images/images/icons/google.png';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <>
            <div className='form-container w-full md:w-[570px] mx-auto  my-12'>
                <div className='form-main'>
                    <h1>Login</h1>
                    <form>
                        <input className='input1' type="text" name="nameOrEmail" placeholder='Username or Email' /> <br />
                        <input className='input1' type="password"  name="password" placeholder='Password' /> <br />

                       <div className='flex justify-between mb-12'>
                       <div className="flex items-center space-x-2">
                            <input type="checkbox" id="example1" className="h-4 w-4 rounded me-1 border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                            <label className="text-sm font-medium text-gray-700" style={{fontWeight: '500', color: 'black'}}>Remember Me</label>
                        </div>
                            <Link to='/forgotPassword'><span style={{ color: '#F9A51A', textDecoration: 'underline'}}>Forgot Password</span></Link>
                       </div>

                        <input className=' mb-4 w-full h-12' style={{ backgroundColor: '#F9A51A', fontWeight: '500' }} type="submit" value="Login" />
                    </form>
                    <p className='text-center mb-6'>{`Don't have an account ?`} <Link to='/signup'><span className='text-orange-400 underline'>Create an account</span></Link></p>
                </div>
            </div>

            <div className='flex items-center hr-container md:w-[430px] mx-auto'>
                <hr className='w-3/6' />
                <span className='mx-1'>Or</span>
                <hr className='w-3/6' />
            </div>


            <div className='social-btn mx-auto md:w-[461px] '>
                <button>
                    <img className='w-9 h-9 mr-24' src={fb} alt="" />
                    Continue with Facebook</button>
                <button>
                    <img className='w-9 h-9 mr-24' src={google} alt="" />
                    Continue with Google</button>
            </div>
        </>
    );
};

export default Login;