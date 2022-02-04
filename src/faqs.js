import React from 'react'
import { Link } from 'react-router-dom'

export default [
    {
        title: 'Apa itu TagihanKu?',
        desc: (
            <div className="space-y-4">
                <p>
                    <span className="highlight">TagihanKu</span> adalah aplikasi kelola tagihan otomatis berbasis web
                    yang dikembangkan dengan bahasa pemrograman PHP.
                </p>
                <p>
                    Aplikasi <span className="highlight">TagihanKu</span> cocok digunakan usaha RT RW Net, ISP atau
                    segala jenis usaha yang membutuhkan sistem otomatisasi bulanan untuk mengeluarkan tagihan.
                </p>
            </div>
        ),
    },
    {
        title: 'Harga berlangganan termasuk apa saja?',
        desc: (
            <p>
                Harga berlangganan sudah termasuk layanan <span className="highlight">WhatsApp Gateway</span> dan{' '}
                <span className="highlight">1 buah VPN remote</span> jika anda berlangganan paket yang terintegrasi
                dengan Mikrotik. Untuk integrasi dengan layanan payment gateway{' '}
                <span className="highlight">Tripay</span> dikenanakan biaya tersendiri yang bisa anda cek{' '}
                <a href="" className="link" target="_blank" rel="noreferrer">
                    disini
                </a>
                .
            </p>
        ),
    },
    {
        title: 'Apakah saya akan mendapatkan source code setelah berlangganan?',
        desc: (
            <p>
                Tidak, anda tidak akan mendapatkan source code jika berlangganan layanan managed kami. Akan tetapi
                source code tersedia untuk dijual dengan beberapa ketentuan yang bisa anda baca{' '}
                <Link to="/pricing" className="link">
                    disini
                </Link>
                .
            </p>
        ),
    },
    {
        title: 'Apakah saya akan dibantu ketika terjadi permasalahan?',
        desc: (
            <p>
                Ya, kami selalu bersedia membantu terkait permasalahan yang anda alami ketika menggunakan aplikasi{' '}
                <span className="highlight">TagihanKu</span>.
            </p>
        ),
    },
    {
        title: 'Apakah saya akan dibantu jika pindah dari aplikasi tagihan lain?',
        desc: <p>Ya, kami dengan senang hati siap bantu migrasikan data anda ke server kami.</p>,
    },
]
