import React from "react"

import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import Box from "@material-ui/core/Box"
import { Container, Link } from "@material-ui/core"

export default function TopNavLinks() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const NavLinks = [
    { id: 1, title: "MARKETPLACE", slug: "https://vasiti.com/marketplace" },
    { id: 2, title: "WHOLESALE CENTER", slug: "https://wholesale.vasiti.com/" },
    { id: 3, title: "SELLER CENTER", slug: "https://seller.vasiti.com/" },
    { id: 4, title: "SERVICES", slug: "#" },
    { id: 5, title: "INTERNSHIPS", slug: "https://vasiti.com/campus-reps" },
    { id: 6, title: "EVENTS", slug: "https://events.vasiti.com/" },
  ]
  const navLinks = NavLinks.map((link) => (
    <Box flexGrow={1} display="flex" justifyContent="center" key={link.id}>
      <Link href={link.slug}>
        <Box p={2} mx={2} color="text.primary" fontWeight="fontWeightMedium">
          {link.title}
        </Box>
      </Link>
    </Box>
  ))

  return (
    <nav>
      {!isMobile && (
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
      )}
    </nav>
  )
}
