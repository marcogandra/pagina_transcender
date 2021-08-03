import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import Image from 'next/image'
import TranscenderLogo from '../../assets/logo_transcender_2.png'

// import { Estilo } from './styles'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Card,
  CardBody,
  TabContent,
  TabPane
} from 'reactstrap'

const Cabecalho = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hTabsIcons, setHTabsIcons] = React.useState('hTabsIcons-1')

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <style>{` 

        .logo {
          width: 60%;
          margin-top: 0rem !important;   
          padding: 10px; 
          min-width: 30;
          height: auto;
        }     
        
        .bandeira {
          width: 20%;
        }     
        
        div[name="cartao"]{
          padding: 0;
          margin: 0;
          background-color: #F8F9FA;          
        }
        
        .hover_link:hover {
          color: #fff;
          text-shadow: 2px 3px 5px #cecece;
        }        
        
                   
      `}</style>

      <Card className="shadow" >
        <CardBody  name="cartao">
          <TabContent id="myTabContent" activeTab={hTabsIcons}>
            <TabPane tabId="hTabsIcons-1" role="tabpanel">

              <Navbar color="light" light expand="md" >
                <NavbarBrand href="/"><Image src={TranscenderLogo} alt="Picture of the author" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>

                  <Nav className="mr-auto" navbar>

                    <NavItem className="hover_link">
                      <NavLink href="#caixa1">About</NavLink>
                    </NavItem>
                    <NavItem className="hover_link">
                      <NavLink href="#fundadores">Funders</NavLink>
                    </NavItem>
                    <NavItem className="hover_link">
                      <NavLink href="#contato">Contact</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret className="hover_link">
                        Language
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          <img
                            alt="..."
                            src="./assets/United-States-flat-icon.png"
                            className="bandeira"
                          ></img>{'  '}
                          English
                        </DropdownItem>
                        <DropdownItem>
                        <img
                            alt="..."
                            src="./assets/Mexico-flat-icon.png"
                            className="bandeira"
                          ></img>{'  '}
                          Español
                        </DropdownItem>
                        <DropdownItem>
                        <img
                            alt="..."
                            src="./assets/Brazil-flat-icon.png"
                            className="bandeira"
                          ></img>{'  '}
                          Português
                        </DropdownItem>

                      </DropdownMenu>

                    </UncontrolledDropdown>

                  </Nav>

                </Collapse>
              </Navbar>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>

    </div>
  )
}

export default Cabecalho
