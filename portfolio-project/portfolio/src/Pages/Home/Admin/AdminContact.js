import React from 'react'
import { Form, Input, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from "../../../redux/rootSlice";
import axios from "axios"


function AdminContact() {
    const dispatch = useDispatch();
    const { portfolioData } = useSelector((state) => state.root);
    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            const response = await axios.post("/api/portfolio/update-contact", {
                ...values,
                _id: portfolioData.contact._id,
            });
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message)
            } else {
                console.log(message);
                message.error(response.data.message)
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };
    return (
        <div>
            <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData?.contact}>
                <Form.Item name='name' label='Name'>
                    <input placeholder='Name' />
                </Form.Item>
                <Form.Item name='gender' label='Gender'>
                    <input placeholder='Gender' />
                </Form.Item>
                <Form.Item name='age' label='Age'>
                    <input placeholder='Age' />
                </Form.Item>
                <Form.Item name='gmail' label='Gmail'>
                    <input placeholder='Gmail' />
                </Form.Item>
                <Form.Item name='mobile' label='Mobile Number'>
                    <input placeholder='Mobile Number' />
                </Form.Item>
                <Form.Item name='address' label='Address'>
                    <textarea placeholder='Address' />
                </Form.Item>
                <div className="flex justify-end w-full">
                    <button className='px-10 py-2 bg-primary text-white' type='submit'>
                        Save
                    </button>
                </div>
            </Form>
        </div>
    )
}

export default AdminContact