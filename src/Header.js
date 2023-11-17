import React from "react";
import "./Header.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { Link } from "react-router-dom";



import { useStateValue } from './StateProvider'
// import { auth } from './Firebase'

function Header() {
   const [{ basket, user}, dispatch] = useStateValue();

  // const handleAuthentication = () => {
  //   if (user) {
  //     auth.signOut()
  //   }
  // };
  return (

    <div className="header">
      <Link to="/home">

      <img
        className="header__logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3P0-WYoj8-FxOaGX72wa-xunLDmdtwaMNcA&usqp=CAU" 
        alt="" 
      />
      </Link>
      <div className="header__search">
        <input
          className="header__searchInput"
          placeholder="Search Zax"
          type="text"
        />
        <SearchIcon  className="header__searchIcon" />
      </div>




        <Link to="/server">      
          <div class="header__option">
           <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 
           hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-xl ... "> 
            <span>Sell</span> 
          </button>
          </div>
          </Link>

      <Link to="/checkout">
      <div className="header__optionBasket">
          <StorefrontIcon />
        <span className="header__optionLineTwo header__basketCount">
          {basket?.length > 0 ? (
            <span>{basket.length}</span>
          ) : null}
        </span>
      </div>
      </Link>
    </div>



  );
}

export default Header;
