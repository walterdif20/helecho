import { businessInfo } from './data/business';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80', alt: 'Mesa con café y pastelería artesanal' },
  { src: 'https://images.unsplash.com/photo-1464306076886-da185f6a9d05?auto=format&fit=crop&w=900&q=80', alt: 'Porciones de torta en vitrina de cafetería' },
  { src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=900&q=80', alt: 'Ensalada fresca servida en plato' },
];

const cravings = ['Algo dulce', 'Algo salado', 'Algo saludable', 'Algo para compartir', 'Algo para llevar'];

const ritual = [
  ['08:00', 'Café y desayuno'],
  ['12:30', 'Almuerzo simple y rico'],
  ['16:30', 'Merienda artesanal'],
  ['20:00', 'Última pausa antes de cerrar'],
];

export default function App() {
  return (
    <div className="page">
      <div className="ambient ambient-a" aria-hidden="true" />
      <div className="ambient ambient-b" aria-hidden="true" />
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#" className="brand" aria-label="Inicio de Helecho">
            <span className="brand-logo" aria-hidden="true">
              <img src="/logo-helecho.png" alt="" />
            </span>
            <span className="brand-text">{businessInfo.name}</span>
          </a>
          <nav><a href="#antojos">Antojos</a><a href="#servicios">Menú del día</a><a href="#ubicacion">Ubicación</a></nav>
          <a href="#ubicacion" className="nav-cta">Vení a conocerlo</a>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <p className="tag">{businessInfo.subtitle}</p>
            <h1>Un rincón artesanal para desayunar, almorzar o merendar en el centro de Necochea.</h1>
            <p className="lead">Helecho no es solo una cafetería: es pausa urbana, cocina de vitrina y sabores caseros para todos los días.</p>
            <div className="hero-actions"><a href="#antojos" className="hero-cta">Ver propuesta</a><a href="#ubicacion" className="hero-secondary">Cómo llegar</a></div>
          </div>
          <aside className="hero-panel"><p>HELECHO por MARU PASTELERÍA</p><strong>Pastelería artesanal, desayuno, almuerzo y merienda.</strong><div className="panel-pills">{businessInfo.benefits.map((item) => <span key={item}>{item}</span>)}</div></aside>
        </section>

        <section className="container photo-mosaic" aria-label="Galería del café">
          {galleryImages.map((img, i) => <figure key={img.src} className={`mosaic-item ${i === 0 ? 'mosaic-main' : ''}`}><img src={img.src} alt={img.alt} loading="lazy" /></figure>)}
        </section>

        <section id="antojos" className="container section cravings-layout">
          <div className="section-head"><p className="tag">Para todos los antojos</p><h2>De la vitrina al plato: siempre hay algo rico esperándote.</h2></div>
          <div className="cravings-cloud">{cravings.map((item) => <span key={item}>{item}</span>)}</div>
          <p className="menu-copy">Café, pastelería artesanal, tortas, cheesecake, vitrina del día, ensaladas, viandas y opciones saladas. También tenemos opciones veganas, sin azúcar, keto y <strong>consultá opciones sin TACC disponibles</strong>.</p>
        </section>

        <section id="servicios" className="container section ritual-section">
          <div className="section-head"><p className="tag">Ritual del día</p><h2>Tu pausa cambia según la hora, el clima y el antojo.</h2></div>
          <ol className="ritual-line">{ritual.map(([hour, text]) => <li key={hour}><span>{hour}</span><p>{text}</p></li>)}</ol>
        </section>

        <section className="container stats" aria-label="Métricas del local">
          {businessInfo.stats.map((item) => <article key={item.label}><strong>{item.value}</strong><span>{item.label}</span></article>)}
        </section>

        <section className="container section menu-strips" aria-label="Especialidades">
          <article><h3>Café & Pastelería</h3><p>Espresso, filtrados y piezas artesanales recién horneadas.</p></article>
          <article><h3>Almuerzo del día</h3><p>Viandas, ensaladas y opciones saladas para cortar la rutina.</p></article>
          <article><h3>Merienda que abraza</h3><p>Tortas, cheesecake y propuestas para compartir en mesa.</p></article>
        </section>

        <section id="ubicacion" className="container section split">
          <div className="location-card">
            <p className="location-kicker">Nos encontrás en el centro</p>
            <h2>Pasá por Helecho en Necochea</h2>
            <p className="location-lead">{businessInfo.address}</p>
            <ul>{businessInfo.hours.map((line) => <li key={line}>{line}</li>)}</ul>
            <div className="location-chips">
              <span>Desayuno</span><span>Almuerzo</span><span>Merienda</span>
            </div>
            <p className="contact-line">WhatsApp: {businessInfo.phone}</p><p className="contact-line">Email: {businessInfo.email}</p>
          </div>
          <iframe title="Mapa de Helecho Café" src={businessInfo.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </section>

      </main>
      <footer className="footer"><div className="container"><p>© {new Date().getFullYear()} {businessInfo.name}. Hecho con cariño en Necochea.</p></div></footer>
      <WhatsAppFloatingButton />
    </div>
  );
}
