import React from 'react'
import "./Footer.css"
import { Form, Input, } from 'antd';
import { DatePicker, } from 'antd';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Ruble from './Routes/Ruble';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const { RangePicker } = DatePicker;

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="top">
                <div className="top_input_left">
                    <Form.Item
                        layout="Valyuta"
                        label="Valyuta"
                        name="Valyuta"
                        rules={[{ required: true }]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input />
                    </Form.Item>
                </div>
                <div className="top_input_right">
                    <Form.Item
                        layout="Qanchaga olindi yoki sotildi"
                        label="Qanchaga olindi yoki sotildi"
                        name="Qanchaga olindi yoki sotildi"
                        rules={[{ required: true }]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input />
                    </Form.Item>
                </div>
                <div className="top_chek_left">

                    <form>
                        <label htmlFor="html"><input type="radio" id="html" name="fav_language" value="HTML" />Olindi</label>

                        <label htmlFor="css"><input type="radio" id="css" name="fav_language" value="CSS" />Sotildi</label>
                    </form>
                </div>
                <div className="top_chek_left">

                    <form>
                        <label htmlFor="b1"><input type="radio" id="b1" name="fav_language" value="HTML" />Ruble</label>

                        <label htmlFor="b2"><input type="radio" id="b2" name="fav_language" value="CSS" />Dolor</label>
                    </form>
                </div>
                <div className="top_chek_left">
                    <form>

                        <label htmlFor="b3"><input type="radio" id="b3" name="fav_language" value="HTML" />Online</label>

                        <label htmlFor="b4"><input type="radio" id="b4" name="fav_language" value="CSS" />Naqt</label>

                    </form>
                </div>
                <button>Qushish</button>
            </div>
            <div className="data_panel">
                <RangePicker />
            </div>
            <hr />
            <div className="liner">
                <Link to="/home/"><span>Ruble</span></Link>
                <Link to="/home"><span>Dolor</span></Link>
            </div>
            <div className="table">
               
                <Route exact path="/home/">
                    <Ruble />
                </Route>
            </div>

        </div>
    )
}

export default Footer