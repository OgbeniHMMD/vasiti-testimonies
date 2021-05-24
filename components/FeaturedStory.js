import React from "react"

import Box from "@material-ui/core/Box"
import { Button, Container, Link } from "@material-ui/core"

export default function TopNavLinks(props) {
  return (
    <Box width={1} bgcolor={props.dark ? "grey.900" : "#FFF8F5"} my={0}>
      <Container p={0}>
        <Box
          width={1}
          display={{ xs: "block", md: "flex" }}
          flexDirection="row-reverse"
          alignItems="center"
          justifyContent="between"
          justifyContent={{ sm: "center", md: "between" }}>
          <Box p={{ xs: 4, md: 8 }} width={{ sm: "1", md: "1 / 2" }}>
            <Box
              py={2}
              fontSize="h4.fontSize"
              fontWeight="fontWeightBold"
              color={props.dark ? "white" : "grey.900"}>
              {props.title}
            </Box>

            <Box
              p={0.5}
              border={1}
              component="span"
              borderRadius={4}
              color={props.dark ? "white" : "grey.900"}
              borderColor={props.dark ? "secondary" : "grey.900"}>
              {props.category}
            </Box>

            <Box
              py={4}
              fontSize="1.2em"
              letterSpacing={1}
              color={props.dark ? "grey.200" : "grey.900"}>
              {props.story}
            </Box>
            <Box>
              <Button size="large" color="primary">
                Share your own story!
              </Button>
            </Box>
          </Box>

          <Box
            pt={2}
            mt={4}
            width={{ sm: "1", md: "1 / 2" }}
            style={{
              maxWidth: "100%",
              background: `center Top / cover  no-repeat url(${props.eclipse})`,
            }}>
            <img
              src={props.photo}
              style={{ maxWidth: "100%", margin: "auto 0" }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
