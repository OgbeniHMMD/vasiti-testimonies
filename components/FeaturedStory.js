import React from "react"

import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

import Box from "@material-ui/core/Box"
import { Button, Container, Link } from "@material-ui/core"

export default function TopNavLinks() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Box width={1} bgcolor="grey.900" my={0}>
      <Container>
        <Box
          width={1}
          display={isMobile ? "block" : "flex"}
          flexDirection="row-reverse"
          alignItems="center"
          justifyContent="between"
          justifyContent={{ sm: "center", md: "between" }}>
          <Box p={isMobile ? "2" : "0"} width={{ sm: "1", md: "1 / 2" }}>
            <Box
              pt={2}
              fontSize="h4.fontSize"
              fontWeight="fontWeightBold"
              color="white">
              Tolu & Joy’s Experience
            </Box>

            <Box my={1}>
              <Button size="small" variant="outlined" color="secondary">
                Customer
              </Button>
            </Box>

            <Box py={2} fontSize="h6.fontSize" color="grey.200">
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </Box>
            <Box>
              <Button color="primary">Share your own story!</Button>
            </Box>
          </Box>

          <Box
            pt={2}
            width={{ sm: "1", md: "1 / 2" }}
            style={{ maxWidth: "100%" }}>
            <img
              src="/img/black-beautiful-ladies-smiling.png"
              style={{ maxWidth: "100%" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
