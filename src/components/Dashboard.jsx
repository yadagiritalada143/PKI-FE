import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import Navbar from "./Navbar";
// import Scan from "./Scan";
// import ScanHistory from "./ScanHistory";
// import Account from "./Account";

import GeneratePki from "./GeneratePki";
import AllPkis from "./AllPkis";
import Profile from "./Profile";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Define button styles based on the current path
  const getButtonStyle = (path) => {
    return location.pathname === path ? "btn-primary" : "btn-secondary";
  };

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
      <div className="dashMenu mt-3 mx-auto d-flex justify-content-around align-items-center">
        <Button
          className={`px-4 ${getButtonStyle("/home/new")}`}
          onClick={() => navigate("/home/new")}
        >
          List All PKI's
        </Button>
        <Button
          className={`px-4 ${getButtonStyle("/home")}`}
          onClick={() => navigate("/home")}
        >
          Generate PKI
        </Button>
        <Button
          className={`px-4 ${getButtonStyle("/home/profile")}`}
          onClick={() => navigate("/home/profile")}
        >
          Profile
        </Button>
      </div>
      <section className="content border rounded mx-auto my-4 d-flex flex-column justify-content-center align-items-center shadow-lg">
        <Outlet />
      </section>
    </>
  );
};

export default Dashboard;
