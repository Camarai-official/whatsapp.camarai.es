"use client"

import { motion } from "framer-motion"

export function AnimatedBackground() {
    return (
        <motion.div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                minHeight: "100%",
                overflow: "hidden",
                zIndex: -3,
                backgroundColor: "#030712",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                {/* Tech Grid Background */}
                <motion.div
                    style={{
                        position: 'absolute',
                        width: '200%',
                        height: '100%',
                        backgroundImage:
                            'linear-gradient(rgba(37, 211, 102, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 211, 102, 0.05) 1px, transparent 1px)',
                        backgroundSize: '30px 30px',
                        zIndex: 0,
                    }}
                    animate={{
                        x: ['0%', '-50%'],
                    }}
                    transition={{
                        duration: 20,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                />

                {/* Viñeta */}
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        zIndex: 2,
                        width: "150%",
                        height: "140%",
                        background:
                            "radial-gradient(ellipse at 50% 55%, transparent 20%, #050C0F 90%)",
                        transform: "translate3d(-50%, -50%, 0)",
                    }}
                />

                {/* Overlay radial */}
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        zIndex: 5,
                        width: "100%",
                        height: "100%",
                        background:
                            "radial-gradient(ellipse at 50% 75%, #a900ff 20%, transparent 75%)",
                        mixBlendMode: "overlay",
                        transform: "translate3d(-50%, -50%, 0)",
                    }}
                />

                {/* Aura animada */}
                <motion.div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "0",
                        zIndex: 3,
                        width: "100%",
                        height: "30%",
                        backgroundImage:
                            "linear-gradient(90deg, #00f8f1 0%, #00ff00 16.5%, #ADFF2F 25%, #ff53da 33%, #ffbd1e 49.5%, #00f8f1 66%, #32CD32 75%, #00f8f160 85.5%, #ffbd1e 100%, #00f8f1 100%)",
                        backgroundSize: "200% 100%",
                        filter: "blur(50px)",
                        mixBlendMode: "plus-lighter",
                        opacity: 0.75,
                        transform: "translateY(-50%)",
                    }}
                    animate={{ backgroundPosition: ["-200% 50%", "0% 50%"] }}
                    transition={{
                        duration: 10,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                />
                 {/* Glitch Effect Layer */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5) 1px, transparent 1px, transparent 4px)',
                        backgroundSize: '100% 4px',
                        zIndex: 4,
                        opacity: 0.1,
                    }}
                    animate={{
                        y: ['0%', '-2%', '0%', '2%', '0%'],
                        opacity: [0.1, 0.05, 0.15, 0.08, 0.1],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: 'linear',
                        repeat: Infinity,
                        repeatType: 'loop',
                    }}
                />
            </div>
        </motion.div>
    )
}
