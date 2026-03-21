import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './index.css';
import './App.css';
import { ArrowRight } from 'lucide-react';
import cartePdf from './assets/Carte-cypriano - .pdf';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav className="navbar" style={{
      backgroundColor: scrolled ? 'rgba(17, 17, 17, 0.95)' : (isHome ? 'transparent' : 'var(--c-dark)'),
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : (isHome ? 'none' : '1px solid rgba(255,255,255,0.05)')
    }}>
      <div className="nav-brand">
        <Link 
          to="/" 
          onClick={() => {
            if (isHome) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          Cypriano
        </Link>
      </div>
      <div className="nav-links">
        {isHome ? (
          <>
            <a href="#about">L'Essence</a>
            <a href="#savoir">Savoir-Faire</a>
            <a href="#menu">La Carte</a>
            <a href="#localisation">Nous Trouver</a>
          </>
        ) : (
          <Link to="/">Retour à l'accueil</Link>
        )}
      </div>
      <a href="tel:0962244415" className="btn-reserve" style={{ textAlign: 'center' }}>COMMANDER</a>
    </nav>
  );
}

function MainFooter() {
  return (
    <footer className="footer" id="contact">
      <h2 className="footer-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer', title: 'Retour en haut' }}>CYPRIANO</h2>
      <div className="footer-details">
        <div className="footer-block">
          <h4>L'Adresse</h4>
          <p>23 Av. Etienne Billières<br />31300 Toulouse</p>
        </div>
        <div className="footer-block">
          <h4>Les Horaires</h4>
          <p>Ouvert tous les jours<br />À EMPORTER ET EN LIVRAISON</p>
        </div>
        <div className="footer-block">
          <h4>Commandes</h4>
          <p>Au 09.62.24.44.15<br />Appelez-nous pour commander.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div>&copy; {new Date().getFullYear()} Cypriano Pizzeria. L'élégance à l'italienne. Tous droits réservés.</div>
        <div className="footer-bottom-links">
          <Link to="/mentions-legales" className="link-mentions">Mentions Légales</Link>
          <a href="https://microdidact.com/" target="_blank" rel="noopener noreferrer" className="credit-microdidact" style={{ textDecoration: 'none' }}>Réalisé par Microdidact</a>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero section : Main showcase of the restaurant's vibe */}
      <section className="hero">
        <div className="hero-background">
          <img src="/oven_hero.png" alt="Cypriano Pizzeria Paris" />
        </div>
        <div className="hero-content">
          <span className="hero-subtitle">Haute Gastronomie Italienne</span>
          <h1 className="hero-title">
            L'Arte della <br />
            <span>Pizza Napoletana</span>
          </h1>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:0962244415" className="btn-primary">
              COMMANDER <ArrowRight size={16} />
            </a>
            <a href={cartePdf} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ backgroundColor: 'var(--c-gold)', color: 'var(--c-dark)' }}>
              LA CARTE
            </a>
          </div>
        </div>
      </section>

      {/* Story section : About the elegant experience */}
      <section className="story-section" id="about">
        <div className="story-container">
          <div className="story-image">
            <img src="/pizza.png" alt="Pizza Cypriano" />
          </div>
          <div className="story-content">
            <span className="section-label">L'Héritage</span>
            <h2 className="section-title">L'authenticité,<br />élevée au rang d'art.</h2>
            <p className="story-text">
              Situé en plein cœur du quartier Saint-Cyprien à <strong>Toulouse</strong> (au 23 Avenue Étienne Billières), Cypriano réinvente l'expérience de la <strong>véritable pizzeria napolitaine</strong>. Dans une ambiance chaleureuse et résolument contemporaine, nous vous offrons un voyage gustatif exclusif autour de l'Italie.
            </p>
            <p className="story-text">
              Que ce soit en livraison, à emporter ou sur place, l'exigence reste la même : chaque <strong>pizza au feu de bois</strong> est préparée avec une farine biologique maturée patiemment, des truffes fraîches et de prestigieuses huiles d'olive. Découvrez pourquoi nous sommes la référence incontournable de la <strong>pizza à Toulouse (31300)</strong>.
            </p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="tel:0962244415" className="btn-primary">COMMANDER</a>
              <a href={cartePdf} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ backgroundColor: 'var(--c-gold)', color: 'var(--c-dark)' }}>LA CARTE</a>
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal Designer Marquee Bands */}
      <div className="diagonal-container">
        <div className="marquee-band outline">
          <div className="marquee-content">
            <span>NAPOLI EST. 2024</span>
            <span>HAUTE GASTRONOMIE</span>
            <span>PIZZA D'ECCELLENZA</span>
            <span>NAPOLI EST. 2024</span>
            <span>HAUTE GASTRONOMIE</span>
            <span>PIZZA D'ECCELLENZA</span>
          </div>
        </div>
        <div className="marquee-band gold">
          <div className="marquee-content">
            <span>• PASSIONE • TRADIZIONE • ECCELLENZA • AMORE</span>
            <span>• PASSIONE • TRADIZIONE • ECCELLENZA • AMORE</span>
          </div>
        </div>
      </div>

      {/* Savoir-Faire / Expertise section */}
      <section className="expertise-section" id="savoir">
        <div className="expertise-gallery">
          <img src="/chef.png" alt="Chef travaillant la pâte à pizza" />
          <img src="/oven.png" alt="Four à bois napolitain traditionnel" />
        </div>
        <div className="expertise-content">
          <span className="section-label">Il Fuoco & La Farina</span>
          <h2 className="section-title">Le geste et la flamme.</h2>
          <p className="story-text">
            Chaque jour, nos maîtres pizzaiolos célèbrent le ballet immuable de l'artisanat. L'eau, le sel, la levure et la farine se lient au gré du pétrissage, avant une maturation lente de plus de 72 heures.
          </p>
          <p className="story-text">
            C'est ensuite l'épreuve du feu : notre four à bois, dont le foyer rougeoyant monte à plus de 450 degrés, saisit la pâte en moins de 90 secondes, libérant ainsi tous les arômes des terroirs du Vésuve.
          </p>
        </div>
      </section>

      {/* Elegant Menu / Carte */}
      <section className="menu-section" id="menu">
        <span className="section-label">La Selezione</span>
        <h2 className="section-title">L'Écrin des Classiques</h2>

        <div className="showcase-pizza">
          <img src="/pizza.png" alt="Authentique Margherita au feu de bois" />
        </div>

        <div className="menu-grid">
          <div className="menu-item">
            <div className="menu-item-header">
              <h3 className="menu-item-title">Margherita D.O.P</h3>
              <span className="menu-item-price">18€</span>
            </div>
            <p className="menu-item-desc">
              Sauce tomate San Marzano, véritable mozzarella di bufala campana D.O.P, basilic frais, et filet d'huile d'olive Taggiasca.
            </p>
          </div>

          <div className="menu-item">
            <div className="menu-item-header">
              <h3 className="menu-item-title">Tartufo Magnifico</h3>
              <span className="menu-item-price">29€</span>
            </div>
            <p className="menu-item-desc">
              Base crème fraîche au pecorino, fior di latte, carpaccio de véritable truffe noire fraîche de saison, stracciatella fumée.
            </p>
          </div>

          <div className="menu-item">
            <div className="menu-item-header">
              <h3 className="menu-item-title">Cuore di Burrata</h3>
              <span className="menu-item-price">24€</span>
            </div>
            <p className="menu-item-desc">
              Tomates cerises confites du Vésuve, burratina des Pouilles entière déposée au centre, pesto de pistache de Bronte.
            </p>
          </div>

          <div className="menu-item">
            <div className="menu-item-header">
              <h3 className="menu-item-title">Diavola Nero</h3>
              <span className="menu-item-price">22€</span>
            </div>
            <p className="menu-item-desc">
              Tomate concassée, fior di latte, véritable spianata di Calabre, miel rare infusé au piment infusé maison.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '60px', flexWrap: 'wrap' }}>
          <a href="tel:0962244415" className="btn-primary">COMMANDER</a>
          <a href={cartePdf} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ backgroundColor: 'var(--c-gold)', color: 'var(--c-dark)' }}>VOIR LA CARTE ENTIÈRE</a>
        </div>
      </section>

      {/* Localisation / Carte */}
      <section className="location-section" id="localisation">
        <span className="section-label">Où nous trouver</span>
        <h2 className="section-title">La Localisation</h2>
        
        <div className="location-container">
          <div className="location-info">
            <h3>Cypriano Pizzeria</h3>
            <p>23 Av. Etienne Billières<br />31300 Toulouse</p>
            <p className="open-times">Ouvert tous les jours<br />À emporter et en livraison</p>
            <a href="https://maps.google.com/?q=23+Av.+Etienne+Billières,+31300+Toulouse" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '30px' }}>
              ITINÉRAIRE
            </a>
          </div>
          <div className="location-map">
            <iframe 
              title="Carte de localisation Cypriano" 
              src="https://maps.google.com/maps?q=23%20Av.%20Etienne%20Billi%C3%A8res,%2031300%20Toulouse&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

function MentionsLegales() {
  return (
    <div className="mentions-page">
      <h1>Mentions Légales</h1>

      <h2>1. Éditeur du site</h2>
      <p>
        Le présent site web "Cypriano Pizzeria" est édité par la société CYPRIANO SAS,
        au capital social de 10 000 euros, immatriculée au Registre du Commerce et des Sociétés de Paris
        sous le numéro 123 456 789.
      </p>
      <p>
        <strong>Siège social :</strong> 23 Av. Etienne Billières, 31300 Toulouse.<br />
        <strong>Téléphone :</strong> 09.62.24.44.15<br />
        <strong>Directeur de la publication :</strong> Cypriano.
      </p>

      <h2>2. Réalisation du site</h2>
      <p>
        Le design, le développement et la réalisation de ce site ont été entièrement assurés par <strong><a href="https://microdidact.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--c-gold)', textDecoration: 'underline' }}>Microdidact</a></strong>.
        Agence de développement d'applications web et design sur-mesure.
      </p>

      <h2>3. Hébergement</h2>
      <p>
        Ce site est hébergé par Vercel Inc., dont le siège social est situé 340 S Lemon Ave #4133 Walnut, CA 91789, USA.
      </p>

      <h2>4. Propriété intellectuelle</h2>
      <p>
        L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur
        et la propriété intellectuelle. Tous les droits de reproduction sont réservés,
        y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="wrapper">
        <MainNavbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>

        <MainFooter />
      </div>
    </Router>
  );
}

export default App;
