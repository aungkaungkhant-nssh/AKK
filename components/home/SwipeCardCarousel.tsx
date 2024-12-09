"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import akk1 from '@/public/images/pf.png'
import akk2 from '@/public/images/akk.jpeg'
import akk3 from '@/public/images/akk3.jpeg'
import akk4 from '@/public/images/akk4.jpg';
type Card = {
    id: number;
    image: string;
};

const cardsData: Card[] = [
    {
        id: 1,
        image: akk1.src,
    },
    {
        id: 2,
        image: akk2.src,
    },
    {
        id: 3,
        image: akk3.src,
    },
    {
        id: 4,
        image: akk4.src,
    },
    {
        id: 5,
        image: akk1.src,
    },
];

const SwipeCardCarousel = () => {
    const [cards, setCards] = useState<Card[]>(cardsData);
    return (
        <div className="h-full w-full grid">
            {cards
                .slice()
                .reverse()
                .map((card, index) => (
                    <Card
                        key={card.id}
                        item={card}
                        cards={cards}
                        setCards={setCards}
                        index={index}
                    />
                ))}
        </div>
    );
};

interface CardProps {
    cards: Card[];
    item: Card;
    setCards: Dispatch<SetStateAction<Card[]>>;
    index: number;
}

function Card({ item, cards, setCards, index }: CardProps) {
    const x = useMotionValue(0);

    const opacity = useTransform(x, [-160, 0, 160], [0, 1, 0]);
    const cardsRotation = useTransform(x, [-160, 160], [-20, 20]);

    const frontCard = index === 0;

    const rotate = useTransform(() => {
        const newOffset = frontCard ? 0 : index % 2 ? 10 : -10;

        return `${cardsRotation.get() + newOffset}deg`;
    });

    const handleDragEnd = () => {
        if (Math.abs(x.get()) > 50) {

            setCards((prevCards) => prevCards.filter((card) => card.id !== item.id));
        }
    };

    return (
        <motion.img
            src={item.image}
            drag={frontCard ? "x" : false}
            dragConstraints={{
                left: 0,
                right: 0,
            }}
            alt="bossadi zenith"
            className="h-72 lg:h-96 origin-bottom border-4 w-50 rounded-2xl object-cover hover:cursor-grab active:cursor-grabbing"
            style={{
                opacity,
                rotate,
                x,
                transition: ".125s transform",
                gridRow: 1,
                gridColumn: 1,
                zIndex: cards.length - index,
            }}
            onDragEnd={handleDragEnd}
        />
    );
}

export default SwipeCardCarousel;
