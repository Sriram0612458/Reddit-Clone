import React from 'react';
import './PostCard.css';

const PostCard = ({ post }) => {
    const postPublistAt = new Date(post.created_utc * 1000).toLocaleString()
    return (
        <div className="post-card">
            <img src={post.thumbnail} alt={post.title} />
            <div className="post-info">
                <h3>{post.title}</h3>
                <p>{postPublistAt}</p>
                <p>Posted by {post.author}</p>
                <div className="engagement">
                    <span>{post.num_comments} Comments</span>
                    <span>{post.ups} Upvotes</span>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
