import React from 'react';
import './PostCard.css';
import { BiComment } from 'react-icons/bi';
import { RiShareForwardLine } from 'react-icons/ri';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineUp, AiOutlineDown } from 'react-icons/ai';

const PostCard = ({ post }) => {
    const postPublistAt = new Date(post.created_utc * 1000).toLocaleString()

    return (
        <div className="post-card">
            <img src={post.thumbnail} alt={post.title} className="post-card-image" />
            <div className="post-info">
                <h3 className='post-title'>{post.title}</h3>
                <div className='created-container'>
                    <p className='authorDetails'>Posted by <span className='post-title'>{post.author}</span></p>
                    <p className='publishedAt'>{postPublistAt}</p>
                </div>


            </div>
            <div className='engagment-upvoting'>
                <div className="engagement">
                    <span className='commentsElement'> <BiComment className='shareicon' /> {post.num_comments} Comments</span>
                    <span className='commentsElement'> <RiShareForwardLine className='shareicon' /> {post.downs} Shares</span>
                    <span className='commentsElement'> <BsThreeDots className='shareicon' /> More</span>
                </div>
                <div className='voting '>
                    <span className='upvoting'><AiOutlineUp /></span>
                    <span className='score'>{Math.round((post.ups / 1000))}K</span>
                    <span className='upvoting'><AiOutlineDown /></span>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
