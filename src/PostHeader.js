import React from 'react';
import PropTypes from 'prop-types';

import './PostHeader.css';

const PostHeader = ({ post }) => (
  <div className="post-header">
    <img alt="" className="post-avatar" src={post.avatar} />
    <div>
      <h2 className="post-author">{post.author}</h2>
      <p className="post-timestamp">{post.timestamp}</p>
    </div>
  </div>
);

PostHeader.propTypes = {
  post: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostHeader;
