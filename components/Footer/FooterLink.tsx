import Link from "next/link"

type FooterLinkProps = {
    text: string
    url: string
}

export default function FooterLink(props: FooterLinkProps) {
    const { url, text } = props

    return (
        <Link className="transition hover:text-teal-500" href={url}>
            {text}
        </Link>
    )
}