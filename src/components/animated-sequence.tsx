import { motion, useAnimate } from "motion/react"
import { fireConfetti } from "./magicui/confetti"
import { useRef } from "react"

export const AnimatedSequences =  () => {
    const [scope, animate] = useAnimate()
    const buttonRef = useRef<HTMLButtonElement>(null)
    
    const startAnimating = async () => {
        await animate(
            ".loader",
            {
                opacity: 1,
                rotate: 360
            },
            {
                duration: 0.6,
                ease: "linear",
                repeat: 1
            }
        )
        await animate(
            ".button-text",
            {
                opacity: 0
            },
            {
                duration: 0.05,
            }
        )
        await animate(
            "button",
            {
                width: "5rem"
            },
            {
                duration: 0.3,
            }
        )
        await animate(
            ".spinning-circle",
            {
                opacity: [0, 1],
                scale: [0, 1.2, 1, 0.8, 1, 1.2, 1, 0.8, 1]
            },
            {
                duration: 0.5
            }
        )
        
        await animate(
            ".spinning-circle",
            {
                opacity: 1,
                scale: 1.02,
            },
            {
                duration: 0.3
            }
        )

        await animate(
            ".check-icon",
            {
                opacity: 1
            },
            {
                duration: 0.1
            }
        )
        
        await animate(
            ".check-icon path", 
            {
                pathLength: [0, 1]
            },
            {
                duration: 0.3
            }
        )

        // Fire confetti after check mark
        if (buttonRef.current) {
            await fireConfetti(buttonRef.current)
        }
    }

    return (
        <div ref={scope} className="relative" onClick={startAnimating}>
            <motion.button 
                ref={buttonRef}
                className="relative h-20 w-60 rounded-full bg-gradient-to-r from-neutral-300 via-neutral-300 to-neutral-300 font-medium cursor-pointer border-b-2 "
            >
                <span className="button-text flex items-center justify-center gap-2 pl-5 font-bold text-[1.4rem]">
                    Purchase Now
                    <motion.svg 
                        className="loader h-4 w-4"
                        style={{ opacity: 0 }}
                        viewBox="0 0 24 24"
                    >
                        <motion.circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="5"
                            fill="none"
                            strokeDasharray="40 60"
                        />
                    </motion.svg>
                </span>
                <motion.svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#FFFFFF"
                    strokeWidth={3}
                    className="check-icon h-8 w-8 absolute inset-0 m-auto z-50 pointer-events-none "
                    style={{ opacity: 0 }}
                >
                    <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4l11-14"
                        initial={{ pathLength: 0 }}
                    />
                </motion.svg>
            </motion.button>

            <motion.div 
                className="spinning-circle h-20 w-20 rounded-full bg-green-900 absolute inset-0 m-auto border-green-950 border-2"
                style={{ opacity: 0 }}
            ></motion.div>
        </div>
    )
}