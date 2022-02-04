import React, { useState, useRef, useEffect } from 'react'
import propTypes from 'prop-types'

function Collapse({ title, children }) {
    const [isOpened, setOpened] = useState(false)
    const [height, setHeight] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        const handleOutsideClick = (e) => {
            const toggler = e.target.closest('.toggle-collapse')

            if (toggler && toggler.nextElementSibling !== ref.current) {
                setOpened(false)
            }
        }

        setHeight(ref.current.scrollHeight)
        document.addEventListener('click', handleOutsideClick)

        return () => document.removeEventListener('click', handleOutsideClick)
    }, [])

    return (
        <div className="flex flex-col overflow-hidden">
            <button
                type="button"
                className={'toggle-collapse' + (isOpened ? ' active' : '')}
                onClick={() => setOpened(!isOpened)}
            >
                {title}
                <i
                    className={
                        'la la-angle-down transition-transform duration-300 transform' + (isOpened ? ' rotate-180' : '')
                    }
                ></i>
            </button>
            <div
                ref={ref}
                className={'overflow-hidden transition-all duration-300' + (isOpened ? ' mt-4' : '')}
                style={{ maxHeight: isOpened ? `${height}px` : '0' }}
            >
                {children}
            </div>
        </div>
    )
}

Collapse.propTypes = {
    title: propTypes.string,
    children: propTypes.node.isRequired,
}

export default Collapse
