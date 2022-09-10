import React from 'react'
import MiniDrawer from '../../../layouts/Drawer/Drawer'
import { motion } from "framer-motion";

const ProductCreate = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MiniDrawer />
    </motion.div>
  );
}

export default ProductCreate