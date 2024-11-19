import React from 'react'
import Layout from './Layout'
import G_logo from "../Assets/gitam-logo.svg"

import yt from "../Assets/footer-yt.svg"
import fb from "../Assets/footer-fb.svg"
import insta from "../Assets/footer-insta.svg"
import x from "../Assets/footer-x.svg"
import ln from  "../Assets/footer-in.svg"

function Footer() {
    return (
        <>
            <section className='bg-[#007367]'>
                <Layout>
                    <div className='pt-16 pb-16'>
                        <div>
                            <img src={G_logo} className="image-fluid" alt="Gitam_logo" />
                            <div>
                                <h3 className='text-[poppins] text-white text-xl  mt-4'>Nurturing Valuable Futures</h3>
                            </div>
                            <div className='grid grid-cols-5 text-white'>
                                <div className=' cols-span-1 p-10 mr-4'>
                                    <h4><b>Important Links</b></h4>
                                    <ul className='list-none'>
                                        <li>Accreditations</li>
                                        <li>NIRF</li>
                                        <li>IQAC</li>
                                        <li>Sustainble Development</li>
                                    </ul>
                                </div>
                                <div className='cols-span-1 p-10 mr-4'>
                                    <h4><b>Admissions</b></h4>
                                    <ul className='list-none'>
                                        <li>Programme levels</li>
                                        <li>Scholarships</li>
                                        <li>Fee structure</li>
                                        <li>Apply</li>
                                    </ul>
                                </div>
                                <div className='cols-span-1 p-10 mr-4'>
                                    <h4><b>Academics</b></h4>
                                    <ul className='list-none'>
                                        <li>Centre of Excellence</li>
                                        <li>Faculty</li>
                                        <li>Campus Connect</li>
                                        <li>Leadership</li>
                                        <li>Events</li>
                                    </ul>
                                </div>
                                <div className='cols-span-1 p-10 mr-4'>
                                    <h4><b>Research</b></h4>
                                    <ul className='list-none'>
                                        <li>About Research</li>
                                        <li>Research Initiatives</li>
                                        <li>Research Strategy</li>
                                        <li>Research Project</li>
                                    </ul>
                                </div>
                                <div className='cols-span-1 p-10 mr-4'>
                                    <h4><b>Policies</b></h4>
                                    <ul className='list-none'>
                                        <li>Cookie Policy</li>
                                        <li>Privacy policy</li>
                                        <li>Cancellation Policy</li>

                                    </ul>
                                </div>
                            </div>
                            <div className='grid grid-cols-5 text-white'>
                                <div className=' cols-span-1 p-10 mr-4'>
                                    <h4><b>Feedback/Other Links</b></h4>
                                    <ul className='list-none'>
                                        <li>Anti Caste Based Discrimination Policy</li>
                                        <li>Women Empowerment Cell</li>
                                     
                                    </ul>
                                </div>
                                <div className='cols-span-1 p-10 mr-4'>
                                    <h4><b> </b></h4>
                                    <ul className='list-none'>
                                        <li>Grievance Redressal</li>
                                    </ul>
                                </div>
                                <div className='cols-span-1 p-10 mr-4'>
                                    <h4><b>  </b></h4>
                                    <ul className='list-none'>
                                        <li>University Holidays-2024</li>
                                        
                                    </ul>
                                </div>
                                <div className='cols-span-1 p-10 mr-4'>
                                    <h4><b> </b></h4>
                                    <ul className='list-none'>
                                        <li>Mandatory Disclosure</li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div>
                            <div className='grid grid-cols-5 text-white'>
                                <div className=' cols-span-1 p-10 mr-4'>
                                    <h4><b>Campus Details</b></h4>
                                    <ul className='list-none'>
                                        <li>Bengaluru Campus</li>
                                       
                                    </ul>
                                </div>
                                <div className='cols-span-1 p-10 mr-4'>
                                    <h4><b> </b></h4>
                                    <ul className='list-none'>
                                        <li></li>
                                        
                                        <li>Hyderabad Campus</li>
                                    </ul>
                                </div>
                                <div className='cols-span-1 p-10 mr-4'>
                                    <h4><b></b></h4>
                                    <ul className='list-none'>
                                        <li>Visakhapatnam Campus</li>
                                        
                                    </ul>
                                </div>
                                <div className='cols-span-1 p-10 mr-4'>
                                    <h4><b></b></h4>
                                    <ul className='list-none'>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li>GIMSR Campus</li>
                                    </ul>
                                </div>
                                <div className='cols-span-1 p-10 mr-4'>
                                    <h4><b>Connect with us</b></h4>
                                    <ul className='list-none flex flex-row'>
                                        <li  className='mr-2'><img src={yt} alt="Social_logo"/></li>
                                        <li className='mr-2'><img src={fb} alt="Social_logo"/></li>
                                        <li className='mr-2'><img src={insta} alt="Social_logo"/></li>
                                        <li className='mr-2'><img src={x} alt="Social_logo"/></li>
                                        <li className='mr-2'><img src={ln} alt="Social_logo"/></li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                </Layout>
            </section>
            <section className='bg-[#004740]'>
                <Layout>
                    <div className='flex flex-row justify-center py-4'>
                        <span className='text-white'><i class="fa-sharp-duotone fa-regular fa-copyright" style={{color:"#ffffff"}}></i> 2024 Copyrights. All rights reserved</span>
                    </div>
                </Layout>
            </section>
        </>
    )
}

export default Footer