import Hero from "@/components/Hero"
import NavBar from "@/components/Navbar"
import Skills from "@/components/Skills"
import Footer from "@/components/Footer"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Section from "@/components/Section"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"

export default function Home() {
  return (
    <div>
      <NavBar />

      <Container maxWidth="md">
        <Hero />

        <Section name="about" title="About Me">
          <Typography variant="h6" paragraph>
            I am a web developer from Japan, currently staying in Sydney. I have
            over five years of experience in web development, with a particular
            expertise in frontend development using React.
            <br />
            <br />
            In the past, I built and operated a classified website from scratch
            using React and Next.js for the frontend and Python and Django for
            the backend. The website you are viewing now is also built with
            React and Next.js. The source code can be found{" "}
            <Link
              href="https://github.com/seungsunglee/portfolio"
              target="_blank"
              rel="noopener"
            >
              here.
            </Link>
            <br />
            <br />
            While I do not have business experience in web development, I
            constantly acquire the latest knowledge and dedicate myself to
            coding every day.
          </Typography>
        </Section>

        <Section name="skills" title="Skills">
          <Skills />
        </Section>

        <Section name="contact" title="Contact Me">
          <Box sx={{ textAlign: "center", overflowWrap: "break-word" }}>
            <Link
              href="mailto:k.g.miyamoto@gmail.com"
              underline="none"
              variant="h3"
              fontWeight="bold"
              sx={{
                background: "#AB5DFF",
                background:
                  "linear-gradient(to right, #AB5DFF 0%, #1B7DB1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              k.g.miyamoto@gmail.com
            </Link>
          </Box>
        </Section>
      </Container>

      <Footer />
    </div>
  )
}
