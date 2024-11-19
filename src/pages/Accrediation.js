import React from 'react'
import Layout from '../Components/Layout'
import Heading from '../Components/heading'

function Accrediation() {
    const data = [
        {
            id: 1,
            title: "NAAC A++",
            subheading: "Grade",
            color:"text-[#f44336]"
          
        },
        {
            id: 2,
            title: "UGC",
            subheading: "Category 1 Deemed University, since 2018",
             color:"text-[#ffc107]"
        },
    ]
    return (
        <>
            <section>
                <Layout>
                    <div className='pt-28 pb-28'>
                        <div>
                            <Heading heading="Accreditation & Rankings" />
                        </div>
                        <div className='grid grid-cols-2 gap-4 mt-10'>
                            {data.map((each) => {
                                return (
                                    <>
                                        <div className='px-14 py-20 rounded-2xl shadow-xl  hover:shadow-2xl transition duration-300 transform hover:scale-105  text-center'>
                                            <b><h3 className={`${each.color} text-4xl font-["poppins"]`}>{each.title}</h3></b>
                                            <p className='text-[#757575] text-xl'>{each.subheading}</p>
                                        </div>
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

export default Accrediation