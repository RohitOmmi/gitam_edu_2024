import React from 'react'
import Layout from '../Components/Layout'
import { Dropdown } from "flowbite-react";

function RightPrograme() {
    const info =[
        { 
            id:1,
            label:"Banglore",
            departments:["Management", "Humanity & Social Sciences", "Engineering","Science"],
        },
        { 
            id:2, 
            label:"Hyderabad",
            departments: [" Architecture", "Management", "Humanity& Social Science","Science","Pharmacy","Engineering"],
        },
        {
            id:3,
            label:"Visakhapatnam",
            departments: [" Architecture", "Management", "Humanity& Social Science","Law","Science","Pharmacy","Engineering"],
        },
        {
            id:4,
            label:"GIMSR",
            departments:["Nursing","Medicine","Paramedical","Physiotherapy"],
        },
    ];
    return (
        <>
            <section className='bg-[#007367]'>
                <Layout>
                    <div className='pt-12 pb-12 px-4'>
                        <div className=' text-left  text-[#ffff] text-4xl font-["poppins"]'>
                            <h3 className=' text-left text-[#ffff] text-4xl font-["poppins"]'>

                                <br />
                                <b className=' text-left text-[#ffff] text-4xl font-["poppins"] '>
                                    Find the right programme for you
                                </b>
                            </h3>
                        </div>
                        <div className=' mt-10 flex flex-row justify-evenly text-white gap-32'>
                            <Dropdown label="Select Campus" inline className='border-b-[2px]'>
                                {
                                    info.map((each,index)=>{
                                        return(
                                            <>
                                           <Dropdown.Item>{each.label}</Dropdown.Item>
                                            </>
                                        );   
                                        
                                    })
                                }

                                {/* <Dropdown.Item>Select Campus</Dropdown.Item>
                                <Dropdown.Item>Bengaluru</Dropdown.Item>
                                <Dropdown.Item>Hyderabad</Dropdown.Item>
                                <Dropdown.Item>Visakhapatnam</Dropdown.Item>
                                <Dropdown.Item>GIMSR</Dropdown.Item> */}
                            </Dropdown>
                            <Dropdown label="Select Discipline *" inline>
                            <Dropdown.Item>Architecture</Dropdown.Item>
                                <Dropdown.Item>Engineering</Dropdown.Item>
                                <Dropdown.Item>Pharmacy</Dropdown.Item> 
                                <Dropdown.Item>Science</Dropdown.Item>
                                <Dropdown.Item>Law</Dropdown.Item>
                                <Dropdown.Item>Management</Dropdown.Item> 

                                
                            </Dropdown>
                            <Dropdown label="Select Levels" inline className=''>
                                {/* <Dropdown.Item>Dashboard</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>Earnings</Dropdown.Item>
                                <Dropdown.Item>Sign out</Dropdown.Item> */}
                            </Dropdown>
                        </div>
                        <button className='px-4 py-2 text-[#007367] text-xl bg-[#fff] mt-4'>Find programme</button>
                    </div>
                </Layout>
            </section>
        </>
    )
}

export default RightPrograme