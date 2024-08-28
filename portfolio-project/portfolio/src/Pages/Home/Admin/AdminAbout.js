import React from 'react'
import { Form, Input, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { HideLoading, ShowLoading } from "../../../redux/rootSlice";
import axios from "axios"


function AdminAbout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = async (values) => {
    try {
      const tempSkills = values.skills.split(",");
      values.skills = tempSkills;
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-about", {
        ...values,
        _id: portfolioData.abouts._id,
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
      <Form onFinish={onFinish} layout='vertical' initialValues={{
        ...portfolioData.abouts,
        skills: portfolioData.abouts.skills.join(","),
      }}>

        <Form.Item name='lottieURL' label='Lottie Url'>
          <input placeholder='Lottie Url' />
        </Form.Item>

        <Form.Item name='description1' label='Description1'>
          <textarea placeholder='description1' />
        </Form.Item>
        <Form.Item name='description2' label='Description2'>
          <textarea placeholder='description2' />
        </Form.Item>
        <Form.Item name='skills' label='skills'>
          <textarea placeholder='skills' />
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

export default AdminAbout