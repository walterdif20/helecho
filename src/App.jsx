import { businessInfo } from './data/business';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

export default function App() {
  return (
    <div className="page">
      <header className="navbar">
        <div className="container nav-inner">
          <strong>{businessInfo.name}</strong>
          <nav>
            <a href="#sabores">Sabores</a>
            <a href="#servicios">Servicios</a>
            <a href="#ubicacion">Ubicación</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container">
          <p className="tag">{businessInfo.subtitle}</p>
          <h1>Una experiencia de café pensada para mirar, probar y quedarse.</h1>
          <p className="lead">
            Tazas cuidadas, sabores de temporada y una atmósfera tranquila para tus pausas.
          </p>
          <div className="hero-actions">
            <a href="#ubicacion" className="hero-cta">Conocé cómo llegar</a>
            <a href="#servicios" className="hero-secondary">Ver servicios</a>
          </div>
        </section>

        <section className="benefits">
          <div className="container benefits-grid">
            {businessInfo.benefits.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="container stats" aria-label="Métricas del local">
          {businessInfo.stats.map((item) => (
            <article key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section id="sabores" className="container section flavor-section">
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

        <section id="servicios" className="container section">
          <h2>Servicios pensados para cada momento</h2>
          <div className="cards">
            {businessInfo.services.map((service) => (
              <article key={service.title} className="card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container section testimonials">
          <h2>Lo que dicen nuestros clientes</h2>
          <div className="cards">
            {businessInfo.testimonials.map((testimonial) => (
              <blockquote key={testimonial.author} className="card quote-card">
                <p>“{testimonial.quote}”</p>
                <cite>{testimonial.author}</cite>
              </blockquote>
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
            <p className="contact-line">WhatsApp: {businessInfo.phone}</p>
            <p className="contact-line">Email: {businessInfo.email}</p>
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
          <p>Reservá por WhatsApp y llegá con tu mesa lista.</p>
          <a href="#ubicacion" className="hero-cta">Reservá tu próxima visita</a>
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
