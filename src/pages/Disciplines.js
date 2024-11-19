import React from 'react'
import Layout from '../Components/Layout'
import Heading from '../Components/heading'
import { Card } from "flowbite-react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import publicpolicyimage from "../Assets/public_policy_small.png.webp"
import architect from "../Assets/Architecture.png.webp"
import engineering from "../Assets/Engineering.png.webp"
import humanity from "../Assets/Humanities.png.webp"
import law from "../Assets/Law.png.webp"
import management from "../Assets/Management.png.webp"
import science from "../Assets/Science.png.webp"
import pharmacy from "../Assets/Pharmacy.png.webp"
import medicine from "../Assets/Medicine_0.png.webp"
import nursing from "../Assets/Nursing.png.webp"
import paramedical from "../Assets/Paramedical.png.webp"
import physiotherapy from "../Assets/Physiotheraphy.png.webp"

function Disciplines() {
    const info = [
        {
            id: 10,
            title: " ",
            heading: "Public policy",
            img: publicpolicyimage,
        },
        {
            id: 2,
            title: "3 programmes ",
            heading: "Architecture",
            img: architect,
        },
        {
            id: 3,
            title: "58 programmes ",
            heading: "Engineering",
            img: engineering,
        },
        {
            id: 4,
            title: "45 programmes ",
            heading: "Humanities & social sciences",
            img: humanity,
        },
        {
            id: 5,
            title: "6 programmes ",
            heading: "Law",
            img: law,
        },
        {
            id: 6,
            title: "32 programmes ",
            heading: "Management",
            img: management,
        },
        {
            id: 7,
            title: "62 programmes ",
            heading: "Science",
            img: science,
        },
        {
            id: 8,
            title: "19 programmes ",
            heading: "Pharmacy",
            img: pharmacy,
        },
        {
            id: 9,
            title: "15 programmes ",
            heading: "Medicines",
            img: medicine,
        },
        {
            id: 1,
            title: "2 programmes ",
            heading: "Nursing",
            img: nursing,
        },
        {
            id: 11,
            title: "6 programmes ",
            heading: "Paramedical",
            img: paramedical,
        },
        {
            id: 12,
            title: "1 programmes ",
            heading: "Physiotherapy",
            img: physiotherapy,
        },
    ]
    // const
    return (
        <>
            <section>
                <Layout>
                    <div className='pt-24 pb-24 px-4'>
                        <div>
                            <Heading title="12 Disciplines." heading="Infinite Possibilities" />
                        </div>
                        <div className='mt-10 '>
                            <>
                                <Swiper watchSlidesProgress={true} slidesPerView={6} autoplay={true} speed={2000} className="mySwiper">

                                    {
                                        info.map((each, index) => {
                                            return (
                                                <>
                                                    <SwiperSlide className='h-auto flex-shrink!'>
                                                        <Card key={index}
                                                            className="w-48 h-72 rounded-lg  bg-gradient-to-b from-transparent to-[#007367] mx-0"
                                                            id="background-image-cards"
                                                            imgAlt="Meaningful alt text for an image that is not purely decorative"
                                                            style={{ backgroundImage: `url(${each.img})` }}
                                                        // imgSrc={each.img}
                                                        >
                                                            <div className='  fronflex flex-col justify-end mt-48'>
                                                                <p className=" text-sm font-normal text-white">
                                                                    {each.title}
                                                                </p>
                                                                <h3 className="text-xl font-bold tracking-tight text-white">
                                                                    {each.heading}
                                                                </h3>
                                                            </div>
                                                            {/* <img src={each.img} className='h-auto' alt="12discipline_images"/>
                                                            <p className=" text-sm font-normal dark:text-white">
                                                                {each.title}
                                                            </p>
                                                            <h3 className="text-xl font-bold tracking-tight dark:text-white">
                                                                {each.heading}
                                                            </h3> */}
                                                        </Card>
                                                        {/* <div className='hiden-div rounded-lg p-2 bg-white'>
                                                            <h6 className='text-[#007367] text-center'>{each.title}</h6>
                                                            
                                                        </div> */}
                                                        <div className='w-48 h-72 absolute bg-[#007367] opacity-5 group-hooover:top-full ease-in'> {each.title}</div>
                                                    </SwiperSlide >
                                                </>
                                            )
                                        })
                                    }



                                </Swiper>
                            </>
                        </div>
                    </div>
                </Layout >
            </section >
        </>
    )
}

export default Disciplines