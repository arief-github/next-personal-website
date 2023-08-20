import ProjectItem from "../components/ProjectItem";

export async function getStaticProps() {
    return {
        props: {
            pageId: "projects"
        }
    }
}

const projectName = {
    apps: [
        {
            name: "TallyCoin: Tracking Chores and Rewards",
            url: "https://apps.apple.com/us/app/tallycoin/id1633932632",
            urlDisplay: "App Store",
            imageSrc: 'tallycoin.png'
        },
        {
            name: "RedacApp: Redact Text in Images",
            url: "https://gracehuang.gumroad.com/l/redac",
            urlDisplay: "gumroad.com",
            imageSrc: 'redacapp.png'
        }
    ],
    books: [
        {
            name: "Building macOS apps with SwiftUI: A Practical Learning Guide",
            url: "https://www.amazon.com/gp/product/B0BP5P9H31",
            urlDisplay: "amazon.com",
            imageSrc: 'macos-app.png'
        },
        {
            name: "Nail A Coding Interview: Six-Step Mental Framework",
            url: "https://gracehuang.gumroad.com/l/coding-interview",
            urlDisplay: "gracehuang.gumroad.com",
            imageSrc: "coding-interview.jpeg"
        },
        {
            name: "A Practical Guide to Writing a Software Tech Design Doc",
            url: "https://gracehuang.gumroad.com/l/mqmUt",
            urlDisplay: "gracehuang.gumroad.com",
            imageSrc: "tdd.webp"
        },
        {
            name: "Code Reviews in Tech: The Missing Guide",
            url: "https://gracehuang.gumroad.com/l/coding-reviews",
            urlDisplay: "gracehuang.gumroad.com",
            imageSrc: "code-review.jpeg"
        },
    ]
}

export default function Projects() {
    return (
        <div className="mt-16 px-8">
            <header>
                <h1 className="font-bold text-4xl text-zinc-800">Things I Do</h1>
                <div className="text-base mt-6 text-zinc-600">I have been working on a number of small creative
                    projects
                </div>
            </header>
            <div className="mt-16">
                <h2 className="text-2xl">Apps</h2>
                <ul className="grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8">
                    {
                        projectName.apps.map((item) => (
                            <ProjectItem name={item.name} url={item.url} urlDisplay={item.urlDisplay} imageSrc={item.imageSrc}/>
                        ))
                    }
                </ul>
            </div>
            <div className="mt-16">
                <h2 className="text-2xl">Books</h2>
                <ul className="grid grid-cols-4 gap-x-12 gap-y-16 mt-8">
                    {
                        projectName.books.map((item) => (
                            <ProjectItem name={item.name} url={item.url} urlDisplay={item.urlDisplay}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}