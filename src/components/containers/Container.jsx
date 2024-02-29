import React from 'react'

import Header from './Header'

function Container(props) {
    return (
        <main className="">
            <Header />
            {props.children}
        </main>
    )
}

export default Container
