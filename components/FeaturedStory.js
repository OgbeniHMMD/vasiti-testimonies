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
import Close from "@material-ui/icons/Close"

export default function TopNavLinks(props) {
  const [dialogForm, setDialogForm] = React.useState(false)
  const [dialogSuccess, setDialogSuccess] = React.useState(false)

  const initialFormValues = {
    firstName: "x",
    lastName: "y",
    category: "customer",
    attachment: null,
    story: "",
    institution: "",
  }

  // We'll update "values" as the form updates
  const [formValues, setValues] = React.useState(initialFormValues)

  const handleInputValue = (e) => {
    // this function will be triggered by the text field's onBlur and onChange events
    const { name, value } = e.target
    setValues({
      ...formValues,
      [name]: value,
    })
  }

  const OPEN_FORM_DIALOG = () => {
    setDialogForm(true)
  }

  const CLOSE_FORM_DIALOG = () => {
    setDialogForm(false)
  }

  const OPEN_SUCCESS_DIALOG = () => {
    setDialogForm(false)
    setDialogSuccess(true)
  }

  const CLOSE_SUCCESS_DIALOG = () => {
    setDialogSuccess(false)
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
                    onClick={OPEN_FORM_DIALOG}>
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
        open={dialogForm}
        onClose={CLOSE_FORM_DIALOG}
        aria-labelledby="form-dialog-title">
        <form autoComplete="off" onSubmit={OPEN_SUCCESS_DIALOG}>
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
                    required
                    type="file"
                    id="outlined-adornment-password"
                    name="attachment"
                    onBlur={handleInputValue}
                    onChange={handleInputValue}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          {formValues.attachment ? <Close /> : <Attachment />}
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
                    required
                    autoFocus
                    variant="outlined"
                    id="firstName"
                    type="text"
                    fullWidth
                    name="firstName"
                    onBlur={handleInputValue}
                    onChange={handleInputValue}
                  />
                </label>
              </Box>

              <Box>
                <label>
                  <Box color="grey.800" pb={1}>
                    Last Name
                  </Box>
                  <TextField
                    required
                    type="text"
                    fullWidth
                    id="lastName"
                    variant="outlined"
                    name="lastName"
                    onBlur={handleInputValue}
                    onChange={handleInputValue}
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
                  required
                  id="story"
                  type="text"
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  name="story"
                  onBlur={handleInputValue}
                  onChange={handleInputValue}
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
                  required
                  aria-label="category"
                  name="category"
                  defaultValue="Customer"
                  name="category"
                  onBlur={handleInputValue}
                  onChange={handleInputValue}>
                  <FormControlLabel
                    value="customer"
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

            {formValues.category == "vendor" && (
              <Box py={1}>
                <label>
                  <Box color="grey.800" pb={1}>
                    City or Higher Institution (for Students)
                  </Box>
                  <TextField
                    required
                    id="school"
                    type="text"
                    fullWidth
                    variant="outlined"
                    name="institution"
                    onBlur={handleInputValue}
                    onChange={handleInputValue}
                  />
                </label>
              </Box>
            )}

            <Box pt={4}>
              <DialogActions>
                <Button
                  size="large"
                  type="submit"
                  color="primary"
                  variant="contained">
                  Share your story!
                </Button>
              </DialogActions>
            </Box>
          </Box>
        </form>
      </Dialog>

      <Dialog
        open={dialogSuccess}
        onClose={CLOSE_SUCCESS_DIALOG}
        aria-labelledby="success-dialog-title">
        <Box p={4}>
          <Box pb={1} textAlign="center">
            <img src="/img/success.png" width="200" height="200" />
          </Box>
          <Box
            py={3}
            textAlign="center"
            fontSize="h4.fontSize"
            fontWeight="fontWeightBold">
            Thank you for sharing your story!
          </Box>
          <Box textAlign="center" fontSize="h6.fontSize">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Box>

          <Box pt={4} textAlign="center">
            <Button
              size="large"
              onClick={CLOSE_SUCCESS_DIALOG}
              color="primary"
              variant="contained">
              Close
            </Button>
          </Box>
        </Box>
      </Dialog>
    </div>
  )
}
