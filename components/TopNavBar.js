import React from "react"
import Box from "@material-ui/core/Box"
import { Container, Link } from "@material-ui/core"

export default function TopNavBar() {
  const AnchorLinks = [
    { id: 1, title: "ABOUT", slug: "https://vasiti.com/about" },
    { id: 1, title: "STORIES", slug: "#stories" },
    { id: 1, title: "CONTACT", slug: "https://vasiti.com/contact" },
    { id: 1, title: "LOGIN", slug: "https://vasiti.com/login" },
  ]
  const anchorLink = AnchorLinks.map((el) => (
    <Link href={el.slug}>
      <Box p={1} mx={2} color="text.primary" fontWeight="fontWeightMedium">
        {el.title}
      </Box>
    </Link>
  ))

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
    <div style={{ width: "100%" }}>
      <header>
        <Box width={1} py={1}>
          <Container>
            <Box display="flex" alignItems="center" bgcolor="background.paper">
              <Box p={1} width={1}>
                <Link href="/">
                  <img src="/img/logo.png" />
                </Link>
              </Box>

              {anchorLink}

              <Box mx={2} flexShrink={0}>
                <Link href="https://vasiti.com/signup">
                  <Box
                    py={1}
                    px={2}
                    color="white"
                    borderRadius={4}
                    bgcolor="primary.main"
                    fontWeight="fontWeightMedium">
                    SIGN UP
                  </Box>
                </Link>
              </Box>
            </Box>
          </Container>
        </Box>
      </header>

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
    </div>
  )
}
