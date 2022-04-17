import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, ProfileOutlined, FileProtectOutlined, SmileOutlined }
    from '@ant-design/icons';

const Nav = () => {

  const loc = useLocation();
  console.log(loc);
  const splitLoc = loc.pathname.split("/");
  console.log(splitLoc);
  const key = splitLoc[1] && splitLoc[1].length > 0 ? splitLoc[1] : "home";
  console.log(key);

  return (
    <div>
      <Menu selectedKeys={[key]} mode="horizontal">
        <Menu.Item key='home'>
          <Link to={'/'}>
            <HomeOutlined />
            Home
          </Link>
        </Menu.Item>

          <Menu.Item key='morepublic'>
            <Link to='/morepublic'>
            <SmileOutlined />
              More
            </Link>
          </Menu.Item>

        <Menu.Item key='profile'>
          <Link to='/profile'>
            <ProfileOutlined />
            Profile
          </Link>
        </Menu.Item>

        <Menu.Item key='protected'>
          <Link to='/protected'>
            <FileProtectOutlined />
            Protected
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Nav;
