import React, {Component} from "react";
import {Menu, Dropdown} from "antd";

import Reset from "./Function/Reset";
import Search from "./Function/Search";
import History from "./Function/History";

import "./common.css";

const menu = (
  <Menu>
    <Menu.Item>
      <Reset />
    </Menu.Item>
    <Menu.Item>
      <Search />
    </Menu.Item>

    <Menu.Divider />

    <Menu.Item>
      <History />
    </Menu.Item>
  </Menu>
);

class Function extends Component {
  render() {
    return (
      <Dropdown overlay={menu} trigger={["click"]} overlayClassName="nice-overlay">
        <a className="nice-menu-link" href="#">
          功能
        </a>
      </Dropdown>
    );
  }
}

export default Function;
