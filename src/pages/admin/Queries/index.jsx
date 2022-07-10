/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-no-useless-fragment */
import './style.css';
import {
  Layout, Row, Tabs, Col, Typography, Skeleton,
} from 'antd';
import { BrowserRouter } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { QueryCard } from '../../../containers';

let tabkey = 0;
const { TabPane } = Tabs;

export default function Queries() {
  const [QueryList, setQueryList] = useState();
  // eslint-disable-next-line no-unused-vars
  const [countUpdate, setcountUpdate] = useState(0);

  useEffect(() => {
    // TODO : here the data is of specific student , we need all queries. make new lambda /API EP
    const config = {
      method: 'get',
      url: 'https://d4z2bizxa5.execute-api.us-east-1.amazonaws.com/s1/queries/',
      headers: {
        Authorization: sessionStorage.getItem('id_token') ? sessionStorage.getItem('id_token') : '',

      },
    };

    axios(config)
      .then((response) => {
        setQueryList(response.data.body);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [countUpdate]);

  // console.log(QueryList);

  return (
    <div className="myquery">
      <BrowserRouter>
        <Layout>
          <Row>

            <Col span={20}>
              <div className="myquery_TopTitle">
                <Typography.Title level={2}>Queries</Typography.Title>
              </div>
            </Col>

            <Col span={23}>
              <Tabs>
                <TabPane tab="All Queries" key={tabkey++}>
                  <Row>
                    <Col span={24}>
                      {
                      QueryList !== undefined
                        ? QueryList.map(
                          ({ email, queries }) => queries.map(
                            (data) => <QueryCard queryCarddata={data} email={email} />,
                          ),
                        ) : <Skeleton active />
}
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tab="Solved" key={tabkey++}>
                  <Row>
                    <Col span={24}>
                      {QueryList !== undefined
                       && QueryList.map(
                         ({ email, queries }) => queries.map(
                           (data) => (
                             data.querystatus.status
                               ? (
                                 <QueryCard
                                   queryCarddata={data}
                                   email={email}
                                 />
                               ) : <></>
                           ),
                         ),
                       )}
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tab="Pending" key={tabkey++}>
                  <Row>
                    <Col span={24}>
                      {QueryList !== undefined && QueryList.map(
                        ({ email, queries }) => queries.map((data) => (!data.querystatus.status ? (
                          <QueryCard
                            queryCarddata={data}
                            email={email}
                          />
                        )
                          : <></>)),
                      )}
                    </Col>
                  </Row>
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
