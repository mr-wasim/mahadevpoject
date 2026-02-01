import React from "react";
import { Link } from "react-router-dom";

const GameLobby = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-3">🎮 Game Lobby</h1>

      <p className="text-center text-gray-400 mb-10">
        Choose your game and start playing
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-slate-900 p-6 rounded-xl shadow-lg hover:scale-105 transition cursor-pointer text-center">
          <div className="text-4xl mb-3">🎰</div>
          <h2 className="text-xl font-semibold">Slot Games</h2>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl shadow-lg hover:scale-105 transition cursor-pointer text-center">
          <div className="text-4xl mb-3">🃏</div>
          <h2 className="text-xl font-semibold">Live Casino</h2>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl shadow-lg hover:scale-105 transition cursor-pointer text-center">
          <div className="text-4xl mb-3">🎲</div>
          <h2 className="text-xl font-semibold">Table Games</h2>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          to="/"
          className="text-green-400 hover:text-green-300 font-semibold"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default GameLobby;
