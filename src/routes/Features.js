import React from 'react'
import features from './../features'
import Section from './../components/Section'
import Box from './../components/Box'

export default function Features() {
    return (
        <Section id={3} title="Fitur">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {features.map((feature) => (
                    <Box key={feature.title} icon={feature.icon} title={feature.title} desc={feature.desc} />
                ))}
            </div>
        </Section>
    )
}
