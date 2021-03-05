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
               
                <video style={{ height:'20rem',width:'40rem' }} controls  src="/school/textProduction.mp4">
                    O seu navegador não suporta o vídeo
                </video>
            </div>
        </div>
    )
}