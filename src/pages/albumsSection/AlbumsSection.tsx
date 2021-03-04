import React, { useEffect, useState } from 'react';

import { DataGrid } from '@material-ui/data-grid';

import Header from '../../components/header/Header';
import Link from '../../components/link/Link';
import api from '../../services/api';

interface AlbumsTypes {
  userId: number;
  id: number;
  title: string;
}

function TodosSection() {
  const [albumsData, setAlbunsData] = useState<AlbumsTypes[]>([]);
  useEffect(() => {
    async function getAlbums() {
      const response = await api.get('/albums');

      setAlbunsData(response.data);
    }
    getAlbums();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 600 },
  ];

  return (
    <section>
      <Header />
      <div className="text-page">
        <h1>Tabela da API Albuns</h1>
      </div>
      <div style={{ height: 942, width: '100%' }}>
        <DataGrid
          rows={albumsData}
          columns={columns}
          pageSize={15}
          className="table"
        />
      </div>
      <Link />
    </section>
  );
}

export default TodosSection;
