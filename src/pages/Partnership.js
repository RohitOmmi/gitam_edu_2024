import React from 'react'
import Layout from '../Components/Layout'
import Heading from '../Components/heading'

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


import Slider from "react-slick";


import p1 from "../Assets/elon.png"
import p2 from "../Assets/saint-petersberg-university.jpg"
import p3 from "../Assets/iqs.jpg"
import p4 from "../Assets/unitar.png"
import p5 from "../Assets/melbourne.png"
import p6 from "../Assets/nottingham.png"
import p7 from "../Assets/aston.png"

import p21 from "../Assets/p21.jpg"
import p22 from "../Assets/p22.png"
import p23 from "../Assets/p23.png"
import p24 from "../Assets/p24.jpg"
import p25 from "../Assets/p25.jpg"
import p26 from "../Assets/p26.jpg"
import p27 from "../Assets/p27.png"
import p28 from "../Assets/p28.jpg"

function Partnership() {

    const data1 = [
        {
            id: 1,
            image: p21,
        },
        {
            id: 2,
            image: p22,
        },
        {
            id: 3,
            image: p23,
        },
        {
            id: 4,
            image: p24,
        },
        {
            id: 5,
            image: p26,
        },
        {
            id: 6,
            image: p27,
        },
        {
            id: 7,
            image: p28,
        },
        {
            id: 8,
            image: p25,
        },

    ];

    const info = [
        {
            id: 1,
            para: "I had a privilege in doing my masters degree at Gitam University, Vishakapatnam. The University taught me a lot, not just the theoretical knowledge but also the practicality of the subject.",
            author: "Shruthi Dantuluri"
        },
        {
            id: 2,
            para: "My fellow students are so friendly and the teachers are all very professional. It is a beautiful place here, including people, campus and the city. I am glad that I found it.",
            author: "Hsu, ChiaHao, M.Tech(CST), Taiwan",
        },
        {
            id: 3,
            para: "To me GITAM is a hub of love and a torch of guidance and knowledge. From its teachers to students and to climate of the place, everything is fascinating.",
            author: "Hsu, ChiaHao, M.Tech(CST), Taiwan",
        },
        {
            id: 4,
            para: "Gitam is one of those universities where opportunities are plentiful. During my 2 years at the University, I had multiple opportunities to interact with industrial stalwarts and host multiple events.",
            author: "YaldaWaghazi, MA(English), Afghanistan",
        },
        {
            id: 5,
            para: "Gitam is one of those universities where opportunities are plentiful. During my 2 years at the University, I had multiple opportunities to interact with industrial stalwarts and host multiple events.",
            author: "Neeharika Duvvuri",
        },
    ];


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: "linear"
    };
    //  right to left

    const settings1 = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        rtl: true,
        cssEase: "linear",
        pauseOnHover: true,
    };
    const settings2 = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: "linear"
    };
    return (
        <>
            <section>
                <Layout>
                    <div className=' pb-32'>
                        <div>
                            <Heading heading="Prestigious Partnerships." heading1="Global Exposure" />
                        </div>
                        <div className="slider-container mt-10">
                            <Slider {...settings}>
                                <div className='pt-8'>
                                    <img src={p1} alt="partnership_img" />
                                </div>
                                <div>
                                    <img src={p2} alt="partnership_img" />
                                </div>
                                <div>
                                    <img src={p3} alt="partnership_img" />
                                </div>
                                <div>
                                    <img src={p4} alt="partnership_img" />
                                </div>
                                <div>
                                    <img src={p5} alt="partnership_img" />
                                </div>
                                <div>
                                    <img src={p6} alt="partnership_img" />
                                </div>
                                <div>
                                    <img src={p7} alt="partnership_img" />
                                </div>
                            </Slider>
                        </div>
                        <Slider {...settings1}>
                            {
                                data1.map((each) => {
                                    return (
                                        <>
                                            <div className="slider-container mt-10">

                                                <div>
                                                    <img src={each.image} className="w-full" alt="partnership_imgs" />
                                                </div>
                                                {/* <div>
                                                    <h3>2</h3>
                                                </div>
                                                <div>
                                                    <h3>3</h3>
                                                </div>
                                                <div>
                                                    <h3>4</h3>
                                                </div>
                                                <div>
                                                    <h3>5</h3>
                                                </div>
                                                <div>
                                                    <h3>6</h3>
                                                </div> */}

                                            </div>
                                        </>
                                    )
                                })
                            }
                        </Slider>

                        {/* what our students say */}
                        <div>
                            <Heading heading=" what our students say..." />
                            <div className='mt-10'>
                                <Slider {...settings2}>

                                    {info.map((e) => {
                                        return (
                                            <>
                                            <div className=' my-2 h-full w-80 gap-4'>
                                            <div className='  px-8 py-8 rounded-2xl bg-[#8bcbb726]'>
                                                        <p className=' mt-3 text-lg text-[#004763]'>
                                                            {e.para}
                                                        </p>
                                                        <b><h5 className='text-lg text-[#004763]' >{e.author}</h5></b>
                                                    </div>
                                            </div>
                                                    
                                            </>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </Layout>
            </section>
        </>
    )
}

export default Partnership




