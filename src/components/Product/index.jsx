import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import axiosInstance from '../../utils/axiosInstance';
import Review from '../Review';

function Product({ product }) {
  const {
    cart: cartItem, isAdding, isUpdating, isDeleting,
  } = useSelector((state) => ({
    cart: state.cart.find((item) => item.productId === product.id),
    isAdding: state.loading.some((x) => x.id === product.id && x.actionName === 'ADD_CART'),
    isUpdating: state.loading.some((x) => x.id === product.id && x.actionName === 'UPDATE_CART'),
    isDeleting: state.loading.some((x) => x.id === product.id && x.actionName === 'DELETE_CART'),
  }));

  const dispatch = useDispatch();

  const addToCart = useCallback(async (data) => {
    const type = 'ADD_CART';
    try {
      dispatch({
        type: `${type}_REQUEST`,
        meta: { id: data.productId, message: 'Cart Item is adding...', loadingId: data.productId },
      });
      const res = await axiosInstance.post('cart', data);
      dispatch({
        type: `${type}_SUCCESS`,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: `${type}_FAIL`,
        meta: { id: data.productId, message: error.message, title: 'Add Cart Failed' },
      });
    }
  }, []);

  const updateCartItem = useCallback(async (data) => {
    const type = 'UPDATE_CART';
    try {
      dispatch({
        type: `${type}_REQUEST`,
        meta: { id: data.productId, message: 'Cart Item is updating...' },
      });
      const res = await axiosInstance.put(`cart/${data.id}`, data);
      dispatch({
        type: `${type}_SUCCESS`,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: `${type}_FAIL`,
        meta: { id: data.productId, message: err.message, title: 'Update Cart Failed' },
      });
    }
  }, []);

  const deleteCartItem = useCallback(async (data) => {
    const type = 'DELETE_CART';
    try {
      dispatch({
        type: `${type}_REQUEST`,
        meta: { id: data.productId, message: 'Cart Item is deleting...' },
      });
      await axiosInstance.delete(`cart/${data.id}`);
      dispatch({
        type: `${type}_SUCCESS`,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: `${type}_FAIL`,
        meta: { id: data.productId, message: err.message, title: 'Delete Cart Failed' },
      });
    }
  }, []);

  return (
    <div
      key={product.id}
      className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8 my-8"
    >
      <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-3">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover object-center"
        />
      </div>
      <div className="sm:col-span-8 lg:col-span-9">
        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
          {product.title}
        </h2>

        <section aria-labelledby="information-heading" className="mt-2">
          <h3 id="information-heading">{product.description}</h3>

          <p className="text-2xl text-gray-900">{product.price}</p>

          {/* Reviews */}
          <Review {...product.rating} />
        </section>
        <section aria-labelledby="options-heading" className="mt-10">
          <h3 id="options-heading" className="sr-only">
            Product options
          </h3>
          {cartItem ? (
            <div className="flex items-center">
              <button
                onClick={() =>
                  updateCartItem({
                    ...cartItem,
                    quantity: cartItem.quantity + 1,
                  })}
                disabled={isUpdating}
                type="button"
                className="flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-400"
              >
                +
              </button>
              <p className="flex-1 text-center text-2xl font-bold">{cartItem.quantity}</p>
              <button
                onClick={() => {
                  if (cartItem.quantity > 1) {
                    updateCartItem({
                      ...cartItem,
                      quantity: cartItem.quantity - 1,
                    });
                  } else {
                    deleteCartItem(cartItem);
                  }
                }}
                disabled={
                      cartItem.quantity > 1 ?
                        isUpdating :
                        isDeleting
                    }
                type="button"
                className="flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-400"
              >
                -
              </button>
            </div>
          ) : (
            <button
              onClick={() =>
                addToCart({
                  productId: product.id,
                  quantity: 1,
                })}
              disabled={isAdding}
              type="button"
              className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-wait"
            >
              Add to Cart
            </button>
          )}
        </section>
      </div>
    </div>
  );
}

Product.prototypes = {
  product: PropTypes.exact({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.exact({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }),
  }),
};
export default Product;
