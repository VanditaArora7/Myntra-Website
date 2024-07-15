import './UploadImage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
const UploadImage = () => {
  const [img, setImg] = useState('')
  const [allImage, setAllImage] = useState([])

  const imagebase64 = async (file) => {
    const reader = new FileReader()
    await reader.readAsDataURL(file)
    // console.log(file)
    const data = new Promise((resolve, reject) => {
      reader.onload = () => resolve(reader.result)
      reader.onerror = (err) => reject(err)
    })
    console.log(data)
    return data
  }
  const handleUploadImage = async (e) => {
    const file = e.target.files[0]
    const image = await imagebase64(file)
    setImg(image)
  }
  const fetchImage = async () => {
    const res = await fetch('http://localhost:8500/image')
    const data = await res.json()
    setAllImage(data.data)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (img) {
      const res = await fetch('http://localhost:8500/upload', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ img: img }),
      })
      const data = await res.json()
      console.log(data)
      if (data.success) {
        alert(data.message)
        setImg('')
        fetchImage()
      }
    }
  }
  useEffect(() => {
    fetchImage()
  }, [])

  return (
    <>
      <div className="image-container">
        <form>
          <label htmlFor="uploadImage">
            <div className="uploadBox">
              <input
                type="file"
                name=""
                id="uploadImage"
                onChange={handleUploadImage}
              />

              {img ? (
                <img src={img}  />
              ) : (
                <FontAwesomeIcon
                  icon={faCloudArrowUp}
                  className="uploadBox-secondsection"
                />
              )}
            </div>
          </label>
          <div className="btn">
            <button onClick={handleSubmit}>Upload</button>
          </div>
        </form>
        <div className="allimage">
          {allImage.map((ele, ind) => {
            return (
              <img key={ind} src={ele.image} width={'200px'} height={'200px'} />
            )
          })}
        </div>
      </div>
    </>
  )
}
export default UploadImage
