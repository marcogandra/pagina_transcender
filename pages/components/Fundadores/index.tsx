import React from 'react'
import Image from 'next/image'
import adriano from '../../../public/assets/adriano-gilberti_transcender.png'
import geraldo from '../../../public/assets/geraldo-lemos_transcender-studios.jpg'
import ivone from '../../../public/assets/ivone-pick_transcender-studios.jpg'
import luiz from '../../../public/assets/luiz.jpg'
import guilherme from '../../../public/assets/Guilherme-barros-trasncender-studios.jpg'
import marco from '../../../public/assets/marco-gandra_transcender-studios.jpg'
import ronaldo from '../../../public/assets/ronaldo-young_transcender-studios.jpg'
import thiago from '../../../public/assets/thiago-pagani_transcender-studios.jpg'

// reactstrap components
import {
  Row,
  Col,
  UncontrolledTooltip,
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane
} from 'reactstrap'

const style = { width: '150px' }

function Fundadores () {
  const [hTabsIcons, setHTabsIcons] = React.useState('hTabsIcons-1')
  return (
    <>
      <style>{` 
        div[name="socios"] {
            background-color: #e94e1b;
            color: #FFF;
            padding: 0;
            margin: 0;
        }  

        div[name="linha"] {
          padding: 20px;
        }  

        .h5[name="branco"] {
          color: #fff;
          text-shadow: 2px 4px 1px #000; 
          font-family: "Roboto", sans-serif;
          font-size: 29px;             
               
        }
        .purpura {
          color: #ffffff;
          font-family: "Roboto", sans-serif;
        }  
        
        i[name="mais"] {
          color: #662483;
          padding:30px;
        }

        h1[name="linha_texto_1"] {
          color: #662483;
          padding:30px;
          text-align: left;
        }   

        h1[name="linha_texto_2"] {
          color: #662483;
          padding:30px;
          text-align: left;
        }        

        div[name="esquerda"]{
          text-align: left;
        }

        p[name="esquerda"]{
          text-align: left;
        }   
        
        div[name="col_mais"]{
          color: #662483;
          padding-top: 10;
          display: flex; 
        }    
        
        .nome_fundador{
          font-family: "Roboto", sans-serif;
          font-size: 20px;          
        }

        .mais{
          font-family: "Roboto", sans-serif;
          font-size: 200px; 
          font-weight:500;  
          padding-left: 90px; 
          padding-right: 0px;
          color: #000;
          display: flex;       
        }  

        .linha1{
          font-family: 'Bebas Neue', cursive;
          font-size: 80px; 
          font-weight:400;  
          padding-left: 0px; 
          padding-top: 80px; 
          padding-bottom: 0px;
          margin-bottom: 0;
          margin: 0px;
          color: #000; 
          vertical-align: bottom;
          vertical-align: text-bottom;
          line-height: 1;
        
               
        }  
          
        .linha2 
        {
            vertical-align: text-top;
            display: block;
            color: #662483;
            
        }       

        .linha3 
        {
          color: #000;
          font-size: 40px;   
          padding-top: 40px; 
          padding-bottom: 40px; 
                          
        }  

        .Texto_founders_1{
          padding-top: 40px;
          padding-bottom: 40px;
          font-family: "Roboto", sans-serif;
          font-size: 20px; 
          font-weight:400; 
          padding-left: 50px;           
          color: #fff;
          text-align: justify;
          
        }

        .Texto_founders_2{
          padding-top: 40px;
          padding-bottom: 40px;
          font-family: "Roboto", sans-serif;
          font-size: 20px; 
          font-weight:400; 
          padding-right: 50px;           
          color: #fff;
          text-align: justify;
           
        }     
        
        .link_fundador{
          color: #fff;
          text-decoration: none;
          font-family: "Roboto", sans-serif;
          font-size: 20px;          
        }  

        .link_fundador:hover {
          color: #fff;
          text-shadow: 1px 2px 5px #000;
        }

        .fotos{
          text-align: center;
          
        }

        .flexivel{
          display: flex;
        }
    

      `}</style>

      <Card className="shadow" id="fundadores">
        <CardBody name="socios">
          <TabContent id="myTabContent" activeTab={hTabsIcons}>
            <TabPane tabId="hTabsIcons-1" role="tabpanel">

              <div className="container-fluid ">
                <div className="row" >
                  <div className="col-md-2" >

                    <p className="mais">+</p>
                  </div>

                  <div className="col-md-10" >
                    <p className="linha1"><strong>
                      GET TO KNOW THE
                      <span className="linha2">TRANSCENDERS</span>
                    </strong>
                    <span className="linha3">FOUNDING PARTNERS</span>
                    </p>
                  </div>
                  
                </div>
              </div>

              <div className="fotos">
              <Row name="linha">
                <Col className=" mt-5 mt-sm-0" sm="3" xs="6">
                  <h4 className="purpura"><b>CEO</b></h4>

                  <Image
                    alt="Adriano"
                    className=" img-fluid rounded-circle"
                    src={ adriano }
                    width={150} 
                    height={150}
                  />
                  


                  <p className="nome_fundador">
                    <a href="https://www.linkedin.com/in/adriano-gilberti-51908474/" className="link_fundador" target="_blank" rel="noreferrer">
                      <i className="fab fa-linkedin-in" ></i> | Adriano Gilbert
                    </a>
                  </p>
                </Col>

                <Col className=" mt-5 mt-sm-0" sm="3" xs="6">
                <h4 className="purpura"><b>CIR</b></h4>

                  <Image
                    alt="Geraldo"
                    className=" img-fluid rounded-circle"
                    src={ geraldo }
                    width={150} 
                    height={150}
                  />
                  <p className="nome_fundador">
                    <a href="https://www.linkedin.com/in/geraldo-lemos-neto-105850146/" className="link_fundador" target="_blank" rel="noreferrer">
                      <i className="fab fa-linkedin-in" ></i> | Geraldo Lemos
                    </a>
                  </p>
                </Col>

                <Col className=" mt-5 mt-sm-0" sm="3" xs="6">
                <h4 className="purpura"><b>CFO</b></h4>
                  <Image
                    alt="Ivone"
                    className=" img-fluid rounded-circle"
                    src={ ivone }
                    width={150} 
                    height={150}
                  />

                  <p className="nome_fundador">
                    <a href="https://www.linkedin.com/in/ivone-pick-9359175/" className="link_fundador" target="_blank" rel="noreferrer">
                      <i className="fab fa-linkedin-in" ></i> | Ivone Pick
                    </a>
                  </p>
                </Col>

                <Col className=" mt-5 mt-sm-0" sm="3" xs="6">
                  <h4 className="purpura"><b>COO</b></h4>
                  <Image
                    alt="Luiz"
                    className=" img-fluid rounded-circle"
                    src={ luiz }
                    width={150} 
                    height={150}
                  />
                  <p className="nome_fundador">
                    <a href="https://www.linkedin.com/in/luis-constancio/" className="link_fundador" target="_blank" rel="noreferrer">
                      <i className="fab fa-linkedin-in" ></i> | Luiz Constâncio
                    </a>
                  </p>
                </Col>
              </Row>

              <Row name="linha">
                <Col className=" mt-5 mt-sm-0" sm="3" xs="6">
                <h4 className="purpura"><b>CSPO</b></h4>
                <Image
                    alt="Guilherme"
                    className=" img-fluid rounded-circle"
                    src={ guilherme }
                    width={150} 
                    height={150}
                  />

                  <p className="nome_fundador">
                    <a href="https://www.linkedin.com/in/guilherme-de-barros-89668220/" className="link_fundador" target="_blank" rel="noreferrer">
                      <i className="fab fa-linkedin-in" ></i> | Guilherme de Barros
                    </a>
                  </p>
                </Col>

                <Col className=" mt-5 mt-sm-0" sm="3" xs="6">
                  <h4 className="purpura"><b>CTO</b></h4>
                  <Image
                    alt="Marco"
                    className=" img-fluid rounded-circle"
                    src={ marco }
                    width={150} 
                    height={150}
                  />

                    <p className="nome_fundador">
                      <a href="https://www.linkedin.com/in/marcogandra" className="link_fundador" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin-in" ></i> | Marco Gandra
                      </a>
                    </p>

                </Col>

                <Col className=" mt-5 mt-sm-0" sm="3" xs="6">
                  <h4 className="purpura"><b>CLO</b></h4>
                  <Image
                    alt="Ronaldo"
                    className=" img-fluid rounded-circle"
                    src={ ronaldo }
                    width={150} 
                    height={150}
                  />

                  <p className="nome_fundador">
                    <a href="https://www.linkedin.com/in/ronaldo-jung-076074117/" className="link_fundador" target="_blank" rel="noreferrer">
                      <i className="fab fa-linkedin-in" ></i> | Ronaldo Yung
                    </a>
                  </p>
                </Col>

                <Col className=" mt-5 mt-sm-0" sm="3" xs="6">
                 <h4 className="purpura"><b>CMO</b></h4>
                 <Image
                    alt="Thiago"
                    className=" img-fluid rounded-circle"
                    src={ thiago }
                    width={150} 
                    height={150}
                  />

                  <p className="nome_fundador">
                    <a href="https://www.linkedin.com/in/thiagopagani/" className="link_fundador" target="_blank" rel="noreferrer">
                      <i className="fab fa-linkedin-in" ></i> | Thiago Pagani
                    </a>
                  </p>
                </Col>
              </Row>
              </div>
              <div className="row" >
                <div className="col-md-6">
                  <p className="Texto_founders_1">
                    The world&rsquo;s first developer of immersive games and experiences in this genre. We develop and commercialize electronic games and digital artistic experiences, immersive and interactive, under the Christian theme, which promote, at the same time, entertainment and spirituality. Our goal is to contribute to the development of a new consciousness and a better world.
                  </p>
                </div>
                <div className="col-md-6" >
                  <p className="Texto_founders_2">
                    <p>We take on the challenge of offering young people and adults a rare opportunity for entertainment and evangelization.</p>
                    We want to bring the youth back together and strengthen ties with adults with the deep knowledge that Christianity can offer through an immersive experience.
                  </p>
                </div>
              </div>

            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </>
  )
}

export default Fundadores
