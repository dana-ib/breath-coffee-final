import { useState } from 'react'

function MenuCard({ item, onAdd }) {
  const [selectedFlavor, setSelectedFlavor] = useState(
    item.flavors?.[0]?.name || ''
  )

  const [flowerType, setFlowerType] = useState('Roses')
  const [flowerColor, setFlowerColor] = useState('Pink')
  const [bouquetSize, setBouquetSize] = useState('Mini')

  const currentFlavor = item.flavors?.find(
    (flavor) => flavor.name === selectedFlavor
  )

  const bouquetSizes = {
    Mini: 7,
    Classic: 12,
    Premium: 20,
  }

  const currentPrice = item.isCustomBouquet
    ? bouquetSizes[bouquetSize]
    : currentFlavor?.price ?? item.price

  function handleAdd() {
    const selectedItem = {
  ...item,
  image: item.isCustomBouquet
    ? item.flowerImages[flowerType]
    : item.image,
  flavor: selectedFlavor || undefined,
  price: currentPrice,
  customOptions: item.isCustomBouquet
    ? {
        flowerType,
        flowerColor,
        bouquetSize,
      }
    : undefined,
  cartKey: item.isCustomBouquet
    ? `${item.id}-${flowerType}-${flowerColor}-${bouquetSize}`
    : selectedFlavor
      ? `${item.id}-${selectedFlavor}`
      : String(item.id),
}



    onAdd(selectedItem)
  }

  return (
    <div className="menu-card">

      <div className="menu-card-image">

       <img
  src={
    item.isCustomBouquet
      ? item.flowerImages[flowerType]
      : item.image
  }
  alt={item.name}
/>
      </div>
      

      <div className="menu-card-content">

        <h3>{item.name}</h3>

        <p>{item.description}</p>

        {item.isCustomBouquet && (
          <>
            <label>Flower Type</label>
            <select
              value={flowerType}
              onChange={(e) => setFlowerType(e.target.value)}
              className="flavor-select"
            >
              <option>Roses</option>
              <option>Tulips</option>
              <option>Mixed Flowers</option>
            </select>

            <label>Flower Color</label>
            <select
              value={flowerColor}
              onChange={(e) => setFlowerColor(e.target.value)}
              className="flavor-select"
            >
              <option>Pink</option>
              <option>White</option>
              <option>Red</option>
              <option>Mixed</option>
            </select>

            <label>Bouquet Size</label>
            <select
              value={bouquetSize}
              onChange={(e) => setBouquetSize(e.target.value)}
              className="flavor-select"
            >
              <option value="Mini">Mini - 3 Flowers</option>
              <option value="Classic">Classic - 6 Flowers</option>
              <option value="Premium">Premium - 12 Flowers</option>
            </select>
          </>
        )}

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