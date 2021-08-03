import React from 'react'
import Head from 'next/head'
import Cabecalho from '../components/Cabecalho'
import Carrocel from '../components/Carrocel'
import Social from '../components/Social'
import Contato from '../components/Contato'
import Fundadores from '../components/Fundadores'
import Caixa1 from '../components/Caixa1'
import Caixa2 from '../components/Caixa2'
import Caixa3 from '../components/Caixa3'
import Rodape from '../components/Rodape'

// import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  const name: any = ''
  return (
    <div >

      <style>{` 
        .sarjeta{
            background-color: #cecece;
            
        }   
        .principal {
          padding: 0;
          margin-right: 0;
          margin-left: 0; 
          

        }        
        
      `}</style>

      <Head>
        <title>Transcender Studios</title>
        <meta name="description" content="Transcender Studios" />
        <link rel="icon" href="./assets/favicon.ico" />

      </Head>

      <main >
        <div className="sarjeta">
          <div className="container-fluid">
            <div className="row" >
              <div className="col-md-1" ></div>

                <div className="col-md-10 principal">
                  < Cabecalho/>
                  <Social/>
                  <Carrocel/>
                  <Caixa1 />
                  <Caixa2 />
                  <Caixa3 />
                  <Fundadores/>
                  <Contato/>
                  <Rodape/>
                </div>

              <div className="col-md-1" ></div>
            </div>
          </div>
        </div>

      </main>

    </div>
  )
}

export default Home
