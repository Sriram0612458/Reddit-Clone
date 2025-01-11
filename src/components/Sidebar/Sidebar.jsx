import React from 'react';
import './Sidebar.css';


const favorites = [
    { icon: '👤', name: 'r/funymore', count: 156 },
    { icon: '📰', name: 'r/breakingnews', count: 12 },
    { icon: '❤️', name: 'r/lovestory' },
    { icon: '🎮', name: 'r/gamingfun', count: 68 },
];

const redditFeeds = [
    { icon: '🎬', name: 'r/moview', count: 4 },
    { icon: '🎮', name: 'r/gaming' },
    { icon: '📸', name: 'r/pics', count: 32 },
    { icon: '🎁', name: 'r/gifs' },
];

const community = [
    { icon: '👤', name: 'r/funymore' },
    { icon: '📰', name: 'r/breakingnews' },
    { icon: '🎮', name: 'r/gaming', count: 43 },
    { icon: '❤️', name: 'r/lovestory', count: 12 },
];

export default function Sidebar() {
    return (
        <div className="sidebar">
            <select className='dropDown' >
                <option value="hot item-text">Filter by</option>
            </select>
            {[
                { title: 'FAVORITES', items: favorites },
                { title: 'REDDIT FEEDS', items: redditFeeds },
                { title: 'COMMUNITY', items: community },
            ].map((section) => (
                <div key={section.title}>
                    <div className="section-header">
                        <h3 className="section-title">{section.title}</h3>
                        <span className="section-all">All</span>
                    </div>
                    {(section.title !== "FAVORITES") ? <hr /> : null}
                    {section.items.map((item) => (
                        <div key={item.name} className="list-item">
                            <div className="item-content">
                                <span>{item.icon}</span>
                                <span className="item-text">{item.name}</span>
                            </div>
                            {item.count && (
                                <span className="item-count">{item.count}</span>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
