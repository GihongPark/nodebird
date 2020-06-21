import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const followingList = [{nickname: '기박'}, {nickname: '홍길동'}, {nickname: '임꺽정'},];
    const followerList = [{nickname: '기박'}, {nickname: '홍길동'}, {nickname: '임꺽정'},];

    return (
        <>
            <Head>
                <title>프로필 | Node Bird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header='팔로잉 목록' data={followingList} />
                <FollowList header='팔로워 목록' data={followerList} />
            </AppLayout>
        </>
    )
};

export default Profile;