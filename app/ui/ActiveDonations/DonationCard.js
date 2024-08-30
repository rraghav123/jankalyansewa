import Image from "next/image";
import {Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import {Progress} from "@nextui-org/progress";
import {formatter} from "@/app/utils/utils";
import {Button} from "@nextui-org/button";

function DonationCard({
    header,subHeader, donations: {goal, raised}, src
                      }) {
    const percentageComplete = Math.floor((raised / goal) * 100);
    return (
        <Card>
            <CardHeader className="relative h-52 min-w-60">
                <Image src={src} fill alt="header" style={{ objectFit: "cover" }} className="rounded-t-lg" />
            </CardHeader>
            <CardBody>
                <p className="text-sm">{header}</p>
                <p className="text-large font-bold">{subHeader}</p>
                <div className="mt-4 flex gap-2 items-center">
                    <Progress value={percentageComplete} size="md"/>
                    <p>{percentageComplete}%</p>
                </div>
                <div className="flex justify-between">
                    <Amount label="Goal" amount={goal} />
                    <Amount label="Raised" amount={raised} />
                    <Amount label="To Go" amount={goal - raised < 0 ? 0 : Math.floor(goal - raised)} />
                </div>
            </CardBody>
            <CardFooter className="flex justify-end md:justify-start">
                 <Button color="primary" size="sm">
                     Donate
                 </Button>
            </CardFooter>
        </Card>
    )
}

function Amount({ label, amount }) {
    return (
        <div>
            <p className="text-medium">{label}</p>
            <p className="text-medium font-bold">{formatter().format(amount)}</p>
        </div>
    )
}

export default DonationCard;