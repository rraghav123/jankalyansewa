import Image from "next/image";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import {Link} from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import SocialMedia from "@/app/ui/SocialMedia/SocialMedia";

const Header = () => (
        <Navbar position="static" maxWidth="full" height="auto" className="shadow-lg">
            <NavbarBrand>
                <Image src="/logoLight.png" alt="Jankalyansewa" height={100} width={100} />
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <SocialMedia />
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Login
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
)

export default Header