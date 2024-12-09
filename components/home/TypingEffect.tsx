"use client"
import { motion } from 'framer-motion';

const TypingEffect = () => {
    const name = "Aung Kaung Khant";

    // Split name into an array of characters
    const nameCharacters = name.split('');

    return (
        <motion.h2 className="text-3xl font-bold ">
            I’m{" "}
            <span className="text-primary">
                {nameCharacters.map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: index * 0.1,
                            duration: 0.1,
                            repeat: Infinity,
                            repeatDelay: 0.5
                        }}
                    >
                        {char}
                    </motion.span>
                ))}
            </span>
        </motion.h2>
    );
};

export default TypingEffect;