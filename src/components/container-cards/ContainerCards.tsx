import React from 'react';
import { TContainerCardsProps } from './ContainerCards.type';

export default function ContainerCards(props: TContainerCardsProps) {
  const { title, cards } = props;
  return (
    <main className="container-cards">
      <h1 className="container-cards__headline">
        {title}
      </h1>
      {
        cards.map((card) => (
          <div className="container-cards__card">
            {card}
          </div>
        ))
      }
    </main>
  );
}
