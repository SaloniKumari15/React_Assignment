import React from "react";
import styled from "styled-components";
import { Button, ThemeProvider, Typography } from "@mui/material";
import theme from "../theme";

function ReferEarnSection() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Nav>
          <Hero></Hero>
          <NavBar>
            <MyAssignment>
              <Typography variant="v2">My Assignment</Typography>
            </MyAssignment>
            <Chat>
              <Typography variant="v2">Chat with Mentor</Typography>
            </Chat>
            <PName>
              <Typography variant="v2" color={"secondary"}>
                ProfileName
              </Typography>
            </PName>
          </NavBar>
        </Nav>
        <Section>
          <Typography variant="h5" style={{ color: "#000000", position: "absolute", width: "138px", height: "21px", marginLeft: "187px", paddingTop: "30px", paddingBottom: "25px" }}>
            UI/UX Refer & Earn
          </Typography>
        </Section>
        <DashboardCard>
          <Earnings>
            <Typography variant="h5" style={{ color: "#800080", width: "111px", height: "21px" }}>
              Referral Earning
            </Typography>
            <Typography variant="t1" style={{ color: "#000000", width: "116px", height: "48px" }}>
              ₹ 2,500
            </Typography>
          </Earnings>
          <Total>
            <Typography variant="h5" style={{ color: "#800080", width: "111px", height: "21px" }}>
              Total Referrals
            </Typography>
            <Typography variant="t1" style={{ color: "#000000", width: "116px", height: "48px" }}>
              7
            </Typography>
          </Total>
          <Balance>
            <Typography variant="h5" style={{ color: "#800080" }}>
              Wallet Balance
            </Typography>
            <Typography variant="t1" style={{ color: "#000000", width: "116px", height: "48px" }}>
              ₹ 500
            </Typography>
          </Balance>
          <Button
            variant="contained"
            color="secondary"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              padding: "8px 16px",
              gap: "10px",
              position: "absolute",
              width: "180px",
              height: "40px",
              left: "153px",
              top: "119px",
            }}
          >
            <Typography variant="h3" style={{ color: "#FFFFFF", width: "148px", height: "24px" }}>
              Withdraw Balance
            </Typography>
          </Button>
        </DashboardCard>
        <Refer>
          <Typography variant="h2" color="secondary" style={{ position: "absolute", width: "228px", height: "36px" }}>
            Your Referral Code
          </Typography>

          <Code>
            <Typography variant="v1" color={"secondary"} style={{ width: "230px", height: "30px", letterSpacing: "1.5em" }}>
              EDCH54
            </Typography>
          </Code>
        </Refer>
        <Work>
          <Typography variant="h2" color="secondary" style={{ position: "absolute", width: "224px", height: "36px", marginBottom: "20px" }}>
            How does it work ?
          </Typography>

          <Data1>
            <Icon1>
              <img src="../assets/vector.svg" alt=""></img>
            </Icon1>
            <Content1>
              <Typography variant="h3" color={"customColor2"} style={{ position: "absolute", width: "151.22px", height: "24px", marginLeft: "87px" }}>
                Invite your Friends
              </Typography>
              <Typography variant="h5" color="primary" style={{ position: "absolute", width: "270.56px", height: "48px", marginTop: "24px", marginLeft: "87px" }}>
                Share the link tutedude.com with your friends
              </Typography>
            </Content1>
          </Data1>
          <Data2>
            <Icon1>
              <img src="../assets/vector.svg" alt=""></img>
            </Icon1>
            <Content2>
              <Typography variant="h3" color={"customColor2"} style={{ position: "absolute", width: "264px", height: "24px", marginLeft: "85px" }}>
                You get ₹ 200 as referral money
              </Typography>
              <Typography variant="h5" color="primary" style={{ position: "absolute", width: "270.56px", height: "48px", marginTop: "24px", marginLeft: "87px" }}>
                On total purchase the friend makes, into your wallet
              </Typography>
            </Content2>
          </Data2>
          <Data3>
            <Icon1></Icon1>
            <Content3>
              <Typography variant="h3" color={"customColor2"} style={{ position: "absolute", width: "231px", height: "24px", marginLeft: "85px" }}>
                Transfer money from wallet
              </Typography>
              <Typography variant="h5" color="primary" style={{ position: "absolute", width: "270.56px", height: "48px", marginTop: "24px", marginLeft: "80px" }}>
                When the wallet balance reaches ₹200 or more, you can withdraw it
              </Typography>
            </Content3>
          </Data3>
          <Data4>
            <Icon1></Icon1>
            <Content4>
              <Typography variant="h3" style={{ color: "#000000", position: "absolute", width: "244.62px", height: "24px", marginLeft: "85px" }}>
                Friend purchases any course
              </Typography>
              <Typography variant="h5" color="primary" style={{ position: "absolute", width: "268.76px", height: "48px", marginTop: "24px", marginLeft: "70px" }}>
                Using your REFERRAL CODE in the payments page
              </Typography>
            </Content4>
          </Data4>
          <Data5>
            <Icon1></Icon1>
            <Content5>
              <Typography variant="h3" color={"customColor2"} style={{ position: "absolute", width: "231px", height: "24px", marginLeft: "85px" }}>
                Your Friend gets ₹ 200 Off
              </Typography>
              <Typography variant="h5" color="primary" style={{ position: "absolute", width: "274px", height: "48px", marginTop: "24px", marginLeft: "75px" }}>
                On his overall fee on successful purchase using your referral code
              </Typography>
            </Content5>
          </Data5>
        </Work>
        <Friend>
          <Typography variant="h3" color="secondary" style={{ position: "absolute", width: "168px", height: "24px" }}>
            Friends Who Enrolled
          </Typography>
        </Friend>
        <Term>
          <Typography variant="h3" color="secondary" style={{ position: "absolute", width: "159px", height: "24px" }}>
            Terms & Conditions
          </Typography>
        </Term>
      </Main>
    </ThemeProvider>
  );
}

export default ReferEarnSection;
// Styled components
const Main = styled.div`
  width: 1366px;
  height: 947px;
  background-color: #ffffff;
`;
const Nav = styled.div`
  position: absolute;
  width: 1366px;
  height: 73.03px;
`;
const Hero = styled.div`
  position: absolute;
  width: 160px;
  height: 63px;
  margin-left: 74px;
  margin-top: 6px;
  background-color: grey;
  background-image: url("../assets/logo.png");
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  width: 519px;
  height: 24px;
  margin-bottom: 24px;
  margin-left: 766px;
  margin-top: 25px;
  margin-right: 81px;
`;
const MyAssignment = styled.div`
  width: 140px;
  height: 22px;
  text-align: center;
  color: rgba(128, 0, 128, 0.25);
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-right: 30px;
`;
const Chat = styled.div`
  width: 156px;
  height: 22px;
  text-align: center;
  color: rgba(128, 0, 128, 0.25);
  flex: none;
  order: 1;
  flex-grow: 0;
  margin-right: 56px;
`;
const PName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 4px;
  width: 167px;
  height: 24px;
  flex: none;
  order: 2;
  flex-grow: 0;
`;
const Section = styled.div`
  position: absolute;
  width: 1366px;
  height: 76px;
  margin-top: 73px;
`;
const DashboardCard = styled.div`
  position: absolute;
  width: 486px;
  height: 188px;
  margin-left: 187px;
  margin-top: 179px;
  box-shadow: 0px 3px 100px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;
const Refer = styled.div`
  position: absolute;
  width: 358px;
  height: 105px;
  margin-left: 766px;
  margin-top: 179px;
`;
const Code = styled.div`
  position: absolute;
  width: 358px;
  height: 60px;
  margin-top: 45px;
  border: 1.5px solid;
  border-image-source: linear-gradient(270deg, #800080 0%, #ff864c 100%);
  border-image-slice: 1;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Earnings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 116px;
  height: 69px;
  left: 20px;
  top: 20px;
`;
const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  width: 100px;
  height: 69px;
  left: 198px;
  top: 20px;
`;
const Balance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  width: 105px;
  height: 69px;
  margin-left: 361px;
  margin-top: 20px;
`;
const Work = styled.div`
  position: absolute;
  width: 764px;
  height: 332px;
  margin-left: 187px;
  margin-top: 407px;
`;

const Data1 = styled.div`
  position: absolute;
  width: 355.56px;
  height: 72px;
  margin-top: 40px;
`;
const Icon1 = styled.div`
  position: absolute;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: rgba(217, 217, 217, 0.25);
`;
const Content1 = styled.div`
  position: absolute;
  width: 270.56px;
  height: 72px;
`;
const Content2 = styled.div`
  position: absolute;
  width: 274.17px;
  height: 72px;
`;
const Content3 = styled.div`
  position: absolute;
  width: 274px;
  height: 72px;
`;
const Content4 = styled.div`
  position: absolute;
  width: 268.76px;
  height: 72px;
`;

const Content5 = styled.div`
  position: absolute;
  width: 274px;
  height: 72px;
`;

const Data2 = styled.div`
  position: absolute;
  width: 359.17px;
  height: 72px;
  margin-top: 122px;
`;
const Data3 = styled.div`
  position: absolute;
  width: 359px;
  height: 72px;
  margin-top: 224px;
  padding-bottom: 0px;
`;

const Data4 = styled.div`
  position: absolute;
  width: 353.76px;
  height: 72px;
  margin-top: 20px;
  margin-left: 405px;
`;
const Data5 = styled.div`
  position: absolute;
  width: 359px;
  height: 72px;
  margin-top: 122px;
  margin-left: 405px;
`;
const Friend = styled.div`
  position: absolute;
  width: 168px;
  height: 24px;
  margin-left: 187px;
  margin-top: 799px;
`;
const Term = styled.div`
  position: absolute;
  width: 159px;
  height: 24px;
  margin-left: 187px;
  margin-top: 843px;
`;
