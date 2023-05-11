import React from 'react';
import './Destination.css';



const Destination = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-3 lg:gap-[195px]'>
          <div>
            <h1>welcome to your booking page</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, corporis. Totam consectetur provident excepturi perferendis aut assumenda dignissimos, sed sunt. Laborum, esse iure dicta eum laudantium dolores quibusdam iusto repudiandae dolorem doloremque provident quis? Molestias vero quia esse adipisci sint ipsam? Minus vitae, mollitia dolores incidunt ea at earum, id aut, delectus aspernatur corrupti ducimus nulla. Placeat explicabo fugiat recusandae voluptate unde, aspernatur cupiditate eius! Ad animi odio, incidunt sunt cumque a provident, expedita perspiciatis maxime, ducimus laboriosam quod veritatis! Laborum, consequuntur eos voluptates molestiae corporis numquam harum facere architecto dignissimos modi. Magni qui tenetur quod necessitatibus, adipisci quis! Maxime!</p>
          </div>
          <div className='md:w-[470px] md:mx-auto lg:mx-0 rounded destination-form p-6'>
            <form>
                <label htmlFor="Origin">Origin</label> <br />
                <input type="text" className='w-full rounded h-[60px] ps-[20px] mb-[13px] font-bold text-black focus:outline-none' name="from" placeholder='Dhaka' /> <br />
                <label htmlFor="Destination">Destination</label> <br />
                <input type="text" className='w-full rounded h-[60px] mb-[13px] ps-[20px] font-bold text-black focus:outline-none' name="destination" placeholder='Cox Bazar' />
                <div className='flex'>
                      <div className='mr-[17px]'>
                      <label htmlFor="start">From</label><br />
                      <input type="date" className='md:w-[200px] md:h-[60px] rounded' name="startDate" />
                      </div>
                      <div>
                      <label htmlFor="to">To</label><br />
                      <input type="date"className='md:w-[200px] md:h-[60px] rounded' name="travelDate" />
                      </div>
                </div>
                <input className='md:py-[20px] md:px-[152px] w-full p-4 my-[20px] submit-btn' type="submit" value="Start Booking" />
            </form>
          </div>
    </div>
  );
};

export default Destination;