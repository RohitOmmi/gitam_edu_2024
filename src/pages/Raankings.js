import React from 'react'
import Layout from '../Components/Layout'
import Heading from '../Components/heading'
function Raankings() {
    const data=[
        {
            id:1,
            title:"37th",
            subtitle:"Law"
        },
        {
            id:2,
            title:"39th",
            subtitle:"Architecture"
        },
        {
            id:3,
            title:"48th",
            subtitle:"Pharmacy"
        },
        {
            id:4,
            title:"101-150",
            subtitle:"Engineering"
        },
        {
            id:5,
            title:"151-200",
            subtitle:"Overall"
        },
    ];
    const data1 = [
        { 
            id:1,
            title:"751-800",
            subtitle:"Asia Rank Band",
        },
        { 
            id:2,
            title:"240th",
            subtitle:"Southern Asia University Ranking",
        },
        { 
            id:3,
            title:"125th",
            subtitle:"India University Ranking",
        },
    ];
    const data2 = [
        { 
            id:1,
            title:"1501+",
            subtitle:"World University  Ranking",
        },
        { 
            id:2,
            title:"601+",
            subtitle:"Asia Ranking",
        },
        { 
            id:3,
            title:"601+",
            subtitle:"Young University Ranking",
        },
        { 
            id:4,
            title:"#Top200",
            subtitle:"Climate Action",
        },
        { 
            id:5,
            title:"#Top300",
            subtitle:"Affordable Energy",
        },
    ];

  return (
    <>
    <section>
        <Layout>
            <div>
                <div>
                  <Heading heading="NIRF Rankings 2024"/>
                  <div className='mt-10 grid grid-cols-5 gap-8'>
                    {data.map((each)=>{
                        return(
                            <>
                            <div className='px-14 py-12 text-center  rounded-xl border border-[#4caf50]  shadow-lg hover:shadow-md transition duration-300 hover:scale-105'>
                                <b><h3 className='text-[#a58255] text-2xl'>{each.title}</h3></b>
                                <p className="text-md">{each.subtitle}</p>
                            </div>
                            </>
                        )
                    })}
                  </div>
                </div>
                <div>
                    <Heading heading="QS Rankings 2025"/>
                    <div className='mt-10 grid grid-cols-5 gap-8'>
                        {data1.map((each)=> {
                            return(
                             <>
                              <div className='px-14 py-12 text-center  rounded-xl border border-[#4caf50]  shadow-lg hover:shadow-md transition duration-300 hover:scale-105'>
                                <b><h3 className='text-[#a58255] text-2xl'>{each.title}</h3></b>
                                <p className="text-md">{each.subtitle}</p>
                            </div>
                             </>
                            )
                        })}
                    </div>
                </div>
                <div>
                <Heading heading="THE Rankings 2024"/>
                    <div className='mt-10 grid grid-cols-5 gap-8'>
                        {data2.map((each)=> {
                            return(
                             <>
                              <div className='px-14 py-12 text-center  rounded-xl border border-[#4caf50]  shadow-lg hover:shadow-md transition duration-300 hover:scale-105'>
                                <b><h3 className='text-[#a58255] text-2xl'>{each.title}</h3></b>
                                <p className="text-md">{each.subtitle}</p>
                            </div>
                             </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    </section>
    </>
  )
}

export default Raankings