// import { TabList, TabPanel, Tab, Tabs } from "react-tabs";
// import 'react-tabs/style/react-tabs.css';
import Navbar from "./Navbar";
// import Scan from "./Scan";
// import ScanHistory from "./ScanHistory";
// import Account from "./Account";

import GeneratePki from "./GeneratePki";
import AllPkis from "./AllPkis";
import Profile from "./Profile";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

const Dashboard = () => {

    const navigate = useNavigate();
  return (
    <>
      <Navbar />
      {/* <div className="tab-content mt-5">
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
        </div> */}
      <div className="dashMenu mt-5 mx-auto d-flex justify-content-around align-items-center">
        <Button onClick={()=> navigate("/home/") }>Generate PKI</Button>
        <Button onClick={()=> navigate("/home/list")}>List All PKI's</Button>
        <Button onClick={()=> navigate("/home/profile")}>Profile</Button>
      </div>
      <section className="content border mx-auto my-4 d-flex flex-column justify-content-center align-items-center" >
        <Outlet />
      </section>
    </>
  );
};

export default Dashboard;
