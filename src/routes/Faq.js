import React from 'react'
import faqs from './../faqs'
import Section from './../components/Section'
import BoxDesc from './../components/BoxDesc'
import Collapse from './../components/Collapse'

export default function Faq() {
    return (
        <Section id={6} title="Pertanyaan yang Sering Diajukan">
            <BoxDesc>
                <div className="flex flex-col gap-8 min-h-[50vh]">
                    {faqs.map((faq) => (
                        <Collapse key={faq.title} title={faq.title}>
                            {faq.desc}
                        </Collapse>
                    ))}
                </div>
            </BoxDesc>
        </Section>
    )
}
