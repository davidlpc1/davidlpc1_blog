import NextHead from "next/head";

interface HeadProps {
  children: React.ReactNode;
}

export default function Head({ children }: HeadProps) {
  return (
    <NextHead>
      {/* Image Of WebSite */}
      <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      {/* Pwa Meta Tags */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Davi's blog englobe programming and other things"
      />
      <meta
        name="keywords"
        content="HTML,CSS,NEXTJS,DAVIDLPC,davidlpc1,DAVIDLPC1,DaviLucasMarquesDeFreitas,Davi Lucas Marques de Freitas"
      />

      <meta name="theme-color" content="#394679" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="apple-mobile-web-app-title" content="Davidlpc1 Blog" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <meta name="msapplication-navbutton-color" content="#fff62d" />
      <meta name="msapplication-TileColor" content="#394679" />
      <meta name="msapplication-TileImage" content="/icons/icon-128x128.png" />

      <meta name="application-name" content="Davi's Blog" />
      <meta
        name="msapplication-tooltip"
        content="Davi's blog englobe programming and other things"
      />
      <meta name="msapplication-starturl" content="/" />

      <meta name="msapplication-tap-highlight" content="no" />

      <meta name="full-screen" content="yes" />
      <meta name="browsermode" content="application" />

      {/* <meta name="nightmode" content="enable/disable" /> */}

      <meta name="layoutmode" content="fitscreen/standard" />

      <meta name="imagemode" content="force" />

      <meta name="screen-orientation" content="portrait"></meta>

      <link
        href="/icons/icon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/icons/icon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link
        href="/icons/icon-64x64.png"
        rel="icon"
        type="image/png"
        sizes="64x64"
      />
      <link
        href="/icons/icon-128x128.png"
        rel="icon"
        type="image/png"
        sizes="128x128"
      />
      <link
        href="/icons/icon-256x256.png"
        rel="icon"
        type="image/png"
        sizes="256x256"
      />
      <link
        href="/icons/icon-512x512.png"
        rel="icon"
        type="image/png"
        sizes="512x512"
      />

      <link href="/icons/icon-64x64.png" rel="apple-touch-icon" />
      <link href="/icons/icon-64x64.png" rel="apple-touch-icon" sizes="64x64" />
      <link
        href="/icons/icon-128x128.png"
        rel="apple-touch-icon"
        sizes="128x128"
      />
      <link
        href="/icons/icon-256x256.png"
        rel="apple-touch-icon"
        sizes="256x256"
      />

      <link href="/icons/icon-512x512.png" rel="apple-touch-startup-image" />

      <link
        href="icons/icon-24x24.png"
        rel="mask-icon"
        sizes="24x24"
        color="red"
      />

      {/* <link href="icon-192x192.png" rel="icon" sizes="192x192" /> */}
      <link href="icons/icon-128x128.png" rel="icon" sizes="128x128" />

      <link
        href="/icons/icon-64x64.png"
        rel="apple-touch-icon-precomposed"
        sizes="64x64"
      />
      <link href="/icons/icon-64x64.png" rel="apple-touch-icon" sizes="64x64" />

      <link href="/manifest.json" rel="manifest"></link>

      {/* Google AdSense */}
      <script
        data-ad-client="ca-pub-4951079875930530"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
      {/* Children */}
      {children}
    </NextHead>
  );
}
