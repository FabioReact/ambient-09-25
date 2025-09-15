import Title2 from './Title'
import customClasses from './custom.module.css'

const ProductCard = ({ name, price }: { name: string, price: number }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  )
}

function App() {
  const product = {
    name: 'Superman',
    price: 100,
    id: 1
  }
  return (
    <>
      <h1 className={customClasses.green}>Premier Titre</h1>
      <h2>Second Titre</h2>
      <Title2 />
      <ProductCard name={product.name} price={product.price} />
    </>
  )
}

export default App
