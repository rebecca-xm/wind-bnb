import CardDescription from '../CardDescription'
import CardImage from '../CardImage'



const FlatsCard = ({ country, title, maxGuests, image }) => (
  <div className="product-card">
    <CardImage src={image} />
    <CardDescription country={country} title={title} maxGuests={maxGuests} />
  </div>
)

export default FlatsCard