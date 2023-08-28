import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Arrow from '../components/assets/images/Arrow.png';
import Lets from './../components/Lets';

const CaseStudy = () => {
    return (
        <>
            <Nav></Nav>

            <section className='section'>

                <div className='md:flex'>

                    <div className='md:w-1/2 pr-4'>
                        <div className='font-sans text-gray-500'>
                            Case Study
                        </div>
                        <div className='my-title text-left text-[40px] font-thin'>
                            Spicyy - ecommerce food store
                        </div>

                        <div className='
                    flex-wrap
                    justify-start
                    flex gap-2 text-xl font-sans'>
                            <button className='my-btn'>UI/UX design</button>
                            <button className='my-btn'>Website from scratch</button>
                            <button className='my-btn'>Branding</button>
                            <button className='my-btn'>Website redesign</button>
                            <button className='my-btn'>App from scratch</button>
                            <button className='my-btn'>App redesign</button>
                            <button className='my-btn'>Not sure yet</button>
                            <button className='my-btn'>Let’s talk first</button>
                            <button className='my-btn'>Maintenance</button>

                        </div>

                    </div>

                    <div className='mt-10 md:w-1/2 md:mt-0'>
                        <div className='font-sans text-gray-500'>
                            About the project
                        </div>
                        <div className='my-title text-left text-[40px] font-thin'>
                            Spicyy is a Local restaurant and also have food delivery services. They can make delicious food and deliver it directly to their customers with a phone call.
                            Now, it’s time to step up. They need a webapp that can enhance the user experience beyond phone calls.

                            <div className='mt-10'>
                                <button className='my-btn flex gap-2'>
                                    Website
                                    <img className='rotate-180 scale-x-150 my-auto ml-2' src={Arrow} alt="" />
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

            <Lets></Lets>

            <Footer></Footer>
        </>
    );
};

export default CaseStudy;