import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

import './Post.css';

const Post = ({ post }) => (
  <div className="post-container">
    <PostHeader post={post} />
    <p className="post-text">{post.content}</p>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
