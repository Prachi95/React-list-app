import React from "react";
import './styles.css';
import image from '../Resources/university.png';

const UniversityDetail = (props) => {
    if(props.location && props.location.details) {
        localStorage.setItem('details', JSON.stringify(props.location.details));
    }

    const { name, website} = localStorage.getItem('details') ? JSON.parse(localStorage.getItem('details')) : {}
    const detailText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    return (
        <div>
            <div className="university-detail-header"> 
                <a href={website} target="_blank" className="link">{name}</a>
            </div>
            <div className="university-detail-content"> 
                <div >
                    <img src={image} alt="image" className="university-detail-img"/>
                </div>
                <div>
                    {detailText}
                </div>
            </div>
        </div>
    )
}

export default UniversityDetail;