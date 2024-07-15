import { useState } from 'react'
import axios from 'axios'

const Form = () => {
  const [images, setImages] = useState([])

  const handleImageChange = (e) => {
    setImages([...e.target.files])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    images.forEach((image, index) => {
      formData.append(`image${index}`, image)
    })

    try {
      await axios.post('http:localhost/8000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" multiple onChange={handleImageChange} />
      <button type="submit">Upload</button>
    </form>
  )
}

export default Form
