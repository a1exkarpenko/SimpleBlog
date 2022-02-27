import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import MainLayout from './components/MainLayout/MainLayout';
import NotFound from './pages/NotFound/NotFound';
import List from './pages/List/List';
import PostPage from './pages/PostPage/PostPage';
import CreatePost from './pages/CreatePost/CreatePost';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/post/:id' element={<PostPage />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
