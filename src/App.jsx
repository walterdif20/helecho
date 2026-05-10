import { businessInfo } from './data/business';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

export default function App() {
  return (
    <div className="page">
      <div className="ambient ambient-a" aria-hidden="true" />
      <div className="ambient ambient-b" aria-hidden="true" />

      <header className="navbar">
        <div className="container nav-inner">
          <strong className="brand">{businessInfo.name}</strong>
          <nav>
            <a href="#sabores">Sabores</a>
            <a href="#servicios">Servicios</a>
            <a href="#ubicacion">Ubicación</a>
          </nav>
          <a href="#ubicacion" className="nav-cta">Reservar mesa</a>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <p className="tag">{businessInfo.subtitle}</p>
            <h1>Una experiencia boutique de café para clientes que valoran diseño, sabor y pausa.</h1>
            <p className="lead">
              Creamos un recorrido sensorial: barra abierta, repostería de estación y espacios que se sienten como un editorial vivo.
            </p>
            <div className="hero-actions">
              <a href="#ubicacion" className="hero-cta">Conocé cómo llegar</a>
              <a href="#servicios" className="hero-secondary">Descubrir servicios</a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Datos destacados">
            <p>Experiencia destacada</p>
            <strong>93% de clientes regresan durante el mismo mes.</strong>
            <div className="panel-pills">
              {businessInfo.benefits.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </aside>
        </section>

        <section className="container stats" aria-label="Métricas del local">
          {businessInfo.stats.map((item) => (
            <article key={item.label}>
              <span className="icon" aria-hidden="true">✦</span>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </section>

        <section id="sabores" className="container section flavor-section">
          <div className="section-head">
            <p className="tag">Carta Curada</p>
            <h2>Sabores que transforman una pausa en un ritual</h2>
          </div>
          <div className="cards">
            {businessInfo.featuredFlavors.map((flavor) => (
              <article key={flavor.name} className="card">
                <span className="card-accent" aria-hidden="true" />
                <h3>{flavor.name}</h3>
                <p>{flavor.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="servicios" className="container section">
          <div className="section-head">
            <p className="tag">Propuesta Premium</p>
            <h2>Servicios diseñados para agendas reales</h2>
          </div>
          <div className="cards">
            {businessInfo.services.map((service, index) => (
              <article key={service.title} className="card service-card">
                <span className="service-id">0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container section testimonials">
          <div className="section-head">
            <p className="tag">Prueba Social</p>
            <h2>Clientes que nos recomiendan por experiencia completa</h2>
          </div>
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
          <div className="location-card">
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
