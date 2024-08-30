import { STATICS} from "@/app/ui/CharityRaised/statics";
import {Progress} from "@nextui-org/progress";
import {URLs} from "@/app/utils/urls";
import { formatter } from "@/app/utils/utils";
import { Button } from "@nextui-org/button";


async function Charity() {
    // const data = await fetch(URLs.getCharityRaised());
    // const {raised, goal } = await data.json();
    const raised = 100;
    const goal = 550
    const percentageComplete = Math.floor((raised / goal) * 100);
    return (
        <div className="flex flex-1 p-5 flex-col md:p-20">
            <h1 className="text-slate-50 text-3xl font-bold">{STATICS.HEADER}</h1>
            <div className="flex items-center mt-5 gap-3">
                <Progress value={percentageComplete} />
                <p className="text-slate-50">{percentageComplete}%</p>
            </div>
            <div className="flex items-center mt-5 justify-between">
                <Amount amount={raised} label={STATICS.RAISED} />
                <Amount amount={goal} label={STATICS.GOAL} />
            </div>
            <div className="flex justify-end md:justify-start">
                <Button color="primary" size="md" className="w-min mt-5">
                    Donate
                </Button>
            </div>
            <div>

            </div>
        </div>
    )
}

function Amount({ label, amount }) {
    return (
        <div className="flex gap-2">
            <p className="text-large text-default-500">{label}</p>
            <p className="text-large text-slate-50">{formatter().format(amount)}</p>
        </div>
    )
}

export default Charity;