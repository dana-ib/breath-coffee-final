import { useState, useEffect } from 'react'

function Order() {
  const [orderItems, setOrderItems] = useState([])

  useEffect(() => {
    const savedOrder = JSON.parse(
      localStorage.getItem('breathOrder') || '[]'
    )

    setOrderItems(savedOrder)
  }, [])

  function updateQuantity(id, change) {
    const updatedOrder = orderItems
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + change }
          : item
      )
      .filter((item) => item.quantity > 0)

    setOrderItems(updatedOrder)

    localStorage.setItem(
      'breathOrder',
      JSON.stringify(updatedOrder)
    )
  }

  const total = orderItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <main className="order-page">

      <section className="order-heading">
        <p>YOUR LITTLE TREATS</p>
        <h1>My <span>Order</span></h1>
        <p>Everything you love, all in one place.</p>
      </section>

      {orderItems.length === 0 ? (

        <div className="empty-order">
          <h2>Your order is waiting for something sweet ♡</h2>
          <p>Go explore our menu and add your favorites!</p>
        </div>

      ) : (

        <section className="order-content">

          <div className="order-items">

            {orderItems.map((item) => (

              <div className="order-item" key={item.id}>

                <img src={item.image} alt={item.name} />

                <div className="order-item-info">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>

                  <div className="quantity-controls">

                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>

                  </div>
                </div>

                <strong>
                  ${(item.price * item.quantity).toFixed(2)}
                </strong>

              </div>

            ))}

          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>

            <div className="total-row">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>

          </div>

        </section>

      )}

    </main>
  )
}

export default Order