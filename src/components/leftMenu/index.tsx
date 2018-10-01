import React from 'react';
import routes from '@/router/routes';
const Style = require('../../assets/style/index.css');
import {Link} from 'react-router-dom';
import menu from '@/components/leftMenu/menu';
export interface IProps {
}

export interface IState {}

export default class LeftMenu extends React.Component<
  IProps,
  IState
> {
  render() {
    return (
      <div className={Style.leftMenu}>
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
          {menu(routes).map((menu: any, i: any) => {
            let subMenus = menu.children.map(
              (subMenu: any, j: any) => {
                return (
                  <li key={j}>
                    <Link to={subMenu.path}>
                      {subMenu.name}
                    </Link>
                  </li>
                );
              }
            );
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
  }
}
