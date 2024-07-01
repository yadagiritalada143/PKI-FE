import { TabList, TabPanel, Tab, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Navbar from "./Navbar";
import Scan from "./Scan";
import ScanHistory from "./ScanHistory";
import Account from "./Account";

const Dashboard = () => {
    return <>
        <Navbar />
        <div className="tab-content mt-5">
            <center>
                <Tabs>
                    <TabList>
                        <Tab>Scan</Tab>
                        <Tab>Scan History</Tab>
                        <Tab>Account</Tab>
                    </TabList>

                    <TabPanel>
                        <Scan />
                    </TabPanel>
                    <TabPanel>
                        <ScanHistory />
                    </TabPanel>
                    <TabPanel>
                        <Account />
                    </TabPanel>
                </Tabs>
            </center>
        </div>

    </>
}

export default Dashboard;