import Hero from "@/components/Hero"
import NavBar from "@/components/Navbar"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

import Section from "@/components/Section"
import Container from "@mui/material/Container"

export default function Home() {
  return (
    <div>
      <NavBar />

      <Container maxWidth="md">
        <Hero />

        <Section name="about" title="About Me">
          <About />
        </Section>

        <Section name="experience" title="Experience">
          <Experience />
        </Section>

        <Section name="skills" title="Skills">
          <Skills />
        </Section>

        <Section name="contact" title="Contact Me">
          <Contact />
        </Section>
      </Container>

      <Footer />
    </div>
  )
}
