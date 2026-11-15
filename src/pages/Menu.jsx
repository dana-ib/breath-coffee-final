import { useState } from 'react'
import MenuCard from '../components/MenuCard'

const menuItems = [
  {
    id: 1,
    name: 'Pink Cloud',
    category: 'Signature Drinks',
    description: 'Strawberry, vanilla and creamy milk.',
    price: 4.5,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600',
  },
  {
    id: 2,
    name: 'Pistachio Dream',
    category: 'Signature Drinks',
    description: 'Creamy pistachio latte.',
    price: 5,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600',
  },
  {
    id: 3,
    name: 'Rose Vanilla',
    category: 'Signature Drinks',
    description: 'Delicate rose and smooth vanilla.',
    price: 4.5,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600',
  },
  {
    id: 4,
    name: 'Caramel Bliss',
    category: 'Signature Drinks',
    description: 'Sweet caramel with creamy milk.',
    price: 4.5,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600',
  },
  {
    id: 5,
    name: 'Strawberry Matcha',
    category: 'Signature Drinks',
    description: 'Fresh strawberry with smooth matcha.',
    price: 5,
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600',
  },
  {
    id: 6,
    name: 'Espresso',
    category: 'Hot Coffee',
    description: 'A rich and bold shot of espresso.',
    price: 2.5,
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600',
  },
  {
    id: 7,
    name: 'Americano',
    category: 'Hot Coffee',
    description: 'Espresso blended with hot water.',
    price: 3,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600',
  },
  {
    id: 8,
    name: 'Cappuccino',
    category: 'Hot Coffee',
    description: 'Rich espresso with steamed milk.',
    price: 3.5,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=600',
  },
  {
    id: 9,
    name: 'Flat White',
    category: 'Hot Coffee',
    description: 'Smooth espresso with silky milk.',
    price: 3.75,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600',
  },
  {
    id: 10,
    name: 'Café Mocha',
    category: 'Hot Coffee',
    description: 'Espresso, chocolate and steamed milk.',
    price: 4,
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600',
  },
  {
    id: 11,
    name: 'Iced Spanish Latte',
    category: 'Iced Drinks',
    description: 'Espresso, cold milk and sweet cream.',
    price: 4.5,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600',
  },
  {
    id: 12,
    name: 'Iced Caramel Macchiato',
    category: 'Iced Drinks',
    description: 'Espresso, milk and caramel drizzle.',
    price: 4.5,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600',
  },
  {
    id: 13,
    name: 'Iced Vanilla Latte',
    category: 'Iced Drinks',
    description: 'Espresso with cold milk and vanilla.',
    price: 4,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600',
  },
  {
    id: 14,
    name: 'Iced Americano',
    category: 'Iced Drinks',
    description: 'Bold espresso served over ice.',
    price: 3.5,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600',
  },
  {
    id: 15,
    name: 'Cold Brew',
    category: 'Iced Drinks',
    description: 'Smooth slow-steeped cold coffee.',
    price: 4,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600',
  },
  {
    
  id: 16,
  name: 'Cheesecake Collection',
  category: 'Desserts',
  description: 'A creamy cheesecake collection with delicious flavors.',
  price: 5,
  image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600',
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
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600',
  },
  
  {
    id: 18,
    name: 'Chocolate Brownie',
    category: 'Desserts',
    description: 'Rich and fudgy chocolate brownie.',
    price: 3.5,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600',
  },
  {
   
  id: 19,
  name: 'Cake Collection',
  category: 'Desserts',
  description: 'Soft and delicious cakes in different flavors.',
  price: 4.5,
  image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=600',
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
  image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600',
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
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600',
  },
   {
  id: 36,
  name: 'Chocolate Chip Cookies',
  category: 'Bakery Corner',
  description: 'Fresh cookies filled with delicious chocolate chips.',
  price: 2.5,
  image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600',
},
  {
    
  id: 25,
  name: 'Muffin Collection',
  category: 'Bakery Corner',
  description: 'Soft and delicious muffins in different flavors.',
  price: 3,
  image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600',
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
  image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600',
  flavors: [
    { name: 'Vanilla', price: 3 },
    { name: 'Chocolate', price: 3 },
    { name: 'Strawberry', price: 3 },
    { name: 'Pistachio', price: 3.5 },
    { name: 'Lotus', price: 3.5 },
  ],
},
  
 {
    id: 31,
    name: 'A Little Bloom',
    category: 'The Bloom Collection',
    description: 'A beautiful single flower.',
    price: 3,
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600',
  },
  {
    id: 32,
    name: 'Mini Bloom',
    category: 'The Bloom Collection',
    description: 'A little bouquet of fresh flowers.',
    price: 7,
    image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600',
  },
  {
    id: 33,
    name: 'Pink Rose Bouquet',
    category: 'The Bloom Collection',
    description: 'A lovely bouquet of pink roses.',
    price: 12,
    image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=600',
  },
  {
    id: 34,
    name: 'Coffee & Bloom',
    category: 'The Bloom Collection',
    description: 'Your favorite coffee with a little flower.',
    price: 6,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600',
  },
  {
    id: 35,
    name: 'Surprise Her Box',
    category: 'The Bloom Collection',
    description: 'A sweet little box made to surprise.',
    price: 15,
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600',
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