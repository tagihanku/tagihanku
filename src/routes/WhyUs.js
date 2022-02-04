import React from 'react'
import pros from './../pros'
import Section from './../components/Section'
import Box from './../components/Box'

export default function WhyUs() {
    return (
        <Section id={2} title="Kenapa Pilih TagihanKu?">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {pros.map((pro) => (
                    <Box key={pro.title} icon={pro.icon} title={pro.title} desc={pro.desc} />
                ))}
            </div>
        </Section>
    )
}
