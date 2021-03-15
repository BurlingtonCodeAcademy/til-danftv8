import React from 'react'

export default function Home() {
    return (
        <div>
            {/* User Input Form */}
            <h1>Create Post</h1>
            <form action='/text-storage' method='POST' >
                <input type="text" name="title" placeholder="Title" />
                <input type="text" name="author" placeholder="Author" />
                <input type="text" name="content" placeholder="Content" />
                <input type="submit" />
            </form>
        </div>
    )
}
