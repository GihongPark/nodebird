import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import useInput from '../hooks/useInput';
import { loginRequestAction } from '../reducers/user';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;
const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = () => {
    const dispatch = useDispatch();
    const { logInLoading } = useSelector((state) => state.user);
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback(() => {
        console.log(email, password);
        dispatch(loginRequestAction());
    }, [email, password]);

    // const style = useMemo(() => ({ marginTop: 10, }), []);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor='user-id'>이메일</label>
                <br />
                <Input 
                    type='email'
                    name='user-email' 
                    value={email} 
                    onChange={onChangeEmail} 
                    required 
                />
            </div>
            <div>
                <label htmlFor='user-password'>비밀번호</label>
                <br />
                <Input 
                    type='password'
                    name='user-password' 
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
                <Button type='primary' htmlType='submit' loading={logInLoading}>로그인</Button>
                <Link href='/signup'><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    )
}

export default LoginForm;