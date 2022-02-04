import React from 'react'
import propTypes from 'prop-types'

function ContactLink({ icon, name, link, text }) {
    return (
        <div className="flex items-center gap-3">
            <i className={`${icon} la-2x`}></i>
            <div className="flex flex-col gap-2">
                {name ? <h6 className="font-bold">{name}</h6> : null}
                <a href={link} className="link" target="_blank" rel="noreferrer">
                    {text}
                </a>
            </div>
        </div>
    )
}

ContactLink.propTypes = {
    icon: propTypes.string.isRequired,
    name: propTypes.string,
    link: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
}

export default ContactLink
