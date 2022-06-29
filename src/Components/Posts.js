import React, {Fragment} from 'react'
import PostCard from './PostCard'

export default function Posts() {
    return (
        <div className="blog-container">
            <div className="blog-posts">
                <PostCard/>
                <PostCard/>
                <PostCard/>
            </div>
            <div className="blog-categories">
                <h3>Blog categories</h3>
            </div>
        </div>
    )
}
