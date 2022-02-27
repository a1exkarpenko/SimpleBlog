import React, { FC, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import "./PostPage.scss"
import { useDispatch } from 'react-redux';
import { deletePost } from '../../store/reducers/postReducer';

const PostPage: FC = () => {

    const params = useParams()
    const navigate = useNavigate()

    const { posts } = useTypedSelector(state => state.post)
    const dispatcher = useDispatch()

    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')

    const deleteHandle = () => {
        if (typeof params.id === 'string') {
            dispatcher(deletePost(params.id))
            navigate('/')
        }
    }

    useEffect(() => {
        const post = posts.find(post => post.id === params.id)
        if (!post)
            return navigate('/not-found', { replace: true })

        setTitle(post.title)
        setBody(post.body)
    }, [params.id])

    return (
        <div className='post-page'>
            <h1 className="post-page__title">{title}</h1>
            <p className="post-page__body">{body}</p>
            <div className="post-page__btns">
                <button type='button'
                    className="post-page__btn"
                    onClick={() => navigate(-1)}>Назад</button>
                <button type='button'
                    className="post-page__btn red"
                    onClick={deleteHandle}>Удалить</button>
            </div>
        </div>
    )
}

export default PostPage