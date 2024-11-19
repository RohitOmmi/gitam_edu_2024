import React from 'react'
import Layout from '../Components/Layout'
import Heading from '../Components/heading'

function GitamGlance() {
    const data= [
        {
            id:1,
            label:"26K+",
            tagline:"Active Students",
            color:"text-[#ffc107]",
        },
        {
            id:2,
            label:"85K+",
            tagline:"Alumni across 105 countries",
            color:"text-[#4caf50]",
        },
        {
            id:3,
            label:"1800+",
            tagline:"Teaching staff",
            color:"text-[#f44336]",
            
        },
        {
            id:4,
            label:"95% +",
            tagline:"Faculty with phDs in most disciplines",
            color:"text-[#ffc107]",
        },
        {
            id:5,
            label:"18K+",
            tagline:"Publications",
            color:"text-[#4caf50]",
        },
        {
            id:6,
            label:"82",
            tagline:"H-Index",
            color:"text-[#f44336]",
        },
        {
            id:7,
            label:"300+",
            tagline:"Research Projects",
            color:"text-[#ffc107]",
        },
        {
            id:8,
            label:"300+",
            tagline:"Patents",
            color:"text-[#4caf50]",
        },
        
    ]
  return (
    <>
    <section>
        <Layout>
            <div className='pt-32 pb-32'>
                <div>
                    <Heading heading="GITAM at a Glance"/>
                </div>
                <div className='grid grid-cols-4 gap-8 mt-10'>
                    {
                        data.map((each)=>{
                            return(
                                <>
                                <div className={`px-8 py-16 text-center rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105  ${each.color}`}>
                                    <b className='text-6xl'>
                                        <h3>
                                            {each.label}
                                        </h3>
                                    </b>
                                    <p className='text-md text-[#757575]'>{each.tagline}</p>
                                </div>
                                </>
                            )
                        })
                    }

                </div>

            </div>
        </Layout>
    </section>
    </>
  )
}

export default GitamGlance