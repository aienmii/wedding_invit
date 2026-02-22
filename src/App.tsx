import "./App.css";
import Countdown from "./components/Countdown";
import Calendar from "./components/Calendar";
import RSVPForm from "./components/RSVPForm";
import './components/Countdown.css';
import ringsPhoto from "./assets/photo/IMG_1998.jpg";
export default function App() {
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
          Незабаром у нашому житті відбудеться важлива подія - наше весілля!
        </p>
        <p>
          Ми віримо та сподіваємося, що цей день стане гарним початком довгого
          та щасливо життя.
        </p>
        <p>чекаємо на вас</p>
       

        {/* Your imported photo */}
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

        <Calendar />
      </section>

      {/* NEW: Timing Section */}
      <section className="section timing">
        <h2>Таймінг</h2>
        <div className="timeline">
          
          <div className="timeline-item">
            <div className="timeline-time">12:00</div>
            <div className="timeline-desc">Збір гостей</div>
          </div>

          <div className="timeline-item">
            <div className="timeline-time">13:00</div>
            <div className="timeline-desc">Весільна церемонія</div>
          </div>

          <div className="timeline-item">
            <div className="timeline-time">14:00</div>
            <div className="timeline-desc">Святковий банкет</div>
          </div>

          <div className="timeline-item">
            <div className="timeline-time">20:00</div>
            <div className="timeline-desc">Весільний торт</div>
          </div>

        </div>
      </section>

      
      {/* Dress Code Section */}
      <section className="section dress-code">
        <h2>Дрес-код</h2>
        <p>
          Ми будемо дуже вдячні, якщо ви оберете наряди у кольорах нашого
          весілля:
        </p>

        <div className="color-palette">
          <div
            className="color-circle"
            style={{ backgroundColor: "#E3DAC9" }}
          ></div>
          <div
            className="color-circle"
            style={{ backgroundColor: "#B5B5A6" }}
          ></div>
          <div
            className="color-circle"
            style={{ backgroundColor: "#DA9CB9" }}
          ></div>
          <div
            className="color-circle"
            style={{ backgroundColor: "#5D6058" }}
          ></div>
        </div>

        <p style={{ marginTop: "20px" }}>
          Разом ми створимо це свято особливим!
        </p>
      </section>

      {/* Details Section */}
      <section className="section">
        <h2>Деталі</h2>
        <p>
          Наше свято для дорослих, так як ми не передбачаємо розваги для дітей.
        </p>
        <p>
          Приємним компліментом для нас буде, якщо ви замість квітів вирішите
          подарувати нам пляшку алкогольного напою для нашої колекції, яку ми
          відкриємо на найближчому нашому сімейному святі.
        </p>
      </section>
      {/* Countdown Timer Component */}
      <Countdown />
      {/* RSVP Form Component */}
      <RSVPForm />

      {/* Footer */}
      <footer className="footer">
        <h1>З любов'ю</h1>
        <h2>Oleksiy & Anna</h2>
        <p className="copyright">© 2026 Oleksyi & Anna. Made with love.</p>
      </footer>
    </div>
  );
}
