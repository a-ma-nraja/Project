import React, { useEffect } from 'react'
import Header from '../../../components/Header'
import { Tabs } from 'antd';
import AdminAbout from './AdminAbout';
import AdminIntro from './AdminIntro';
import AdminExperiences from './AdminExperiences';
import { useSelector } from 'react-redux';
import AdminProjects from './AdminProjects';
import AdminCourses from './AdminCourses';
import AdminContact from './AdminContact';
const { TabPane } = Tabs;

function Admin() {
  const { portfolioData } = useSelector((state) => state.root);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }
  }, [])
  return (
    <div>
      <Header />
      <div className="flex gap-10 items-center px-5 py-2 justify-between">
        <div className='flex gap-10 items-center'>
          <h1 className='text-2xl px-5 py-2 text-primary'>Portfolio Admin</h1>
          <div className="w-60 h-[1px] bg-gray-500"></div>
        </div>
        <button className="underline text-primary text-xl cursor-pointer"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-login"
          }}
        >Logout</button>
      </div>
      {portfolioData && <div className="px-5">
        <Tabs defaultActiveKey="1" tabPosition='left'>
          <TabPane tab="Intro" key="1">
            <AdminIntro />
          </TabPane>
          <TabPane tab="About" key="2">
            <AdminAbout />
          </TabPane>
          <TabPane tab="Experience" key="3">
            <AdminExperiences />
          </TabPane>
          <TabPane tab="Projects" key="4">
            <AdminProjects />
          </TabPane>
          <TabPane tab="Courses" key="5">
            <AdminCourses />
          </TabPane>
          <TabPane tab="Contact" key="6">
            <AdminContact />
          </TabPane>
        </Tabs>
      </div>}
    </div>
  )
}

export default Admin