import React from 'react'

function Layout({ children }) {
    return (
        <div className='xl:max-w-screen-xl mx-auto'>
            {children}
        </div>
    )
}

export default Layout