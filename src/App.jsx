import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const GoodList = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li data-cy="Good">{good}</li>
    ))}
  </ul>
);

export const App = () => {
  const [sortGood, setSortGood] = useState(goodsFromServer);
  const [isSortedType, setIsSortedType] = useState('');
  const sortAlphabetically = () => {
    setSortGood([...sortGood].sort((a, b) => a.localeCompare(b)));
    setIsSortedType('alphabetically');
  };

  const sortByLength = () => {
    setSortGood([...sortGood].sort((a, b) => b.length - a.length));
    setIsSortedType('Sort by length');
  };

  const reverse = () => {
    setSortGood([...sortGood].reverse());
    setIsSortedType('reverse');
  };

  const reset = () => {
    setSortGood(goodsFromServer);
    setIsSortedType('reset');
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={
            isSortedType === 'alphabetically'
              ? 'button is-info'
              : 'button is-info is-light'
          }
          onClick={sortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={
            isSortedType === 'Sort by length'
              ? 'button is-info'
              : 'button is-info is-light'
          }
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={
            isSortedType === 'reverse'
              ? 'button is-info'
              : 'button is-info is-light'
          }
          onClick={reverse}
        >
          Reverse
        </button>

        <button
          type="button"
          className={
            isSortedType === 'reset'
              ? 'button is-info'
              : 'button is-info is-light'
          }
          onClick={reset}
        >
          Reset
        </button>
      </div>
      <GoodList goods={sortGood} />
    </div>
  );
};
