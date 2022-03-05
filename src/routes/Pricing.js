import React from 'react'
import { Link } from 'react-router-dom'
import scrollToTop from './../utils/scrollToTop'
import prices from './../prices'
import Section from './../components/Section'
import BoxPrice from './../components/BoxPrice'
import BoxDesc from './../components/BoxDesc'

export default function Pricing() {
    return (
        <Section id={4} title="Harga">
            <div className="space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {prices.map((price) => (
                        <BoxPrice
                            key={price.name}
                            name={price.name}
                            price={price.price}
                            color={price.color}
                            details={price.details}
                        />
                    ))}
                </div>
                <BoxDesc title="Source Code">
                    <p id="source">
                        Kami juga menjual source code aplikasi dengan sistem lisensi
                        <span className="highlight mx-1">per-instalasi</span>
                        yang dapat diinstal di server pribadi. Proses instalasi akan kami bantu sampai selesai.
                    </p>
                    <p>
                        Source code merupakan bundle aplikasi <span className="highlight">TagihanKu</span> dengan{' '}
                        <span className="highlight">WhatsApp Gateway</span> sehingga anda tidak perlu bergantung pada
                        pihak ketiga. Pastikan anda telah memenuhi{' '}
                        <a href="" className="link" target="_blank" rel="noreferrer">
                            prasyarat
                        </a>{' '}
                        sebelum membeli source code.
                    </p>
                    <p>
                        Untuk informasi lebih lanjut, silahkan{' '}
                        <Link to="/contact" className="link" onClick={scrollToTop}>
                            hubungi kami
                        </Link>
                        .
                    </p>
                </BoxDesc>
            </div>
        </Section>
    )
}
