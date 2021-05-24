import React from "react"

import Box from "@material-ui/core/Box"
import { Grid, Typography } from "@material-ui/core"

export default function TopNavLinks(props) {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <img width="200" height="200" alt={props.name} src={props.avatar} />
      <Box
        pt={1}
        fontSize="h4.fontSize"
        fontWeight="fontWeightBold"
        color="grey.900">
        {props.name}
      </Box>

      <Box py={1} display="flex" alignItems="center">
        {props.location && (
          <Box mr={2} fontWeight="fontWeightMedium" color="grey.900">
            {props.location}
          </Box>
        )}

        <Box
          p={1}
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
    </Grid>
  )
}
