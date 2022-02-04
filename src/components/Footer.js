import React from 'react'
import contacts from './../contacts'
import scrollToTop from '../utils/scrollToTop'
import ContactLink from './ContactLink'

export default function Footer() {
    return (
        <footer className="absolute w-full -mt-10 p-6 pb-2 md:px-[50px] md:pt-[50px] bg-gray-900 rounded-t-[50px] z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h5 className="font-bold text-xl mb-8">Links</h5>
                    <div className="flex flex-col items-start gap-3">
                        <a href="" className="link" target="_blank" rel="noreferrer">
                            Blog
                        </a>
                        <a href="" className="link" target="_blank" rel="noreferrer">
                            Dokumentasi
                        </a>
                        <a href="" className="link" target="_blank" rel="noreferrer">
                            Server Status
                        </a>
                    </div>
                </div>
                <div>
                    <h5 className="font-bold text-xl mb-8">Get in Touch</h5>
                    <div className="flex flex-col gap-3">
                        {contacts.map((contact) => (
                            <ContactLink
                                key={contact.name}
                                icon={contact.icon}
                                link={contact.link}
                                text={contact.text}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <hr className="mt-6 mb-2 border-blue-500" />
            <div className="relative">
                <span className="font-light text-sm">
                    Copyright &copy; {new Date().getFullYear()}
                    <span className="text-blue-700 font-bold"> TagihanKu</span>. All rights reserved.
                </span>
                <button
                    type="button"
                    className="absolute top-0 right-0 -mt-8 bg-blue-700 rounded-lg animate-bounce"
                    onClick={scrollToTop}
                >
                    <i className="la la-arrow-circle-up la-3x"></i>
                </button>
            </div>
        </footer>
    )
}
