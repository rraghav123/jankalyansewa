import Image from "next/image";
import { Card } from "@nextui-org/card";
import Charity from "@/app/ui/CharityRaised/Charity";

import { IMAGES_URL } from "@/app/utils/images";

function Donations() {
    return (
        <Card className="mt-10 md:mt-24">
            <div className="rounded-xl overflow-hidden flex bg-stone-950">
                <figure className="sm:hidden lg:block flex-1 relative">
                    <Image
                        src={IMAGES_URL.WIDOW_bg}
                        fill
                        alt="BG"
                        objectFit="cover"
                        style={{ filter: 'grayscale(100%)' }}

                    />
                </figure>
                <Charity />
            </div>
        </Card>
    )
}

export default Donations;