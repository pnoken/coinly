export const TopCoins = ({ coins }) => {
  const { name, abbr, price } = coins;

  return (
    <>
      <h3>{abbr}</h3> <h2>{name}</h2> <p>{price}</p>
    </>
  );
};
