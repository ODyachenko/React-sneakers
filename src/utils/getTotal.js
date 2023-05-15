export const getTotal = (items) => {
  return items.reduce((sum, item) => {
    return (sum += item.price);
  }, 0);
};
