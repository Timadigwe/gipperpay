import useWindowDimensions from "../src/components/responsive";
import { Container, Header } from "../src/styles/root";
import NavBar from "./components/NavBar";
import AppContent from "./components/AppContent";
import "./App.css";
function App() {
  const { width } = useWindowDimensions();
  const ww = (a) => (width * a) / 1440;
  return (
    <Container className="container">
      <Header
        className="header"
        ww={ww}
        style={{
          paddingTop: ww(30),
          flexDirection: "row",
          justifyContent: "space-around",
          paddingBottom: ww(20),
        }}
      >
        <div
          ww={ww}
          style={{
            backgroundColor: "#02022a",
            borderRadius: ww(20),
            paddingLeft: ww(12),
            paddingRight: ww(12),
          }}
        >
          <h1 style={{ color: "white", fontSize: ww(14) }}>Send & Recieve</h1>
        </div>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img
            src="../assets/icons8-notification-24.png"
            alt="img"
            style={{ borderRadius: ww(20), width: ww(30), height: ww(30) }}
          />

          <div
            style={{
              backgroundColor: "#eeeef5",
              paddingTop: ww(5),
              paddingBottom: ww(5),
              paddingLeft: ww(10),
              paddingRight: ww(10),
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: ww(15),
              marginLeft: ww(15),
            }}
          >
            <img
              src="../assets/pexels.jpg"
              alt="img"
              style={{ width: ww(30), height: ww(30), borderRadius: 20 }}
            />

            <div style={{ marginLeft: ww(8) }}>
              <h1 style={{ color: "#02022a", fontSize: ww(14) }}>
                Mary Stanfield
              </h1>
              <h1
                style={{ color: "gray", fontSize: ww(10), marginTop: ww(-3) }}
              >
                Tier 1 Account
              </h1>
            </div>
          </div>
        </div>
      </Header>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <NavBar />
        <AppContent />
      </div>
    </Container>
  );
}

export default App;
