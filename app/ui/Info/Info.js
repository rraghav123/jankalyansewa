import Image from "next/image";
import { IMAGES_URL } from "@/app/utils/images";
import { STATICS } from "@/app/ui/Info/statics";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

function Info() {
    return (
        <>
            <InfoMobile />
            <InfoDesktop />
        </>
    )
}

function InfoDesktop() {
    return (
        <Card className="md:mt-24 p-4 md:p-10 sm:hidden md:block">
            <div className="flex md:min-h-80">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl mb-4 text-primary tracking-widest">{STATICS.HEADER}</h2>
                    <h3 className="text-3xl md:text-4xl mb-4">{STATICS.SUB_HEADER}</h3>
                    <p className="text-sm">{STATICS.DESC}</p>
                </div>
                <div className="hidden relative flex-1 md:block">
                    <Image src={IMAGES_URL.INFO_BG} alt="JanKalyanSewa" fill style={{ objectFit: "cover" }} />
                </div>
            </div>
        </Card>
    )
}

function InfoMobile() {
    return (
        <Card className="md:hidden mt-10">
            <CardHeader className="flex gap-3">
                <h2 className="text-3xl text-primary py-2 tracking-widest">{STATICS.HEADER}</h2>
            </CardHeader>
            <Divider/>
            <CardBody className="relative min-h-60">
                <Image src={IMAGES_URL.INFO_BG} alt="JanKalyanSewa" fill style={{ objectFit: "cover" }} />
            </CardBody>
            <Divider/>
            <CardFooter>
                <p className="text-sm">{STATICS.DESC}</p>
            </CardFooter>
        </Card>
    );
}

export default Info;