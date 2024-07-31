import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

export default function Section({ name, title, children }) {
  return (
    <Box mt={10}>
      <a name={name} />
      <Typography
        component="h2"
        variant="h3"
        mb={4}
        pt={2}
        color="gradient.main"
      >
        {title}
      </Typography>
      {children}
    </Box>
  )
}
