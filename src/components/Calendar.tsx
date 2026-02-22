
import './Calendar.css';

export default function Calendar() {
  const daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];
  
  const emptyCells = Array.from({ length: 5 });
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="calendar-container">
      <h3 className="calendar-title">Серпень 2026</h3>
      
      <div className="calendar-grid">
        {daysOfWeek.map(day => (
          <div key={day} className="calendar-day-name">{day}</div>
        ))}
        
        {emptyCells.map((_, i) => (
          <div key={`empty-${i}`} className="calendar-empty"></div>
        ))}
        
        {daysInMonth.map(day => (
          <div 
            key={day} 
            className={`calendar-day ${day === 8 ? 'highlight' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-footer">
        <p>Субота, Серпень 8, 2026</p>
        <p>12:00 • Ресторан "Венеція"</p>
      </div>
    </div>
  );
}