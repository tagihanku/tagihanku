import React from 'react'
import propTypes from 'prop-types'

function Container({ title, children }) {
    return (
        <div className="flex flex-col justify-between gap-6 min-h-[calc(100vh-7rem-3.5rem-50px)]">
            <h1 className="animate-[fadeInDown_1s] section-heading">{title}</h1>
            <div className="animate-[fadeInUp_1s]">{children}</div>
        </div>
    )
}

Container.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node.isRequired,
}

export default Container
