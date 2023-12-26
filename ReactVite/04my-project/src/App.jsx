import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import img1 from './assets/beauty.jpg';
import img2 from './assets/fitness.jpg';

function App() {

    const dataArr = [
      {
        url : img1,
        des : 'hello this is bootstrap practice class and it 2nd of December 2023'
      },
      {
        url : img2,
        des : 'hello this is bootstrap practice class and it 2nd of December 2023'
      },
    ]  

  return (
    <>
     <Navbar />
     {
      dataArr.map(
        data =>(
          <Hero img = { data.img }
                des ={ data.des }
          />
        )
      )
     }
    </>
  )
}

export default App
