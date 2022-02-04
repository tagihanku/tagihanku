import React from 'react'
import Section from './../components/Section'

export default function NotFound() {
    return (
        <Section id={8} useContainer={false} title="Halaman Tidak Ditemukan">
            <div className="flex-grow flex flex-col justify-evenly items-center gap-4">
                <h3 className="text-[4rem] font-bold">404</h3>
                <p className="text-xl">Maaf, halaman yang anda cari tidak dapat ditemukan.</p>
            </div>
        </Section>
    )
}
