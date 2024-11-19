import React from 'react'
import Layout from '../Components/Layout'
import Heading from '../Components/heading'

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import Slider from "react-slick";

import card_in1 from "../Assets/card_in1.webp"
import card_out1 from "../Assets/card_out1.webp"
import card_in2 from "../Assets/card_in2.webp"
import card_out2 from "../Assets/card_out2.webp"
import card_out3 from "../Assets/card_out3.webp"
import card_out4 from "../Assets/card_out4.webp"


function HumanGitam() {

    const [openModal, setOpenModal] = useState(false);

    const settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        pauseOnHover: true,
        autoplay: true,
    };

    const data = [
        {
            id: 1,
            img1: card_out1,
            img2: card_in1,
        },
        {
            id: 2,
            img1: card_out2,
            img2: card_in2,
        },
        {
            id: 3,
            img1: card_out3,
            // img2: "",
        },
        {
            id: 4,
            img1: card_out4,
            // img2: "",
        },
    ];

    return (
        <>
            <section className='bg-[#F4E4C9]'>
                <Layout>
                    <div className='pt-8 pb-24'>

                        <Heading heading="Humans of GITAM" />
                        <div className='flex flex-row gap-4'>
                        {
                            data.map((each,index) => {
                                return (
                                    <>
                                    
                                     
                                        {each.img2 !== undefined  ?      
                                             <div className=' mt-8 w-80 mr-3 '>
                                                <div>
                                                    <img src={each.img1} alt="student_1" className="rounded-2xl" onClick={() => setOpenModal(true)} />
                                                    <Modal show={openModal} onClose={() => setOpenModal(false)}>
                                                        <Modal.Header></Modal.Header>
                                                        <Modal.Body>
                                                            <div className="slider-container">
                                                                <Slider {...settings}>
                                                                    <div className="space-y-6">
                                                                        <img src={each.img2} alt=" student_1" />
                                                                    </div>
                                                                    <div className="space-y-6">
                                                                        <img src={each.img1} alt=" student_1" />
                                                                    </div>
                                                                </Slider>
                                                            </div>
                                                        </Modal.Body>
                                                    </Modal>
                                                </div>
                                            </div> :  
                                                    <div className=' mt-8 w-80 mr-3 ' >
                                                    <img src={each.img1} alt="student_1" className="rounded-2xl" onClick={() => setOpenModal(true)} />
                                                    <Modal show={openModal} onClose={() => setOpenModal(false)}>
                                                        <Modal.Header></Modal.Header>
                                                        <Modal.Body>
                                                            <div className="slider-container">
                                                                <Slider {...settings}>
                                                                    <div className="space-y-6">
                                                                        <img src={each.img1} alt=" student_1" />
                                                                    </div>
                                                                </Slider>
                                                            </div>
                                                        </Modal.Body>
                                                    </Modal>
                                                </div>
                                                }
                                           


                                        
                                    </>
                                )
                            })
                        }

                        </div>
                       
                        {/* <div className=' mt-8 w-80 mr-3 '>
                            <img src={card_out1} alt="student_1" className="rounded-2xl" onClick={() => setOpenModal(true)} />
                            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                                <Modal.Header></Modal.Header>
                                <Modal.Body>
                                    <div className="slider-container">
                                        <Slider {...settings}>
                                            <div className="space-y-6">
                                                <img src={card_in1} alt=" student_1" />
                                            </div>
                                            <div className="space-y-6">
                                                <img src={card_out1} alt=" student_1" />
                                            </div>
                                        </Slider>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={() => setOpenModal(false)}>I accept</Button>
                                    <Button color="gray" onClick={() => setOpenModal(false)}>
                                        Decline
                                    </Button>
                                </Modal.Footer> 
                            </Modal>
                        </div> */}
                    </div>
                </Layout>
            </section>
        </>
    )
}

export default HumanGitam