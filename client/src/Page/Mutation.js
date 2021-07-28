import { useRef } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';

import { createArticleMutation, editArticleContentMutation } from '../mutations';

const Muatation = () => {
  const contentRef = useRef();
  const authorNameRef = useRef();
  const editContentRef = useRef();


  const [createArticle] = useMutation(createArticleMutation);

  const [editArticleContent] = useMutation(editArticleContentMutation);

  return (
    <>
      <Link to="/">回 root</Link>
      <h1>Mutation!!</h1>
      <h2>Create Article</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          createArticle({
            variables: {
              content: contentRef.current.value,
              author: {
                name: authorNameRef.current.value,
              },
            },
          })
        }}
      >
        <div>
          <label>content: </label>
          <input ref={contentRef} name="content" />
        </div>
        <div>
          <label>authorName: </label>
          <input ref={authorNameRef} name="authorName" />
        </div>

        <button type="submit">create article</button>
      </form>

      <h1>Edit Article</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          editArticleContent({
            variables: {
              id: '1',
              content: editContentRef.current.value,
            },
          })
        }}
      >
        <div>
          <label>content: </label>
          <input ref={editContentRef} name="content" />
        </div>
        <button type="submit">edit article (id 1) content</button>
      </form>
    </>
  )
};

export default Muatation;