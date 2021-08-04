import React from 'react'
import Image from 'next/image'
import mulher2 from "../../../public/assets/mulher02.png"
import {
  UncontrolledCarousel,
  Row,
  Col,
  Card,
  CardBody,
  TabContent,
  TabPane
} from 'reactstrap'

const Caixa2 = (props) => {
  const [hTabsIcons, setHTabsIcons] = React.useState('hTabsIcons-1')

  return (
    <>

      <style>{` 

        div[name="cartao_caixa2"] {
            background-color: #FFFFFF;
            padding: 0;
            margin: 0;
              
        } 
        
        .Texto_Caixa2{
          font-family: "Roboto", sans-serif;
          font-size: 20px;
          letter-spacing: 2pt;
          font-weight: bold;
          font-style: italic;
          line-height: 24pt;
          color: #000000;
          height: 450px;
          padding: 100px;
          padding-top:35px;
          padding-bottom:20px;
          margin: 0;          

        }

        .bgImagem_Caixa2{
          background: url("./assets/mulher02.png") right center no-repeat ;
          height: auto;
          background-size: 750px ;
        }

        img[name="imagem_caixa2"] {
          vertical-align: bottom;     
          margin: 0;        
          position:absolute; 
          bottom: 0;    
          width: 100%;          
        }

        div[name="div_flex_caixa2"]{
          position:relative;
        }  

        .image_mulhe2{
          position:absolute; 
          bottom: 0; 
          margin: 0;
          padding: 0;  
          display: flex;        
        }   

        @media (max-width: 1000px) {
          .image_mulhe2{display: none;}

        }   

      `}</style>

      <Card className="shadow" >
        <CardBody name="cartao_caixa2">
          <TabContent id="myTabContent" activeTab={hTabsIcons}>
            <TabPane tabId="hTabsIcons-1" role="tabpanel">

              <div >

                <div className="container-fluid">
                    <div className="row" >
                      <div className="col-md-6">
                        <p className="Texto_Caixa2">
                        Anyone who feels the constant need to connect with God in this fast-paced world full of physical obstacles and wants to achieve this expected encounter rightfully deserves a peaceful place where he can pray.
Of course, this meeting can and should be within ourselves, but let us be honest: who has never been touched at finding a special place and saying a prayer there?

                        </p>
                      </div>
                      <div className="col-md-6" >
                        <span className="image_mulhe2">
                          <Image src={mulher2} alt="Transcender Studios" />  
                        </span>
                        
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

export default Caixa2
