import { createBingoCard } from "./bingoCardGenerator";
import '../css/styles.css';


const card = createBingoCard({
    freeSpace: true,
    numbers: [
        { letter: "B", values: [14, 4, 10, 8, 12] },
        { letter: "I", values: [30, 28, 23, 16, 27] },
        { letter: "N", values: [41, 35, 43, 39] },
        { letter: "G", values: [53, 57, 46, 48, 56] },
        { letter: "O", values: [74, 68, 75, 70, 64] },
    ]
});
