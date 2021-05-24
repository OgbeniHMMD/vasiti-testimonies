import React from "react"

import Box from "@material-ui/core/Box"
import { Button, Container, InputBase, Link, Paper } from "@material-ui/core"

export default function TheFooter() {
  return (
    <Box mt={4} width={1} bgcolor="grey.900">
      <Container>
        <Box
          width={1}
          display={{ xs: "block", md: "flex" }}
          alignItems="center"
          justifyContent={{ sm: "center", md: "between" }}>
          <Box mt={-6} width={{ sm: "1", md: "1 / 2" }}>
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
              Be a member
              <br />
              of our community 🎉
            </Box>

            <Box py={2} color="grey.200">
              We’d make sure you’re always first to know what’s happening on
              Vasiti—thus, the world.
            </Box>

            <Box
              p={0.5}
              my={2}
              width={1}
              borderRadius={4}
              bgcolor="grey.600"
              display="flex"
              justifyContent="between">
              <Box flexGrow={1} px={2}>
                <InputBase
                  width={1}
                  style={{ color: "white" }}
                  placeholder="enter your email address"
                  inputProps={{ "aria-label": "enter your email address" }}
                />
              </Box>

              <Box flexShrink={1}>
                <Button
                  type="submit"
                  aria-label="search"
                  variant="contained"
                  color="secondary"
                  disableElevation
                  style={{ fontWeight: "bold" }}>
                  SUBSCRIBE
                </Button>
              </Box>
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
