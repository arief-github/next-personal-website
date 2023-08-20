import Image from "next/image";

type ProjectItemProps  = {
    name: string
    url: string
    urlDisplay: string
}

export default function ProjectItem(props: ProjectItemProps) {
    let { name, url, urlDisplay, imageSrc: image } = props

    return (
        <li>
            <a href={url}>
                <span className="max-w-sm rounded overflow-hidden shadow-lg">
                    <Image className="w-full" src={`../public/image/${image}`} alt={name}/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{name}</div>
                    </div>
                    <div className="px-6 py-4">
                        <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            🔗 {urlDisplay}
                        </div>
                    </div>
                </span>
            </a>
        </li>
    )
}