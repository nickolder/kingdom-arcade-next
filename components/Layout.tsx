import Meta from "./Meta"
import Nav from "./nav/Nav"

type LayoutType = {
    title: string,
    keywords: string,
    description: string,
}

const Layout = ({title, keywords, description}: LayoutType) => {
    return (
        <>
            <Meta 
                title={title} 
                keywords={keywords} 
                description={description}
            />

            <Nav/>
        </>
    )
}

export default Layout