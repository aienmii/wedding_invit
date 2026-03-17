import { useEffect, useRef, useState } from "react";
// Components
import Countdown from "./components/Countdown";
import Calendar from "./components/Calendar";
import RSVPForm from "./components/RSVPForm";

// Assets & Styles
import ringsPhoto from "./assets/photo/IMG_1998.jpg";
import "./App.css";
import "./components/Countdown.css";

export default function App() {
  const [dressCodeVisible, setDressCodeVisible] = useState(false);
  const dressCodeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setDressCodeVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (dressCodeRef.current) {
      observer.observe(dressCodeRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Oleksiy & Anna</h1>
          <p>08.08.2026</p>
        </div>
      </header>

      {/* Greeting Section */}
      <section className="section-greeting">
        <h2>Любі Друзі</h2>
        <p>
Найважливіший день нашого життя вже скоро🤍        </p>
        <p>
         Для нас дуже важливо провести цей день поруч з людьми, які займають особливе місце в нашому житті. Тому будемо щиро раді розділити ці емоції та радість разом з вами.
Чекаємо на вас
        </p>
        <p>Чекаємо на вас</p>
      </section>

      {/* Photo Section */}
      <section className="section images">
        <img src={ringsPhoto} alt="Wedding Rings" className="section-image" />
      </section>

      {/* Location Section */}
      <section className="section details">
        <h2>Місце проведення</h2>
        <p>
          Ресторан "Венеція"
          <br />
          Хмельницький, вулиця Михайла Старицького
        </p>

        <a
          href="http://googleusercontent.com/maps.google.com/4"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          style={{
            borderRadius: "25px",
            textTransform: "none",
            padding: "10px 25px",
          }}
        >
          Подивитися на мапі &raquo;
        </a>

        {/* Calendar Component */}
        <Calendar />
      </section>

      {/* Timing Section */}
      <section className="section timing">
        <h2>Таймінг</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-time">13:00</div>
            <div className="timeline-desc">Збір гостей</div>
          </div>

          <div className="timeline-item">
            <div className="timeline-time">14:00</div>
            <div className="timeline-desc">Весільна церемонія</div>
          </div>

          <div className="timeline-item">
            <div className="timeline-time">15:00</div>
            <div className="timeline-desc">Святковий банкет</div>
          </div>

          <div className="timeline-item">
            <div className="timeline-time">20:00</div>
            <div className="timeline-desc">Весільний торт</div>
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="section dress-code" ref={dressCodeRef}>
        <h2>Дрес-код</h2>
        <p>
          Ми будемо дуже вдячні, якщо ви оберете наряди у кольорах нашого
          весілля:
        </p>

        <div className={`color-palette ${dressCodeVisible ? "show-animation" : ""}`}>
          <div className="color-circle" style={{ backgroundColor: "#E3DAC9" }}></div>
          <div className="color-circle" style={{ backgroundColor: "#f1c8cb" }}></div>
          <div className="color-circle" style={{ backgroundColor: "#DA9CB9" }}></div>
          <div className="color-circle" style={{ backgroundColor: "#a4ae96" }}></div>
          <div className="color-circle" style={{ backgroundColor: "#7e8c69" }}></div>
        </div>

        <p style={{ marginTop: "20px" }}>
          Разом ми створимо це свято особливим!
        </p>
      </section>

      {/* Details Section */}
      <section className="section">
        <h2>Деталі</h2>

        <div className="heart-divider">🤍</div>
        <p>
          Приємним компліментом для нас буде, якщо ви замість квітів вирішите
          подарувати нам пляшку алкогольного напою для нашої колекції, яку ми
          відкриємо на найближчому нашому сімейному святі.
        </p>
        <div className="section-images-pattern"></div>
      </section>

      {/* Countdown Timer Component */}
      <Countdown />

      {/* RSVP Form Component */}
      <RSVPForm />

      {/* Footer */}
      <footer className="footer">
        <h1 className="footer-title">З любов'ю</h1>
        <h2 className="footer-subtitle">Oleksiy & Anna</h2>
        <p className="footer-subtitle">Серпень 8, 2026 • Ресторан "Венеція"</p>
        <p className="copyright">© 2026 Oleksyi & Anna. Made with love.</p>
      </footer>
    </div>
  );
}