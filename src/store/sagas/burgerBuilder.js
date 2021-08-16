import { put } from "@redux-saga/core/effects";
import * as actions from "../actions";
import axios from "../../axios-orders";

export function* initIngredientsSaga() {
  try {
    const response = yield axios.get(
      "https://react-app-6be28.firebaseio.com/ingredients.json"
    );
    yield put(actions.setIngredients(response.data));
  } catch (error) {
    yield put(actions.fetchIngredientsFailed());
  }
}
