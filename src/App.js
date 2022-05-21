import styled from 'styled-components';
import { Tabs, Tab, TabPanel } from './components/tabs/tabs';
import "./styles.css";

const TabsContainer = styled.div`
  display: flex;
  padding: 2px;
`;

const TabPanelContainer = styled.div`
  height: 100vh;
`;

export default function App() {
  return (
    <div className="App">
      <TabsContainer>
        <Tabs>
          <Tab></Tab>
          <Tab></Tab>
          <Tab></Tab>
        </Tabs>
      </TabsContainer>
      <TabPanelContainer>
        <TabPanel>
          <h1>Tab 1</h1>
        </TabPanel>
        <TabPanel>
          <h1>Tab 2</h1>
        </TabPanel>
        <TabPanel>
          <h1>Tab 3</h1>
        </TabPanel>
      </TabPanelContainer>
    </div>
  );
}