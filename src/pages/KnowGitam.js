import React from 'react'
import Heading from "../Components/heading"
import Layout from '../Components/Layout'
import knowmore from '../Assets/know-gitam.jpg'
import { Tabs } from "flowbite-react";

function KnowGitam() {
    return (

        <>
            <section>
                <Layout>
                    <div className='  grid grid-cols-2  gap-16  pt-32 pb-32'>
                        <div className=' '>
                            <Heading heading="Know GITAM" />
                            <div>
                                <p>
                                    Founded in 1980, GITAM Deemed to be University stands at the intersection of
                                    multidisciplinary applied education and translational research. With 12 schools
                                    across Bengaluru, Hyderabad, and Visakhapatnam, GITAM empowers students to
                                    discover their ikigai through global perspectives, industry collaborations,
                                    and holistic development. Guided by integrity and the pursuit of knowledge
                                    and moral values, GITAM shapes future-ready citizens who drive entrepreneurship,
                                    innovation, and create meaningful societal impact.<br />
                                    Committed to excellence, GITAM fosters diligence, innovation, entrepreneurship,
                                    collaboration, and community service.
                                </p>
                            </div>
                            <div>
                                <Tabs aria-label="Tabs with underline" variant="underline">
                                    <Tabs.Item  className='!text-[#007367] active:ring-white active:outline-none focus:outline-none focus:ring-white'    active title="Vision" >
                                       
                                        <p>GITAM will be an exceptional knowledge-driven institution advancing on a culture of honesty and compassion to make a difference to the world.</p>
                                        <a href='#' className='px-6 py-4 bg-transparent text-[#007367]'>Know More<i class="fa-light fa-arrow-up-right fa-rotate-by " style={{color: "#007367",}} ></i></a>
                                    </Tabs.Item>
                                    <Tabs.Item   className='!text-[#007367]'  title="Mission" >
                                     
                                      <ul style={{listStyleType:"disc"}}>
                                        <li>
                                        Build a dynamic application-oriented education ecosystem immersed in holistic development.
                                        </li>
                                        <li>
                                        Drive impactful integrated research programmes to generate new knowledge guided by integrity, collaboration, and entrepreneurial spirit.
                                        </li>
                                        <li>
                                        Nurture valuable futures with global perspectives for our students by helping them find their ikigai.
                                        </li>
                                        <li>
                                        Permeate a culture of kindness within GITAM, fostering passionate contributors.
                                        </li>
                                      </ul>

                                      <a href='#' className='px-6 py-4 bg-transparent text-[#007367]'>Know More<i class="fa-light fa-arrow-up-right fa-rotate-by " style={{color: "#007367",}} ></i></a>
                                    </Tabs.Item>
                                    
                                </Tabs>
                            </div>

                        </div>
                        <div className="relative inline-block ">

                            <img
                                src={knowmore}
                                alt="Students"
                                className="w-full h-auto rounded-xl"
                            />
                            <div className='bg-white px-6 py-4 rounded-xl absolute -top-2 -right-4'>
                                <div className=" px-4 py-2  bg-teal-600 text-white p-3 rounded-lg shadow-lg flex flex-col items-center">
                                    <span className="text-2xl font-bold">12</span>
                                    <span className="text-xs font-medium">SCHOOLS</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </Layout>
            </section>
        </>


    )

}
export default KnowGitam
