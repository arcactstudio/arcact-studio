import { motion } from "framer-motion";
import { Menu } from "lucide-react";

export default function ArcactStudioWebsite() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#111" }}>

      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 40px",
        borderBottom: "1px solid #e5e5e5",
        position: "sticky",
        top: 0,
        background: "#fff",
        zIndex: 10
      }}>
        <h1 style={{ letterSpacing: "3px", fontWeight: 600 }}>
          ARCACT STUDIO
        </h1>
        <Menu />
      </header>

      {/* HERO */}
      <section style={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px"
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: "56px", fontWeight: 300 }}>
            Architecture<br />Rooted in Context
          </h2>
          <p style={{ marginTop: "24px", color: "#555", fontSize: "18px" }}>
            ARCACT STUDIO is an architecture practice exploring
            climate-responsive and context-driven design.
          </p>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section style={{ padding: "100px 40px", background: "#f7f7f7" }}>
        <h3 style={{ fontSize: "32px", marginBottom: "40px" }}>Projects</h3>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px"
        }}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} style={{
              background: "#fff",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #e5e5e5"
            }}>
              <div style={{ height: "200px", background: "#ddd" }} />
              <div style={{ padding: "16px" }}>
                <h4>Project Title</h4>
                <p style={{ color: "#666", fontSize: "14px" }}>
                  City, India · Category
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STUDIO */}
      <section style={{ padding: "100px 40px" }}>
        <h3 style={{ fontSize: "32px", marginBottom: "20px" }}>
          The Studio
        </h3>
        <p style={{ maxWidth: "700px", color: "#555", lineHeight: 1.6 }}>
          ARCACT STUDIO is a future-focused architecture firm based in India,
          working across residential, commercial, and institutional projects.
        </p>
      </section>

      {/* PHILOSOPHY */}
      <section style={{ padding: "100px 40px", background: "#f7f7f7" }}>
        <h3 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Design Philosophy
        </h3>
        <p style={{ maxWidth: "700px", color: "#555", lineHeight: 1.6 }}>
          Each project emerges from climate, culture, and context—balancing
          strong architectural form with passive design strategies.
        </p>
      </section>

      {/* CONTACT */}
      <section style={{ padding: "100px 40px" }}>
        <h3 style={{ fontSize: "32px", marginBottom: "20px" }}>Contact</h3>
        <p style={{ color: "#555" }}>
          For collaborations and commissions, contact ARCACT STUDIO.
        </p>
        <p style={{ marginTop: "12px", fontWeight: 500 }}>
          Email: arcactstudio@gmail.com
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "30px 40px",
        borderTop: "1px solid #e5e5e5",
        color: "#777",
        fontSize: "14px"
      }}>
        © {new Date().getFullYear()} ARCACT STUDIO · Architecture & Design
      </footer>

    </div>
  );
}
