import { useState } from 'react'
import MenuCard from '../components/MenuCard'
const menuImages = import.meta.glob(
  '/src/assets/menu/*',
  { eager: true, query: '?url', import: 'default' }
)
const menuItems = [
  {
    id: 1,
    name: 'Pink Cloud',
    category: 'Signature Drinks',
    description: 'Strawberry, vanilla and creamy milk.',
    price: 4.5,
    image:menuImages['/src/assets/menu/pink cloud.jpeg'],
  },
  {
    id: 2,
    name: 'Pistachio Dream',
    category: 'Signature Drinks',
    description: 'Creamy pistachio latte.',
    price: 5,
        image: menuImages['/src/assets/menu/pistachio.jpeg'],

  },
  {
    id: 3,
    name: 'Rose Vanilla',
    category: 'Signature Drinks',
    description: 'Delicate rose and smooth vanilla.',
    price: 4.5,
        image: menuImages ['/src/assets/menu/rose.jpeg'],

  },
  {
    id: 4,
    name: 'Caramel Bliss',
    category: 'Signature Drinks',
    description: 'Sweet caramel with creamy milk.',
    price: 4.5,
        image: menuImages ['/src/assets/menu/caramel.jpeg'],

  },
  {
    id: 5,
    name: 'Strawberry Matcha',
    category: 'Signature Drinks',
    description: 'Fresh strawberry with smooth matcha.',
    price: 5,
        image: menuImages['/src/assets/menu/StrawberryMatcha.jpeg'],

  },
  {
    id: 6,
    name: 'Espresso',
    category: 'Hot Coffee',
    description: 'A rich and bold shot of espresso.',
    price: 2.5,
        image: menuImages['/src/assets/menu/espresso.jpeg'],

  },
  {
    id: 7,
    name: 'Americano',
    category: 'Hot Coffee',
    description: 'Espresso blended with hot water.',
    price: 3,
        image: menuImages['/src/assets/menu/hot americano.jpeg'],

  },
  {
    id: 8,
    name: 'Cappuccino',
    category: 'Hot Coffee',
    description: 'Rich espresso with steamed milk.',
    price: 3.5,
        image: menuImages['/src/assets/menu/cappucino.jpeg'],

  },
  {
    id: 9,
    name: 'Flat White',
    category: 'Hot Coffee',
    description: 'Smooth espresso with silky milk.',
    price: 3.75,
        image: menuImages['/src/assets/menu/flat white.jpeg'],

  },
  {
    id: 10,
    name: 'Café Mocha',
    category: 'Hot Coffee',
    description: 'Espresso, chocolate and steamed milk.',
    price: 4,
        image: menuImages['/src/assets/menu/cafe mocha.jpeg'],

  },
  {
    id: 11,
    name: 'Iced Spanish Latte',
    category: 'Iced Drinks',
    description: 'Espresso, cold milk and sweet cream.',
    price: 4.5,
        image: menuImages['/src/assets/menu/Spanish.jpeg'],

  },
  {
    id: 12,
    name: 'Iced Caramel Macchiato',
    category: 'Iced Drinks',
    description: 'Espresso, milk and caramel drizzle.',
    price: 4.5,
        image: menuImages['/src/assets/menu/Caramel Macchiato.jpeg'],

  },
  {
    id: 13,
    name: 'Iced Vanilla Latte',
    category: 'Iced Drinks',
    description: 'Espresso with cold milk and vanilla.',
    price: 4,
        image: menuImages['/src/assets/menu/Vanilla Latte.jpeg'],

  },
  {
    id: 14,
    name: 'Iced Americano',
    category: 'Iced Drinks',
    description: 'Bold espresso served over ice.',
    price: 3.5,
        image: menuImages['/src/assets/menu/Americano.jpeg'],

  },
  {
    id: 15,
    name: 'Iced Mocha',
    category: 'Iced Drinks',
    description: 'Chocolate,espresso & milk over ice',
    price: 4,
        image: menuImages['/src/assets/menu/Mocha.jpeg'],

  },
  {
    
  id: 16,
  name: 'Cheesecake Collection',
  category: 'Desserts',
  description: 'A creamy cheesecake collection with delicious flavors.',
  price: 5,
      image: menuImages['/src/assets/menu/CheeseCake.jpeg'],

  flavors: [
    { name: 'Lotus', price: 5 },
    { name: 'Strawberry', price: 5 },
    { name: 'Oreo', price: 5 },
    { name: 'Kinder', price: 5 },
    { name: 'Pistachio', price: 5 },
    { name: 'Classic', price: 5 },
  ],
},
  
  {
    id: 17,
    name: 'Tiramisu Cup',
    category: 'Desserts',
    description: 'Layers of cream and coffee biscuits.',
    price: 4.5,
        image: menuImages[ '/src/assets/menu/Tiramisu.jpeg'],

  },
  
  {
    id: 18,
    name: 'Chocolate Brownie',
    category: 'Desserts',
    description: 'Rich and fudgy chocolate brownie.',
    price: 3.5,
        image: menuImages['/src/assets/menu/Brownie.jpeg'],

  },
  {
   
  id: 19,
  name: 'Cake Collection',
  category: 'Desserts',
  description: 'Soft and delicious cakes in different flavors.',
  price: 4.5,
      image: menuImages['/src/assets/menu/Cake.jpeg'],

  flavors: [
    { name: 'Red Velvet', price: 5 },
    { name: 'Chocolate', price: 4.5 },
    { name: 'Vanilla', price: 4.5 },
    { name: 'Strawberry', price: 4.5 },
  ],
},
  
  {
   
  id: 20,
  name: 'Croissant Collection',
  category: 'Bakery Corner',
  description: 'Fresh and buttery croissants with delicious fillings.',
  price: 2.5,
      image: menuImages['/src/assets/menu/Croissant.jpeg'],

  flavors: [
    { name: 'Butter', price: 2.5 },
    { name: 'Chocolate', price: 3 },
    { name: 'Almond', price: 3.5 },
  ],
},
  {
    id: 23,
    name: 'Cinnamon Roll',
    category: 'Bakery Corner',
    description: 'Soft cinnamon pastry with sweet glaze.',
    price: 3.5,
        image: menuImages['/src/assets/menu/cinnamon roll.jpeg'],

  },
   {
  id: 24,
  name: 'Chocolate Chip Cookies',
  category: 'Bakery Corner',
  description: 'Fresh cookies filled with delicious chocolate chips.',
  price: 2.5,
  image: menuImages['/src/assets/menu/cookies.jpeg'],
},
  {
    
  id: 25,
  name: 'Muffin Collection',
  category: 'Bakery Corner',
  description: 'Soft and delicious muffins in different flavors.',
  price: 3,
      image: menuImages['/src/assets/menu/Muffins.jpeg'],

  flavors: [
    { name: 'Blueberry', price: 3 },
    { name: 'Chocolate', price: 3 },
    { name: 'Vanilla', price: 3 },
    { name: 'Red Velvet', price: 3.5 },
  ],
},
  {
  id: 26,
  name: 'Ice Cream Collection',
  category: 'Ice Cream Bar',
  description: 'Creamy and delicious ice cream in your favorite flavors.',
  price: 3,
      image: menuImages['/src/assets/menu/icecream.jpeg'],

  flavors: [
    { name: 'Vanilla', price: 3 },
    { name: 'Chocolate', price: 3 },
    { name: 'Strawberry', price: 3 },
    { name: 'Pistachio', price: 3.5 },
    { name: 'Lotus', price: 3.5 },
  ],
},
  
 {
   
  
  id: 27,
  name: 'Customize Your Bouquet',
  category: 'The Bloom Collection',
  description: 'Create your own beautiful bouquet with your favorite flowers.',
  price: 7,
  
  isCustomBouquet: true,
  flowerImages: {
    Roses: menuImages['/src/assets/menu/roses.jpeg'],
    Tulips: menuImages['/src/assets/menu/tulips.jpeg'],
    'Mixed Flowers': menuImages['/src/assets/menu/mixed.jpeg'],
  },
},
{
  id: 28,
  name: 'Coffee & Bloom',
  category: 'The Bloom Collection',
  description: 'A lovely coffee moment with fresh flowers.',
  price: 6,
  image: menuImages['/src/assets/menu/coffe.jpeg'],
},
{
  id: 29,
  name: 'Surprise Her Box',
  category: 'The Bloom Collection',
  description: 'A beautiful surprise made with love.',
  price: 15,
  image: menuImages['/src/assets/menu/box.jpeg'],
},


]
const categories = [
  'All',
  'Signature Drinks',
  'Hot Coffee',
  'Iced Drinks',
  'Desserts',
  'Bakery Corner',
  'Ice Cream Bar',
  'The Bloom Collection',
]

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        )

function handleAdd(item) {
  const savedOrder = JSON.parse(
    localStorage.getItem('breathOrder') || '[]'
  )

  const itemKey = item.cartKey || String(item.id)

  const existingItem = savedOrder.find(
    (product) =>
      (product.cartKey || String(product.id)) === itemKey
  )

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    savedOrder.push({
      ...item,
      cartKey: itemKey,
      quantity: 1,
    })
  }

  localStorage.setItem(
    'breathOrder',
    JSON.stringify(savedOrder)
  )

 const alertName = item.flavor
  ? `${item.flavor} ${item.name.replace(' Collection', '')}`
  : item.name

alert(`${alertName} added to your order! ♡`)
}


  return (
    <main className="menu-page">

      <section className="menu-heading">
        <p className="menu-label">A LITTLE TASTE OF HAPPINESS</p>

        <h1>
          Our <span>Menu</span>
        </h1>

        <p>
          Discover your favorite drinks, sweet treats,
          and little moments of happiness.
        </p>
      </section>

      <section className="menu-categories">
        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category
                ? 'category-btn selected'
                : 'category-btn'
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </section>

      <section className="menu-grid">
        {filteredItems.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            onAdd={handleAdd}
          />
        ))}
      </section>

    </main>
  )
}

export default Menu