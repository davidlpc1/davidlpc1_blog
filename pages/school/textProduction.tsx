import Head from "next/head";
import Subtitle from "../../components/Subtitle";

export default function textProduction(){
    return (
        <div>
            <Head>
                <title>Vídeo | Davidlpc1</title>
            </Head>

            <Subtitle>Trabalho de Produção de texto</Subtitle>
 
            <div style={{ height:'100%',display: 'flex',justifyContent: 'center',alignItems: 'center' }}>
                <iframe width="853" height="480" src="https://www.youtube.com/embed/m1dVVr8OTRY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}