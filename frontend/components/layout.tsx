import { FunctionComponent } from "react";
import * as React from 'react'
import Head from 'next/head'
import Footer from './base/Footer'

type LayoutProps = {
    title?: string
    width?: "full" | "regular"
}

const Layout: React.FunctionComponent<LayoutProps> = ({children, title = 'The Amherst Student'}) => (
    <>
    <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link href="https://fonts.googleapis.com/css?family=Cormorant&display=swap" rel="stylesheet"/>
        <link href="https://necolas.github.io/normalize.css/latest/normalize.css" rel="stylesheet"/>
    </Head>
    <main>
        {children}
    </main>
    <Footer />
    <style jsx global>{`
        :root{
            --header-font: 'Cormorant';
            --body-text: 'URWBaskervilleW01-Regular';
            --span-font: 'Halyard Text';
            --base-font-size: 18px;
            --line-height: 172%;
        }
        html{
            background: #E5E5E5;
        }
        /* max-widht was 1100px*/
        main{
            max-width: 1180px; 
            margin: 0 auto;
            padding-bottom: 40px;
        
        }
        @media screen and (max-width: 1200px) {
            main {
                margin: 0 5%;
            }
        }

        h1 {
            font-family: var(--header-font);
            font-weight: 600;
        }

        p{
            font-family: var(--body-text);
            line-height: var(--line-height);
            font-size: var(--base-font-size);
            color: #373A3C;
        }
        
    `} 
    </style>
    </>
) 

export default Layout;