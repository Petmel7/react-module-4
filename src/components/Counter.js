import { useEffect, useState } from "react"

export default function Counter() {
    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);

    const handleIncrementCounterA = () => {
        setCounterA(prevState => prevState + 1)
    }

    const handleIncrementCounterB = () => {
        setCounterB(prevState => prevState + 1)
    }

    useEffect(() => {
        console.log('Зпустився useEffect' + Date.now())
        const totalClicks = counterA + counterB
        document.title = `Всього клікнули ${totalClicks} раз`
    }, [counterA, counterB])

    return (
        <>
            <button
                type="button"
                onClick={handleIncrementCounterA}>
                Клікнули counterA {counterA}
            </button>
            
            <button
                type="button"
                onClick={handleIncrementCounterB}>
                Клікнули counterB {counterB}
            </button>
        </>
    )
}