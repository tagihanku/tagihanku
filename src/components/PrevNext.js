import React from 'react'
import { Link } from 'react-router-dom'
import scrollToTop from './../utils/scrollToTop'
import { getPreviousRoute, getNextRoute } from './../utils/routeUtils'

export default function PrevNext() {
    const previous = getPreviousRoute()
    const next = getNextRoute()

    return (
        <div className="flex pb-14">
            {previous ? (
                <Link to={previous.path} className="mr-auto" onClick={scrollToTop}>
                    <i className="animate-[preBounceLeft_1s_,_bounceLeft_1s_infinite_1s] la la-angle-double-left la-3x"></i>
                </Link>
            ) : null}
            {next ? (
                <Link to={next.path} className="ml-auto" onClick={scrollToTop}>
                    <i className="animate-[preBounceRight_1s_,_bounceRight_1s_infinite_1s] la la-angle-double-right la-3x"></i>
                </Link>
            ) : null}
        </div>
    )
}
