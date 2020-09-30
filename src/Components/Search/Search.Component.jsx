import React from 'react'
import './Search.Styles.css'

export const Search = ({ placeholder, handleChange }) => (
  <input type="search" className="search" placeholder={placeholder} onChange={handleChange} />
)
