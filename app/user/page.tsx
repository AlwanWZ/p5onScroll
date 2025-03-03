'use client';

import Image from 'next/image';

const friends = {
  'Kelas SI': [
    { name: 'FARKHAN', image: '/FARKING.JPG' },
    { name: 'FARKHAN', image: '/FARKING.JPG' },
    { name: 'FARKHAN', image: '/FARKING.JPG' },
    { name: 'FARKHAN', image: '/FARKING.JPG' },
    { name: 'FARKHAN', image: '/FARKING.JPG' },

  ],
  'Kelas KA': [
    { name: 'DIABLO', image: '/DIABLO.jpg' },
    { name: 'DIABLO', image: '/DIABLO.jpg' },
    { name: 'DIABLO', image: '/DIABLO.jpg' },
    { name: 'DIABLO', image: '/DIABLO.jpg' },
    { name: 'DIABLO', image: '/DIABLO.jpg' },

  ],
  'Kelas BD': [
    { name: 'JAMAL', image: '/JAMAL.jpg' },
    { name: 'JAMAL', image: '/JAMAL.jpg' },
    { name: 'JAMAL', image: '/JAMAL.jpg' },
    { name: 'JAMAL', image: '/JAMAL.jpg' },
    { name: 'JAMAL', image: '/JAMAL.jpg' },

  ],
};
export default function BestFriends() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-100">Daftar Kawan Terbaik Alwan</h1>
      <div className="space-y-10 w-full max-w-5xl">
        {Object.entries(friends).map(([className, members], index) => (
          <div 
            key={className} 
            className={`bg-white rounded-2xl shadow-xl p-6 text-center transition-transform duration-300 hover:scale-105 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{className}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center">
              {members.map((friend, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <Image
                    src={friend.image}
                    alt={friend.name}
                    width={90}
                    height={90}
                    className="rounded-full border-4 border-white shadow-lg transform transition duration-300 hover:scale-110"
                  />
                  <p className="text-sm mt-2 text-gray-800 font-semibold">{friend.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}