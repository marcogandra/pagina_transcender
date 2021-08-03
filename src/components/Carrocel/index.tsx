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

const items = [

  {
    src:
      './assets/e-banner_1_Eng.JPG',
    altText: 'Slide 1',
    caption: '',
    header: '',
    key: '1'
  },

  {
    src:
    './assets/e-banner_2_Eng.JPG',
    altText: 'Slide 2',
    caption: '',
    header: '',
    key: '2'
  },
  {
    src:
    './assets/e-banner_3_Eng.JPG',
    altText: 'Slide 3',
    caption: '',
    header: '',
    key: '3'
  }
]

const Carrocel = (props) => {
  const [hTabsIcons, setHTabsIcons] = React.useState('hTabsIcons-1')

  return (
    <>

      <style>{` 

        div[name="cartao_carrocel"] {
            background-color: #FFF;
            padding: 0;
            margin: 0;
        }   

        div[name="Texto_Card_Carrocel"] {
          margin: 0;    
        }         

      `}</style>

      <Card className="shadow" name="Texto_Card_Carrocel">
        <CardBody name="cartao_carrocel">
          <TabContent id="myTabContent" activeTab={hTabsIcons}>
            <TabPane tabId="hTabsIcons-1" role="tabpanel">

              <Row>
                <Col md="12" className="mx-auto">
                  <UncontrolledCarousel items={items} />
                </Col>
              </Row>

            </TabPane>
          </TabContent>
        </CardBody>
      </Card>

    </>
  )
}

export default Carrocel
