import { STATICS } from "@/app/ui/Gallery/Statics";
import { Card } from "@nextui-org/card";

import { GALLERY_URL } from "@/app/utils/images";
import Image from "next/image";

function Gallery() {
    return (
        <Card className="p-5 mt-10 md:mt-24">
            <p className="text-3xl md:text-4xl mb-4">{STATICS.HEADER}</p>
            <div className="flex overflow-x-auto gap-2 snap-x snap-mandatory">
                {GALLERY_URL.map(({ url, id }) => (
                    <div key={id} className="relative w-full md:w-80 h-64 flex-2 snap-center">
                        <Card className="h-full">
                            <Image fill src={url} alt={id} />
                        </Card>
                    </div>
                ))}
            </div>
        </Card>
    )
}

export default Gallery;