import { useState } from 'react'

function MenuCard({ item, onAdd }) {
  const [selectedFlavor, setSelectedFlavor] = useState(
    item.flavors?.[0]?.name || ''
  )

  const currentFlavor = item.flavors?.find(
    (flavor) => flavor.name === selectedFlavor
  )

  const currentPrice = currentFlavor?.price ?? item.price

  function handleAdd() {
    const selectedItem = {
      ...item,
      flavor: selectedFlavor || undefined,
      price: currentPrice,
      cartKey: selectedFlavor
        ? `${item.id}-${selectedFlavor}`
        : String(item.id),
    }

    onAdd(selectedItem)
  }

  return (
    <div className="menu-card">

      <div className="menu-card-image">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="menu-card-content">

        <h3>{item.name}</h3>

        <p>{item.description}</p>

        {item.flavors && (
          <select
            value={selectedFlavor}
            onChange={(e) => setSelectedFlavor(e.target.value)}
            className="flavor-select"
          >
            {item.flavors.map((flavor) => (
              <option key={flavor.name} value={flavor.name}>
                {flavor.name}
              </option>
            ))}
          </select>
        )}

        <div className="menu-card-bottom">

          <span className="menu-price">
            ${currentPrice.toFixed(2)}
          </span>

          <button onClick={handleAdd}>
            Add to Order +
          </button>

        </div>

      </div>

    </div>
  )
}

export default MenuCard