import React, { useEffect } from 'react';

import { useAppSelector } from '../../store/store';
import { CardItem } from '../CardItem';
import { getSearchProducts } from '../../utils/getSearchProducts';

import Close from '../../assets/Close.svg';
import Search from '../../assets/icons/search.svg';

export const SearchForm = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const products = useAppSelector((state) => state.products.products);

  const visibleProducts = getSearchProducts(products, query);

  const ref = React.useRef<HTMLInputElement>(null);

  const closedModal = () => {
    setShowModal(false);
    setQuery('');
  };

  const onBlurCustom = (e: React.MouseEvent | React.FocusEvent) => {
    if (e.target instanceof Element && e.target.id === 'search-bg') {
      closedModal();
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [showModal]);

  return (
    <>
      <button
        className="relative flex items-center whitespace-nowrap h-16 transition-colors duration-500 ease-out hover:border-b-4 hover:text-primary hover:border-b-primary border-b-4 border-transparent text-secondary border-l-elements border-l w-16 flex-1 justify-center"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <img src={Search} alt="favourites" className="w-6 h-6" />
      </button>
      {showModal && (
        <>
          <div
            id="search-bg"
            className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none font-mont-regular"
            onClick={onBlurCustom}
          >
            <div className="relative h-1/4 w-full mt-12 sm:mt-12 mx-auto max-w-6xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="sticky top-0 z-10 bg-white flex items-center justify-between gap-6 p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <input
                    className="w-full border boreder-secondary hover:border-primary active:border-primary focus:border-primary font-normal h-12 px-3 py-1 text-xl placeholder-blueGray-300 bg-white rounded"
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    ref={ref}
                  ></input>

                  <button
                    className="p-1 ml-auto float-right text-3xl leading-none outline-none focus:outline-none"
                    onClick={closedModal}
                  >
                    <span className="bg-transparent text-primary  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <img src={Close} alt="close" className="w-6 h-6" />
                    </span>
                  </button>
                </div>

                <div className="relative p-6 flex-auto">
                  <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {!visibleProducts?.length && <span> No matches found</span>}

                    <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {visibleProducts?.map((product) => (
                        <CardItem key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};
