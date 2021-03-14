import NextHead from 'next/head';

interface HeadProps {
    children: React.ReactNode;
}

export default function Head({ children }:HeadProps){
    return (
        <NextHead>
            <link rel="shortcut icon" href="/favicon.png" type="image/png" />
            {children}
        </NextHead>
    )
}