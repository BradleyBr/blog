import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/post'
import configureStore from '../store/configureStore'
import database from '../firebase/firebase'
import BlogItem from './BlogItem'
import BlogList from './BlogList'



class BlogPage extends React.Component {
    constructor(props) {
        super(props)
    }
        
    render() {
        return (
            <div>
                <BlogList posts={this.props.posts} />
                
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => ({
    addPost: (post) => dispatch(addPost(post))
})

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage)