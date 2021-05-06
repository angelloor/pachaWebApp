import React from 'react'
import Header from './Header'

const Layout = (props) => {
    const { children } = props
    return (
        <React.Fragment>
            <Header />
            {children}
        </React.Fragment>
    )
}

export default Layout