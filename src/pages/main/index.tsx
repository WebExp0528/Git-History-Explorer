import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { GitAuthor, GitCommit, GitCommitter } from './type';
import { Container, Row, Spinner, Table, Alert } from 'react-bootstrap';
import Header from './components/header';
import HistoryTable from './components/historyTable';

import cls from './main.module.scss';

export type MainPageProps = {};

const Main = (props: MainPageProps) => {
  const [gitHistory, setGitHistory] = useState<GitCommit[] | undefined>(
    undefined
  );
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    loadHistory();
  }, []);

  const loadHistory = () => {
    setError(undefined);
    setLoading(true);
    Axios.get(
      'https://api.github.com/repos/jacobsmoli/Git-History-Explorer/commits'
    )
      .then(({ data }) => {
        // setLoading(false);
        console.log('~~~~~~~` res', data);
        setGitHistory(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
        setGitHistory(undefined);
      });
  };

  const handleClickRefresh = (e: any) => {
    loadHistory();
  };

  if (isLoading) {
    return (
      <div className={cls.loadingContainer}>
        <Spinner animation='border' variant='primary' />
      </div>
    );
  }

  return (
    <Container>
      <Header onClick={handleClickRefresh} />
      {error ? (
        <Row className={cls.notFoundWrapper}>
          <Alert variant='danger'>Could not found history!</Alert>
        </Row>
      ) : (
        <HistoryTable data={gitHistory} />
      )}
    </Container>
  );
};

export default Main;
