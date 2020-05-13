// write your CatList component here
import React from 'react';

export default function CatList(props) {
  const { catPics } = props;

  return (
    <div>
      {catPics.map(cat => {
        return <img src={cat.url} alt={cat.id} key={cat.id} />
      })}
    </div>
  )
}