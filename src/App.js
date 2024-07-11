// App.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from "react-bootstrap";
import CreateNFT from "./createnft";

const App = () => {

  const connectWallet = async () => {
    try {
      if (!window.solana || !window.solana.isPhantom) {
        alert("Vi Phantom chua co tai ne tai di ban !");
        return;
      }
      const connected = await window.solana.connect();
      if (connected) {
        alert("da ket noi thanh cong!");
      }
    } catch (error) {
      console.error("ket noi k dc roi !");
    }
  }

  return (
    <div>
      <Navbar bg='dark' variant="dark">
        <Navbar.Brand>
          NFT APP
        </Navbar.Brand>
        <Nav>
          <Nav.Link>About Us</Nav.Link>
          <Nav.Link>Blogs</Nav.Link>
          <Nav.Link>Market Place</Nav.Link>
        </Nav>
        <Button onClick={connectWallet} variant="outline-success">Connect Wallet</Button>
      </Navbar>
      <main>
        <CreateNFT />
      </main>
    </div>
  );
};

export default App;
