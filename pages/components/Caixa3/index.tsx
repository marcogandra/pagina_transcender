import React from 'react'
import Image from 'next/image'
import mulher3 from "../../../public/assets/mulher03.png"
import {
  UncontrolledCarousel,
  Row,
  Col,
  Card,
  CardBody,
  TabContent,
  TabPane
} from 'reactstrap'

const Caixa3 = (props) => {
  const [hTabsIcons, setHTabsIcons] = React.useState('hTabsIcons-1')

  return (
    <>

      <style>{` 

        div[name="cartao_caixa3"] {
            background-color: #662483;
            padding: 0;
            margin: 0;
        } 
        


        .Texto_Caixa3{
          font-family: "Roboto", sans-serif;
          font-size: 29px;
          letter-spacing: 2pt;
          font-weight: bold;
          font-style: italic;
          line-height: 24pt;
          color: #FFFFFF;
          height: 500px;
          padding-top: 200px;
          padding-right:50px;
          margin: 0;          

        }



        .fundo_laranja_caixa3{
          display: inline;
          background-color: #e94e1b;
        }

        .aspas{
          display: inline;
          font-size: 40px;
        }
        .image_mulhe3{
          position:absolute; 
          bottom: 0; 
          margin: 0;
          padding: 0;  
          display: flex;        
        }   

        @media (max-width: 1000px) {
          .image_mulhe3{display: none;}

          .Texto_Caixa3{
            padding: 0px;
            padding-top: 150px;
            padding-bottom: 50px;
            margin:  0px;
            float:center; 
            text-align:center;

          }          
        }        

      `}</style>

      <Card className="shadow" >
        <CardBody  name="cartao_caixa3">
          <TabContent id="myTabContent" activeTab={hTabsIcons}>
            <TabPane tabId="hTabsIcons-1" role="tabpanel">


              <div className="row" >
                <div className="col-md-6">
                  <span className="image_mulhe3">
                      <Image src={mulher3} alt="Transcender Studios" />  
                    </span>                        
                </div>
                <div className="col-md-6" >
                  <p className="Texto_Caixa3"><span className="aspas"><strong>“</strong></span>OUR GOAL IS TO CONTRIBUTE TO THE DEVELOPMENT OF A NEW CONSCIOUSNESS AND <span className="fundo_laranja_caixa3">A BETTER WORLD.</span><span className="aspas"><strong>”</strong></span></p>
                </div>
              </div>




              
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>

    </>
  )
}

export default Caixa3
