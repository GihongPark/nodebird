import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;
const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    
    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id, password]);

    // const style = useMemo(() => ({ marginTop: 10, }), []);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor='user-id'>아이디</label>
                <br />
                <Input 
                    name='user-id' 
                    value={id} 
                    onChange={onChangeId} 
                    required 
                />
            </div>
            <div>
                <label htmlFor='user-id'>비밀번호</label>
                <br />
                <Input 
                    name='user-id' 
                    value={password} 
                    onChange={onChangePassword} 
                    required 
                />
            </div>

            {/* <div  style={{ marginTop: 10 }}> : 속성 값에 객체 넣으면 안됨. */}
            {/* {} === {} : false 이기 때문에 리액트에서 리렌더링이 일어남 -> styled-components 또는 useMemo 사용 */}

            {/* useMemo 사용 */}
            {/* <div style={style} > */}

            {/* styled-components 사용 */}
            <ButtonWrapper>
                <Button type='primary' htmlType='submit' loading={false}>로그인</Button>
                <Link href='/signup'><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    )
}

LoginForm.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
}

export default LoginForm;