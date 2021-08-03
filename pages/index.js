import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Principal.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Cabecalho from '../components/Cabecalho'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Transcender Studios</title>
        <meta name="description" content="Transcender Studios" />
        <link rel="icon" href="./assets/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue" rel="stylesheet" />
      </Head>

      <main >
        <div className="sarjeta">
          <div className="container-fluid">

            <div className="row" >
              <div className="col-md-1" >
                1
              </div>

              <div className="col-md-10 principal">
                2
              </div>

              <div className="col-md-1" >
                3
              </div>
            </div>

          </div>
        </div>
      </main>   
    </div>                 
  )
}
