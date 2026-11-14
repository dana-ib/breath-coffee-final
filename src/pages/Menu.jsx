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
    name: 'Cappuccino',
    category: 'Hot Coffee',
    description: 'Rich espresso with steamed milk.',
    price: 3.5,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=600',
  },
  {
    id: 4,
    name: 'Iced Spanish Latte',
    category: 'Iced Drinks',
    description: 'Espresso, cold milk and sweet cream.',
    price: 4.5,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600',
  },
  {
    id: 5,
    name: 'Lotus Cheesecake',
    category: 'Desserts',
    description: 'Creamy cheesecake with Lotus topping.',
    price: 5,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600',
  },
  {
    id: 6,
    name: 'Tiramisu Cup',
    category: 'Desserts',
    description: 'Layers of cream and coffee biscuits.',
    price: 4.5,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600',
  },
  {
    id: 7,
    name: 'Chocolate Croissant',
    category: 'Bakery Corner',
    description: 'Flaky pastry filled with chocolate.',
    price: 3,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600',
  },
  {
    id: 8,
    name: 'Pistachio Ice Cream',
    category: 'Ice Cream Bar',
    description: 'Smooth and creamy pistachio ice cream.',
    price: 3.5,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600',
  },
  {
    id: 9,
    name: 'A Little Bloom',
    category: 'The Bloom Collection',
    description: 'A beautiful single flower.',
    price: 3,
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600',
  },
  {
    id: 10,
    name: 'Mini Bloom',
    category: 'The Bloom Collection',
    description: 'A little bouquet of flowers.',
    price: 7,
    image: 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600',
  },
  {
    id: 11,
    name: 'Coffee & Bloom',
    category: 'The Bloom Collection',
    description: 'Your favorite coffee with a little flower.',
    price: 6,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600',
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

  const existingItem = savedOrder.find(
    (product) => product.id === item.id
  )

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    savedOrder.push({
      ...item,
      quantity: 1,
    })
  }

  localStorage.setItem(
    'breathOrder',
    JSON.stringify(savedOrder)
  )

  alert(`${item.name} added to your order! ♡`)
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