import React from "react";
import "./Header.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3P0-WYoj8-FxOaGX72wa-xunLDmdtwaMNcA&usqp=CAU"
        alt=""
      />
      <div className="header__search">
        <input
          className="header__searchInput"
          placeholder="Search Zax"
          type="text"
        />
        <SearchIcon className="header__searchIcon" />
      </div>


      <div className="header__nav"> 
      <Link to="/login">
      <div className="header__option">
      <span className="header__optionLineOne">
        Guest 
      </span>
      <span className="header__optionLineTwo">
       Sign In 
      </span>
      </div>
      </Link>
      </div>

      
      <div className="header__option">
        <span className="header__optionLineOne">Returns</span>
        <span className="header__optionLineTwo">& Orders</span>
      </div>
      <div className="header__option">
        <span className="header__optionLineOne">Your</span>
        <span className="header__optionLineTwo">Prime</span>
      </div>

      <div className="header__optionBasket">
        <span className="header__optionLineTwo header__basketCount">
            <StorefrontIcon/>
            </span> 
      </div>
    </div>

  );
}

export default Header;
