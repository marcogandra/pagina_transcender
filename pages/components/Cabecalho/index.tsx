import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import Image from 'next/image'
import TranscenderLogo from '../../../public/assets/logo_transcender_2.png'
import us from '../../../public/assets/United-States-flat-icon.png'
import mx from '../../../public/assets/Mexico-flat-icon.png'
import br from '../../../public/assets/Brazil-flat-icon.png'
import styles from './cabecalho.module.css'

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
        .menu {
          padding-top: 100px;
          margin: 0px;
          /* centraliza na vertical */
          float: right;
          display: flex; 
          color: #f00;
        }         

      `}</style>
      <Card className="shadow" >
        <CardBody className={styles.cartao}>

          <div className="row" >
            <div className="col-md-6" >
              <span className={styles.logo}>
                <Image src={TranscenderLogo} alt="Transcender Studios" width={300} height={126.63}/>
              </span>
            </div>
            <div className="col-md-2" ></div>
            <div className="col-md-4" >

            <div className="row" >
              

              <Navbar color="light " light expand="md" >
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar >
                  <Nav className="mr-auto" navbar >
                    <NavItem className={styles.hover_link}>
                      <NavLink href="#caixa1">About</NavLink>
                    </NavItem>

                    <NavItem className={styles.hover_link}>
                      <NavLink href="#fundadores">Funders</NavLink>
                    </NavItem>

                    <NavItem className={styles.hover_link}>
                      <NavLink href="#contato">Contact</NavLink>
                    </NavItem>

                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret className={styles.hover_link}>
                        Language
                      </DropdownToggle>
                      <DropdownMenu right>

                        <DropdownItem>
                          <p className={styles.lingua}>                          
                            <Image src={us} alt="English" width={20} height={20}/>
                            &nbsp;&nbsp;&nbsp;&nbsp;English
                          </p>
                        </DropdownItem>

                        <DropdownItem>
                          <p className={styles.lingua}>
                            <Image src={mx} alt="Español" width={20} height={20}/>
                            &nbsp;&nbsp;&nbsp;&nbsp;Español
                          </p>
                        </DropdownItem>

                        <DropdownItem>
                          <p className={styles.lingua}>                          
                            <Image src={br} alt="Português" width={20} height={20}/>
                            &nbsp;&nbsp;&nbsp;&nbsp;Português
                          </p>  
                        </DropdownItem>

                      </DropdownMenu>
                    </UncontrolledDropdown>

                  </Nav>
                </Collapse>
              </Navbar>

            </div>
            </div>
          </div>
        </CardBody>
      </Card>

    </div>
  )
}

export default Cabecalho
