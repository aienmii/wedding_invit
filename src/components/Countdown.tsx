import { useState, useEffect } from 'react';
import './Countdown.css'; 

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0 });
  const [isWeddingDay, setIsWeddingDay] = useState<boolean>(false);

  useEffect(() => {
    // Set for August 8, 2026 at 12:00 PM
    const targetDate = new Date('2026-08-08T12:00:00').getTime();

    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timerInterval);
        setIsWeddingDay(true);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        });
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  if (isWeddingDay) {
    return (
      <div className="countdown-container">
        <h3>Сьогодні день нашого весілля!</h3>
      </div>
    );
  }

  const formatTime = (time: number): string => time < 10 ? `0${time}` : time.toString();

  return (
    <div className="countdown-container">
      <h3 className="countdown-title">ЧЕКАЄМО НА ВАС ЧЕРЕЗ </h3>
    
      
      <div className="countdown-wrapper">
        <div className="time-box">
          <span className="time-number">{formatTime(timeLeft.days)}</span>
          <p className="time-label">Днів</p>
        </div>
        
        <div className="time-box">
          <span className="time-number">{formatTime(timeLeft.hours)}</span>
          <p className="time-label">Годин</p>
        </div>
        
        <div className="time-box">
          <span className="time-number">{formatTime(timeLeft.minutes)}</span>
          <p className="time-label">Хвилин</p>
        </div>
      </div>
    </div>
  );
}