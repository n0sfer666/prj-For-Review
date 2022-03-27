import React from 'react';
import { TContainerSortProps } from './ContainerSort.type';
import './ContainerSort.scss';

export default function ContainerSort(props: TContainerSortProps) {
  const { sortButtons, title } = props;
  return (
    <aside className="container-sort">
      <h3 className="container-sort__headline">
        {title}
      </h3>
      {
        sortButtons.map((button) => (
          <div className="container-sort__button">
            {button}
          </div>
        ))
      }
    </aside>
  );
}
