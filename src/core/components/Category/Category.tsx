import { Toolbar } from '@mui/material'
import { Container } from '@mui/system'
import MiniDrawer from '../../../layouts/Drawer/Drawer'
import LandingTop from '../LandingTop'
import CategoryCreate from './CategoryCreate'
import CategoryList from './CategoryList'
import CategoryListNone from './CategoryListNone'
import { categories } from './CategoryList'
 
const Category = () => {
  return (
    <>
      <MiniDrawer />
      <LandingTop />
      <Container>
        <Toolbar style={{padding: 0}} sx={{ justifyContent: "space-between" }}>
          <CategoryCreate />
          {categories.length === 0 ? <CategoryListNone /> : <CategoryList />}
        </Toolbar>
      </Container>
    </>
  );
}

export default Category