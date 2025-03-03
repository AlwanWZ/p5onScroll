"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Countdown = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [iftarCountdown, setIftarCountdown] = useState<string>("");
  const [daysLeft, setDaysLeft] = useState<number>(0);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const lebaran = new Date(now.getFullYear(), 2, 31);
      const diffTime = lebaran.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysLeft(diffDays);

      setCurrentTime(
        now.toLocaleTimeString("id-ID", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );

      const iftarTime = new Date(now);
      iftarTime.setHours(18, 11, 0, 0);
      const diffIftar = iftarTime.getTime() - now.getTime();

      if (diffIftar > 0) {
        const hours = Math.floor((diffIftar / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diffIftar / (1000 * 60)) % 60);
        const seconds = Math.floor((diffIftar / 1000) % 60);
        setIftarCountdown(`${hours} jam ${minutes} menit ${seconds} detik`);
      } else {
        setIftarCountdown("Waktunya berbuka! 🍽️");
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-900 via-indigo-900 to-black text-white p-6 space-y-8 relative">
      {/* Bulan & Bintang */}
      <motion.div
        className="absolute top-10 flex items-center space-x-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-14 h-14 bg-yellow-300 rounded-full shadow-lg relative">
          <div className="w-10 h-10 bg-black rounded-full absolute top-2 left-2"></div>
        </div>
        <div className="text-yellow-300 text-3xl">⭐</div>
        <div className="text-yellow-300 text-2xl">⭐</div>
      </motion.div>

      {/* Judul */}
      <motion.h1
        className="text-4xl font-extrabold text-yellow-300 neon-text"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        🌙 Marhaban Ya Ramadhan 🌙
      </motion.h1>

      {/* Jam Sekarang */}
      <motion.div
        className="glass-card text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-cyan-300">🕒 Jam Sekarang</h2>
        <p className="text-4xl font-extrabold text-green-400 neon-text">
          {currentTime}
        </p>
      </motion.div>

      {/* Hitung Mundur Berbuka */}
      <motion.div
        className="glass-card text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-yellow-300">
          🌅 Hitung Mundur Berbuka
        </h2>
        <p className="text-3xl font-bold text-red-400 neon-text">
          {iftarCountdown}
        </p>
      </motion.div>

      {
    
    }
      <motion.div
        className="glass-card text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-pink-300">
          🎉 Hitung Mundur Lebaran 🎉
        </h2>
        <p className="text-lg">
          Lebaran dalam{" "}
          <span className="text-5xl font-extrabold text-yellow-400 neon-text">
            {daysLeft}
          </span>{" "}
          hari lagi!
        </p>
      </motion.div>

      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 20px;
          width: 300px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .neon-text {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
            0 0 20px rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </div>
  );
};

export default Countdown;
