import React from 'react'

// reactstrap components
import {
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  UncontrolledTooltip,
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Button,
  Form,
  Label,
  FormText

} from 'reactstrap'

function Contato () {
  const [hTabsIcons, setHTabsIcons] = React.useState('hTabsIcons-1')
  const [focus1, setFocus1] = React.useState(false)
  const [focus2, setFocus2] = React.useState(false)
  const [focus3, setFocus3] = React.useState(false)
  const [focus4, setFocus4] = React.useState(false)
  const [focus5, setFocus5] = React.useState(false)
  return (
    <>

      <style>{`     
        .mark16{
          padding-top: 40px;
          padding-bottom: 40px;
          font-family: "Roboto", sans-serif;
          font-size: 20px; 
          font-weight:400; 
          padding-top: 75px;
          padding-left: 75px;            
          padding-right: 75px;
          padding-bottom: 90px;
          color: #fff;
          text-align: justify;
          background-color: #662483;
          margin-top: 40px;
        }  

        .texto_contato{ 
          font-family: 'Bebas Neue', cursive;
          font-size: 30px; 
          font-weight:400;  
          padding-left: 0px; 
          padding-top: 20px; 
          padding-bottom: 0px;
          margin-bottom: 0;
          margin: 0px;
          color: #000; 
          vertical-align: bottom;
          vertical-align: text-bottom;
          line-height: 1;
               
        }   
        
        .texto_contato2{ 
          font-family: 'Bebas Neue', cursive;
          font-size: 20px; 
          font-weight:400;  
          padding-left: 0px; 
          padding-top: 20px; 
          padding-bottom: 0px;
          margin-bottom: 0;
          margin: 0px;
          color: #000; 
          vertical-align: bottom;
          vertical-align: text-bottom;
          line-height: 1;
               
        }   

        button[name="botao_contato"] {
          margin-top: 20px;
          font-family: "Roboto", sans-serif;
          background-color: #662483;
          
             
        }         
                

      `}</style>

      <Card className="shadow" id="contato">
        <CardBody>
          <TabContent id="myTabContent" activeTab={hTabsIcons}>
            <TabPane tabId="hTabsIcons-1" role="tabpanel">

              <div className="container-fluid">
                <div className="row" >
                <div className="col-md-1" ></div>
                  <div className="col-md-11" >
                    <p className="texto_contato">
                      Send a menssage
                    </p>
                  </div>
                </div>
                <div className="row" >
                  <div className="col-md-1" ></div>
                  <div className="col-md-6" >
                    <form action="api/email.py">
                        <FormGroup>
                          <Label for="E_mail">
                            <p className="texto_contato2">
                              e-mail
                            </p>
                          </Label>
                          <Input type="email" name="email" id="Email" />
                        </FormGroup>

                        <FormGroup>
                          <Label for="Subject">
                            <p className="texto_contato2">
                              Subject
                            </p>
                          </Label>
                          <Input type="input" name="input" id="input" />
                        </FormGroup>

                      <FormGroup>
                        <Label for="exampleText">

                          <p className="texto_contato2">
                            Message
                          </p>
                        </Label>
                        <Input type="textarea" name="text" id="Text" row="5"/>
                      </FormGroup>
                      <FormGroup>
                        <button type="submit" className="btn btn-primary" name="botao_contato">Send</button>
                      </FormGroup>
                    </form>
                  </div>
                  <div className="col-md-5" >
                    <p className="mark16">
                      "Go into all the world and preach the gospel to every creature." Mark 16:15
                    </p>
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

export default Contato
