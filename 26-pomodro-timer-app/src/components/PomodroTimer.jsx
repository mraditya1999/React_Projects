import { useState, useEffect, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PomodroTimer() {
  const [active, setActive] = useState('focus');
  const [seconds, setSeconds] = useState(1500);
  const [paused, setPaused] = useState(true);
  const [intervalId, setIntervalId] = useState(null);

  const time = `${Math.floor(seconds / 60)}:${
    seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60
  }`;

  const resetTime = useCallback(
    (duration) => {
      setPaused(true);
      setSeconds(duration);
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    },
    [intervalId]
  );

  const focusButtonHandler = useCallback(() => {
    setActive('focus');
    resetTime(1500);
  }, [resetTime]);

  const shortBreakButtonHandler = useCallback(() => {
    toast.info('Short break will activate after 25 minutes');
    if (active === 'focus' && seconds === 0) {
      setActive('short');
      resetTime(300);
    }
  }, [active, seconds, resetTime]);

  const longBreakButtonHandler = useCallback(() => {
    setActive('long');
    resetTime(900);
  }, [resetTime]);

  const pauseTimer = useCallback(() => {
    setPaused(true);
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [intervalId]);

  const startTimer = useCallback(() => {
    setPaused(false);
    const id = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    setIntervalId(id);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      pauseTimer();
    }
  }, [seconds, pauseTimer]);

  useEffect(() => {
    if (seconds === 0) {
      pauseTimer();
      if (active === 'focus') {
        shortBreakButtonHandler();
      }
    }
  }, [seconds, pauseTimer, active, shortBreakButtonHandler]);

  return (
    <div className='w-[90vw] max-w-[600px] bg-white mx-auto rounded-lg p-16'>
      <ToastContainer />
      <div className='flex justify-center gap-4 mb-4 bg-gray-800 w-max m-auto px-4 py-2 rounded-md'>
        <TimerButton
          onClick={focusButtonHandler}
          active={active === 'focus'}
          activeColor='bg-red-600 text-white'
          inactiveColor='bg-gray-700 text-gray-300'
        >
          Focus
        </TimerButton>
        <TimerButton
          onClick={shortBreakButtonHandler}
          active={active === 'short'}
          activeColor='bg-red-600 text-white'
          inactiveColor='bg-gray-700 text-gray-300'
        >
          Short Break
        </TimerButton>
        <TimerButton
          onClick={longBreakButtonHandler}
          active={active === 'long'}
          activeColor='bg-red-600 text-white'
          inactiveColor='bg-gray-700 text-gray-300'
        >
          Long Break
        </TimerButton>
      </div>
      <div className='flex flex-col items-center gap-4'>
        <TimerDisplay time={time} />
        <div className='flex justify-center gap-4'>
          <TimerButton
            onClick={startTimer}
            active={!paused}
            activeColor='bg-green-600 text-white'
            inactiveColor='bg-gray-700 text-gray-300'
          >
            Start
          </TimerButton>
          <TimerButton
            onClick={pauseTimer}
            active={paused}
            activeColor='bg-yellow-600 text-white'
            inactiveColor='bg-gray-700 text-gray-300'
          >
            Pause
          </TimerButton>
          <TimerButton
            onClick={() =>
              resetTime(
                active === 'focus' ? 1500 : active === 'short' ? 300 : 900
              )
            }
            activeColor='bg-red-600 text-white'
            inactiveColor='bg-gray-700 text-gray-300'
          >
            Reset
          </TimerButton>
        </div>
      </div>
    </div>
  );
}

function TimerButton({
  onClick,
  active,
  children,
  activeColor,
  inactiveColor,
}) {
  return (
    <button
      onClick={onClick}
      className={`btn py-2 px-3 rounded text-3xl ${
        active ? activeColor : inactiveColor
      }`}
    >
      {children}
    </button>
  );
}

function TimerDisplay({ time }) {
  return (
    <span className='text-center text-8xl font-bold text-gray-800 p-4 rounded'>
      {time}
    </span>
  );
}

export default PomodroTimer;
