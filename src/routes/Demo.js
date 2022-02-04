import React from 'react'
import demoUsers from './../demoUsers'
import Section from './../components/Section'
import BoxDesc from './../components/BoxDesc'
import UserInfo from './../components/UserInfo'

export default function Demo() {
    return (
        <Section id={5} title="Demo">
            <BoxDesc>
                <div className="min-h-[50vh]">
                    <p>Kami tidak menyediakan layanan trial, silahkan akses versi demo berikut:</p>
                    <div className="mt-10 space-y-5">
                        <p>
                            <strong>URL:</strong>{' '}
                            <a href="" className="link" target="_blank" rel="noreferrer">
                                https://example.com
                            </a>
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {demoUsers.map((user) => (
                                <UserInfo
                                    key={user.username}
                                    role={user.role}
                                    username={user.username}
                                    password="12345"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </BoxDesc>
        </Section>
    )
}
