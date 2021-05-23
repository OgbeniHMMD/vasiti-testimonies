import React from "react"

import Box from "@material-ui/core/Box"
import { Button, Container, Link } from "@material-ui/core"

export default function TheFooter() {
  return (
    <Box mt={8} width={1} bgcolor="grey.800">
      <Container>
        <Box
          width={1}
          display={{ xs: "block", md: "flex" }}
          alignItems="center"
          justifyContent="between"
          justifyContent={{ sm: "center", md: "between" }}>
          <Box pt={2} mt={-8} width={{ sm: "1", md: "1 / 2" }}>
            <img
              src="/img/subscribe-banner.png"
              style={{ maxWidth: "100%", margin: "auto 0" }}
            />
          </Box>
          <Box p={{ xs: 4, md: 8 }} width={{ sm: "1", md: "1 / 2" }}>
            <Box
              pt={2}
              fontSize="h4.fontSize"
              fontWeight="fontWeightBold"
              color="white">
              Be a member of our community 🎉
            </Box>

            <Box py={2} color="grey.200">
              We’d make sure you’re always first to know what’s happening on
              Vasiti—thus, the world.
            </Box>
          </Box>
        </Box>

        <Box
          py={8}
          width={1}
          color="white"
          display={{ xs: "block", md: "flex" }}
          alignItems="center"
          justifyContent="between"
          justifyContent={{ sm: "center", md: "between" }}>
          <Box pt={2} mt={-8} width={{ sm: "1", md: "1 / 5" }}>
            Join our community
          </Box>
          <Box pt={2} mt={-8} width={{ sm: "1", md: "1 / 5" }}>
            Join our community
          </Box>
          <Box pt={2} mt={-8} width={{ sm: "1", md: "1 / 5" }}>
            Join our community
          </Box>
          <Box pt={2} mt={-8} width={{ sm: "1", md: "1 / 5" }}>
            Join our community
          </Box>
          <Box pt={2} mt={-8} width={{ sm: "1", md: "1 / 5" }}>
            <Box py={2} fontWeight="fontWeightBold">
              Join our community
            </Box>
            <div>Email Newsletter</div>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
