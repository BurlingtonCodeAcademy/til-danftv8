//Click Links for Page Navigation
import React from 'react'
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div>
            <Link className="click-links" to={"/"}>
                Create Post
                </Link>
            <Link className="click-links" to={"/facts"}>
                All Posts
                </Link>
            <Link className="click-links" to={"/facts/:objectId"}>
                Edit Post
                </Link>
        </div>
    )
}
