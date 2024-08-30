import { Card } from "@nextui-org/card";

import { STATICS } from "@/app/ui/ActiveDonations/Statics";
import DonationCard from "@/app/ui/ActiveDonations/DonationCard";

function ActiveDonations() {
    return (
        <Card className="p-5 mt-10 md:mt-24">
            <h2 className="text-3xl md:text-4xl mb-4">{STATICS.HEADER}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    JSON.map(card => (
                        <DonationCard key={card.id} {...card} />
                    ))
                }
            </div>
        </Card>
    )
}

const JSON = [{
    id: 1,
    header: 'Fund Box',
    subHeader: 'Insure child wellness',
    donations: {
        goal: 80000,
        raised: 40000,
    },
    src: '/illChild.jpg'
}, {
    id: 2,
    header: 'Fund Box',
    subHeader: 'Insure widow wellness',
    donations: {
        goal: 80000,
        raised: 30000,
    },
    src: '/widowDonation.webp'
}, {
    id: 3,
    header: 'Fund Box',
    subHeader: 'Insure child education wellness',
    donations: {
        goal: 80000,
        raised: 60000,
    },
    src: '/educationDonation.jpg'
}]

export default ActiveDonations;
