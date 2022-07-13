/* eslint-disable eqeqeq */
/* eslint-disable react/prop-types */
import { Row, Col } from 'antd';
// import { Skeleton, Switch, Card, Avatar } from 'antd';
// import { EditOutlined, EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CustomTable, PageHeader } from '../../components';
import './style.css';
import { customTableColumnsData } from './data';

export default function ViewNotices({ tempState }) {
  const [Notices, setNotices] = useState([]);

  const [idToBeDeleted, setidToBeDeleted] = useState(''); // const [IsLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (Notices.length >= 1) {
      document.getElementById('notice_delete_btn').focus();
    }

    const config = {
      method: 'get',
      url: 'https://d4z2bizxa5.execute-api.us-east-1.amazonaws.com/s1/notices',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('id_token')}`,
      },
    };

    axios(config)
      .then((response) => {
        const result = JSON.parse(response.data);
        if (result.ResponseMetadata.HTTPStatusCode == 200) {
          setNotices(result.Items);
        }
        // else {console.log("Error!")};
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [tempState]);

  // Onclick Function for Notice Delete
  const deleteNotice = (id) => {
    const data = JSON.stringify({
      id,
    });

    const config = {
      method: 'delete',
      url: 'https://d4z2bizxa5.execute-api.us-east-1.amazonaws.com/s1/notices',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('id_token')}`,
        'Content-Type': 'application/json',
      },
      data,
    };

    axios(config)
      // eslint-disable-next-line no-unused-vars
      .then((response) => {
        // console.log(JSON.parse(response.data))
        // after delete behaviour
        //! CHECk
        const ResponseData = JSON.parse(data);
        setNotices(ResponseData.Items);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log("clicked")
  };

  return (
    <div className="ViewNotices">
      <PageHeader title="View Notices" />
      <Row sm={24} md={12} lg={6} xl={6} gutter={24}>
        {Notices.length >= 1 && (
          <div style={{ marginBottom: '2em' }}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                deleteNotice(idToBeDeleted);
              }}
            >
              <input
                style={{
                  width: '50vw',
                  marginLeft: '0.9em',
                  outline: 'none',
                  border: 'none',
                  background: 'aliceblue',
                  padding: '0.2em',
                  // boxShadow: '0px 1px 1px black',
                  borderRadius: '2px',
                }}
                type="text"
                placeholder="Enter ID of Notice to be deleted "
                required
                value={idToBeDeleted}
                onChange={(e) => {
                  setidToBeDeleted(e.target.value);
                }}
              />

              <input
                style={{
                  padding: '0.1em',
                  backgroundColor: 'transparent',
                  borderRadius: '3px',
                  marginLeft: '0.3em',
                  border: '0.5px solid black',
                  cursor: 'pointer',
                }}
                type="submit"
                value="Delete"
                id="notice_delete_btn"
              />
            </form>
          </div>
        )}
      </Row>
      <Row sm={24} md={12} lg={6} xl={6} gutter={24}>
        <Col>
          {Notices != undefined && (
            <CustomTable
              data={Notices}
              customTableColumnsData={customTableColumnsData}
            />
          )}
        </Col>
      </Row>
    </div>
  );
}
