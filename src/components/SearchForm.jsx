import { useCallback } from 'react';
import { useGlobalContext } from '../GlobalContextProvider';

const SearchForm = () => {
  const { setSearchVal } = useGlobalContext();

  const handleOnFormSubmit = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { search } = Object.fromEntries(formData);
    if (!search) {
      return;
    }

    setSearchVal(search);

    // * THOUGHTS
    // fetch data with the value of search
    // * could do it in the onSuccess for the GET /photos request -- reset the form
    // e.currentTarget.reset();
  }, []);

  return (
    <section>
      <h1 className="title">Unsplash images</h1>
      <form className="search-form" onSubmit={handleOnFormSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
