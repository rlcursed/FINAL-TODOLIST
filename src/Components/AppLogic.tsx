import React, {useState, useCallback} from "react";

const AppLogic = () => {
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [mseconds, setMseconds] = useState<number>(0);
    const [status, setStatus] = useState<number>(0);
    const [interv, setInterv] = useState<any>();

    var updatedMs = mseconds, updatedS = seconds, updatedM = minutes;

    const run = () => {
        if(updatedS === 60){
            updatedM++
            updatedS = 0;
        }
        if(updatedMs === 99){
            updatedMs = 0;
            updatedS++
        }
        updatedMs++;
        setMinutes(updatedM);
        setSeconds(updatedS);
        setMseconds(updatedMs);
      }

    const handleStart = useCallback(() => {
        setStatus(1);
        run()
        setInterv(setInterval(run, 10))
    }, []);

    const handlePause = useCallback(() => {
        setStatus(2);
        clearInterval(interv);
    }, [interv]);

    const handleContinue = useCallback(() => {
        setStatus(1);
        handleStart();
    }, [handleStart]);

    const handleReset = useCallback(() => {
        setStatus(0);
        clearInterval(interv)
        setSeconds(0);
        setMseconds(0);
        setMinutes(0);
    }, [interv])

    return (
        {
            updatedM,
            updatedS,
            updatedMs,
            status,
            handleStart,
            handlePause,
            handleContinue,
            handleReset
        }
    )
}

export default AppLogic;