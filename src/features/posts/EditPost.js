import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { postEdited } from './postsSlice'

export const EditPost = ({ match }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)

  const { postId } = match.params

  const dispacth = useDispatch()

  const history = useHistory()

  const onSavePostClicked = () => {
    dispacth(
      postEdited({
        id: postId,
        title,
        content,
      })
    )
    history.push(`/posts/${postId}`)
  }
  return (
    <section>
      <h2>Edit a post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  )
}
