import React, { useState } from 'react'
import c from "./Home.css"
import { AccountBookOutlined, MenuFoldOutlined } from '@ant-design/icons';
import Footer from '../Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

const Home = () => {
  const [left, setLeft] = useState(false)

  return (
    <div className='Home'>
      
      <div className={left ? "valyuta_left" : "valyuta"}>
        <h1>Valyuta</h1>
        {
          left ? <div className="box2">
            <AccountBookOutlined />
          </div> : <div className="box">
            <AccountBookOutlined />&nbsp;
            <span>Valuta</span>
          </div>
        }
      </div>
      <div className="home_right">
        <div className="home_nav">
          <MenuFoldOutlined className='i'/>
          <button className="chiqish-button">Chiqish</button>
        </div>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </div>

    </div>
  )
}

export default Home