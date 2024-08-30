import Banner from "@/app/ui/Banner/Banner";
import Donations from "@/app/ui/Donations/Donations";
import Info from "@/app/ui/Info/Info";
import ActiveDonations from "@/app/ui/ActiveDonations/ActiveDonations";
import Gallery from "@/app/ui/Gallery/Gallery";
import Volunteer from "@/app/ui/Volunteer/Volunteer";

function Dashboard() {
    return (
        <div className="container 2xl:px-64">
            <Banner />
            <Donations />
            <Info />
            <ActiveDonations />
            <Gallery />
            <Volunteer />
        </div>
    )
}

export default Dashboard;
