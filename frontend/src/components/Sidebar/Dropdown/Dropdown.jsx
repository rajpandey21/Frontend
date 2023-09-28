import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Dropdown.css';


const Dropdown = (props) => {
const[ dropdown,setDropdown]=useState(false);
const Dtoggle =()=> setDropdown(!dropdown)

  const servicedropdown = [

    
    {
      id: 1,
      tittle: "marketing",
      path: "/marketing",
      cName: "submenu-item",
    },
    {
      id: 2,
      tittle: "promotion",
      path: "/promotion",
      cName: "submenu-item",
    },
    {
      id: 3,
      tittle: "advertising",
      path: "/advertising",
      cName: "submenu-item",
    },
    {
      id: 4,
      tittle: "selling",
      path: "/selling",
      cName: "submenu-item",
    },
  ];
  return (
    <div className="drop">
      <ul className={dropdown?"service-submenu clicked":"service-submenu"} onClick={Dtoggle}
        
      >
        {servicedropdown.map((item) => {
          return (
            <li key={item.id}   >
              <Link to={item.path} className={item.cName} onClick={Dtoggle}  >
                {item.tittle}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
