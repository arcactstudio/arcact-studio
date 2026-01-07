export default function Project() {
  return (
    <div className="page">
      <h1>Project One</h1>
      <p>Location: India | Type: Residential</p>

      <div className="gallery">
        <img src="/projects/project1/1.jpg" />
        <img src="/projects/project1/2.jpg" />
        <img src="/projects/project1/3.jpg" />
      </div>

      <style jsx>{`
        .page { padding:60px; font-family:Arial; }
        .gallery img { width:100%; margin-bottom:30px; }
      `}</style>
    </div>
  );
}
