import React from 'react'
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

      `}</style>

      <Card className="shadow" id="caixa1">
        <CardBody name="cartao_caixa1">
          <TabContent id="myTabContent" activeTab={hTabsIcons}>
            <TabPane tabId="hTabsIcons-1" role="tabpanel">

              <div className="bgImagem_Caixa1">

                <div className="container-fluid" >
                  <div className="row" >
                    <div className="col-md-6" >

                    </div >
                    <div className="col-md-6" >
                      <p className="Texto_Caixa1">
                        We are <span className="fundo_laranja_caixa1">the world@apos;s first independent studio developer of games and immersive experiences in Virtual Reality with Christian theme</span>, which promote, at the same time, entertainment and spirituality.
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
