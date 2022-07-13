import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CustomTable, PageHeader } from '../../components';
import { customTableColumnsData, customTableData } from './data';

export default function ViewSubmittedApplications() {
  const [, setdata] = useState({});
  useEffect(() => {
    const config = {
      method: 'get',
      url: 'https://d4z2bizxa5.execute-api.us-east-1.amazonaws.com/s1/get_submitted_applicaitons?id=APP-MSCMSC831',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('id_token')}`,
      },
    };

    axios(config)
      .then((response) => {
        setdata(response.data.body.Items);
      });
  }, []);

  return (
    <div>
      <PageHeader title="Submitted Applications" />
      <CustomTable
        data={customTableData}
        customTableColumnsData={customTableColumnsData}
      />
    </div>
  );
}
