import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

// project import
import MainCard from 'components/MainCard';
import ChartTab1 from './ChartTab1';
import ChartTab2 from './ChartTab2';
import ChartTab3 from './ChartTab3';
import ChartTabCont1 from 'custom/components/chart/ChartTabCont1';
import ChartTabCont2 from 'custom/components/chart/ChartTabCont2';
import ChartTabCont3 from 'custom/components/chart/ChartTabCont3';

// ==============================|| TABS - ICON ||============================== //

function ChartTabs() {
  return (
    <MainCard style={{marginTop:"10px"}}>
      <Tab.Container defaultActiveKey="first">
        <Nav variant="pills" className="Charttab">
          <Nav.Item>
            <Nav.Link eventKey="first">
              <h4>전동기</h4>
              <ChartTab1 />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">
              <h4>송풍기</h4>
              <ChartTab2 />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">
              <h4>V밸트</h4>
              <ChartTab3 />
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="first">
            <ChartTabCont1 />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <ChartTabCont2 />
          </Tab.Pane>
          <Tab.Pane eventKey="third">
            <ChartTabCont3 />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </MainCard>
  );
}

export default ChartTabs;