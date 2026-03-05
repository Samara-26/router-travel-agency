import React from 'react'

function Home() {

  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold text-primary">Find Your Next Student Adventure</h1>
      <form className="md:join w-full flex flex-col md:flex-row gap-2 md:gap-0 justify-center px-4">
        <input placeholder="Origin" className="w-full input input-bordered join-item" type="text" name="origin">
          <input placeholder="Destination" className="w-full input input-bordered join-item" type="text" name="destination">
            <input className="w-full input input-bordered join-item" type="date" name="departure">
              <input className="w-full input input-bordered join-item" type="date" name="return">
                <button type="submit" className="btn btn-primary join-item">Search</button>
              </input>
            </input>
          </input>
        </input>
      </form>
    </div>
  )
}

export default Home