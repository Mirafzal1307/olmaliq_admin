import { Container } from "@mui/material";
import axios, {AxiosResponse} from 'axios';
import { useEffect } from "react";
import { getUsers } from "../../Api/admin/CategoryApi";
import MiniDrawer from "../../layouts/Drawer/Drawer";
import HttpClient from "../../Api/HttpClient";
import { Iuser } from "../../Api/admin/type";
const Home = () => {
async function getData () {
    // let list = await 
    // console.log(list);
    try {
    //  const  res = await fetch("https://jsonplaceholder.typicode.com/users")
      // const  res = await axios.request<Iuser>({
      //   method: 'get',
      //   url: "https://jsonplaceholder.typicode.com/users"
      // })
      interface getUsetList {
        data: Iuser[]
      }
      const res= await HttpClient().get<getUsetList>('users')
    console.log(res, HttpClient());
    } catch(er) {
      console.log(er);
      
    }
  }
  interface getUsetList {
    data: Iuser[]
  }
  useEffect(() => {
    getData()
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res: AxiosResponse) => {
      console.log(res);
      
    })
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
