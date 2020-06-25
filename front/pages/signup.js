import React, { useCallback, useState, useEffect } from 'react';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';
import { Router } from 'next/dist/client/router';
import { SIGN_UP_REQUEST } from '../reducers/user';

const ErrorMessage = styled.div`
    color: red;
`;

const Signup = () => {
    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');

    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password]);

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, [term]);

    const dispatch = useDispatch();
    const { signUpLoading, me } = useSelector((state) => state.user);

    useEffect(() => {
        if (me) {
          alert('메인페이지로 이동합니다.');
          Router.push('/');
        }
      }, [me && me.id]);

    const onsubmit = useCallback(() => {
        if(password !== passwordCheck) {
            return setPasswordError(true);
        }
        if(!term) {
            return setTermError(true);
        }
        
        return dispatch({
            type: SIGN_UP_REQUEST,
            data: {
              email,
              password,
              nickname,
            },
          });
    }, [email, password, passwordCheck, term]);

    return (
        <AppLayout>
            <Head>
                <title>회원가입 | Node Bird</title>
            </Head>
            <Form onFinish={onsubmit}>
                <div>
                    <label htmlFor='user-id'>이메일</label>
                    <br />
                    <Input name='user-id' type='email' value={email} required onChange={onChangeEmail} />
                </div>
                <div>
                    <label htmlFor='user-nick'>닉네임</label>
                    <br />
                    <Input name='user-nick' value={nickname} required onChange={onChangeNickname} />
                </div>
                <div>
                    <label htmlFor='user-password'>비밀번호</label>
                    <br />
                    <Input name='user-password' type='password' value={password} required onChange={onChangePassword} />
                </div>
                <div>
                    <label htmlFor='user-id'>비밀번호체크</label>
                    <br />
                    <Input name='user-password-check' type='password' value={passwordCheck} required onChange={onChangePasswordCheck} />
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage> }
                </div>
                <div>
                    <Checkbox name='user-term' checked={term} onChange={onChangeTerm}>회원가입에 동의합니다.</Checkbox>
                    {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button type='primary' htmlType='submit' loading={signUpLoading}>가입하기</Button>
                </div>
            </Form>
        </AppLayout>
    )
};

export default Signup;