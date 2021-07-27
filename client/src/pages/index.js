import React, {useState} from 'react'
import Footer from '../components/footer'
import HomePage from '../components/home_page'
import InfoSection from '../components/info'
import { home0bjOne, home0bjTwo, home0bjThree } from '../components/info/data'
import Navbar from '../components/navbar'
import Services from '../components/services'
import Sidebar from '../components/sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle= () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/> 
          <HomePage /> 
          <InfoSection {...home0bjOne}/>
          <InfoSection {...home0bjTwo}/>
          <Services />
          <InfoSection {...home0bjThree}/>
          <Footer />
        </>
    )
}

export default Home
