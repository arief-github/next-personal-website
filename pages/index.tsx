export async function getStaticProps() {
    return {
        props: {
            pageId: "about_me"
        }
    }
}

export default function Home() {
    return (
        <>
            <h1 className="text-lg text-sky-500">About Me</h1>
        </>
    )
};