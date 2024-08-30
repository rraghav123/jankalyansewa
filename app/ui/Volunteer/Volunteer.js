
import { Card } from "@nextui-org/card";
import { VOLUNTEER_URL } from "@/app/utils/images";
import Image from "next/image";
import {useMemo} from "react";
import {Button} from "@nextui-org/button";

function Volunteer() {
    const images = useMemo(() => {
        if(VOLUNTEER_URL.length > 4) {
            return VOLUNTEER_URL.slice(0, 4);
        }
        return VOLUNTEER_URL;
    }, [])

    return (
        <Card className="p-5 mt-10 md:mt-24 bg-[url('/hands.png')] bg-cover">
            <p className="text-3xl md:text-4xl text-primary">Our Dedicated Volunteer</p>
            <div className="mt-4 flex gap-4 justify-center flex-wrap">
                {images.map(({ url, id, name }) => (
                    <div key={id} className="w-56">
                        <div className="relative h-56 w-fill">
                            <Image src={url} alt={id} fill className="rounded-md"/>
                        </div>
                        <p className="text-white text-2xl font-semibold mt-3">{name}</p>
                    </div>
                ))}
            </div>
            {
                VOLUNTEER_URL.length > 4 ? (
                    <div className="mt-5 flex justify-center">
                        <Button color="primary" >All Members</Button>
                    </div>
                ) : null
            }
        </Card>
    )
}

export default Volunteer