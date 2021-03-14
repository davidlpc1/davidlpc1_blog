import NextHead from 'next/head';

interface HeadProps {
    children: React.ReactNode;
}

export default function Head({ children }:HeadProps){
    return (
        <NextHead>
            {/* Image Of WebSite */}
            <link rel="shortcut icon" href="/favicon.png" type="image/png" />
            {/* Google AdSense */}
            <script data-ad-client="ca-pub-4951079875930530" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
            {/* Children */}
            {children}
        </NextHead>
    )
}