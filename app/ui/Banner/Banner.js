import { STATICS } from "@/app/ui/Banner/Statics";

import { Button } from "@nextui-org/button";
import Image from "next/image";

function Banner() {
    return (
        <div className="2xl:mt-20 xl:mt-15 lg:mt-15 md:mt-10 sm:mt-5 mt-5 relative">
            <div className="sm:pt-4 top-0 right-0 left-0 w-full h-full flex justify-between items-center">
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl md:text-6xl lg:my-10 sm:my-4 font-extrabold leading-9 ">{STATICS.HEADER}</h1>
                    <h2 className="text-2xl md:text-4xl lg:mt-10 lg:mb-4 sm:mb-0 font-extrabold leading-9 ">{STATICS.SUB_HEADER_1}</h2>
                    <h2 className="sm:text-2xl md:text-4xl text-2xl lg:mb-10 sm:mb-4 font-extrabold leading-9">{STATICS.SUB_HEADER_2}</h2>
                    <p className="text-xl mb-10 lg:max-w-md sm:max-w-max">{STATICS.DESC}</p>
                    <Button color="primary">{STATICS.CTA}</Button>
                </div>
                <div className="sm:hidden lg:block">
                    <Image src="/widow.webp"
                           height={350}
                           width={350}
                           alt="widow"
                           style={{ width: '350px', height: '350px', objectFit: "cover", borderRadius: '50%' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner;
