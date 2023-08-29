import { useEffect, useRef, useState } from "react";

export default function SkipEffectOnFirstRender() {
    const [count, setCount] = useState(0);
    const isFirstRender = useRef(true);

    // Пропустити перший запуск рендера
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        console.log(`Запускається useEffect ${Date.now()}`);
    });

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>{count}</button>
            <p>
                <code>useEffect</code>
                Цей компонент не застосується на першому рендері
            </p>
        </div>
    )
}