import { Github, Linkedin } from "lucide-react";

function Hero({data}) {
  return (
    <section id="home" className="hero">
      <div className="glow glow-purple"></div>
      <div className="glow glow-blue"></div>

      <div className="container hero-inner">
        <div>
          <p className="hero-greeting">Hiiii,i'm{data.name}</p>
          <h1 className="hero-title gradient-text">{data.role}</h1>
          <p className="hero-text">{data.tagline}</p>

          <a  href="#projects"className="btn btn-primary">explore my work</a>

          <div className="social-icons">
            <a className="icon-link"href={data.socials.github}><Github size={20} /></a>
            <a className="icon-link"href={data.socials.linkdin}><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="hero-photo">
          <img src="/WhatsApp Image 2026-10-08 at 11.18.13 PM.jpeg" alt={data.name} />
        </div>
      </div>
    </section>
  );
}

export default Hero;