import React, { useEffect, useState } from 'react';

import { DataGrid } from '@material-ui/data-grid';

import Header from '../../components/header/Header';
import Link from '../../components/link/Link';
import api from '../../services/api';

import './PostsSection.css';

interface PostsTypes {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function PostsSection() {
  const [postData, setPostData] = useState<PostsTypes[]>([]);
  useEffect(() => {
    async function getPosts() {
      const response = await api.get('/posts');

      setPostData(response.data);
    }
    getPosts();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 800 },
  ];

  return (
    <section>
      <Header />
      <div className="text-main-page">
        <h1>Tabela da API Postagens</h1>
      </div>
      <div style={{ height: 431, width: '100%' }}>
        <DataGrid
          rows={postData}
          columns={columns}
          pageSize={5}
          className="table"
        />
      </div>
      <Link />
    </section>
  );
}

export default PostsSection;
