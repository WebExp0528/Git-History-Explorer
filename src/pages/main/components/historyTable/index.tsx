import React from 'react';
import { Row, Table, Alert } from 'react-bootstrap';

import { GitCommit } from './../../type';

import cls from './history-table.module.scss';

export type HistoryTableProps = {
  data?: GitCommit[];
};

const columns = ['email', 'name', 'date'];

const HistoryTable = (props: HistoryTableProps) => {
  const { data: tableData } = props;
  console.log('~``` data', tableData);
  if (!tableData || tableData.length === 0) {
    return (
      <Row className={cls.noDataWrapper}>
        <Alert variant='danger'>Could not found history</Alert>
      </Row>
    );
  }

  return (
    <Row>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Message</th>
            {columns.map((column) => (
              <th>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData.map(({ commit = {} }, index) => {
              const committer: any = commit.committer || {};
              const { message } = commit;
              return (
                <tr>
                  <td>{index}</td> <td>{message}</td>
                  {columns.map((column) => (
                    <td>{committer[column] || 'Undefined'}</td>
                  ))}
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Row>
  );
};

export default HistoryTable;
