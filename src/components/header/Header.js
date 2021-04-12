import React, {useState, useEffect} from 'react';
import "./Header.scss";
import {Link} from "react-router-dom";
function Header() {
  const [openBurger, setOpenBurger] = useState(false);
  const openBurgerFunction = () =>{
    openBurger === false ? setOpenBurger(true) : setOpenBurger(false);
    console.log("openBurgerFunction");
  }
  
  const [openAuthorMobile, setOpenAuthorMobile] = useState(false);
  const openAuthorMobileFunction = () =>{
    openAuthorMobile === false ? setOpenAuthorMobile(true) : setOpenAuthorMobile(false);
    console.log("function openAuthorMobileFunction");
  }

  const [openAuthorDesktop, setOpenAuthorDesktop] = useState(false);
  const openAuthorDesktopFunction = () =>{
    openAuthorDesktop === false ? setOpenAuthorDesktop(true) : setOpenAuthorDesktop(false);
    console.log("function openAuthorDesktopFunction");
  }

  const url = "http://macronfact.antonin-dev.fr/factjson/list";
  const [menuAuthorMobile, setMenuAuthorMobile] = useState();
  const linkAuthorArrayMobile = [];

  const [menuAuthorDesktop, setMenuAuthorDesktop] = useState();
  const linkAuthorArrayDesktop = [];
  useEffect(() => {
    const asyncFunctionLinkAuthor = async() => {
      try {
        const dataListItem = await fetch(url);
        
        const jsonDataListItem = await dataListItem.json();
        
        const jsonData = jsonDataListItem.data;
        jsonData.forEach(value => {
          linkAuthorArrayMobile.push(
              <button className="author-item-mobile" onClick={openAuthorMobileFunction, openBurgerFunction}>
                <Link to={`/auteurs/${value}`}>
                  {value}
                </Link>
              </button>
          );

          linkAuthorArrayDesktop.push(
              <button className="author-item-desktop" onClick={openAuthorDesktopFunction}>
                <Link to={`/auteurs/${value}`}>
                  {value}
                </Link>
              </button>
          );
        });
      } catch (exception) {
        linkAuthorArrayMobile.push("Error");
        linkAuthorArrayDesktop.push("Error");
      }
      setMenuAuthorMobile(linkAuthorArrayMobile);
      setMenuAuthorDesktop(linkAuthorArrayDesktop);
    };
    asyncFunctionLinkAuthor();
  }, [menuAuthorMobile])
    
  return (
    <div className="header">
      <div className="desktop">
        <div className="icon">
          <div onClick={openBurgerFunction} className={openBurger === true ? "burger open" : "burger"}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="list-item-desktop">
          <button className="item-desktop"><Link to="/all">All</Link></button>
          <button className="item-desktop"><Link to="/random">Random</Link></button>
          <div className="item-desktop">
            <button class="item-desktop" onClick={openAuthorDesktopFunction}>Authors</button>
            <div className={openAuthorDesktop === true ? "author-list item-desktop show" : "author-list item-desktop"}>
              {menuAuthorDesktop}
            </div>
          </div>
        </div>
      </div>
      <div className={openBurger === true ? "mobile active" : "mobile"}>
          <button className="item-mobile" onClick={openBurgerFunction}><Link to="/all">All</Link></button>
          <button className="item-mobile" onClick={openBurgerFunction}><Link to="/random">Random</Link></button>
          <button className="item-mobile" onClick={openAuthorMobileFunction}>
            <div className={openAuthorMobile === true ? "author-item-mobile hide" : "author-item-mobile"}>Authors</div>
            <div className={openAuthorMobile === true ? "author-list-mobile show" : "author-list-mobile"}>
              {menuAuthorMobile}
            </div>
          </button>
      </div>
    </div>
  )
}

export default Header
