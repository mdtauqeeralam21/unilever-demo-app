
import React from 'react';
import Image from 'next/image';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <header className="bg-gray-100 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-black text-3xl font-bold">Unilever</h1>
          <p className="text-gray-500 mb-2">brand test</p>
        </div>
      </header>

      
      <main className="flex-1 container mx-auto py-8">
      <section className="grid grid-cols-3 mb-8">
          <div className="grid grid-cols-3 gap-4 ">
            <button className="bg-purple-800 text-xs px-1 py-1 text-white rounded-full active:bg-green-800">
              Production- 4
            </button>
            <button className="bg-purple-800 text-xs px-1 py-1 text-white rounded-full active:bg-green-800">
              Production- 4
            </button>
            <button className="bg-purple-800 text-xs px-1 py-1 text-white  rounded-full active:bg-green-800">
              Online Promotions-1
            </button>
          </div>
          <div>
          
          </div>
          <div>
          <div className="grid grid-cols-3 gap-4 ">
            <button className="bg-yellow-500 text-sm font-bold px-1 py-2 text-black rounded active:bg-green-800">
              New Product +
            </button>
            <button className="bg-yellow-500 text-sm font-bold px-1 py-2 text-black rounded active:bg-green-800">
              Create Site +
            </button>
            <button className="bg-yellow-500 text-sm font-bold px-1 py-2 text-black  rounded active:bg-green-800">
              Bulk Upload
            </button>
          </div>
          </div>
        </section>

        <section className="mb-8">
          

          
          <div className="grid grid-cols-4 gap-4">
           
            <div className='grid grid-rows-6 '>
            <div className="grid grid-cols-2  gap-2 bg-white rounded-lg shadow-md">

              <div className="mr-1">
            <Image
              src="https://media.clickoncare.com/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/h/i/himalaya-green-tea-10x2-7025142735.jpg" // Replace with your image URL
              alt="Product Image"
              width={150}
              height={100}
              layout="fixed"
              className=" rounded-md"
            />
            </div>
            <div>
            <span className="text-blue-700 px-2 py-1 rounded-lg bg-blue-300">Pending</span>
            

            
            <h3 className="text-xl mb-2">Himalaya Green Tea 60s Classic</h3>
            <p className="text-gray-500 mb-2">Bar code ID: alapa</p>
            <div className="flex items-center">
        
         
          <p className="text-black font-bold text-lg">&#x20B9;300 &nbsp;</p>
       
        <div className="text-gray-500 text-lg line-through"> &#x20B9; 300 &nbsp;</div>
        <p className="text-green-600 font-bold text-lg">&#x20B9;0 off</p>
      </div>
      </div>
      
         
  <div className="mt-2 flex p-2 col-span-2 row-span-1 ml-4">
  <button className="bg-gray-800 text-white px-2 rounded-lg mr-2 border-2 border-black hover:bg-yellow-600 active:bg-blue-800">
    Promote
  </button>
  <button className="bg-white text-black px-2 rounded-lg mr-2 border-2 border-black hover:bg-yellow-600 active:bg-green-800">
    Promote Online
  </button>
  <button className="bg-white text-black px-2 rounded-lg border-2 border-black hover:bg-yellow-600 active:bg-yellow-800">
    Edit
  </button>
</div>
</div>
          </div>


          
            <div className='grid grid-rows-6 '>
            <div className="grid grid-cols-2  gap-2 bg-white rounded-lg shadow-md">

              <div className="mr-1">
            <Image
              src="https://m.media-amazon.com/images/I/715WCsJ9VHL._SL1500_.jpg" // Replace with your image URL
              alt="Product Image"
              width={150}
              height={100}
              layout="fixed"
              className=" rounded-md"
            />
            </div>
            <div>
            <span className="text-blue-700 px-2 py-1 rounded-lg bg-blue-300">Pending</span>
            

            
            <h3 className="text-xl mb-2">Himalaya Green Tea 60s Classic</h3>
            <p className="text-gray-500 mb-2">Bar code ID: alapa</p>
            <div className="flex items-center">
        
         
          <p className="text-black font-bold text-lg">&#x20B9;300 &nbsp;</p>
       
        <div className="text-gray-500 text-lg line-through"> &#x20B9; 300 &nbsp;</div>
        <p className="text-green-600 font-bold text-lg">&#x20B9;0 off</p>
      </div>
      </div>
      
         
  <div className="mt-2 flex p-2 col-span-2 row-span-1 ml-4">
  <button className="bg-gray-800 text-white px-2 rounded-lg mr-2 border-2 border-black hover:bg-yellow-600 active:bg-blue-800">
    Promote
  </button>
  <button className="bg-white text-black px-2 rounded-lg mr-2 border-2 border-black hover:bg-yellow-600 active:bg-green-800">
    Promote Online
  </button>
  <button className="bg-white text-black px-2 rounded-lg border-2 border-black hover:bg-yellow-600 active:bg-yellow-800">
    Edit
  </button>
</div>
</div>
          </div>


            {/* Card 3 */}
            <div className='grid grid-rows-6 '>
            <div className="grid grid-cols-2  gap-2 bg-white rounded-lg shadow-md">

              <div className="mr-1">
            <Image
              src="https://th.bing.com/th/id/R.1f2cafa4279d4b2ccd38c11a55e7649a?rik=UovlAYUOM64U7w&riu=http%3a%2f%2fimages.chickadvisor.com%2fitem%2f35167%2foriginal%2f892373a38c81397e727eccdaa166ec0f.jpg&ehk=Ap%2fqYxYf4R%2brndFP5SVczOSvD7EX2kt3qGQtmI5WRf0%3d&risl=&pid=ImgRaw&r=0" // Replace with your image URL
              alt="Product Image"
              width={150}
              height={100}
              layout="fixed"
              className=" rounded-md"
            />
            </div>
            <div>
            <span className="text-blue-700 px-2 py-1 rounded-lg bg-blue-300">Pending</span>
            

            
            <h3 className="text-xl mb-2">Lipton Green Tea Honey Lemon 100gm</h3>
            <p className="text-gray-500 mb-2">Bar code ID: alapa</p>
            <div className="flex items-center">
        
         
          <p className="text-black font-bold text-lg">&#x20B9;130 &nbsp;</p>
       
        <div className="text-gray-500 text-lg line-through"> &#x20B9; 130 &nbsp;</div>
        <p className="text-green-600 font-bold text-lg">&#x20B9;0 off</p>
      </div>
      </div>
      
         
  <div className="mt-2 flex p-2 col-span-2 row-span-1 ml-4">
  <button className="bg-gray-800 text-white px-2 rounded-lg mr-2 border-2 border-black hover:bg-yellow-600 active:bg-blue-800">
    Promote
  </button>
  <button className="bg-white text-black px-2 rounded-lg mr-2 border-2 border-black hover:bg-yellow-600 active:bg-green-800">
    Promote Online
  </button>
  <button className="bg-white text-black px-2 rounded-lg border-2 border-black hover:bg-yellow-600 active:bg-yellow-800">
    Edit
  </button>
</div>
</div>
          </div>


            
            <div className='grid grid-rows-6 '>
            <div className="grid grid-cols-2  gap-2 bg-white rounded-lg shadow-md">

              <div className="mr-1">
            <Image
              src="https://5.imimg.com/data5/SELLER/Default/2020/11/ZO/ZG/WS/39220078/party-poppers-500x500.jpg" // Replace with your image URL
              alt="Product Image"
              width={150}
              height={100}
              layout="fixed"
              className=" rounded-md"
            />
            </div>
            <div>
            <span className="text-blue-700 px-2 py-1 rounded-lg bg-blue-300">Pending</span>
            

            
            <h3 className="text-xl mb-2">Recipto party popper</h3>
            <p className="text-gray-500 mb-2">Bar code ID: alapa</p>
            <div className="flex items-center">
        
         
          <p className="text-black font-bold text-lg">&#x20B9;1 &nbsp;</p>
       
        <div className="text-gray-500 text-lg line-through"> &#x20B9; 1 &nbsp;</div>
        <p className="text-green-600 font-bold text-lg">&#x20B9;0 off</p>
      </div>
      </div>
      
         
  <div className="mt-2 flex p-2 col-span-2 row-span-1 ml-4">
  <button className="bg-gray-800 text-white px-2 rounded-lg mr-2 border-2 border-black hover:bg-yellow-600 active:bg-blue-800">
    Promote
  </button>
  <button className="bg-white text-black px-2 rounded-lg mr-2 border-2 border-black hover:bg-yellow-600 active:bg-green-800">
    Promote Online
  </button>
  <button className="bg-white text-black px-2 rounded-lg border-2 border-black hover:bg-yellow-600 active:bg-yellow-800">
    Edit
  </button>
</div>
</div>
          </div>


          </div>
        </section>
      </main>

      
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto">
          <p>&copy; 2023 Unilever India. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
