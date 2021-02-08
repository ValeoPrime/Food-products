import { TOGGLE_FAVORITE } from "./actionTypes";

export function toggleFavorite(id) {
  return {
    type: TOGGLE_FAVORITE,
    payload: +id,
  };
}
