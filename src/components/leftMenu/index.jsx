import React from 'react';
import routes from '../../router/routes';
import '../../assets/style/index.css';
import {Link} from 'react-router-dom';
import menu from './menu';

const LeftMenu = () => (
  <div className="leftMenu">
    <ul>
      {/* <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/counter">counter</Link>
        <ul>
          <li>
            <Link to="/counter/page2">page2</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/counter2">counter2</Link>
      </li> */}
      {menu(routes).map((menu, i) => {
        let subMenus = menu.children.map((subMenu, j) => {
          return (
            <li key={j}>
              <Link to={subMenu.path}>{subMenu.name}</Link>
            </li>
          );
        });
        let menus = (
          <li key={i}>
            <Link to={menu.path}>{menu.name}</Link>
            <ul>{subMenus}</ul>
          </li>
        );
        return menus;
      })}
    </ul>
  </div>
);

export default LeftMenu;
