import { useEffect, useRef, useState } from "react";

import Countdown from "./components/Countdown";
import Calendar from "./components/Calendar";
import RSVPForm from "./components/RSVPForm";

import ringsPhoto from "./assets/photo/IMG_1998.jpg";
import "./App.css";
import "./components/Countdown.css";

// ─── Types ───
interface TimelineItem {
    time: string;
    title: string;
    icon: string;
}

interface NavItem {
    icon: string;
    label: string;
    href: string;
}

// ─── Data ───
const TIMELINE_ITEMS: TimelineItem[] = [
    { time: "12:00", title: "Збір гостей", icon: "groups" },
    { time: "13:00", title: "Церемонія", icon: "favorite" },
    { time: "13:00", title: "Банкет", icon: "restaurant" },
    { time: "20:00", title: "Торт", icon: "cake" },
];

const NAV_ITEMS: NavItem[] = [
    { icon: "favorite", label: "Story", href: "#story" },
    { icon: "location_on", label: "Details", href: "#details" },
    { icon: "schedule", label: "Timeline", href: "#timeline" },
    { icon: "mail", label: "RSVP", href: "#rsvp" },

];

// ─── Icon ───
function MaterialIcon({ name }: { name: string }) {
    return <span className="material-symbols-outlined">{name}</span>;
}

// ─── Scroll fade hook ───
function useFadeIn() {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.disconnect();
            }
        });

        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return ref;
}

// ─── Timeline ───
function TimelineItem({ item }: { item: TimelineItem }) {
    return (
        <div className="timeline-item fade-up">
            <div className="timeline-dot">
                <MaterialIcon name={item.icon} />
            </div>
            <div className="timeline-content">
                <div className="timeline-time">{item.time}</div>
                <div className="timeline-title">{item.title}</div>
            </div>
        </div>
    );
}

// ─── Main ───
export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dressCodeVisible, setDressCodeVisible] = useState(false);
    const dressCodeRef = useRef<HTMLElement>(null);
    const heroRef = useFadeIn();
    const timelineRef = useFadeIn();

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

            {/* HERO */}
            <header className="hero fade-section" ref={heroRef}>




                <button
                    className="menu-btn"
                    onClick={() => setMenuOpen(v => !v)}
                    style={{ zIndex: 10000 }}
                >
                    <MaterialIcon name={menuOpen ? "close" : "menu"} />
                </button>

                <div className="hero-content">
                    <h1>Oleksiy & Anna</h1>
                    <p>08.08.2026</p>
                </div>
            </header>

            {/* MENU */}
            {menuOpen && (
                <div className="menu-overlay">
                    {NAV_ITEMS.map(item => (
                        <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                            <MaterialIcon name={item.icon}/>
                            {item.label}
                        </a>
                    ))}
                </div>
            )}

            {/* GREETING */}
            <section  id="story" className="section-greeting">
                <div className="tittle-greting">A &amp; O</div>

                <h2>Любі Друзі</h2>
                <p>
                    Найважливіший день нашого життя вже скоро</p>
                <p>🤍
            </p>
            <p>
                Для нас дуже важливо провести цей день поруч з людьми, які займають особливе місце в нашому житті. Тому
                будемо щиро раді розділити ці емоції та радість разом з вами.
                Чекаємо на вас
            </p>
            <p>Чекаємо на вас</p>
        </section>

    {/* PHOTO */}
            <section className="section images">
                <img src={ringsPhoto} alt="Wedding Rings" className="section-image" />
            </section>

            {/* Location Section */}
            <section id="details" className="section details">
                <h2>Місце проведення</h2>

                <p>
                    Ресторан "Венеція"</p>
                <br></br>
                    <span className="material-symbols-outlined text-primary" data-icon="location_on">location_on</span>
                    Хмельницький, вулиця Михайла Старицького


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

                {/* TIMELINE  */}
            <section id="timeline" className="timeline-section fade-section" ref={timelineRef}>
                <h2>Таймінг</h2>

                <div className="timeline-line"/>

                <div className="timeline">
                    {TIMELINE_ITEMS.map(item => (
                        <TimelineItem key={item.time} item={item}/>
                    ))}
                </div>
            </section>

            {/* DRESS CODE */}
            <section className="section dress-code" ref={dressCodeRef}>
                <h2>Дрес-код</h2>
                <p>
                    Ми будемо дуже вдячні, якщо ви оберете наряди у кольорах нашого
                    весілля:
                </p>

                <div className={`color-palette ${dressCodeVisible ? "show-animation" : ""}`}>
                    <div className="color-circle" style={{ backgroundColor: "#f1c8cb" }}></div>
                    <div className="color-circle" style={{ backgroundColor: "#DA9CB9" }}></div>
                    <div className="color-circle" style={{ backgroundColor: "#a4ae96" }}></div>
                    <div className="color-circle" style={{ backgroundColor: "#7e8c69" }}></div>
                    <div className="color-circle" style={{ backgroundColor: "#c6a685" }}></div>
                    <div className="color-circle" style={{ backgroundColor: "#6d4930" }}></div>

                </div>

                <p style={{ marginTop: "20px" }}>
                    Разом ми створимо це свято особливим!
                </p>
                <div className="tittle">A &amp; O</div>

                <p>                    Дівчатка, будемо вдячні, якщо білий колір у цей день залишиться для нареченої
                </p>
            </section>
            {/* Details Section */}
            <section className="section">
                <h2>Деталі</h2>
                <p>🤍</p>

                <p>
                    Приємним компліментом для нас буде, якщо ви замість квітів вирішите
                    подарувати нам пляшку алкогольного напою для нашої колекції, яку ми
                    відкриємо на найближчому нашому сімейному святі.
                </p>
                <div className="section-images-pattern"></div>
            </section>

            {/* Countdown Timer Component */}
            <Countdown />

            <RSVPForm />
            <section id="rsvp">
                <RSVPForm />
            </section>


            {/* FOOTER */}
            <footer className="footer">
                <h2> Always & Forever</h2>
                <p className="copyright">© 2026 Oleksyi & Anna. Made with love.</p>
            </footer>

            {/* MOBILE NAV */}
            <nav className="bottom-nav">
                {NAV_ITEMS.map(item => (
                    <a key={item.label} href={item.href}>
                        <MaterialIcon name={item.icon} />
                        <span>{item.label}</span>
                    </a>
                ))}
            </nav>

        </div>
    );
}