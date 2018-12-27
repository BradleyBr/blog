import React from 'react'
import { Link } from 'react-router-dom'
import database from '../firebase/firebase'
import { connect } from 'react-redux'

export default class BlogItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Link to={`/blog/${this.props.id}`}>
                <h1>{this.props.content.title}</h1>
                <p>{this.props.content.text}</p>
                <br />
            </Link>
        )
    }
}