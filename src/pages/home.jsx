import React, { useEffect, useState, useContext } from 'react'
import AuthContext from '../AuthContext';
function Home() {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch('https://rabloassessment.onrender.com/getProducts')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const productData = {
      name: productName,
      userEmail: user, // include the email from the context
    };

    // send productData to the server...
  };

  return (
    <div>
    <nav className="bg-blue-500 p-2 mt-0 w-full">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
          <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
            <span className="text-2xl pl-2"><i className="em em-grinning"></i>Home</span>
          </a>
        </div>
      </div>
    </nav>
    <div className='text-2xl pl-2 text-white bg-blue-500 font-extrabold'>Products</div>
    <div className="flex flex-wrap justify-around">
      {products.map((product) => (
        <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.name}</div>
            <p className="text-gray-700 text-base">{product.company}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{product.category}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${product.price}</span>
          </div>
        </div>
      ))}
    </div>
    <div>Add Products:</div>
    <form className="mt-8 space-y-6" action="https://rabloassessment.onrender.com/add" method="POST" onSubmit={handleSubmit}>
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm -space-y-px">
        <p>{user? user.email: 'fdks' }</p>
          <div>
            <label htmlFor="product-name">Product Name</label>
            <input id="product-name" value={productName} onChange={(e) => setProductName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>

        <div>
          <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}

export default Home