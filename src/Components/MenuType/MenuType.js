import React, { useState } from 'react';
import fakeData from '../fakeData/fakeData';

import './MenuType.css';
import Menu from '../Menu/Menu';

const MenuType = () => {

    const [matchedData, setMatchedData] = useState([]);

    if(matchedData.length === 0){
        const newData = fakeData.filter(data => data.category === 'lunch')
        setMatchedData(newData);
    }

    const handleMenu = (category) => {
        const newData = fakeData.filter(data => data.category === category);
        setMatchedData(newData);
    }

    return (

        <div className="menus">
            <div className="menu-names">
                <button className="menu-btn-normal" onClick={() => handleMenu('breakfast')}>Breakfast</button>
                <button className="menu-btn-normal" onClick={() => handleMenu('lunch')}>Lunch</button>
                <button className="menu-btn-normal" onClick={() => handleMenu('dinner')}>Dinner</button>
            </div>

            {
                matchedData.map(menu => <Menu key={menu.id} data={menu}></Menu>)
            }
            
        </div>
    );
};

export default MenuType;