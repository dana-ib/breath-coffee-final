function MenuCard({ item, onAdd }) {
  return (
    <div className="menu-card">

      <div className="menu-card-image">
        <img src={item.image} alt={item.name} />
      </div>

      <div className="menu-card-content">

        <h3>{item.name}</h3>

        <p>{item.description}</p>

        <div className="menu-card-bottom">

          <span className="menu-price">
            ${item.price.toFixed(2)}
          </span>

          <button onClick={() => onAdd(item)}>
            Add to Order +
          </button>

        </div>

      </div>

    </div>
  )
}

export default MenuCard