import React, { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { createPost } from '../../store/reducers/postReducer'
import "./CreatePost.scss"
import { v4 } from 'uuid'
import IPost from './../../interfaces/IPost';
import { useNavigate } from 'react-router-dom';

type Inputs = {
    title: string,
    body: string,
}

const CreatePost: FC = () => {

    const dispather = useDispatch()

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = data => {
        const id = v4()
        const post: IPost = { ...data, id }
        dispather(createPost(post))
        navigate('/')
    }

    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <div className="form__input-wrap">
                <p className="form__input-label">Заголовок</p>
                <input type="text"
                    placeholder="Макс. 100 символов"
                    className="form__input"
                    {...register('title', {
                        required: "Поле обязательно к заполнению",
                        maxLength: {
                            value: 1000,
                            message: "Максимум 1000 символов"
                        },
                        minLength: {
                            value: 1,
                            message: "Минимум 10 символов"
                        },
                    })} />
                {errors?.title
                    &&
                    <p className="form__error">{errors?.title?.message}</p>
                }
            </div>
            <div className="form__input-wrap">
                <p className="form__input-label">Содержание</p>
                <textarea className="form__textarea"
                    placeholder="Макс. 1000 символов"
                    {...register('body', {
                        required: "Поле обязательно к заполнению",
                        maxLength: {
                            value: 10000,
                            message: "Максимум 10000 символов"
                        },
                        minLength: {
                            value: 10,
                            message: "Минимум 10 символов"
                        },
                    })} />
                {errors?.body
                    &&
                    <p className="form__error">{errors?.body?.message}</p>
                }
            </div>
            <div className="form__btns">
                <button type='button'
                    className='form__btn'
                    onClick={() => navigate(-1)}>Назад</button>
                <button className='form__btn'>Создать</button>
            </div>
        </form>
    )
}

export default CreatePost