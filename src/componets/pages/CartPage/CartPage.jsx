import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeAllOrders,
  removeOrder,
  orderTotalCost,
} from "../../../redux/cartSlice";
import { totalCartItemsAmount } from "../../utils/totalCartItemsAmount";
import BasicModal from "../../common/Modal/Modal";

export default function CartPage() {
    const [openModal, setOpenModal] =useState(false);
    const handleOpen = () => {
        setOpenModal(true)
    };
    const handleClose = () => {
        setOpenModal(false);
        removeAllItems()
    }

  const products = useSelector((state) => state?.cart?.items);
  const totalCost = useSelector((state) => state?.cart?.totalCost);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderTotalCost());
  }, [dispatch]);

  const addItem = (data) => {
    dispatch(addToCart(data));
    dispatch(orderTotalCost());
  };

  const removeItem = (productId) => {
    dispatch(removeOrder(productId));
    dispatch(orderTotalCost());
  };

  const removeAllItems = () => {
    dispatch(removeAllOrders());
  };

  console.log(totalCost);
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <h2 className="text-4xl font-semibold">Cart</h2>

      <div className="flex gap-4">
        <div className="flex-[1.5] bg-white p-4 rounded-lg">
          <div className="flex justify-between pb-2 border-b border-[#d3d3d3]">
            <h2 className="text-lg font-semibold">
              Total: {totalCartItemsAmount(products)} items
            </h2>
            <div
              onClick={() => removeAllItems()}
              className="flex items-center gap-2 text-lg cursor-pointer hover:text-red-500"
            >
              <DeleteIcon fontSize="medium" />
              <p>Delete cart</p>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-4">
            {products.map((itemObj, i) => {
              return (
                <div className="flex justify-between">
                  <div className="flex items-start gap-6">
                    <div className="w-[70px] h-[100px] border rounded-lg overflow-hidden">
                      <img
                        src={itemObj.item.thumbnail}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-lg font-semibold">
                      {itemObj.item.title}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div
                      onClick={() => removeItem(itemObj.item.id)}
                      className="flex cursor-pointer hover:text-red-500"
                    >
                      <DeleteIcon fontSize="medium" />
                      <p>Delete</p>
                    </div>
                    <h2 className="text-2xl font-semibold">
                      ${itemObj.item.price}
                    </h2>
                    <div className="flex items-center gap-2">
                      <span
                        onClick={() => removeItem(itemObj.item.id)}
                        className="w-[40px] h-[40px] flex items-center justify-center bg-[#f6f6f6] cursor-pointer rounded-lg "
                      >
                        <RemoveIcon />
                      </span>
                      <span className="text-2xl">{itemObj.quantity}</span>
                      <span
                        onClick={() => addItem(itemObj.item)}
                        className="w-[40px] h-[40px] flex items-center justify-center bg-[#f6f6f6] cursor-pointer rounded-lg"
                      >
                        <AddIcon />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-[1] h-fit flex flex-col justify-between gap-4 bg-white rounded-lg p-4">
          <div>
            <div className="flex justify-between text-lg font-semibold items-start mb-2">
              <h2 className="text-2xl">Total cost</h2>
              <div className="text-xl">${totalCost}</div>
            </div>
            <div className="w-full h-[1px] bg-[#d3d3d3]"></div>
            {/* <div className="flex justify-between text-base font-semibold text-[#878787] items-start">
              <h2>Items 2</h2>
              <div>1523000</div>
            </div> */}
            {products.map((product)=> {
                return(
            <div key={product.id} className="flex justify-between items-start text-base font-semibold text-[#878787] mb-4">
              <div className="flex gap-2">
                <h2>{product.item.title}</h2>
                <span>(x{product.quantity})</span>
              </div>
              <div>${product.item.price * product.quantity}</div>
            </div>
                )
            })}
          </div>
          <button
            onClick={()=> handleOpen()}
            className="w-full p-4 rounded-lg bg-[#131921] text-white"
            
          >
            Checkout
          </button>
        </div>
      </div>
      {openModal && <BasicModal openModal={openModal} handleClose={handleClose} handleOpen={handleOpen} totalCost={totalCost}/>}
    </div>
  );
}
