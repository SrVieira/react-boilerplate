import React from 'react'

const withLayout = (Page) => (props) => {
    return (
        <>
            <Page />
        </>
    )
}

export default withLayout