import React from 'react'

function Heading( {heading,title,heading1}) {
  return (
    <> 
    <div className=' text-left text-[#007367] text-4xl font-["poppins"]'>
        <h3  className=' text-left text-[#007367] text-4xl '>
            {title}
            <br/>
            <b  className=' text-left text-[#007367] text-4xl font-["poppins"]'>
                {heading}
            </b>
            <br/>
            <b  className=' text-left text-[#007367] text-4xl font-["poppins"]'>
                {heading1}
            </b>
        </h3>
    </div>
    </>
  )
}

export default Heading