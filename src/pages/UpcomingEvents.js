import React from 'react'
import Layout from '../Components/Layout'
import Heading from '../Components/heading'
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

function UpcomingEvents() {
    const [openModal, setOpenModal] = useState(true);

    const data = [
        {
            id: 1,
            date: "19 th Nov",
            header: "Workshop on ML DL ANN",
            subheader: "Internal Workshop",
            location: "Bengaluru",
        },
        {
            id: 2,
            date: "20 th Nov",
            header: "Orientation for UG I Semester Students",
            subheader: "Internal Workshop",
            location: "Hyderabad",
        },
        {
            id: 3,
            date: "20 th Nov",
            header: "Session on US Visa Guidelines with Delegates from US Consulate General Hyderabad",
            subheader: "Internal Workshop",
            location: "Visakhapatnam",
        },
    ];
    return (
        <>
            <section>
                <Layout>
                    <div className='pt-16 pb-16'>
                        <div>
                            <Heading heading="Upcoming Events" />
                        </div>

                        <div className='grid grid-cols-3 gap-4 mt-8'>
                            {data.map((each) => {
                                return (
                                    <>
                                        <div className='col-span-1 relative'>
                                            <div className='  px-4 py-4  border-[#004740] border-b-2 border-r-2 rounded-xl bg-[#fff] absolute -left-1'>
                                                <span className='text-[#004740]'>{each.date}</span>
                                            </div>
                                            <div className='h-full bg-[#D1EAE2] rounded-3xl  border border-[#004740] p-8'>
                                                <h4 className='mt-10 text-2xl text-[#004740]'><b>{each.header}</b></h4>
                                                <p className=' text-lg text-[#004740]'>{each.subheader}</p>
                                                <div className='mt-10 text-[#004740]'><i class="fa-sharp fa-solid fa-location-dot" style={{ color: "#004740" }}></i>{each.location}</div>

                                                <button className="bg-transparent text-[#004740]" onClick={() => setOpenModal(true)}>View details</button>
                                                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                                                    <Modal.Header>Terms of Service</Modal.Header>
                                                    <Modal.Body>
                                                        <div className="space-y-6">
                                                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                                                                companies around the world are updating their terms of service agreements to comply.
                                                            </p>
                                                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant
                                                                to ensure a common set of data rights in the European Union. It requires organizations to notify users as
                                                                soon as possible of high-risk data breaches that could personally affect them.
                                                            </p>
                                                        </div>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button onClick={() => setOpenModal(false)}>I accept</Button>
                                                        <Button color="gray" onClick={() => setOpenModal(false)}>
                                                            Decline
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </div>
                                            <div className=' px-4 py-4 rounded-xl border-[#004740] border-t-2 border-l-2 bg-[#fff] absolute -bottom-1 -right-1'>
                                                <a>Register Here <i class="fa-regular fa-arrow-up-right" style={{ color: "#004740" }}></i></a>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                        <div >
                            <a className="bg-transparent" href="#">View More<i class="fa-regular fa-arrow-up-right" style={{ color: "#004740" }}></i></a>
                        </div>
                    </div>
                </Layout>
            </section>
        </>
    )
}

export default UpcomingEvents