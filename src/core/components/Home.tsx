import { Container } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { getUsers } from "../../Api/admin/CategoryApi";
import MiniDrawer from "../../layouts/Drawer/Drawer";

const Home = () => {
  const getData = async () => {
    let res: any = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res);
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <MiniDrawer />
      <Container>
        <h1>Home page</h1>
      </Container>
    </>
  )
};

export default Home;
