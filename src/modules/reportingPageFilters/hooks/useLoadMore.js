import { useState } from 'react';

export const useLoadMore = (quantity, itemsLength) => {
  const [items, setItems] = useState(quantity);

  const hasMore = items < itemsLength;

  const handleLoadMore = () => {
    if (hasMore) {
      setItems(items + quantity);
    } else {
      setItems(quantity);
    }
  };

  return {
    items,
    handleLoadMore,
    hasMore,
  };
};
