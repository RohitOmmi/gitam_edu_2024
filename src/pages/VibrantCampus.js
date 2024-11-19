import React from 'react'
import Layout from '../Components/Layout'
import Heading from '../Components/heading'
import { Card } from "flowbite-react";
import bengaluru from "../Assets/bengaluru.png.webp"
import hyderabad from "../Assets/hyderabad.png"
import visakhapatnam from "../Assets/Visakhapatnam.png"
import gimsr from "../Assets/Gimsr.png"

function VibrantCampus() {
    const detailed = [
        {
            id: 1,
            image: bengaluru,
            title: "Bengaluru",
            subtitle: "A 40+ acre campus with a diverse industry ecosystem offers a dynamic and holistic learning environment.",

        },
        {
            id: 2,
            image: hyderabad,
            title: "Hyderabad",
            subtitle: "A 40+ acre campus with a diverse industry ecosystem offers a dynamic and holistic learning environment.",

        },
        {
            id: 3,
            image: visakhapatnam,
            title: "Visakhapatnam",
            subtitle: "A 40+ acre campus with a diverse industry ecosystem offers a dynamic and holistic learning environment.",

        },
        {
            id: 4,
            image: gimsr,
            title: "GIMSR",
            subtitle: "A 40+ acre campus with a diverse industry ecosystem offers a dynamic and holistic learning environment.",

        },
    ]

    return (
        <>
            <section>
                <Layout>
                    <div className='pt-32 pb-32 '>
                        <div>
                            <Heading title="" heading="4 vibrant campuses,
                            each with its own special character " />
                        </div>
                        <div className='  mt-10 grid grid-cols-4 gap-8'>
                            {detailed.map((each) => {
                                return (
                                    <>
                                        <Card className="w-72 h-96  rounded-2xl  flex-col !justify-end p-0" style={{ backgroundImage: `url(${each.image})`,}}>
                                            <div className='  px-4 py-4 flex-col !justify-end rounded-2xl bg-[#007367]  hover:shadow-lg transition duration-300 hover:scale-105'>
                                                <h3 className='text-2xl  text-white '>{each.title}</h3>
                                                <p className=' text-white'>{each.subtitle}</p>
                                                <button className='bg-transparent text-white text-xl hover:text-[#a58255] transition duration-300'>
                                                    Know More
                                                    <i class="fa-light fa-arrow-up-right" style={{color:"#ffffff"}}></i>
                                                </button>
                                            </div>
                                        </Card>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </Layout>
            </section>
        </>
    )
}

export default VibrantCampus