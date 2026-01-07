import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <img src="/logo.png" className="logo" />
        <nav>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/studio">Studio</Link>
          <Link href="/philosophy">Philosophy</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="hero">
        <h1>Architecture Rooted in Context</h1>
        <p>
          ARCACT STUDIO is an architecture practice exploring climate-responsive
          and context-driven design.
        </p>
      </section>

      <section className="cta">
        <Link href="/projects">View Projects →</Link>
      </section>

      <style jsx>{`
        .container { font-family: Arial; color:#111; }
        .header { display:flex; justify-content:space-between; padding:30px; }
        nav a { margin-left:20px; text-decoration:none; color:#111; }
        .logo { height:40px; }
        .hero { height:70vh; display:flex; flex-direction:column;
                justify-content:center; align-items:center; text-align:center; }
        .hero h1 { font-size:56px; font-weight:300; }
        .hero p { max-width:600px; color:#555; }
        .cta { text-align:center; padding:60px; }
      `}</style>
    </div>
  );
}
