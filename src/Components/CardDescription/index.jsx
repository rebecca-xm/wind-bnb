const CardDescription = ({ country,  title, maxGuests}) => (
    <div className="card-description">

      <div className="card-description__Title">
        <p className="card-description__title">{country}</p>
      </div>

      <div className="card-description__descriptionContainer">
        <p className="card-description__description">{title}</p>
      </div>

      <div className="card-description__maxguestsContainer">
        <p className="card-description__maxguests">{maxGuests}</p>
      </div>

      
    </div>
  
  )
  
  export default CardDescription