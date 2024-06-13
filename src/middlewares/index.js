export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ name: 'Lucas' }, ...actionInfo.action.payload];
  const updateActionInfo = { ...actionInfo, action: {...actionInfo.action, payload: featured}}
  next(updateActionInfo);
};

export const capitalizePokemons = (store)=>(next)=>(action)=>{
  const capitalize = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  if (action.type === "data/setPokemons") {
      const capitalizedPokemons = action.payload.map((pokemon) => {
          return {
              ...pokemon,
              name: capitalize(pokemon.name),
          };
      });
      const updatedAction = {
          ...action,
          payload: capitalizedPokemons
      }
      return next(updatedAction)
  }
  return next(action)
}