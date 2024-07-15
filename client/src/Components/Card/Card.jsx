import './Card.css'

const Card = ({image,number}) => {
  return (
    <>
      <div className="second-row">
        <div className="second-row-image">
          <img src={image} alt="" />
        </div>
        <div className="second-row-number">{number}</div>
      </div>
    </>
  )
}
export default Card