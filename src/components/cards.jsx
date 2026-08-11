import { useState } from 'react';
import getData from '../api/api';
import '../style/cards.css';

export default function Card({ name, url, onClick }) {
  const [imgUrl, setImgUrl] = useState(null);
  getData(url)
    .then((res) => {
      setImgUrl(res.sprites.other.dream_world.front_default);
    })
    .catch((err) => console.error(err));

  return (
    <div className="cards" id={name} onClick={onClick} role="button" tabIndex={0}>
      <div>
        <img src={imgUrl} alt={name} />
      </div>
      <p>{name}</p>
    </div>
  );
}
