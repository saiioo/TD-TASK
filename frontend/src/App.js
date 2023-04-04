import React, { useState } from "react";
import data from './data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css'
import { faBell, faHouse, faScrewdriverWrench, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Box1 from "./components/Box1";
const icons = {
  right: "https://cdn-icons-png.flaticon.com/512/10119/10119253.png",
  left: "https://cdn-icons-png.flaticon.com/512/10119/10119280.png"
}
function App() {

  const [toggle, setToggle] = useState('expand-div');
  const [arrow, setArrow] = useState(icons.right)

  function toggleFunction() {
    setToggle((item) => {
      return item = toggle === 'collapse-div' ? 'expand-div' : 'collapse-div'
    })
    setArrow((arr) => {
      return arr = arr === icons.right ? icons.left : icons.right
    })
  }
  const assetsTitles = data.tasks[0].assets.map((asset) => {
    return <p>{asset.asset_title}</p>;
  });
  return (
    <>
    <div>
      <div className="header">
        <img className="main-logo" src="https://medias.freeflow.zone/wp-content/uploads/2022/06/14174925/DT-Logo-1-1.png" />
        <div className="icons-div">
        <FontAwesomeIcon className="header-icon" icon={faHouse} style={{color: "#fefefe",}} />
        <FontAwesomeIcon className="header-icon" icon={faScrewdriverWrench} style={{color: "#fefefe",}} />
        <FontAwesomeIcon className="header-icon"  icon={faBell} style={{color: "#ffffff",}} />
        <div className="round-div"></div>
        <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "#3683f0",}} className="three-dots"  />
        </div>
      </div>
    </div>
    <div className="body-head">
      <h1 className="body-h1">{data.slug.substring(5).toUpperCase()}</h1>
      <button className="submit-btn">Submit task</button>
    </div>
    <div className="explore-div">
      <h3 className="explore-h3">
          {data.tasks[0].task_title}
      </h3>
      <p className="explore-p">{data.tasks[0].task_description}</p>
    </div>
    <div className="box-container">
      <div className='app-box'>
      <Box1 num = {1} task = {data.tasks} />
      </div>
      <div className='app-box'>
      <Box1 num = {2} task = {data.tasks} />
      </div>
      <div className='app-box'>
      <Box1 num = {3} task = {data.tasks} />
      </div>
      <div className='app-box'>
      <Box1 num = {4} task = {data.tasks} />
      </div>
    </div>
      <div className="App">
        <div className={toggle}>
          <div className="arrow-bg">
            Journey Board
            <img src={arrow} className="btn" onClick={toggleFunction} alt="arrow-icon" />
          </div>
          <div className="assetsTitles">
          {assetsTitles}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
