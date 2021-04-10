import React, {useState, useEffect} from 'react';
import "./Header.scss";
import {Link} from "react-router-dom";
function Header() {
  const [open, setOpen] = useState(false);
  const changeClassNavBarButton = () =>{
    open === false ? setOpen(true) : setOpen(false);
  }

  const [openAuthorDropDown, setOpenAuthorDropDown] = useState(false);

  const changeClassDropDownAuthor = () =>{
    openAuthorDropDown === false ? setOpenAuthorDropDown(true) : setOpenAuthorDropDown(false);
  }

  const url = "http://macronfact.antonin-dev.fr/factjson/list";
  const [menuAuthor, setMenuAuthor] = useState();
  const linkAuthorArray = [];

  useEffect(() => {
    const asyncFunctionLinkAuthor = async() => {
      try {
        const dataListItem = await fetch(url);
        
        const jsonDataListItem = await dataListItem.json();
        
        const jsonData = jsonDataListItem.data;
        jsonData.forEach(value => {
          linkAuthorArray.push(
              <button className="header-item" onClick={changeClassNavBarButton}>
                <Link to={`/${value}`}>
                  {value}
                </Link>
              </button>
          );
        });
      } catch (exception) {
        linkAuthorArray.push("Error");
      }
      setMenuAuthor(linkAuthorArray);
    };
    asyncFunctionLinkAuthor();
  }, [menuAuthor])
    
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-icon">
          <div id="nav-icon" onClick={changeClassNavBarButton} className={open === true ? "nav-icon open" : "nav-icon"}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <div className="header-list">
          <button className="header-item"><Link to="/all">All</Link></button>
          <button className="header-item"><Link to="/random">Random</Link></button>
          <div className={openAuthorDropDown === true ? "header-item display-author-link show" : "header-item display-author-link"}>
            <button onClick={changeClassDropDownAuthor}>Authors</button>
            {menuAuthor}
          </div>
        </div>
        <input className="search-bar" type="text"/>
      </div>
      <div id="toggle-header" className={open === true ? "toggle-header-item active" : "toggle-header-item"}>
          <button className="header-item" onClick={changeClassNavBarButton}><Link to="/all">All</Link></button>
          <button className="header-item" onClick={changeClassNavBarButton}><Link to="/random">Random</Link></button>
          <button className="header-item" onClick={changeClassDropDownAuthor}>
            <div className={openAuthorDropDown === true ? "author-link hide" : "author-link"}>Authors</div>
            <div className={openAuthorDropDown === true ? "display-author-link show" : "display-author-link"}>
              {menuAuthor}
            </div>
          </button>
      </div>
    </div>
  )
}

export default Header
