import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
// import styled from 'styled-components';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

// const SearchInput = styled(Input.Search)`
//     vertical-align: middle;
// `;

const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const style = useMemo(() => ({ verticalAlign: 'middle' }))
    return (
        <div>
            <Menu mode='horizontal'>
                <Menu.Item>
                    <Link href='/'><a>홈</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href='/profile'><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                <Input.Search enterButton style={style} />
                </Menu.Item>
                <Menu.Item>
                    <Link href='/signup'><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            {/* gutter : 컬럼사이의 간격 */}
            <Row gutter={8}>
                <Col xs={24} md={6} >
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
                </Col>
                <Col xs={24} md={12} >
                    {children}
                </Col>
                <Col xs={24} md={6} >
                    <a href='https://gihongpark.github.io/' target='_blank' rel='noreferrer noopener'>Made by Gipark</a>
                </Col>
            </Row>
        </div>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;