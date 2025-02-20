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
    <section className="w-full h-screen px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-green-400 font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
            About LLC "Gvozdodyor"
        </h3>
        <p className="text-base md:text-lg text-neutral-400 my-4 md:my-6">
            Welcome to the LLC "Gvozdodyor" page! We are a leading manufacturer of nails, offering a wide range of products for the construction and renovation industries.
        </p>
      </div>
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

const squareData: SquareData[] = [
  {
    id: 1,
    src: "/pic/rg1.jpg",
  },
  {
    id: 2,
    src: "/pic/rg.jpg",
  },
  {
    id: 3,
    src: "/pic/rg2.jpg",
  },
  {
    id: 4,
    src: "/pic/rg3.jpg",
  },
];

const ShuffleGrid: React.FC = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState<SquareData[]>([]);

  useEffect(() => {
    shuffleSquares();
    timeoutRef.current = setTimeout(shuffleSquares, 3000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(shuffle([...squareData])); // Создаем новую копию squareData для перемешивания
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 h-[450px] gap-1">
      {squares.map((sq) => (
        <motion.div
          key={sq.id}
          layout
          transition={{ duration: 1.5, type: "spring" }}
          className="w-full h-full"
          style={{
            backgroundImage: `url(${sq.src})`,
            backgroundSize: "cover",
          }}
        ></motion.div>
      ))}
    </div>
  );
};

export default ShuffleHero;
