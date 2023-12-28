import './Card.css'

const Card = ({carimg , name , desc, background, Learnmore, border}) => {
  return (

    <div className={`boxes ${background}`}>
        <img className='carimages' src={carimg}/>
        <h1>{name}</h1>
        <p>{desc}</p>
        <button className={`${Learnmore} ${border}`}>Learn more</button>
    </div>
  )
}

export default Card