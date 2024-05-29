import { Form, useLoaderData, Link } from 'react-router-dom';
import { FormInput, FormSelect, FormRange, FormCheckbox } from '../index';

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form
      className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'
      method='GET'
    >
      {/* SEARCH */}
      <FormInput
        type='search'
        label='search product'
        name='search'
        defaultValue={search}
        size='input-sm'
      />
      {/* CATEGORIES */}
      <FormSelect
        label='select category'
        name='category'
        list={meta.categories}
        defaultValue={category}
        size='select-sm'
      />
      {/* COMPANIES */}
      <FormSelect
        label='select company'
        name='company'
        list={meta.companies}
        defaultValue={company}
        size='select-sm'
      />
      {/* ORDER */}
      <FormSelect
        label='sort by'
        name='order'
        list={['a-z', 'z-a', 'high', 'low']}
        defaultValue={order}
        size='select-sm'
      />
      {/* PRICE */}
      <FormRange
        label='select price'
        name='price'
        price={price}
        size='range-sm'
      />
      {/* SHIPPING */}
      <FormCheckbox
        label='free shipping'
        name='shipping'
        defaultValue={shipping}
        size='checkbox-sm'
      />
      {/* BUTTONS */}
      <button type='submit' className='btn btn-primary btn-sm'>
        Search
      </button>
      <Link to='/products' className='btn btn-accent btn-sm'>
        Reset
      </Link>
    </Form>
  );
};
export default Filters;
