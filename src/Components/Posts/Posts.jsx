import React from 'react';
import p from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
	return (
		<section className={p.posts}>
			<Post />
			<Post />
			<Post />
			<Post />
		</section>
	);
}
export default Posts;