import {NavItem} from "./NavItem";
import { setupRoutes } from "../../routes/setupRoute";

type NavbarProps = {
    pageId: string
}

const Navbar = (props: NavbarProps) => (
    <div className="flex justify-content-center mx-auto max-w-7xl h-16 pt-6">
        <nav>
            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg
            shadow-zinc-800/5 ring-1 ring-zing-900/5 backdrop-blur">
                {
                    setupRoutes.map((item, id) => (
                        <NavItem key={id} title={item.title} url={item.url} isSelected={props.pageId === item.isSelected}/>
                    ))
                }
            </ul>
        </nav>
    </div>
);

export default Navbar;