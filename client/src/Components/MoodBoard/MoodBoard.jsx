import './MoodBoard.css'
import moodBoard from '../../assets/moodBoard.png'

const MoodBoard = () => {
  return (
    <>
      <div className="container">
        <div className="first-section">Mood Board of the week</div>
        <div className="second-section">
          <img src={moodBoard} alt="" />
        </div>
      </div>
    </>
  )
}
export default MoodBoard
