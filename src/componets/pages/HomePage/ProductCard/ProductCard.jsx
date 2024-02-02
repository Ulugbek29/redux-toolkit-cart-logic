import React from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/cartSlice";

export default function ProductCard({ productData }) {
    const dispatch = useDispatch()

    const addProductCart = (data) => {
        dispatch(addToCart(data))
    }

  return (
    <div className="w-full shadow-lg rounded-lg overflow-hidden">
      <div className="w-full h-[300px]">
        <img src={productData.thumbnail} className="w-full h-full object-cover" />
      </div>
      <div className="h-[150px] flex flex-col justify-between gap-4 p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-1">
            <p className="text-sm font-semibold">{productData.title}</p>
            <span className="text-xs">({productData.rating})</span>
          </div>
          <div className="flex justify-center max-w-[60px] px-1 font-semibold rounded-sm bg-[#131921] text-white">
            {productData.stock}
          </div>
        </div>
        <div className="flex justify-between items-end">
        <div>
            <p className="text-gray-500 text-base line-through">${productData.price}</p>
            <p className="text-lg">${(productData.price - productData.price * productData.discountPercentage/100).toFixed(2)}</p>
        </div>
        <div onClick={()=> addProductCart(productData)} className="w-[40px] h-[40px] text-lg rounded-full flex items-center justify-center border cursor-pointer hover:bg-gray-100">
            <AddShoppingCartIcon fontSize="inherit" />
        </div>
        </div>

      </div>
    </div>
  );
}
