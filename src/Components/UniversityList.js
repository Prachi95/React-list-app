import React from 'react'
import { Link } from "react-router-dom";
import './styles.css';


const UniversityList = ({data}) => {
    return (
        <div>
           <div className="university-list-container"> 
               <div className="university-list-header-title university-list-left">
                    University
               </div>
               <div className="university-list-header-title university-list-right">
                    Province
               </div>
           </div>
            {
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            <Link to={{ 
                                    pathname: `/detail/${index}`,
                                    details: {
                                        name: item.name,
                                        website: item.web_pages[0]
                                    }
                                }} className="link">
                                <div className="university-list-container">
                                    <div className="university-list-left-title university-list-left">
                                        {item.name}
                                    </div>
                                    <div className="university-list-right-title university-list-right">
                                        {item["state-province"] ? item["state-province"] : 'Other'}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            } 
        </div>
    )
}

export default UniversityList;