import React from 'react'
import Typewriter from 'typewriter-effect'
import scrollToTop from './../utils/scrollToTop'
import Section from './../components/Section'
import mockup from './../assets/img/mockup.webp'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <Section id={1} useContainer={false}>
            <div className="flex-grow grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                <div className="animate-[fadeInDown_1s] flex flex-col items-start space-y-8">
                    <h3 className="text-3xl text-blue-300 font-medium">
                        Aplikasi kelola tagihan yang bisa
                        <Typewriter
                            options={{
                                wrapperClassName: 'font-bold text-blue-200 border-b-2 border-blue-300',
                                strings: [
                                    'buat tagihan otomatis.',
                                    'kirim tagihan otomatis.',
                                    'menerima pembayaran otomatis.',
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h3>
                    <h6 className="text-lg text-gray-200">
                        TagihanKu adalah aplikasi kelola tagihan otomatis yang akan memudahkan dalam mengelola usaha
                        anda.
                    </h6>
                    <Link to="/pricing" className="action-button" onClick={scrollToTop}>
                        Daftar Sekarang
                        <i className="la la-arrow-right ml-2 text-xl leading-none"></i>
                    </Link>
                </div>
                <div className="animate-[fadeInUp_1s] hidden md:block">
                    <img src={mockup} alt="mockup" className="opacity-85" />
                </div>
            </div>
        </Section>
    )
}
