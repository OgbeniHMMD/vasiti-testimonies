import React from "react"

import Box from "@material-ui/core/Box"
import { Button, Container, Link, Typography } from "@material-ui/core"

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
          <Box p={{ xs: 4, md: 8 }} width={{ xs: "1", md: "1 / 2" }}>
            <Box
              py={2}
              fontSize="h4.fontSize"
              fontWeight="fontWeightBold"
              color={props.dark ? "white" : "grey.900"}>
              {props.title}
            </Box>

            <Box
              p={1}
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
              <Typography variant="subtitle1">{props.story}</Typography>
            </Box>
            <Box>
              <span>
                <Button
                  size="large"
                  style={{ letterSpacing: 4 }}
                  color={props.dark ? "secondary" : "primary"}>
                  Share your own story
                </Button>{" "}
                <div>
                  <img src="/img/whip.png" />
                </div>
              </span>
            </Box>
          </Box>

          <Box
            pt={2}
            mt={4}
            width={{ xs: "1", md: "1 / 2" }}
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
