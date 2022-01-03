import { useEffect, useState } from "react";
import { CustomTable, PageHeader } from "../../components";
import axios from "axios";
import {customTableColumnsData,customTableData} from "./data";
export default function ViewSubmittedApplications() {
  const [data, setdata] = useState({});
  useEffect(() => {
   
      var config = {
        method: "get",
        url: "https://d4z2bizxa5.execute-api.us-east-1.amazonaws.com/s1/get_submitted_applicaitons?id=APP-MSCMSC831",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("id_token")}`,
        },
      };

      axios(config)
        .then(function (response) {
             let x = response.data.body.Items;
             console.log(x);
                x.map((item) => {console.log(item.submission.map((sub)=>{sub.submissiondata.PersonalDetails.map((details)=>{})} ));
                })
          setdata(response.data.body.Items);
        })
        .catch(function (error) {
          console.log(error);
        });
    
  }, []);
  

  return (
    <div>
      <PageHeader title="Submitted Applications" />
      <CustomTable data={customTableData} customTableColumnsData={customTableColumnsData}/>
    </div>
  );
}
