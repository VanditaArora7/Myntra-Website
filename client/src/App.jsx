// import Footer from "./Components/Footer/Footer"
// import Mid from "./Components/Mid/Mid"
// import Navbar from "./Components/Navbar/Navbar"
// import Form from './Components/Form/Form'

// const App = () => {
//   return (
//     <>
//     <Navbar/>
//     <Mid/>
//     <Footer/>
//     <Form/>
//     </>
//   )
// }
// export default App

// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function App() {
//   const [image, setImage] = useState(null)
//   const [allImage, setAllImage] = useState(null)

//   useEffect(() => {
//     getImage()
//   }, [])
//   const submitImage = async (e) => {
//     e.preventDefault()

//     const formData = new FormData()
//     formData.append('image', image)

//     const result = await axios.post(
//       'http://localhost:8000/upload-image',
//       formData,
//       {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       }
//     )
//   }

//   const onInputChange = (e) => {
//     console.log(e.target.files[0])
//     setImage(e.target.files[0])
//   }

//   const getImage = async () => {
//     try{
//          const result = await axios.get('http://localhost:8000/get-image')
//     //console.log(result)
//     setAllImage(result.data.data)
//     }
//     catch(err){
//       console.log(err.message)
//     }
   
//   }

//   return (
//     <div>
//       <form onSubmit={submitImage}>
//         <input type="file" accept="image/*" onChange={onInputChange}></input>
//         <button type="submit">Submit</button>
//       </form>
//       {allImage == null
//         ? ''
//         : allImage.map((data,index) => {
//             return (
//               <img
//                 key={index}
//                 // src={`./assets/images/${data.image}`}
//                 src={data.image}
//                 height={100}
//                 width={100}
//               />
//             )
//           })}
//     </div>
//   )
// }
// export default App

import './App.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
// import { useEffect, useState } from 'react'
// const App = () => {
//   const [img,setImg]=useState("")
//   const[allImage,setAllImage]=useState([])

//   const imagebase64=async(file)=>{
// const reader=new FileReader()
// await reader.readAsDataURL(file)
// // console.log(file)
// const data= new Promise((resolve,reject)=>{
//   reader.onload=()=>resolve(reader.result)
//   reader.onerror=(err)=>reject(err)
// })
// console.log(data)
// return data;
//   }
//   const handleUploadImage= async(e)=>{
//     const file=e.target.files[0];
//     const image=await imagebase64(file)
//     setImg(image)
//   }
//    const fetchImage = async () => {
//      const res = await fetch('http://localhost:8500/image')
//      const data = await res.json()
//      setAllImage(data.data)
//    } 
//   const handleSubmit=async(e)=>{
//      e.preventDefault();
//     if(img){
//         const res = await fetch('http://localhost:8500/upload', {
//           method: "POST",
//           headers: {
//             "content-type": "application/json",
//           },
//           body: JSON.stringify({ img: img }),
//         })
//         const data = await res.json()
//         console.log(data)
//         if(data.success){
//           alert(data.message)
//           setImg('')
//           fetchImage()
//         }
//     }

//   }
//   useEffect(()=>{
//   fetchImage()
//   },[])
 
//   return (
//     <>
//       <div className="image-container">
//         <form>
//           <label htmlFor="uploadImage">
//             <div className="uploadBox">
//               <input
//                 type="file"
//                 name=""
//                 id="uploadImage"
//                 onChange={handleUploadImage}
//               />

//               {img ? (
//                 <img src={img} />
//               ) : (
//                 <FontAwesomeIcon icon={faCloudArrowUp} />
//               )}
//             </div>
//           </label>
//           <div className="btn">
//             <button onClick={handleSubmit}>Upload</button>
//           </div>
//         </form>
//         <div className="allimage">{allImage.map((ele,ind)=>{
//           return <img key={ind}  src={ele.image} width={"200px"} height={"200px"}/>
//         })}</div>
//       </div>
//     </>
//   )
// }
import Navbar from './Components/Navbar/Navbar'
import Footer from "./Components/Footer/Footer"
//import Mid from "./Components/Mid/Mid"
import MyCarousel from './Components/MyCarousel/MyCarousel'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UploadImage from './Components/Admin/UploadImage'
import HomefirstSection from './Components/HomefirstSection/HomefirstSection'
import homeImage from './assets/homeImage.png'
import homeImage2 from './assets/homeImage2.png'
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomefirstSection image={homeImage} />} />
          <Route path="/admin" element={<HomefirstSection image={homeImage2} />} />
        </Routes>
        <Routes>
          <Route path="/" element={<MyCarousel />} />
          <Route path="/admin" element={<UploadImage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default App
