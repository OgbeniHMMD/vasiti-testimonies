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

  return (
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
  )
}
