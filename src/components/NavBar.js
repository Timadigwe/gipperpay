import React from "react";
import useWindowDimensions from "../components/responsive";
function NavBar() {
  const { width } = useWindowDimensions();
  const ww = (a) => (width * a) / 1440;
  return (
    <div
      style={{
        paddingTop: ww(200),
        width: 350,
        height: "100vh",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: ww(80),
            marginBottom: ww(20),
          }}
        >
          <img
            src="../assets/icons8-overview-48.png"
            alt="img"
            style={{ width: ww(30), height: ww(30) }}
          />
          <h1
            style={{ color: "#f23208", fontSize: ww(12), marginLeft: ww(10) }}
          >
            Overview
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: ww(80),
            marginBottom: ww(20),
          }}
        >
          <img
            src="../assets/icons8-transactions-64.png"
            alt="img"
            style={{ width: ww(25), height: ww(25) }}
          />
          <h1
            style={{
              color: "lightgray",
              fontSize: ww(12),
              marginLeft: ww(10),
            }}
          >
            Transactions
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: ww(80),
            marginBottom: ww(20),
          }}
        >
          <img
            src="../assets/icons8-online-store-24(1).png"
            alt="img"
            style={{ width: ww(25), height: ww(25) }}
          />
          <h1
            style={{
              color: "lightgray",
              fontSize: ww(12),
              marginLeft: ww(10),
            }}
          >
            Products
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: ww(80),
            marginBottom: ww(20),
          }}
        >
          <img
            src="../assets/icons8-payroll-64(1).png"
            alt="img"
            style={{ width: ww(25), height: ww(25) }}
          />
          <h1
            style={{
              color: "lightgray",
              fontSize: ww(12),
              marginLeft: ww(10),
            }}
          >
            Payroll
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: ww(80),
            marginBottom: ww(20),
          }}
        >
          <img
            src="../assets/icons8-bitcoin-32(1).png"
            alt="img"
            style={{ width: ww(30), height: ww(30) }}
          />
          <h1
            style={{
              color: "lightgray",
              fontSize: ww(12),
              marginLeft: ww(10),
            }}
          >
            Buy & Sell
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: ww(80),
            marginBottom: ww(20),
          }}
        >
          <img
            src="../assets/icons8-transactions-64.png"
            alt="img"
            style={{ width: ww(30), height: ww(30) }}
          />
          <h1
            style={{
              color: "lightgray",
              fontSize: ww(12),
              marginLeft: ww(10),
            }}
          >
            Gippperfi
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginLeft: ww(80),
            marginBottom: ww(20),
          }}
        >
          <img
            src="../assets/icons8-automatic-50.png"
            alt="img"
            style={{ width: ww(30), height: ww(30) }}
          />
          <h1
            style={{
              color: "lightgray",
              fontSize: ww(12),
              marginLeft: ww(10),
            }}
          >
            Settings
          </h1>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
