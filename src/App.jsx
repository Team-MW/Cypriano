import React, { useEffect, useState } from 'react';
import './index.css';
import './App.css';
import { ArrowRight } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="wrapper">
      {/* Navbar section */}
      <nav className="navbar" style={{
        backgroundColor: scrolled ? 'rgba(17, 17, 17, 0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
      }}>
        <div className="nav-brand">Cypriano</div>
        <div className="nav-links">
          <a href="#about">L'Essence</a>
          <a href="#savoir">Savoir-Faire</a>
          <a href="#menu">La Carte</a>
        </div>
        <button className="btn-reserve">Réserver</button>
      </nav>

      {/* Hero section : Main showcase of the restaurant's vibe */}
      <section className="hero">
        <div className="hero-background">
          {/* Main provided image used as dramatic background */}
          <img src="/cypriano.png" alt="Cypriano Pizzeria Paris" />
        </div>
        <div className="hero-content">
          <span className="hero-subtitle">Haute Gastronomie Italienne</span>
          <h1 className="hero-title">
            L'Arte della <br />
            <span>Pizza Napoletana</span>
          </h1>
          <button className="btn-primary">
            DÉCOUVRIR <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Story section : About the elegant experience */}
      <section className="story-section" id="about">
        <div className="story-container">
          <div className="story-image">
            <img src="/cypriano.png" alt="Intérieur Pizzeria Cypriano" />
          </div>
          <div className="story-content">
            <span className="section-label">L'Héritage</span>
            <h2 className="section-title">L'authenticité,<br />élevée au rang d'art.</h2>
            <p className="story-text">
              Situé au cœur de Paris, Cypriano réinvente l'expérience de la pizzeria traditionnelle. Dans un cadre feutré et résolument contemporain, nous vous proposons une immersion dans la perfection culinaire napolitaine.
            </p>
            <p className="story-text">
              L'élégance de nos salles ne trouve d'égal que la noblesse de nos ingrédients : truffe fraîche sélectionnée, huiles d'olive confidentielles, et farines biologiques maturées patiemment pour offrir la plus digeste et exquise des pâtes.
            </p>
            <button className="btn-primary">LA PHILOSOPHIE</button>
          </div>
        </div>
      </section>

      {/* Diagonal Designer Marquee Bands */}
      <div className="diagonal-container">
        {/* Background dark bold outline marquee */}
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
        {/* Foreground sharp gold marquee */}
        <div className="marquee-band gold">
          <div className="marquee-content">
            <span>• PASSIONE • TRADIZIONE • ECCELLENZA • AMORE</span>
            <span>• PASSIONE • TRADIZIONE • ECCELLENZA • AMORE</span>
          </div>
        </div>
      </div>

      {/* Savoir-Faire / Expertise section with New generated images */}
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

        {/* Showcasing the generated pizza image beautifully */}
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
      </section>

      {/* Professional Footer */}
      <footer className="footer" id="contact">
        <h2 className="footer-brand">CYPRIANO</h2>
        <div className="footer-details">
          <div className="footer-block">
            <h4>L'Adresse</h4>
            <p>12 Rue de la Paix<br />75002 Paris, France</p>
          </div>
          <div className="footer-block">
            <h4>Les Horaires</h4>
            <p>Ouvert tous les midis et soirs<br />12:00 - 14:30 | 19:00 - 23:30</p>
          </div>
          <div className="footer-block">
            <h4>Réservations</h4>
            <p>+33 1 23 45 67 89<br />conciergerie@cypriano.fr</p>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Cypriano Pizzeria. L'élégance à l'italienne. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}

export default App;
