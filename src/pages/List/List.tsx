import React, { FC } from 'react'
import "./List.scss"
import PostItem from '../../components/PostItem/PostItem';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const List: FC = () => {

    const { posts } = useTypedSelector(state => state.post)

    if (!posts.length)
        return(
            <p className='post-list__empty-text'>Пока нет постов</p>
        )

    return (
        <ul className='post-list'>
            {
                posts.map(item => <PostItem id={item.id} title={item.title} body={item.body} key={item.id} />)
            }
        </ul>
    )
}

export default List