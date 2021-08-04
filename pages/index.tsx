import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Principal.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cabecalho from './components/Cabecalho'
import Social from './components/Social'
import Carrocel from './components/Carrocel'
import Caixa1 from './components/Caixa1'
import Caixa2 from './components/Caixa2'
import Caixa3 from './components/Caixa3'
import Fundadores from './components/Fundadores'
import Contato from './components/Contato'
import Rodape from './components/Rodape'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Transcender Studios</title>
        <meta name="description" content="Transcender Studios" />
        <link rel="icon" href="../public/assets/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue" rel="stylesheet" />

      </Head>

      <main >
        <div className={styles.sarjeta}>
          <div className="container-fluid">

            <div className="row" >
              <div className="col-md-1" >
                
              </div>

              <div className="col-md-10 principal">
                <Cabecalho />
                <Social />
                <Carrocel />
                <Caixa1 />
                <Caixa2 />
                <Caixa3 />
                <Fundadores />                
                <Contato />  
                <Rodape />                                                 
              </div>

              <div className="col-md-1" >
                
              </div>
            </div>

          </div>
        </div>
      </main>   
    </div>                 
  )
}
