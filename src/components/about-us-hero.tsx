'use client'
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Определяем тип для квадратов
interface SquareData {
  id: number;
  src: string;
}

const ShuffleHero: React.FC = () => {
  return (
    <section className="w-full min-h-screen px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      {/* <div>
        <span className="block   mb-4 text-xs md:text-sm text-green-400 font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
            About LLC "Gvozdodyor"
        </h3>
        <p className="text-base md:text-lg text-neutral-400 my-4 md:my-6">
            Welcome to the LLC "Gvozdodyor" page! We are a leading manufacturer of nails, offering a wide range of products for the construction and renovation industries.
        </p>
      </div> */}
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: SquareData[]): SquareData[] => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
    {
      id: 1,
      src: "/pic/nail1.jpg",
    },
    {
      id: 2,
      src: "/pic/nail1.jpg",
    },
    {
      id: 3,
      src: "/pic/nail1.jpg",
    },
    {
      id: 4,
      src: "/pic/nail1.jpg",
    },
    {
      id: 5,
      src: "/pic/nail1.jpg",
    },
    {
      id: 6,
      src: "/pic/nail1.jpg",
    },
    {
      id: 7,
      src: "/pic/nail1.jpg",
    },
    {
      id: 8,
      src: "/pic/nail1.jpg",
    },
    {
      id: 9,
      src: "/pic/nail1.jpg",
    },
    {
      id: 10,
      src: "/pic/nail1.jpg",
    },
    {
      id: 11,
      src: "/pic/nail1.jpg",
    },
    {
      id: 12,
      src: "/pic/nail1.jpg",
    },
    {
      id: 13,
      src: "/pic/nail1.jpg",
    },
    {
      id: 14,
      src: "/pic/nail1.jpg",
    },
    {
      id: 15,
      src: "/pic/nail1.jpg",
    },
    {
      id: 16,
      src: "/pic/nail1.jpg",
    },
  ];
  
  const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
      <motion.div
        key={sq.id}
        layout
        transition={{ duration: 1.5, type: "spring" }}
        className="w-full h-full bg-center"
        style={{
          backgroundImage: `url(${sq.src})`,
          backgroundSize: "contain ",
        }}
      ></motion.div>
    ));
  };
  
  const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());
  
    useEffect(() => {
      shuffleSquares();
  
      return () => clearTimeout(timeoutRef.current);
    }, []);
  
    const shuffleSquares = () => {
      setSquares(generateSquares());
  
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };
  
    return (
      <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
        {squares.map((sq) => sq)}
      </div>
    );
  };
  
  export default ShuffleHero;