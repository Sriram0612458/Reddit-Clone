import React from 'react';
import './Sidebar.css';
import { Home, TrendingUp, Users } from 'lucide-react';

const favorites = [
    { icon: '👤', name: 'r/funymore', count: 156 },
    { icon: '📰', name: 'r/breakingnews', count: 12 },
    { icon: '❤️', name: 'r/lovestory' },
    { icon: '🎮', name: 'r/gamingfun', count: 68 },
];

const redditFeeds = [
    { icon: '🎬', name: 'r/moview', count: 4 },
    { icon: '🎮', name: 'r/gaming', count: 32 },
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
            <div className="space-y-2">
                <div className="nav-item">
                    <Home className="w-5 h-5" />
                    <span>Home</span>
                </div>
                <div className="nav-item">
                    <TrendingUp className="w-5 h-5" />
                    <span>Popular</span>
                </div>
                <div className="nav-item">
                    <Users className="w-5 h-5" />
                    <span>All</span>
                </div>
            </div>

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
