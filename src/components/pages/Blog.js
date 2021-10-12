import React from 'react'
import BlogHeader from '../BlogHeader'
import BlogContent from '../BlogContent'
import Navbar from '../Navbar';


function Blog() {
    return (
        <>
        <Navbar/>
        <div className="blog-container">
            <BlogHeader/>
            <BlogContent/>
        </div>
        </>
    )
}

export default Blog
