import CardDescription from '../CardDescription'
import CardImage from '../CardImage'



const FlatsCard = ({ title, description, image }) => (
  <div className="product-card">
    <CardImage src={image} />
    <CardDescription title={title} description={description}  />
  </div>
)

export default FlatsCard