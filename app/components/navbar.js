import {
  View,
  Pressable,
  Text,
  StyleSheet,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

const logo = require("../../assets/lof.png");
const sand = "#e3c088";
const lightblue = "#68c8cb";
const blue = "#3a899b";
const darkblue = "#191516a";

export default function NavbarComp() {
  const [contents, setContents] = useState(false);
  const [wildlife, setWildlife] = useState(false);
  const {currentUser, logout} = useAuth(); // Get the current user if they are logged in

  const hamPress = () => {
    if (contents) {
      setContents(false);
      setWildlife(false);
    } else {
      setContents(true);
    }
  };

  const wildPress = () => {
    if (wildlife) {
      setWildlife(false);
    } else {
      setWildlife(true);
    }
  };

  return (
    <Navbar className="bg-light" style={{ flexDirection: "row", display: "flex" }}>
      <Container fluid>
        <Navbar.Brand href="/" className="justify-content-left">
          <Image
            style={{ width: 150, height: 50, resizeMode: "contain" }}
            source={logo}
          />
        </Navbar.Brand>
        <Nav className="justify-content-end flex-row" as="ul">
        {currentUser ? (
          <>
            <Nav.Item as="li">
              <Text style={{color:blue, fontSize: 13}}>
                Logged in as: 
                <br />
                {currentUser.email}
              </Text>
            </Nav.Item>
            <Nav.Item as="li">
              <Button onClick={logout} varient="outline-dark" className="bg-white" size="sm" style={{color: blue}}> 
                Logout
              </Button>
            </Nav.Item>
          </>
          ) : (
            <>
              <Nav.Item as="li">
                <Nav.Link href="/login" style={{color:blue}}>
                  Login 
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/signup" style={{color:blue}}>Sign Up</Nav.Link>
              </Nav.Item>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

const styles = StyleSheet.create({
  navbarcontainer: {
    padding: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  ham: {
    width: 50,
    margin: 5,
  },
  text: {
    fontSize: 20,
    margin: 30,
    color: blue,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 20,
    margin: 30,
    marginLeft: 60,
    color: blue,
  },
  buffer: {
    height: "8vh",
    width: "100vw",
  },
  buffer2: {
    height: "100vh",
    width: "100vw",
    borderTopWidth: 2,
  },
  dropdown: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  drop: {
    margin: 30,
    alignSelf: "flex-end",
  },
  item2: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  item: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
});
