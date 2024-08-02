import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"

export default function Contact() {
  return (
    <Box sx={{ textAlign: "center", overflowWrap: "break-word" }}>
      <Link
        href="mailto:k.g.miyamoto@gmail.com"
        variant="h4"
        fontWeight="bold"
        sx={{
          background: "#AB5DFF",
          background: "linear-gradient(to right, #AB5DFF 0%, #1B7DB1 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        k.g.miyamoto@gmail.com
      </Link>
      <Typography variant="h6" my={1}>
        or
      </Typography>
      <Link
        href="tel:0421039070"
        variant="h4"
        fontWeight="bold"
        sx={{
          background: "#AB5DFF",
          background: "linear-gradient(to right, #AB5DFF 0%, #1B7DB1 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        0421039070
      </Link>
    </Box>
  )
}
