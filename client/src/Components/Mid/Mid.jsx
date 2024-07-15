import './Mid.css'

import Card from '../Card/Card'
import { useState,useEffect } from 'react'
const Mid = () => {
  
  const [allImage, setAllImage] = useState([])

  const fetchImage = async () => {
    const res = await fetch('http://localhost:8500/image')
    const data = await res.json()
    setAllImage(data.data)
  }
  useEffect(() => {
    fetchImage()
  }, [])


  return (
    <>
      <div className="container">
        <div className="first-section">Top trends of the week</div>
        <div className="second-section">
          {allImage.map((ele, ind) => {
            return (
              <Card key={ind} image={ele.image} number={ind+1} />
            )
          })}

        </div>
      </div>
    </>
  )
}
export default Mid