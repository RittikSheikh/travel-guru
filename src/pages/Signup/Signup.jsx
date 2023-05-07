import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import fb from '../../assets/images/images/icons/fb.png';
import google from '../../assets/images/images/icons/google.png';




const Signup = () => {
    return (
        <>
            <div className='form-container w-full md:w-[570px] mx-auto  my-12'>
                <div className='form-main'>
                    <h1>Create an account</h1>
                    <form>
                        <input className='input1' type="text" name="firstName" id="" placeholder='Frist Name' /> <br />
                        <input className='input1' type="text" name="firstName" id="" placeholder='Last Name' /> <br />
                        <input className='input1' type="text" name="firstName" id="" placeholder='Username of Email' /> <br />
                        <input className='input1' type="text" name="firstName" id="" placeholder='Password' /> <br />
                        <input className='input1' type="text" name="firstName" id="" placeholder='Confirm Password' /> <br />
                        <input className=' mb-4 w-full h-12' style={{ backgroundColor: '#F9A51A', fontWeight: '500' }} type="submit" value="Create an account" />
                    </form>
                    <p className='text-center mb-6'>Already have an account? <Link to='/login'><span className='text-orange-400 underline'>Login</span></Link></p>
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

export default Signup;