
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from '../PostCard/PostCard';
import './PopularSection.css';

const PopularSection = () => {
    const [posts, setPosts] = useState([]);
    const [sort, setSort] = useState('hot');
    const [search, onSearch] = useState("")

    useEffect(() => {
        fetchPosts();
    }, [sort]);
    const onCLickSearchBtn = async () => {
        const filterData = await axios.get(`https://www.reddit.com/search.json?q=${search}`)
        const data = await filterData.data;
        console.log(data)
        setPosts([])
        setPosts(data.data.children)
    }

    const fetchPosts = async () => {
        const response = await axios.get(`https://www.reddit.com/r/popular/${sort}/.json?limit=10`).then((response) => setPosts(response.data.data.children))
            .catch((error) => console.error("Error fetching data:", error));
    };

    return (
        <section className="popular-section">
            <h2>Popular</h2>
            <div className="sort-options">
                {['hot', 'new', 'controversial', 'rising', 'top'].map(option => (
                    <button key={option} onClick={() => setSort(option)}>{option}</button>
                ))}
            </div>
            <div className="posts">
                {posts.map(post => (
                    <PostCard key={post.data.id} post={post.data} />
                ))}
            </div>
            <input type="text" placeholder="Find community or post" className="search-bar" onChange={(e) => onSearch(e.target.value)} />
            <button onClick={onCLickSearchBtn}>search</button>
        </section>
    );
};

export default PopularSection;