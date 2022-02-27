import React, { FC } from 'react'
import "./PostItem.scss"
import { Link } from 'react-router-dom'
import IPost from '../../interfaces/IPost';

const PostItem: FC<IPost> = ({ id, title, body }) => {
    return (
        <li className='post-item'>
            <Link to={`/post/${id}`} className="post-item__link">
                <p className="post-item__title">{title}</p>
                <p className="post-item__body">{body}</p>
            </Link>
        </li>
    )
}

export default PostItem