import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function ArcactStudioWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ================= HEADER ================= */}
      <header className="flex items-center justify-between px-8 py-6 sticky top-0 bg-white z-50 border-b">
        <h1 className="text-2xl font-semibold tracking-wider">ARCACT STUDIO</h1>
        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest">
          <a href="#home" className="hover:text-gray-500">Home</a>
          <a href="#projects" className="hover:text-gray-500">Projects</a>
          <a href="#studio" className="hover:text-gray-500">Studio</a>
          <a href="#philosophy" className="hover:text-gray-500">Philosophy</a>
          <a href="#contact" className="hover:text-gray-500">Contact</a>
        </nav>
        <Menu className="md:hidden" />
      </header>

      {/* ================= HERO ================= */}
      <section id="home" className="h-[90vh] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center max-w-4xl"
        >
          <h2 className="text-5xl md:text-7xl font-light leading-tight">
            Architecture
            <br />Rooted in Context
          </h2>
          <p className="mt-8 text-lg text-gray-600">
            ARCACT STUDIO is an architecture practice exploring climate-responsive,
            sculptural, and context-driven design across scales.
          </p>
        </motion.div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="px-8 py-24 bg-gray-50">
        <h3 className="text-3xl font-medium mb-16">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {["Residential", "Commercial", "Institutional", "Concept"].map((type, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
              <Card className="rounded-2xl overflow-hidden shadow-sm">
                <div className="h-60 bg-gray-200" />
                <CardContent className="p-5">
                  <h4 className="text-lg font-medium">Project Title</h4>
                  <p className="text-sm text-gray-500">City, India · {type}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= STUDIO ================= */}
      <section id="studio" className="px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="h-96 bg-gray-200 rounded-2xl" />
          <div>
            <h3 className="text-3xl font-medium mb-6">The Studio</h3>
            <p className="text-gray-600 leading-relaxed">
              ARCACT STUDIO is a future-focused architecture firm based in India,
              working across residential, commercial, and institutional projects.
              The practice believes in architecture as a synthesis of climate,
              culture, material, and form.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section id="philosophy" className="px-8 py-24 bg-gray-50">
        <div className="max-w-4xl">
          <h3 className="text-3xl font-medium mb-6">Design Philosophy</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Each project at ARCACT STUDIO emerges from its context—responding to
            climate, program, and human experience. We pursue architectural
            clarity through strong forms, passive strategies, and honest
            material expression.
          </p>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="px-8 py-24">
        <h3 className="text-3xl font-medium mb-6">Contact</h3>
        <p className="text-gray-600 mb-8 max-w-xl">
          For collaborations, commissions, or inquiries, please get in touch
          with ARCACT STUDIO.
        </p>
        <Button className="rounded-2xl px-10">Email the Studio</Button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="px-8 py-8 border-t text-sm text-gray-500">
        © {new Date().getFullYear()} ARCACT STUDIO · Architecture & Design
      </footer>
    </div>
  );
}
