import { businessInfo } from './data/business';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

export default function App() {
  return (
    <div className="page">
      <header className="navbar">
        <div className="container nav-inner">
          <strong>{businessInfo.name}</strong>
          <a href="#ubicacion">Ubicación</a>
        </div>
      </header>

      <main>
        <section className="hero container">
          <p className="tag">{businessInfo.subtitle}</p>
          <h1>Una experiencia de café pensada para mirar, probar y quedarse.</h1>
          <p className="lead">
            Tazas cuidadas, sabores de temporada y una atmósfera tranquila para tus pausas.
          </p>
        </section>

        <section className="benefits">
          <div className="container benefits-grid">
            {businessInfo.benefits.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="container section">
          <h2>Sabores destacados</h2>
          <div className="cards">
            {businessInfo.featuredFlavors.map((flavor) => (
              <article key={flavor.name} className="card">
                <h3>{flavor.name}</h3>
                <p>{flavor.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="ubicacion" className="container section split">
          <div>
            <h2>Ubicación y horarios</h2>
            <p>{businessInfo.address}</p>
            <ul>
              {businessInfo.hours.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <iframe
            title="Mapa de Helecho Café"
            src={businessInfo.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        <section className="cta container section">
          <h2>Te esperamos para tu próxima pausa.</h2>
          <p>Guardá este lugar y vení a descubrir el sabor de la semana.</p>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {businessInfo.name}. Todos los derechos reservados.</p>
        </div>
      </footer>

      <WhatsAppFloatingButton />
    </div>
  );
}
