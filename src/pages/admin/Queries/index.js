import "./style.css";
import { Layout, Row, Tabs, Col, Modal, Typography, Button,Spin,Skeleton } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useHistory, BrowserRouter } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../../contexts/user'
import { QueryCard } from '../../../containers';


var tabkey = 0;
const { TabPane } = Tabs;

export default function Queries() {
  const [user, setUser] = useContext(UserContext);
  const userData = JSON.parse(user);
  const [QueryList, setQueryList] = useState()
  const [forReplyText, setforReplyText] = useState()
  const [countUpdate, setcountUpdate] = useState(0)


  useEffect(() => {
    // TODO : here the data is of specifi student , we need all queries. make new lambda /API EP
    var config = {
      method: 'get',
      url: `https://d4z2bizxa5.execute-api.us-east-1.amazonaws.com/s1/queries/`,
      headers: {
        'Authorization': sessionStorage.getItem('id_token') ? sessionStorage.getItem('id_token') : '',
        
      }
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.body)
        setQueryList(response.data.body)
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [countUpdate])

  console.log(QueryList);



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
                      {QueryList !== undefined ? QueryList.map(({email,queries}) => queries.map((data)=><QueryCard queryCarddata={data} email={email} />  ) ):   <Skeleton active />}
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tab="Solved" key={tabkey++}>
                  <Row>
                    <Col span={24}>
                    {QueryList !== undefined && QueryList.map(({email,queries}) => queries.map((data)=>data.querystatus.status ?<QueryCard queryCarddata={data} email={email} />:<></>) )}
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tab="Pending" key={tabkey++}>
                  <Row>
                    <Col span={24}>
                    {QueryList !== undefined && QueryList.map(({email,queries}) => queries.map((data)=>!data.querystatus.status ?<QueryCard queryCarddata={data} email={email} />:<></>) )}
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
