
export const generateOrder = (name, email, phone, cart, total) => {
  return {
    buyer: {
      name,
      email,
      phone
    },
    items: cart,
    total,
    createdAt: new Date().toLocaleString()
  }
}
