import React from 'react'
import destinations from '../data/destinations.json'


function Destinations() {
  return (
    <>
      <div className="text-4xl font-bold text-primary">Explore All Destinations
        <p className="text-lg text-base-content">Discover exciting and affordable travel spots
          curated just for software engineering students.</p>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {destinations.map((destination) => {
          const { id, name, slug, country, image, description } = destination;
          return (
            <div key={id}>
              <figure>
                <img src={image} alt={country} className='h-48 w-full object-cover' />
              </figure>
              <div className='flex'>
                <h4>{name}, {country}</h4>
              </div>
            </div>)
        })
        }
      </div>
    </>
  )
}

export default Destinations