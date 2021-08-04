import React from 'react'
import Image from 'next/image'
import logo_branca from '../../../public/assets/LOGO_branco_transparente.png'

// reactstrap components
import {
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Card,
  CardBody,
  TabContent,
  TabPane
} from 'reactstrap'

function Rodape () {
  const [hTabsIcons, setHTabsIcons] = React.useState('hTabsIcons-1')
  return (
    <div className="rodape">

      <style>{` 

        div[name="cartao_rodape"] {
            background-color: #484848;
            padding: 0;
            margin: 0;            
        }   
        
        .texto_rodape{
          color: #FFFFFF;
          padding-left: 30px;
          padding-top: 40px;
          word-break: normal;

        }

        p span 
        {
            display: block;
        }

        .logo_branca {
          width: 70%;
          float: right;
          padding: 30px;
      }

      @media (max-width: 1000px) {
        .logo_branca{
          float:center; 
          text-align:center; 
          float: center; 
          padding: 0px;
          padding-right: 100px

          margin: 30px;   
           
          display: flex;   
        }

      }  

      `}</style>

      <Card className="shadow" >
        <CardBody name="cartao_rodape">
          <TabContent id="myTabContent" activeTab={hTabsIcons}>
            <TabPane tabId="hTabsIcons-1" role="tabpanel">

              <div className="container-fluid">
                <div className="row" >
                  <div className="col-md-8" >
                    <p className="texto_rodape">
                      <span><strong>Transcender Studios Inc.</strong></span>
                      <span><i className="fas fa-home"></i> &nbsp;&nbsp;5150, Tamiami Trail North, Suite 304 - Naples, FL 34103 - US</span>
                      <span><i className="far fa-envelope"></i>  &nbsp;&nbsp;hello@transcenderstudios.com</span>
                    </p>

                  </div>
                  <div className="col-md-4" >
                    <span className="logo_branca">
                      <Image src={logo_branca} alt="Transcender Studios"/>
                    </span>
                  </div>
                </div>
              </div>

            </TabPane>
          </TabContent>
        </CardBody>
      </Card>

    </div>
  )
}
export default Rodape
