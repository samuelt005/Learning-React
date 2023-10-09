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
  const { favorite, setFavorite } = useContext(FavoritesContext);

  function addFavorite(newFavorite) {
    const repeatedFavorite = favorite.some((item) => item.id === newFavorite.id);

    const novaLista = [...favorite];

    if (!repeatedFavorite) {
      novaLista.push(newFavorite);
      return setFavorite(novaLista);
    }

    novaLista.splice(novaLista.indexOf(newFavorite), 1);
    return setFavorite(novaLista);
  }
  return {
    favorite,
    addFavorite,
  };
}
