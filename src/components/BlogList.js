import React from 'react'
import BlogListItem from './BlogListItem'


export default (props) => {
    
    return (
        <div>
            {props.posts.length === 0 ? null :
            props.posts.map((post) => {
                return (
                    <BlogListItem key={post.id} {...post} />
                )
            })
            }
        </div>
    )
}