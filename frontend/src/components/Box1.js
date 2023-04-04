import React, { useState, useEffect } from 'react';
import './Box.css'
import ek from '../assets/ek.png';
import dho from '../assets/do.png'
import teen from '../assets/teen.png';
import char from '../assets/char.png'

const Box1 = ({ num, task }) => {

  const [videos, setVideos] = useState(false)
  const [threadbuild, setThreadbuild] = useState(false)
  const [pointer, setPointers] = useState(false)
  const [method, setMethod] = useState(false)
  const [intro, setIntro] = useState(false)
  const [tA, setTA] = useState(true)

  const options1 = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];
  const options2 = ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'];



  function removeNewlines(inputString) {
    return inputString.replace(/[\n\r]/g, '');
  }


  useEffect(() => {
    if (task[0].assets[num - 1].asset_id === 18883) {
      setVideos(true);
    } if (task[0].assets[num - 1].asset_id === 18884) {
      setThreadbuild(true);
    } if (task[0].assets[num - 1].asset_id === 18885) {
      setPointers(true);
    }
    if (task[0].assets[num - 1].asset_id === 18886) {
      setMethod(true);
    }

  }, []);

  function arrUp(){
    setIntro(!intro)
  }

  function arrDown(){
    setTA(!tA) 
  }


  return (
    <div className='box1-main-div'>
      <div className='box1-header'>
        <div className='box1-header-content'>
          <p className='content1-p1'>{task[0].assets[num - 1].asset_title}</p>
          <p className='content1-p2'>i</p>
        </div>
      </div>
      <p className='box1-middle-p'>Description: <span className='box1-middle-span'>{removeNewlines(task[0].assets[num - 1].asset_description)}</span></p>
      <div className='box1-video-div'>
        {videos &&<iframe
        width="80%"
        height="200"
        src="https://www.youtube.com/embed/TiMRwri1xJ8"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>}
        {threadbuild && <div className='thread-div'>
          <h1 className='thread-h1'>Thread A</h1>
          <div>
          <div className='inp-div-t'>
            <div className='inp-sub-div'>
              <label>Sub thread 1</label>
              <input type='text' placeholder='Enter Text here' />
            </div>
            <div className='inp-sub-div'>
              <label>Sub Interpretation 1</label>
              <input className='sub-int-e' type='text' placeholder='Enter Text here' />
            </div>
            </div>
            <div className='e-icon-div'>
              <img className='e-icon' src={ek} alt='logo' />
              <img className='e-icon' src={dho} alt='logo' />
              <img className='e-icon' src={teen} alt='logo' />
              <img className='e-icon' src={char} alt='logo' />
              <select id="select1">
                {options1.map(option => <option key={option}>{option}</option>)}
              </select>
              <select id="select2">
                {options2.map(option => <option key={option}>{option}</option>)}
              </select>

            </div>
            <button className='plus-btn'>+ Sub-thread</button>
            <div className='t-inp-div'>
              <label>Summary for Thread A</label>
              <input type='text' placeholder='Enter Text Here' />
            </div>
          </div>
        </div>}

        {pointer &&
          <div className='pointer-div'>
            <lable>title</lable>
            <input type='text' placeholder='' />
            <lable>Content</lable>
            <div className='most-p'>
              <p>file</p>
              <p>edit</p>
              <p>view</p>
              <p>insert</p>
              <p>format</p>
              <p>tools</p>
              <p>table</p>
              <p>help</p>
            </div>
            <input type='text' />

          </div>
        }
        {method && <div className='arrow-main-div'>
          {intro === false ? <div className='into-main'>
            <div className='intro-arrow'>
            <p className='arrow-desc'><img onClick={arrUp} src='https://cdn-icons-png.flaticon.com/512/2985/2985150.png' className='arrow-down' alt='' />
              Introduction</p>
            </div>
          </div> : <div>
            <div className='intro-arrow'>
            <p className='arrow-desc'><img  onClick={arrUp} src='https://cdn-icons-png.flaticon.com/512/130/130906.png' className='arrow-up' alt='' />
              Introduction</p>
            </div>
            <p className='arrow-desc'>The 4SA Method, How to bring a idea into process?</p>
            <p className='the-more'>See More</p>

          </div>}
          {tA === false ? <div>
            <div className='ta-arrow'>
            <p className='arrow-desc'><img onClick={arrDown} src='https://cdn-icons-png.flaticon.com/512/2985/2985150.png' className='arrow-down' alt='' />
              Thread A</p>
            </div>
          </div> : <div>
            <div>
            <div className='ta-arrow'><p><img onClick={arrDown} src='https://cdn-icons-png.flaticon.com/512/130/130906.png' className='arrow-up' alt='' />
              Thread A</p>
              </div>
              <p className='arrow-desc'>How are you going to develop your strategy? Which method are you going to use to develop a strategy?What if the project is lengthy?</p>
              <p className='the-more'>See more</p>
              </div>
          </div>}
        </div>}

      </div>
    </div>
  )
}

export default Box1