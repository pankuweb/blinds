import { PRODUCT_LIST } from "../actions/type";
const initialState = {
  list: [{}],
  products: [{}],
  loading: false,
  not_found: false,
};
const products = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      return { ...state, list: action.payload, loading: false };
    default:
      return {
        ...state,
        list: action.payload,
        loading: false,
        not_found: false,
      };
  }
};
export default products;
