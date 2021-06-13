import React, { useEffect, useState } from 'react'
import { getUniversityList } from "../Api/api";
import Pagination from './Pagination';
import UniversityList from "./UniversityList";

const University = () => {
    const [universityList, setUniversityList] = useState([]);

    useEffect(() => {
        async function getData() {
          try {
            const response = await getUniversityList();
            if(response.status === 200) setUniversityList(response.data);
            else throw new Error('something went wrong while requesting data');
          } catch (error) {
            console.error(error);
          }
        }
        getData();
      }, []);
    
    return (
        <div>
             {
              universityList.length ?  
                <Pagination
                  data={universityList}
                  RenderComponent={UniversityList}
                  pageLimit={5}
                  dataLimit={15}
                /> : 'Loading...'
            }
        </div>
    )
}

export default University;
