import React from "react"

import Box from "@material-ui/core/Box"
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core"

import Attachment from "@material-ui/icons/Attachment"

export default function TopNavLinks(props) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
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
                    color={props.dark ? "secondary" : "primary"}
                    onClick={handleClickOpen}>
                    Share your own story
                  </Button>
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

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <Box p={2}>
          <Box
            p={3}
            textAlign="center"
            fontSize="h5.fontSize"
            fontWeight="fontWeightBold">
            Share your amazing story!
          </Box>

          <Box py={1}>
            <label>
              <Box color="grey.800" pb={1}>
                Upload your Picture
              </Box>
              <FormControl variant="outlined" style={{ width: "100%" }}>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type="file"
                  // value={values.password}
                  // onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <Attachment />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </label>
          </Box>

          <Box py={1} display="flex">
            <Box pr={3}>
              <label>
                <Box color="grey.800" pb={1}>
                  First Name
                </Box>
                <TextField
                  autoFocus
                  variant="outlined"
                  id="firstName"
                  type="text"
                  fullWidth
                />
              </label>
            </Box>

            <Box>
              <label>
                <Box color="grey.800" pb={1}>
                  Last Name
                </Box>
                <TextField
                  autoFocus
                  variant="outlined"
                  id="lastName"
                  type="text"
                  fullWidth
                />
              </label>
            </Box>
          </Box>

          <Box py={1}>
            <label>
              <Box color="grey.800" pb={1}>
                Share your story
              </Box>
              <TextField
                autoFocus
                variant="outlined"
                id="story"
                type="text"
                fullWidth
              />
            </label>
          </Box>

          <FormControl component="row">
            <Box
              py={1}
              width={1}
              display="flex"
              alignItems="center"
              justifyContent="between">
              <Box color="grey.800" py={1}>
                What did you interact with Vasiti as?
              </Box>

              <RadioGroup
                row
                aria-label="category"
                name="category"
                defaultValue="Customer">
                <FormControlLabel
                  value="Customer"
                  control={<Radio color="primary" />}
                  label="Customer"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="vendor"
                  label="Vendor"
                  labelPlacement="start"
                  control={<Radio color="primary" />}
                />
              </RadioGroup>
            </Box>
          </FormControl>

          <Box py={1}>
            <label>
              <Box color="grey.800" pb={1}>
                City or Higher Institution (for Students)
              </Box>
              <TextField
                autoFocus
                variant="outlined"
                id="school"
                type="text"
                fullWidth
              />
            </label>
          </Box>

          <DialogActions>
            <Button
              size="large"
              onClick={handleClose}
              color="primary"
              variant="contained">
              Share your story!
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  )
}
