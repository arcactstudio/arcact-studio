import Link from "next/link";

export default function Projects() {
  return (
    <div className="page">
      <h1>Projects</h1>

      <div className="grid">
        <Link href="/projects/project1">
          <div className="card">
            <img src="/projects/project1/1.jpg" />
            <h3>Project One</h3>
            <p>Residential · India</p>
          </div>
        </Link>
      </div>

      <style jsx>{`
        .page { padding:60px; font-family:Arial; }
        .grid { display:grid; grid-template-columns:repeat(auto-fit,300px); gap:30px; }
        .card img { width:100%; height:200px; object-fit:cover; }
        .card { cursor:pointer; }
      `}</style>
    </div>
  );
}
