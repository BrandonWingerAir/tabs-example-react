import { useState } from 'react';
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
  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (e, value) => {
    setActiveTab(value);
  }

  return (
    <div className="App">
      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="Tab 1" value={1}></Tab>
          <Tab label="Tab 2" value={2}></Tab>
          <Tab label="Tab 3" value={3}></Tab>
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