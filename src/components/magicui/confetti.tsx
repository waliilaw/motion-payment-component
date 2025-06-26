import confetti from "canvas-confetti";

export const fireConfetti = async (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // First burst
    await confetti({
        particleCount: 50,
        spread: 90,
        origin: {
            x: x / window.innerWidth,
            y: y / window.innerHeight
        },
        colors: ['#00ff00', '#26ff00', '#35ff00', '#66ff00', '#80ff00'],
        ticks: 200,
        gravity: 1.2,
        scalar: 1.2,
        shapes: ["circle"]
    });

    // Side bursts
    setTimeout(async () => {
        await Promise.all([
            confetti({
                particleCount: 20,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.7 },
                colors: ['#00ff00', '#26ff00', '#35ff00', '#66ff00', '#80ff00']
            }),
            confetti({
                particleCount: 20,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.7 },
                colors: ['#00ff00', '#26ff00', '#35ff00', '#66ff00', '#80ff00']
            })
        ]);
    }, 100);

    // Final burst
    setTimeout(async () => {
        await confetti({
            particleCount: 30,
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
            origin: {
                x: x / window.innerWidth,
                y: y / window.innerHeight
            },
            colors: ['#00ff00', '#26ff00', '#35ff00', '#66ff00', '#80ff00'],
            ticks: 150
        });
    }, 200);
}; 