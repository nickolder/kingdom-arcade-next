import Head from "next/head"

const Meta = ({ title, keywords, description }: {title: string, keywords: string, description: string}) => {
    return (
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <meta name="keywords" content={keywords}/>
            <meta name="description" content={description}/>
            <title>{title}</title>

            <link rel="icon" href="../img/logo_ka_1.svg" />
        </Head>
    )
}

export default Meta