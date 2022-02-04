import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import Container from './Container'
import PrevNext from './PrevNext'
import Loader from './Loader'

function Section({ id, title, useContainer = true, children }) {
    const [isImgLoaded, setImgLoaded] = useState(false)

    useEffect(() => {
        let isMounted = true
        const promises = []

        const loadImage = (name) =>
            new Promise((resolve, reject) => {
                const img = new Image()
                img.src = require(`./../assets/img/${name}.webp`)

                img.onload = () => {
                    setTimeout(() => {
                        resolve(true)
                    }, 500)
                }

                img.onerror = (err) => reject(err)
            })

        document.title = id === 1 ? 'TagihanKu - Aplikasi Kelola Tagihan Otomatis' : `${title} - TagihanKu`

        promises.push(loadImage(`main_bg${id % 3}`))

        if (id === 1) {
            promises.push(loadImage('mockup'))
        }

        Promise.all(promises)
            .catch((err) => console.error('An error occured while loading image: ', err))
            .finally(() => {
                if (isMounted) {
                    setImgLoaded(true)
                }
            })

        return () => (isMounted = false) // eslint-disable-line no-return-assign
    }, [])

    return (
        <>
            {isImgLoaded ? (
                <section
                    id={`section-${id}`}
                    className="has-bg flex flex-col justify-between gap-4 pt-28 px-4 min-h-[calc(100vh+50px)]"
                >
                    {useContainer ? <Container title={title}>{children}</Container> : children}
                    <PrevNext />
                </section>
            ) : (
                <Loader />
            )}
        </>
    )
}

Section.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string,
    useContainer: propTypes.bool,
    children: propTypes.node.isRequired,
}

export default Section
