import React from 'react'

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

function Social () {
  const [hTabsIcons, setHTabsIcons] = React.useState('hTabsIcons-1')
  return (
    <div name="social">

      <style>{` 

        div[name="cartao_social"] {
            background-color: #e94e1b;
            padding: 0;
            margin: 0;            
        }   
        
        i[name="social"] {
          color:#fff
        }
      `}</style>

      <Card className="shadow" >
        <CardBody name="social" name="cartao_social">
          <TabContent id="myTabContent" activeTab={hTabsIcons}>
            <TabPane tabId="hTabsIcons-1" role="tabpanel">

              <Button
                className="btn-icon-only rounded-circle"
                color="facebook"
                type="button"

              >
                {' '}
                <span className="btn-inner--icon" >
                  <a href="http://facebook.com" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook" name="social"></i>
                  </a>
                </span>
              </Button>

              <Button
                className="btn-icon-only rounded-circle"
                color="twitter"
                type="button"
              >
                {' '}
                <span className="btn-inner--icon">
                  <a href="https://twitter.com/twitter" target="_blank" rel="noreferrer">
                    <i className="fab fa-twitter" name="social"></i>
                  </a>
                </span>
              </Button>

              <Button
                className="btn-icon-only rounded-circle"
                color="instagram"
                type="button"
              >
                {' '}
                <span className="btn-inner--icon">
                  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram" name="social"></i>
                  </a>
                </span>
              </Button>

              <Button
                className="btn-icon-only rounded-circle"
                color="youtube"
                type="button"
              >
                {' '}
                <span className="btn-inner--icon">
                  <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-youtube" name="social"></i>
                  </a>
                </span>
              </Button>
              <Button
                className="btn-icon-only rounded-circle"
                color="linkedin"
                type="button"
              >
                {' '}
                <span className="btn-inner--icon">
                  <a href="https://www.linkedin.com/company/79674030/admin/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in" name="social"></i>
                  </a>

                </span>
              </Button>

            </TabPane>
          </TabContent>
        </CardBody>
      </Card>

    </div>
  )
}
export default Social