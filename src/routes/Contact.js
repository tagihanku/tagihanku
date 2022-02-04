import React, { useState } from 'react'
import contacts from './../contacts'
import Section from './../components/Section'
import BoxDesc from './../components/BoxDesc'
import ContactLink from './../components/ContactLink'

export default function Contact() {
    const [isTransitioning, setTransitioning] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!e.target.name.value || !e.target.email.value || !e.target.phone.value || !e.target.message.value) {
            return alert('Mohon isi semua kolom.') // eslint-disable-line no-alert
        }

        setTransitioning(true)

        setTimeout(() => {
            setTransitioning(false)
            alert('Pesan berhasil dikirim.') // eslint-disable-line no-alert
        }, 2500)
    }

    return (
        <Section id={7} title="Kontak">
            <BoxDesc>
                <div className="grid grid-cols-1 md:grid-cols-7 gap-8 min-h-[50vh]">
                    <div className="order-last md:order-first md:col-span-4">
                        <h3 className="text-xl font-bold mb-6">Tinggalkan Pesan</h3>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <input type="text" name="name" className="input" placeholder="Nama" required />
                            <input type="email" name="email" className="input" placeholder="Alamat Email" required />
                            <input
                                type="text"
                                name="phone"
                                className="input"
                                placeholder="Nomor Handphone (WhatsApp)"
                                required
                            />
                            <textarea name="message" rows="4" className="input" placeholder="Pesan Anda" required />
                            <button
                                type="submit"
                                className="action-button w-32 ml-auto justify-center py-[.375rem]"
                                disabled={isTransitioning}
                            >
                                {isTransitioning ? (
                                    <>
                                        <i className="la la-circle-notch mr-1 text-xl animate-spin"></i>
                                        Mengirim
                                    </>
                                ) : (
                                    'Kirim'
                                )}
                            </button>
                        </form>
                    </div>
                    <div className="order-first md:order-last md:col-span-3">
                        <h3 className="text-xl font-bold mb-6">Hubungi Kami</h3>
                        <div className="flex flex-col gap-4">
                            {contacts.map((contact) => (
                                <ContactLink
                                    key={contact.name}
                                    icon={contact.icon}
                                    link={contact.link}
                                    name={contact.name}
                                    text={contact.text}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </BoxDesc>
        </Section>
    )
}
