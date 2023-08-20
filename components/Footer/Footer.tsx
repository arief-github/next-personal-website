import FooterLink from "./FooterLink";
import {setupRoutes} from "../../routes/setupRoute";

export default function Footer() {
    return (
        <footer className="pt-10 px-8 pb-16 border-t">
            <div className="flex justify-between gap-6">
                <div className="flex gap-6 text-sm font-medium text-zinc-600">
                    {
                        setupRoutes.map(item => (
                            <FooterLink text={item.title} url={item.url}/>
                        ))
                    }
                </div>
                <p className="text-sm text-zinc-400">@2023 Arief Kurniawan</p>
            </div>
        </footer>
    )
}