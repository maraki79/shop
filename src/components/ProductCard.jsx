import React from 'react'

export default function ProductCard({ title, description, price, thumbnail }) {
  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-desc">{description}</p>
        <span className="product-price">${price}</span>
      </div>
    </div>
  )
}