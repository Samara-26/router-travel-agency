import React from 'react'
import destinations from '../data/destinations.json'

function Home() {

  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold text-primary">Find Your Next Student Adventure</h1>
      <form className="md:join w-full flex flex-col md:flex-row gap-2 md:gap-0 justify-center px-4">
        <input placeholder="Origin" className="w-full input input-bordered join-item" type="text" name="origin" />
        <input placeholder="Destination" className="w-full input input-bordered join-item" type="text" name="destination" />
        <input className="w-full input input-bordered join-item" type="date" name="departure" />
        <input className="w-full input input-bordered join-item" type="date" name="return" />
        <button type="submit" className="btn btn-primary join-item">Search</button>
      </form>
      <section className="text-center space-y-6 px-4">
        <h2 className="text-3xl font-bold text-secondary">Why Book With Us?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-base-200 p-4 rounded-box shadow">
            <h3 className="font-semibold text-lg">Curated Student Trips</h3>
            <p>Every destination is selected to inspire,
              educate, and energize student travelers.</p>
          </div>
          <div className="bg-base-200 p-4 rounded-box shadow">
            <h3 className="font-semibold text-lg">Affordable Packages</h3>
            <p>Group rates and student discounts help you
              travel smart and save money.</p>
          </div>
          <div className="bg-base-200 p-4 rounded-box shadow">
            <h3 className="font-semibold text-lg">Flexible Dates</h3>
            <p>Travel plans built around academic calendars
              and exam breaks.</p>
          </div>
        </div>
      </section>
      <section className="space-y-6 px-4">
        <h2 className="text-3xl font-bold text-secondary text-center">Popular Destinations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {destinations.slice(0, 3).map((destination) => {
            const { id, image, name, country, description, slug } = destination;
            return (
              <div key={id} className="card bg-base-100 shadow-md flex">
                <figure>
                  <img src={image} alt={name} className='h-48 w-full object-cover' />
                </figure>
                <div>
                  {name}, {country}
                <p>{description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Home