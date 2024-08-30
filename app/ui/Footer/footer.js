'use client';
import { useState } from "react";
import {Link} from "@nextui-org/link";
import {Input} from "@nextui-org/input";

import SocialMedia from "@/app/ui/SocialMedia/SocialMedia";

import { QUICK_LINKS, CONTACT, STATICS } from "@/app/ui/Footer/Statics";
import {Button} from "@nextui-org/button";

const Footer = () => {
    const [email, setEmail] = useState("");
    return (
        <footer className="bg-black w-full p-4 flex justify-center mt-4 md:mt-24">
            <div className="flex justify-between container flex-col gap-10 lg:flex-row lg:gap-2">
                <div>
                    <p className="text-slate-300 mb-4">&copy; 2024 Charity Organization</p>
                    <SocialMedia/>
                </div>
                <div>
                    <p className="text-3xl text-slate-300 mb-4">{QUICK_LINKS.header}</p>
                    <div className="flex flex-col">
                        {
                            QUICK_LINKS.list.map(({label, url}) => (
                                <Link href={url} key={label} className="mb-2">{label}</Link>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <p className="text-3xl text-slate-300  mb-4">{CONTACT.header}</p>
                    <div className="flex flex-col">
                        {
                            CONTACT.list.map((label) => (
                                <p key={label} className="mb-2 text-slate-400">{label}</p>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <p className="text-3xl text-slate-300  mb-4">{STATICS.HEADER}</p>
                    <div>
                        <Input
                            type="email"
                            value={email}
                            label={STATICS.PLACEHOLDER}
                            onChange={(e) => setEmail(e.target.value)}
                            isClearable
                            onClear={() => setEmail('')}
                        />
                        <p className="text-primary font-semibold mt-3 cursor-pointer">{STATICS.CTA}</p>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer