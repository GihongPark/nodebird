import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';

const Profile = () => {
    return (
        <>
            <Head>
                <title>프로필 | Node Bird</title>
            </Head>
            <AppLayout>
                <div>프로필 페이지</div>
            </AppLayout>
        </>
    )
};

export default Profile;