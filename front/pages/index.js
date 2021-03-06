import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
    const dispatch = useDispatch();
    const { me } =useSelector((state) => state.user);
    const { mainPosts, hasMorePost, loadPostsLoading } = useSelector((state) => state.post);

    useEffect(() => {
        dispatch({
            type: LOAD_POSTS_REQUEST,
        });
    }, []);
    
    return (
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </AppLayout>
    )
};

export default Home;