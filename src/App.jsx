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
      <li data-cy="Good" key={good}>
        {good}
      </li>
    ))}
  </ul>
);

export const App = () => {
  const [sortGood, setSortGood] = useState(goodsFromServer);
  const [isSortedType, setIsSortedType] = useState('');
  const [isReversed, setIsReversed] = useState(false);
  const [isReseted, setIsReseted] = useState('');
  const toggleReverse = () => {
    setIsReversed(prev => !prev);
    setSortGood([...sortGood].reverse());
    setIsReseted('reseted');
    setIsSortedType('reverse');
  };

  const sortAlphabetically = () => {
    const sorted = [...sortGood].sort((a, b) => a.localeCompare(b));

    if (isReversed) {
      sorted.reverse();
    }

    setSortGood(sorted);
    setIsSortedType('alphabetically');
    setIsReseted('reseted');
  };

  const sortByLength = () => {
    const sorted = [...sortGood].sort((a, b) => b.length - a.length);

    if (isReversed) {
      sorted.reverse();
    }

    setSortGood(sorted);
    setIsSortedType('Sort by length');
    setIsReseted('reseted');
  };

  const reset = () => {
    const resetList = [...goodsFromServer];

    setSortGood(resetList);
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
          onClick={toggleReverse}
        >
          Reverse
        </button>

        {isReseted === 'reseted' && (
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
        )}
      </div>
      <GoodList goods={sortGood} />
    </div>
  );
};
