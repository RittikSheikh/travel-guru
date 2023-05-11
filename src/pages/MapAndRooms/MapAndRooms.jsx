import React from 'react';
import { FaStar } from "react-icons/fa";
import cardImg from '../../assets/images/images/cardImages/Rectangle 1.png'

const MapAndRooms = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-12'>
           <div>
            <h1>welcome to coxs bazar. Here is your hotels</h1>
                    <div className="card-container md:flex items-center p-1 bg-blue-gray-50">
                        <img className='md:w-[270px] md:h-[188px] md:mr-[31px] rounded' src={cardImg} alt="" />
                        <div className="card-details">
                            <h3 className='mb-[13px] mt-2 md:mt-0 font-medium text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quam, eum non perspiciatis iusto provident?</h3>
                            <p className='mb-3'>4 guests &nbsp; 2 bedrooms &nbsp; 2 beds &nbsp; 2 baths</p>
                            <p className='mb-3'>wifi air conditioning kitchen</p>
                            <p className='mb-[15px]'>cancelation flexibility available</p>
                            <p className='flex'><span className='mr-[20px] flex justify-items-center  text-sm font-semibold'><FaStar className='inline text-[#FFAF38]' />{4.9} {`(20)`}</span> <span className='mr-4'><span className='font-semibold'>$34/</span><span/><span className='font-thin'>night</span> </span> <span className='text-sm'>$167 total</span></p>
                        </div>
                    </div>
           </div>
           <div>
           <iframe className='w-full rounded-xl h-[450px] md:h-[702px]' src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1885708.2837089389!2d90.1325069706893!3d22.61557925585376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sdhaka!3m2!1d23.810332!2d90.4125181!4m5!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2scox&#39;s%20bazar!3m2!1d21.4272283!2d92.0058074!5e0!3m2!1sen!2sbd!4v1683584129966!5m2!1sen!2sbd" style={{border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           </div>
        </div>
    );
};

export default MapAndRooms;