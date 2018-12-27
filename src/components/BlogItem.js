import React from 'react'
import { connect } from 'react-redux'

class BlogItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div>
                {this.props.posts ? (
                    <div>
                        <h1>{this.props.posts.content.title}</h1>
                        <p>{this.props.posts.content.text}</p>
                    </div>) : null}
            </div>
        )
    }

}

const mapStateToProps = (state, props) => {
    return {
        posts: state.posts.find((post) => post.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(BlogItem)