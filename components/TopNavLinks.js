import React from "react"
import Box from "@material-ui/core/Box"
import { Container, Link } from "@material-ui/core"

export default function TopNavLinks() {
  const NavLinks = [
    { id: 1, title: "MARKETPLACE", slug: "https://vasiti.com/marketplace" },
    { id: 1, title: "WHOLESALE CENTER", slug: "https://wholesale.vasiti.com/" },
    { id: 1, title: "SELLER CENTER", slug: "https://seller.vasiti.com/" },
    { id: 1, title: "SERVICES", slug: "#" },
    { id: 1, title: "INTERNSHIPS", slug: "https://vasiti.com/campus-reps" },
    { id: 1, title: "EVENTS", slug: "https://events.vasiti.com/" },
  ]
  const navLinks = NavLinks.map((el) => (
    <Box flexGrow={1} display="flex" justifyContent="center">
      <Link href={el.slug}>
        <Box p={2} mx={2} color="text.primary" fontWeight="fontWeightMedium">
          {el.title}
        </Box>
      </Link>
    </Box>
  ))

  return (
    <nav>
      <Box width={1} borderTop={1} borderBottom={1} borderColor="grey.200">
        <Container>
          <Box
            width={1}
            flexGrow={1}
            display="flex"
            alignItems="center"
            justifyContent="around">
            {navLinks}
          </Box>
        </Container>
      </Box>
    </nav>
  )
}
