import React from 'react'
import GameHeader from './GameHeader'
import GameCards from './GameCards'
import GameImageCard from './GameImageCard'

/**
 * Industry-level responsive GamePage
 * Rules followed strictly:
 * - Full width main container (no side gaps)
 * - Desktop layout unchanged / strong grid
 * - Only mobile & tablet responsiveness
 * - Pixel-tight spacing, no content changes
 */

const GamePage = () => {
  return (
    <div className="w-full bg-white">
      {/* MAIN WRAPPER */}
      <div className="w-full max-w-[1400px] mx-auto px-2 sm:px-3 md:px-4 py-2">
        {/* HEADER 1 */}
        <div className="mb-2">
          <GameHeader title="Teen Patti Games" />
        </div>

        {/* GAME CARDS GRID */}
        <div
          className="grid gap-2
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-4"
        >
          <GameCards />
          <GameCards />
          <GameCards />
          <GameCards />
          <GameCards />
          <GameCards />
          <GameCards />
          <GameCards />
          <GameCards />
          <GameCards />
          <GameCards />
          <GameCards />
          <GameCards />
          <GameCards />
        </div>

        {/* HEADER 2 */}
        <div className="mb-2 mt-4">
          <GameHeader title="RS Tables" />
        </div>

        {/* RS TABLES GRID */}
        <div
          className="grid gap-2
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-4"
        >
          <GameCards />
          <GameCards />
          <GameCards />
          <GameCards />
          <GameCards />
          <GameCards />
          <GameCards />
          <GameCards />
          <GameCards />
          <GameCards />
        </div>

        {/* HEADER 3 */}
        <div className="mb-2 mt-4">
          <GameHeader title="RS Tables" />
        </div>

        {/* IMAGE CARD GRID */}
        <div
          className="grid gap-2
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-4"
        >
          <GameImageCard />
          <GameImageCard />
          <GameImageCard />
          <GameImageCard />
          <GameImageCard />
          <GameImageCard />
        </div>
      </div>
    </div>
  )
}

export default GamePage
