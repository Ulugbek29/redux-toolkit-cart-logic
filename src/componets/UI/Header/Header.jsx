import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {totalCartItemsAmount} from "../../utils/totalCartItemsAmount"

const links = [
  { path: "/home_page", title: "Home" },
  { path: "/users", title: "Users" },
  { path: "/products", title: "Products" },
  { path: "/orders", title: "Orders" },
];

export default function Header() {
  const navigate = useNavigate();
  const productsInCart = useSelector((state)=> state?.cart?.items)
console.log(totalCartItemsAmount(productsInCart))
  console.log(productsInCart)
  return (
    <div className="fixed top-0 w-full h-[60px] flex items-center justify-between bg-[#131921]  px-[10%]">
      <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => navigate("/home_page")}>Logo</div>
      <div>
        <input
          className="py-2 px-3 bg-white border w-[500px] border-gray-200 rounded-lg outline-none"
          placeholder="Search product..."
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {links.map((link) => {
            return (
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? "text-orange-500" : "text-white")}
              >
                {link.title}
              </NavLink>
            );
          })}
        </div>
        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/cart_page")}
        >
          <div className="text-3xl">
            <ShoppingCartIcon fontSize="inherit" className="text-white" />
          </div>
          <span className="absolute bottom-[-5px] right-[-5px] w-[16px] h-[16px] rounded-full bg-orange-500 text-xs font-semibold flex items-center justify-center text-white">
            {totalCartItemsAmount(productsInCart)}
          </span>
        </div>
      </div>
    </div>
  );
}
