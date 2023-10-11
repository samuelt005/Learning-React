import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FavoritesContext = createContext();
FavoritesContext.displayName = 'Favoritos';

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  return (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useFavoriteContext() {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  function addFavorite(newFavorite) {
    const repeatedFavorite = favorites.some(
      (item) => item.id === newFavorite.id,
    );

    let newList = [...favorites];

    if (!repeatedFavorite) {
      newList.push(newFavorite);
      return setFavorites(newList);
    }

    newList = favorites.filter((fav) => fav.id !== newFavorite.id);
    return setFavorites(newList);
  }
  return {
    favorites,
    addFavorite,
  };
}
