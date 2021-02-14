import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const SinglePost = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  return (
    <div>
      <p>{post.title}</p>
      <p>{post.content}</p>
      <Link to={`/edit/${post.id}`}>Edit Post</Link>
    </div>
  )
}
