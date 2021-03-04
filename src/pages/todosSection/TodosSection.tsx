import React, { useEffect, useState } from 'react';

import { DataGrid } from '@material-ui/data-grid';

import Header from '../../components/header/Header';
import Link from '../../components/link/Link';
import api from '../../services/api';

import './TodosSection.css';

interface TodosTypes {
  userId: number;
  id: number;
  title: string;
  body: boolean;
}

function TodosSection() {
  const [todosData, setTodosData] = useState<TodosTypes[]>([]);
  useEffect(() => {
    async function getTodos() {
      const response = await api.get('/todos');

      setTodosData(response.data);
    }
    getTodos();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 870 },
    { field: 'completed', headerName: 'Complete', width: 250 },
  ];

  return (
    <section>
      <Header />
      <div className="text-page">
        <h1>Tabela da API TO-DOS</h1>
      </div>
      <div style={{ height: 942, width: '100%' }}>
        <DataGrid
          rows={todosData}
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
