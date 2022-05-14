import React from 'react'

import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <div id="title" className="text-center">
            Main
          </div>
          <div>
            <Link to="/dashboard/profile/0b6dd76e-2d87-471c-ab58-147473ddb563">Go To Profile</Link>
          </div>
          <div>
            <Link to="/dashboard/">Go To Root</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
