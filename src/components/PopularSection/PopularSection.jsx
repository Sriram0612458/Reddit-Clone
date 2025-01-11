import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import PostCard from '../PostCard/PostCard';
import './PopularSection.css';
import { ClipLoader } from 'react-spinners';

const PopularSection = () => {
    const [posts, setPosts] = useState([]);
    const [sort, setSort] = useState('hot');
    const [activeButton, setActiveButton] = useState('hot');
    const [loading, setLoading] = useState(false);  // Loading state for spinner

    const fetchPosts = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://www.reddit.com/r/popular/${sort}/.json?limit=5`);
            setPosts(response.data.data.children);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }, [sort]);

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);  // Add fetchPosts here

    const buttonClicking = (option) => {
        setActiveButton(option);
        setSort(option);
    };

    return (
        <section className="popular-section">
            <div className='popularHeading'>
                <h2 className='pop-heading'>Popular</h2>
                <div className="sort-options">
                    {['hot', 'new', 'controversial', 'rising', 'top'].map(option => (
                        <button className={`list-button ${activeButton === option ? "active" : ""}`} key={option} onClick={() => buttonClicking(option)}>{option}</button>
                    ))}
                </div>
            </div>
            <div className="posts">
                {loading ? (
                    <div className="loading-spinner">
                        <ClipLoader size={50} color="orange" loading={loading} />
                    </div>
                ) : (
                    posts.map(post => (
                        <PostCard key={post.data.id} post={post.data} />
                    ))
                )}
            </div>
        </section>
    );
};

export default PopularSection;
