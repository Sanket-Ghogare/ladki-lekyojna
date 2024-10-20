import React from 'react'
import Navbar from './Navbar/Navbar'
import Comment from './Comment/Comment'
import Page1 from './Page1/Page1'
import { HelmetProvider } from 'react-helmet-async';
import ReactGA from 'react-ga4';

const Tracking_ID = "G-Y40N5NXK81";
ReactGA.initialize(Tracking_ID);

function App() {

  return (
    <HelmetProvider>
    <>
    <Navbar/>
       <div className="h-screen  snap-y snap-mandatory  justify-center items-center">
      <section className=" ">
        <Page1/>
        <Comment/>
      </section>

  
    </div>

    </>
    </HelmetProvider>
  )
}

export default App
