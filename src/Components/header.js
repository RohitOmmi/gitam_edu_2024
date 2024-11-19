import React from 'react'
import Layout from './Layout'
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import signon from "../Assets/signon.svg"
import aspiring from "../Assets/aspiring.png"
import campuslife from "../Assets/campuslife.png"
import faculty from "../Assets/faculty.png"
import alumni from "../Assets/Alumni.png"
import Entrepreneurship from "../Assets/Entrepreneurship.png"
import faq from "../Assets/FAQs.png"
import career from "../Assets/Careers.png"
import glogo from "../Assets/gitam-logo.svg"

function Header() {
  const navItems = [
    {
      id: 1,
      label: "About us",
      href: "#",
      dropdown: true,
      dropdownItems: [
        { id: 11, label: "About Gitam", href: "#" },
        {
          id: 12,
          label: "Campus Life",
          dropdown: true,
          dropdownItems: [
            { id: 121, label: "Visakhapatnam", href: "#" },
            { id: 122, label: "Hyderabad", href: "#" },
            { id: 123, label: "Banglore", href: "#" },
            { id: 124, label: "GIMSR", href: "#" },
          ],
        },
        { id: 13, label: "Faculty", href: "#" }
      ],
    },

    {
      id: 2,
      label: "Accreditation",
      href: "#",
      dropdown: true,
      dropdownItems: [
        { id: 21, label: "Approvals", href: "#" },
        { id: 22, label: "NIRF", href: "#" },
        { id: 23, label: "Sustainble Development", href: "#" },
        {
          id: 24,
          label: "policies",
          dropdown: true,
          dropdownItems: [
            { id: 241, label: "Climate Action", href: "#" },
            { id: 242, label: "Procurement", href: "#" },
            { id: 243, label: "Not Zero Commitment", href: "#" },
          ],
        }
      ],
    },
    {
      id: 3,
      label: "Academics", href: "#",
      dropdown: true,
      dropdownItems: [
        { id: 31, label: "Evaluation", href: "#" },
        { id: 32, label: "Library", href: "#" },
        { id: 33, label: "Academic Calender", href: "#" }
      ],
    },
    {
      id: 4,
      label: "Research",
      dropdown: true,
      dropdownItems: [
        { id: 41, label: "About", href: "#" },
        { id: 42, label: "Research Initiatives", href: "#" },
        { id: 43, label: "patents", href: "#" },
      ],

    },
    {
      id: 5,
      label: "Fee & Scholaships",
      dropdown: true,
      dropdownItems: [
        { id: 51, label: "Fee structure", href: "#" },
        { id: 52, label: "Scholarships", href: "#" },
        { id: 53, label: "Pay Fee", href: "#" },
      ],
    },
    {
      id: 6,
      label: "Career Guidence",
      href: "#",
      dropdown: true,
      dropdownItems: [
        { id: 61, label: "GCGC", href: "#" },
      ],
    },
    {
      id: 7,
      label: "Events",
      dropdown: true,
      dropdownItems: [
        { id: 71, label: "Events", href: "#" },
      ],
    },

  ];


  const subDropDown = (each) => {
    return (
      <>
        <Dropdown
          arrowIcon={true}
          inline
          label={each.label}
          className='text-white'
        >
          {each.dropdownItems.map((each) =>
            <Dropdown.Item className='px-10 text-xl group-hover:bg-[#8bcbb7]'>{each.label}</Dropdown.Item>

          )}
        </Dropdown>
      </>
    )
  }

  const dropdownItems = (each) => {
    return (
      <>
        {each.dropdownItems.map((each) => {
          return (
            <>
              {each.dropdown ?
                subDropDown(each)
                :
                <Dropdown.Item className='px-10 text-xl group-hover:bg-[#8bcbb7]'>{each.label}</Dropdown.Item>
              }
            </>
          )
        })}
      </>
    )
  }



  return (
    <>
      <div className='bg-[#004740]'>
        <Layout>
          <Navbar fluid className='bg-[#004740]' id="navbar">
            <div>
              <p className=' text-[#8bcbb7] text-base'>Information:</p>
            </div>
            <div className="flex md:order-2">
              <Dropdown
                arrowIcon={true}
                
                inline
                label={
                  <Avatar alt="User signon" img={signon} rounded />
                }
              >
                <Dropdown.Header>
                </Dropdown.Header>
                <Dropdown.Item>Employee Login</Dropdown.Item>
                <Dropdown.Item>Parent Login</Dropdown.Item>
                <Dropdown.Item>Student Login</Dropdown.Item>
                <Dropdown.Item>Payments</Dropdown.Item>
              </Dropdown>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse className='text-white'>

              <Navbar.Link href="#" className='flex text-white dark:text-white  dark:hover:bg-[#007367]  md:hover:text-[#007367]  md:dark:hover:text-white'  >
                <img src={aspiring} alt="aspiring_img"></img>Aspiring Students
              </Navbar.Link>
              <Navbar.Link href="#" className='flex text-white dark:text-white  dark:hover:bg-[#007367]  md:hover:text-[#007367]  md:dark:hover:text-white' ><img src={campuslife} alt="campuslife_img" />Campus Life</Navbar.Link>
              <Navbar.Link href="#" className='flex text-white dark:text-white  dark:hover:bg-[#007367]  md:hover:text-[#007367]  md:dark:hover:text-white'><img src={alumni} alt="alumni_img" />Alumni</Navbar.Link>
              <Navbar.Link href="#" className='flex text-white dark:text-white  dark:hover:bg-[#007367]  md:hover:text-[#007367]  md:dark:hover:text-white'><img src={faculty} alt="faculty_img" />Faculty</Navbar.Link>
              <Navbar.Link href="#" className='flex text-white dark:text-white  dark:hover:bg-[#007367]  md:hover:text-[#007367]  md:dark:hover:text-white'><img src={Entrepreneurship} alt="entrepreneurship_img" />Entrepreneurship</Navbar.Link>
              <Navbar.Link href="#" className='flex text-white dark:text-white  dark:hover:bg-[#007367]  md:hover:text-[#007367]  md:dark:hover:text-white'><img src={faq} alt="faq_img" />FAQs</Navbar.Link>
              <Navbar.Link href="#" className='flex text-white dark:text-white  dark:hover:bg-[#007367]  md:hover:text-[#007367]  md:dark:hover:text-white'><img src={career} alt="career_img" />Careers</Navbar.Link>
            </Navbar.Collapse>
          </Navbar>
        </Layout>


      </div>

      <div className='bg-[#007367]'>
        <Layout>
          <Navbar fluid className='bg-[#007367]'>
            <div>
              <img src={glogo} alt="gitam_logo" className='image-fluid' />
            </div>
            <div className="flex md:order-2 text-white gap-6">
              {navItems.map((each, index) => {
                return (
                  <Dropdown
                    arrowIcon={true}
                    inline
                    label={each.label}
                  >
                    {each.dropdown ?
                      dropdownItems(each)

                      :
                      <Dropdown.Item className='px-10 text-xl group-hover:bg-[#8bcbb7]'>{each.label}</Dropdown.Item>
                    }

                  </Dropdown>
                )
              })}



              <Navbar.Toggle />
            </div>

          </Navbar>
        </Layout>


      </div>
      
      <div>
        <a className='bg-[#a58255] border-2 px-4 py-2 fixed  z-50 -right-20 top-2/4 -rotate-90 href="#'>Admission Enqquiry</a>
        <a className='bg-[#007367] border-2 px-4 py-2 fixed  z-50 -right-10 top-3/4 -rotate-90 href="#'>Contact Us</a>
      </div>
      {/* <div>
        <a className='px-4 py-4 bg-[#004740] rounded-full z-50   -right-0 bottom-8' href='#navbar'><i class="fa-solid fa-up-long" style={{color: "#ffffff"}}></i></a>
      </div> */}
      {/* <div>
        <a className='bg-[#007367] border-2 px-4 py-2 fixed  z-50 -right-20 top-3/4 -rotate-90 href="#'>Contact Us</a>
      </div> */}
    </>
  )
}

export default Header