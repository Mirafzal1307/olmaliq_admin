import { Container } from "@mui/material";
import { useEffect } from "react";
import { getUsersList } from "../../api/admin/AdminCategoryApi";
import MiniDrawer from "../../layouts/Drawer/Drawer";

const Home = () => {
  const getData = async () => {
    const res: any = await getUsersList();
    console.log(res);
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <MiniDrawer />
      <Container>
        <h1>Home page</h1>
      </Container>
    </>
  );
};

export default Home;