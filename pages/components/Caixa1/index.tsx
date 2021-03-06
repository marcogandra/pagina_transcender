import React from 'react'
import Image from 'next/image'
import mulher1 from "../../../public/assets/mulher01.png"
import {
  UncontrolledCarousel,
  Row,
  Col,
  Card,
  CardBody,
  TabContent,
  TabPane
} from 'reactstrap'

const Caixa1 = (props) => {
  const [hTabsIcons, setHTabsIcons] = React.useState('hTabsIcons-1')

  return (
    <>

      <style>{` 



        div[name="cartao_caixa1"] {
            background-color: #662483;
            padding: 0;
            margin: 0;
            
        } 
        
        .Texto_Caixa1{
          font-family: "Roboto", sans-serif;
          font-size: 20px;
          letter-spacing: 2pt;
          font-weight: bold;
          font-style: italic;
          line-height: 24pt;
          color: #FFFFFF;
          height: 450px;
          padding: 100px;
          margin: 0;          

        }

        div[name="Texto_Card_Caixa1"] {
          margin: 0; 
        }    


        .fundo_laranja_caixa1{
          display: inline;
          background-color: #e94e1b;
        }

        img[name="imagem_caixa1"] {
          width: 100%;
          vertical-align: bottom;     
          margin: 0;
          padding: 0;
          position:absolute; 
          bottom: 0;    
        }

        .div_flex_caixa1{
          position:relative;
        }

        .bgImagem_Caixa1{
          background: url("./assets/mulher01.png") left center no-repeat;
        } 
        
        .image_mulhe1{
          position:absolute; 
          bottom: 0; 
          margin: 0;
          padding: 0;  
          display: flex;        
        }

        @media (max-width: 1000px) {
          .image_mulhe1{display: none;}

          .Texto_Caixa1{
            padding: 0px;
            padding-top: 80px;
            padding-bottom: 50px;
            margin:  0px;
            float:center; 
            text-align:center;
  
          }          

        }        

      `}</style>

      <Card className="shadow" id="caixa1">
        <CardBody name="cartao_caixa1">
          <TabContent id="myTabContent" activeTab={hTabsIcons}>
            <TabPane tabId="hTabsIcons-1" role="tabpanel">

              <div >

                <div className="container-fluid" >
                  <div className="row" >
                    <div className="col-md-6 " >
                      <span className="image_mulhe1">
                        <Image src={mulher1} alt="Transcender Studios" />  
                      </span>
                    </div >
                    <div className="col-md-6" >
                      <p className="Texto_Caixa1">
                        We are <span className="fundo_laranja_caixa1">the world&rsquo;s first independent studio developer of games and immersive experiences in Virtual Reality with Christian theme</span>, which promote, at the same time, entertainment and spirituality.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </TabPane>
          </TabContent>
        </CardBody>
      </Card>

    </>
  )
}

export default Caixa1
