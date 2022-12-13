import React from "react";
import useWindowDimensions from "../components/responsive";
import Divider from "@material-ui/core/Divider";

function AppContent() {
  const { width } = useWindowDimensions();
  const ww = (a) => (width * a) / 1440;
  return (
    <div
      style={{
        //paddingTop: ww(100),
        backgroundColor: "#eeeef5",
        width: ww("100%"),
        height: ww(800),
      }}
    >
      <div
        style={{
          margin: ww(20),
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: ww(500),
            height: ww(520),
            backgroundColor: "#ffffff",
            borderRadius: ww(20),
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: ww(40),
              justifyContent: "space-between",
            }}
          >
            <div>
              <h1 style={{ color: "gray", fontSize: ww(18) }}>Total balance</h1>
              <h1 style={{ fontSize: ww(20), color: "#02022a" }}>$0.00</h1>
            </div>
            <div
              style={{
                backgroundColor: "#f23208",
                width: ww(80),
                height: ww(40),
                alignItems: "center",
                borderRadius: ww(30),
                paddingLeft: ww(24),
                marginTop: ww(20),
              }}
            >
              <h3 style={{ color: "white", fontSize: ww(12) }}>Payout</h3>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginLeft: ww(20),
            }}
          >
            <h1
              style={{ fontSize: ww(16), color: "#02022a", marginLeft: ww(80) }}
            >
              GUST
            </h1>
            <div style={{ marginRight: ww(50) }}>
              <h1
                style={{
                  color: "#02022a",
                  fontSize: ww(14),
                  marginLeft: ww(40),
                }}
              >
                $0.00
              </h1>
              <h1 style={{ fontSize: ww(14), color: "gray" }}>GUST 0.00</h1>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginLeft: ww(100),
              marginRight: ww(20),
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                src="../assets/icons8-swap-24.png"
                alt="img"
                style={{ width: ww(15), height: ww(15) }}
              />
              <h3
                style={{
                  color: "#f23208",
                  fontSize: ww(10),
                  marginLeft: ww(10),
                }}
              >
                Swap
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                src="../assets/icons8-stake-coins-64.png"
                alt="img"
                style={{ width: ww(15), height: ww(15) }}
              />
              <h3
                style={{
                  color: "#f23208",
                  fontSize: ww(10),
                  marginLeft: ww(10),
                }}
              >
                Stake
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                src="../assets/icons8-email-send-30.png"
                alt="img"
                style={{ width: ww(15), height: ww(15) }}
              />
              <h3
                style={{
                  color: "#f23208",
                  fontSize: ww(10),
                  marginLeft: ww(10),
                }}
              >
                Send
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                src="../assets/icons8-add-new-30.png"
                alt="img"
                style={{ width: ww(15), height: ww(15) }}
              />
              <h3
                style={{
                  color: "#f23208",
                  fontSize: ww(10),
                  marginLeft: ww(10),
                }}
              >
                Top-up
              </h3>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: ww(350),
            }}
          >
            <h3 style={{ fontSize: ww(10), color: "gray" }}>Tag: b4ytr8ue</h3>
            <img
              src="../assets/icons8-copy-48.png"
              alt="img"
              style={{ width: ww(15), height: ww(15), marginLeft: ww(10) }}
            />
          </div>
          <div style={{ margin: ww(20) }}>
            <Divider />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginLeft: ww(15),
                marginRight: ww(15),
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  src="../assets/bitcoin.jpg"
                  alt="img"
                  style={{ width: ww(28), height: ww(28) }}
                />
                <div style={{ marginLeft: ww(5) }}>
                  <h1 style={{ fontSize: ww(10), color: "#02022a" }}>BTC</h1>
                  <h1 style={{ fontSize: ww(10), color: "gray" }}>Bitcoin</h1>
                </div>
              </div>
              <div>
                <h1
                  style={{
                    fontSize: ww(10),
                    color: "#02022a",
                    marginLeft: ww(20),
                  }}
                >
                  $0.00
                </h1>
                <h1 style={{ fontSize: ww(10), color: "gray" }}>BTC 0.00</h1>
              </div>
            </div>
            <Divider />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginLeft: ww(15),
                marginRight: ww(15),
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  src="../assets/ether.png"
                  alt="img"
                  style={{ width: ww(28), height: ww(28) }}
                />
                <div style={{ marginLeft: ww(5) }}>
                  <h1 style={{ fontSize: ww(10), color: "#02022a" }}>ETH</h1>
                  <h1 style={{ fontSize: ww(10), color: "gray" }}>Ethereum</h1>
                </div>
              </div>
              <div>
                <h1
                  style={{
                    fontSize: ww(10),
                    color: "#02022a",
                    marginLeft: ww(20),
                  }}
                >
                  $0.00
                </h1>
                <h1 style={{ fontSize: ww(10), color: "gray" }}>ETH 0.00</h1>
              </div>
            </div>
            <Divider />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginLeft: ww(15),
                marginRight: ww(15),
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img
                  src="../assets/tether.png"
                  alt="img"
                  style={{ width: ww(28), height: ww(28) }}
                />
                <div style={{ marginLeft: ww(5) }}>
                  <h1 style={{ fontSize: ww(10), color: "#02022a" }}>USDT</h1>
                  <h1 style={{ fontSize: ww(10), color: "gray" }}>
                    Tether USD
                  </h1>
                </div>
              </div>
              <div>
                <h1
                  style={{
                    fontSize: ww(10),
                    color: "#02022a",
                    marginLeft: ww(20),
                  }}
                >
                  $0.00
                </h1>
                <h1 style={{ fontSize: ww(10), color: "gray" }}>USDT 0.00</h1>
              </div>
            </div>
            <Divider />
          </div>
        </div>
        <div
          style={{
            width: ww(455),
            height: ww(400),
            backgroundColor: "#ffffff",
            marginLeft: ww(20),
            borderRadius: ww(20),
          }}
        >
          <div
            style={{
              margin: ww(10),
              marginTop: ww(20),
              width: ww(300),
              height: ww(200),
              border: "0.016rem solid lightgray",
              borderRadius: ww(10),
              paddingTop: ww(15),
              paddingLeft: ww(110),
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: ww(20),
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#feb091",
                  alignItems: "center",
                  width: ww(30),
                  borderRadius: ww(20),
                  padding: ww(8),
                }}
              >
                <img
                  src="../assets/icons8-favorite-24.png"
                  alt="img"
                  style={{ width: ww(16), height: ww(16) }}
                />
                <img
                  src="../assets/icons8-link-24.png"
                  alt="img"
                  style={{ width: ww(16), height: ww(16) }}
                />
              </div>
              <h1
                style={{
                  fontSize: ww(14),
                  color: "#02022a",
                  marginLeft: ww(10),
                }}
              >
                Donations
              </h1>
            </div>
            <h1
              style={{
                fontSize: ww(14),
                color: "#02022a",
                marginLeft: ww(40),
              }}
            >
              Amount recieved
            </h1>
            <h1
              style={{
                fontSize: ww(20),
                color: "#02022a",
                marginLeft: ww(60),
              }}
            >
              $0.00
            </h1>
            <h1
              style={{
                fontSize: ww(12),
                color: "gray",
                marginLeft: ww(5),
                backgroundColor: "lightgray",
                alignItems: "center",
                width: ww(140),
                padding: ww(15),
                borderRadius: ww(20),
              }}
            >
              Request Withdrawal
            </h1>
          </div>
          <div
            style={{
              margin: ww(10),
              marginTop: ww(20),
              width: ww(390),
              height: ww(100),
              border: " 0.016rem solid lightgray",
              borderRadius: ww(10),
              paddingLeft: ww(20),
            }}
          >
            <h1
              style={{
                fontSize: ww(14),
                color: "#02022a",
                fontWeight: "200",
              }}
            >
              Donation Link
            </h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h1
                style={{
                  fontSize: ww(10),
                  color: "#02022a",
                  fontWeight: "200",
                  width: ww(160),
                }}
              >
                Get and share Donation link to recieve donation from friends
              </h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: ww(10),
                    color: "#f23208",
                  }}
                >
                  Create Link
                </h1>
                <img
                  src="../assets/icons8-plus-48.png"
                  alt="img"
                  style={{ width: ww(16), height: ww(16), marginRight: ww(20) }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppContent;
