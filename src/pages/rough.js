import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { AddOutlined, RemoveOutlined } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { categories } from '../data';

const Product = () => {
  const { id } = useParams();

  // Find the category containing the product with the specified id
  const categoryWithProduct = categories.find((cat) =>
    cat.product.find((product) => product.id.toString() === id)
  );

  if (!categoryWithProduct) {
    // Handle the case where the category or product is not found
    return <div>Category or Product not found</div>;
  }

  // Find the specific product within the category
  const product = categoryWithProduct.product.find(
    (product) => product.id.toString() === id
  );

  return (
    <div>
      {product && (
        <div>
          <Announcement />
          <Navbar />
          <div className="wrapper p-[50px] flex">
            {/* Display product information here */}
            <div className="img flex-1 mr-[64px]">
              <img
                src={`/${product.img}`}
                className="w-[100%] h-[90vh] object-cover"
                alt={product.name}
              />
            </div>
            <div className="infocontainer flex-1">
              <div className="title font-medium text-4xl mb-[20px]">
                {product.name}
              </div>
              <div className="desc mb-[20px]">{/* Description goes here */}</div>
              <div className="price mb-[20px] text-[38px]">{`Rs. ${product.price}`}</div>

              {/* Other product details go here */}
            </div>
          </div>
          <Newsletter />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Product;
