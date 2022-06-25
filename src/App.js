import "./App.css";
import Character from "./pages/Character";
import headerLogo from "./assets/images/Rick-and-Morty.png";
import { Layout } from "antd";
import Detail from "./pages/Detail";

const { Header } = Layout;
function App() {
  return (
    <Layout style={{backgroundColor:"white",width:"100%",height:"100%"}}>
      <Header
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          height: "5rem",
          backgroundColor: "#FFA900",
          zIndex: "1",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <img src={headerLogo} alt="Rick and Morty header logo" />
      </Header>
      <Detail/>
      {/* <Character /> */}
    </Layout>
  );
}

export default App;
