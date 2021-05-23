import React from "react"

import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import Box from "@material-ui/core/Box"
import { Container, Link } from "@material-ui/core"

export default function TopNavLinks() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Box width={1}>
      <Container>
        <Box
          width={1}
          alignItems="center"
          justifyContent="around"
          display={isMobile ? "block" : "flex"}>
          <Box pt={2} width={{ sm: "1", md: "1 / 2" }}>
            <Box fontSize="h3.fontSize" fontWeight="fontWeightBold">
              Amazing
              <br />
              Experiences from Our Wonderful Customers
            </Box>
            <Box py={2} fontSize="h6.fontSize">
              Here is what customers and vendors are saying about us, you can
              share your stories with us too.
            </Box>
          </Box>
          <Box pt={2} width={{ sm: "1", md: "1 / 2" }}>
            <img src="/img/hero-1.png" style={{ maxWidth: "100%" }} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}