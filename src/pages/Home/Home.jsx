import React from 'react';
import './Home.css';
import img1 from '../../assets/images/images/cardImages/sundorbon.png';
import img2 from '../../assets/images/images/cardImages/Sajek.png';
import img3 from '../../assets/images/images/cardImages/Sreemongol.png';


const Home = () => {
	return (
		<div className='grid md:grid-cols-3'>
			<div className='col-span-1'>
				<h1>Welcome to cox's bazar</h1>
			</div>



			{/* Carousel */}

			<div className='col-span-2'>
				<h2>welcome to carousel</h2>
				<div className="relative flex items-center justify-center w-full dark:text-gray-50">
					<div className="flex items-center  justify-start gap-6 py-4 mx-auto overflow-auto lg:gap-8">
						<div className="relative flex flex-shrink-0 w-full h-full sm:w-auto">
							<img className="object-cover object-center hover:border-4 rounded-3xl w-full border-amber-700  
							md:w-[270px] md:h-[416px]  aspect-square dark:bg-gray-500" src={img1} alt="Image 1" />
						</div>
						<div className="relative flex flex-shrink-0 w-full sm:w-auto">
							<img className="object-cover hover:border-4 rounded-3xl border-amber-700  object-center  md:w-[270px] md:h-[416px] w-full aspect-square dark:bg-gray-500" src={img2} alt="Image 2" />
						</div>
						<div className="relative flex flex-shrink-0 w-full sm:w-auto">
							<img className="object-cover object-center hover:border-4 rounded-3xl border-amber-700  
							md:w-[270px] md:h-[416px]  w-full aspect-square dark:bg-gray-500" src={img3} alt="Image 3" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;