import { useEffect } from "react"
import axios, {AxiosResponse} from "axios"
import { Container } from "@mui/material"
import MiniDrawer from "../../layouts/Drawer/Drawer"
import request from "../../Api/request"
const Category = () => {
  useEffect(() => {
    // getData()
    request({method: "GET", url: "users"})
    .then(res => {
      console.log(res);
      
    })
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      console.log(res);
      
    })
  }, [])
  return (
    <>
      <MiniDrawer />
      <Container>
        <h1>Category page</h1>
      </Container>
    </>
  )
}

export default Category