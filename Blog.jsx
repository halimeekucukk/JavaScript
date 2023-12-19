import React from 'react';
import './style.css';
import Button from './componenets/button';

export default function App() {
  const username = 'Halime Küçük ';

  const products = [
    { id: 1, name: 'HTML-CSS', inStock: true },
    { id: 2, name: 'JAVASCRIPT', inStock: true },
    { id: 3, name: 'REACT', inStock: true },
    { id: 4, name: 'Python', inStock: false },
    { id: 5, name: 'Java', inStock: false },
    { id: 6, name: 'C#', inStock: false },
    { id: 5, name: 'SQL', inStock: false },
  ];
  return (
    <div>
      <button>BUTTON</button>

      <h1>{username}</h1>
      <p>
        Konya Gıda ve Tarım Üniversitesi Öğrencisi Bilgisayar Mühendisliği 3.
        Sınıf Öğrencisiyim.
      </p>
      <img src="https://picsum.photos/200/300" alt="" />

      <hr />
      <ul>
        <h4> ÜRETKEN AKADEMİ'DE ÖĞRENDİĞİM YAZILIM DİLLERİ</h4>
        {products
          .filter((item) => item.inStock)
          .map((item) => (
            <li key={item.id}> {item.name.toUpperCase()} </li>
          ))}
      </ul>

      <hr />
      <ul>
        <h4> BİLDİĞİM DİĞER YAZILIM DİLLERİ</h4>
        {products
          .filter((item) => item.inStock == false)

          .map((item) => (
            <li key={item.id}> {item.name.toUpperCase()} </li>
          ))}
      </ul>
    </div>
  );
}
