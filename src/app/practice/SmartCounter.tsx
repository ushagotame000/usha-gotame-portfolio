'use client'
import React, { FormEventHandler, useState } from 'react'

const SmartCounter = () => {
    const [count, setCount] = useState(0);
    const incrementFunction = ()=>{
        setCount(prev=>prev+1)
    }
    const decrementFunction = ()=>{
        setCount(prev=>prev-1)
    }
    const reset =() =>{
        setCount(0)
    }
    // cart logic
    const [items, setItems] = useState(0);
    const addCart =()=>{
        setItems(items + 1);
    }
    const deleteCart =()=>{
        if(items>0){
            setItems(items - 1);
        }
    }
    const resetCart =()=>{
        setItems(0)
    }
// form 
// const [formData, setFormData]= useState("");

const [name,setName] = useState('');
const [message, setMessage] = useState('');
const [submitted, setSubmitted] =useState(false);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (name && message) {
    setSubmitted(true);
  }
  console.log({name,message})
};





  return (
    <div> 
    <div className='text-center'>
        <h2 className='py-20'>Smart Counter</h2>
        <div className="item-center justify-center flex gap-x-32">
        <button className='bg-blue-400 rounded-3xl px-5 py-2 text-2xl' onClick={incrementFunction}>Increment</button>
        <h2>{count}</h2>
        <button className='bg-black text-white rounded-3xl px-3 py-2 text-2xl' onClick={decrementFunction} disabled={count ===0}>Decrement</button>
        </div>
         <button className='bg-black text-white rounded-3xl px-3 py-2 text-2xl' onClick={reset} >Reset</button>

    </div>
    <div className='text-center'>
        <h2 className='py-20'>Cart Item</h2>
        <div className="item-center justify-center flex gap-x-32">
        <button className='bg-green-400  text-white rounded-3xl px-5 py-2 text-2xl' onClick={addCart}>Add to Cart</button>
        <h2 className='text-xl text-red-500 font-bold'>{items === 0 ? 'Your cart is empty': `You have ${items} items in your cart`}</h2>
        <button className='bg-red-300 text-white rounded-3xl px-3 py-2 text-2xl' onClick={deleteCart} >Delete</button>
        </div>
         <button className='bg-black text-white rounded-3xl px-3 py-2 text-2xl' onClick={resetCart} >Reset</button>

    </div>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4">
      {!submitted ? (
        <>
          <h2 className="text-xl font-bold text-gray-800">Feedback Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 font-semibold mb-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-semibold mb-1">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Your message"
                rows={4}
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full py-2 rounded-md font-semibold text-white ${
                name && message ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={!name || !message}
            >
              Submit
            </button>
          </form>
        </>
      ) : (
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold text-green-700">Thank you, {name}!</h2>
          <p className="text-gray-700">We received your message:</p>
          <p className="italic text-gray-600">"{message}"</p>
        </div>
      )}
    </div>

</div>  )
}

export default SmartCounter