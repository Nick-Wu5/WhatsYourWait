import React from "react";
import { auth, db, analytics } from "../lib/firebase";

export default function Home() {
  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6 sm:text-3xl">
          What's Your Wait
        </h1>
        <div className="text-center space-y-4">
          <p className="text-base text-gray-600 sm:text-lg">
            Firebase is configured and ready to use!
          </p>
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
            <p className="text-sm sm:text-base">
              ✅ Firebase Auth: {auth ? "Connected" : "Not Connected"}
            </p>
            <p className="text-sm sm:text-base">
              ✅ Firestore: {db ? "Connected" : "Not Connected"}
            </p>
            <p className="text-sm sm:text-base">
              ✅ Analytics: {analytics ? "Connected" : "Not Connected"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
