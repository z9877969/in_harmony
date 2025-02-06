import { useState } from 'react';

export const useLoadMore = (quantity, itemsLength) => {
  const [items, setItems] = useState(quantity);

  const handleLoadMore = () => {
    setItems(items + quantity);
  };

  const hasMore = items < itemsLength;

  return {
    items,
    handleLoadMore,
    hasMore,
  };
};
