import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Box from "@mui/material/Box"

export default function Experience() {
  return (
    <Box sx={{ overflowWrap: "break-word" }}>
      <Typography component="h4" variant="h4" gutterBottom>
        Portfolio
      </Typography>
      <Typography variant="h6" fontWeight={400} mb={5}>
        Source Code:{" "}
        <Link
          href="https://github.com/seungsunglee/portfolio/"
          target="_blank"
          rel="noopener"
        >
          https://github.com/seungsunglee/portfolio/
        </Link>
        <br />- Build with Next.js (React.js) and MUI.
      </Typography>
      <Typography component="h4" variant="h4" gutterBottom>
        Classified Website
      </Typography>
      <Typography variant="h6" fontWeight={400}>
        Front-end Source Code:{" "}
        <Link
          href="https://github.com/seungsunglee/classified_frontend/"
          target="_blank"
          rel="noopener"
        >
          https://github.com/seungsunglee/classified_frontend/
        </Link>
        <br />
        Back-end Source Code:{" "}
        <Link
          href="https://github.com/seungsunglee/classified_backend/"
          target="_blank"
          rel="noopener"
        >
          https://github.com/seungsunglee/classified_backend/
        </Link>
        <br />- Full-stack website using Next.js (React.js) for the front-end
        and Django REST Framework (Python) for the back-end.
        <ul>
          <li>User registration</li>
          <li>Authentication</li>
          <li>Payment function with Stripe</li>
          <li>Distance search using longitude and latitude</li>
          <li>Messaging function between users</li>
          <li>And more</li>
        </ul>
      </Typography>
    </Box>
  )
}
