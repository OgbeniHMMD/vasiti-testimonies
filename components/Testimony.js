import React from "react"

import Box from "@material-ui/core/Box"
import { Avatar, Typography } from "@material-ui/core"

export default function TopNavLinks(props) {
  return (
    <Box p={{ xs: 2, md: 4, lg: 8 }} width={1 / 3}>
      <Avatar size="200px" alt={props.name} src={props.avatar} />

      <Box
        pt={1}
        fontSize="h4.fontSize"
        fontWeight="fontWeightBold"
        color="grey.900">
        {props.name}
      </Box>

      <Box py={1} display="flex" alignItems="center">
        <Box fontWeight="fontWeightMedium" color="grey.900">
          {props.location}
        </Box>

        <Box
          mx={2}
          component="span"
          borderRadius={4}
          color={props.category == "CUSTOMER" ? "#0D019A" : "#049A01"}
          bgcolor={props.category == "CUSTOMER" ? "#EEF8FF" : "#F0FFEE"}>
          {props.category}
        </Box>
      </Box>

      <Box py={2} fontSize="1.2em" letterSpacing={1} color="grey.900">
        <Typography variant="subtitle1"> {props.story}</Typography>
      </Box>
    </Box>
  )
}
