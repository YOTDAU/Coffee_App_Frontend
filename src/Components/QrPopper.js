import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Popover from '@material-ui/core/Popover'
import {
  usePopupState,
  bindTrigger,
  bindPopover,
} from 'material-ui-popup-state/hooks'
import CropFreeOutlinedIcon from '@material-ui/icons/CropFreeOutlined';
import QRCode from 'qrcode.react'


const getQRcode = (ingredients) => {
    let q = ingredients.map(i => {return i.name})
    let qr = JSON.stringify(q)
    return qr
}

const styles = theme => ({
  typography: {
    margin: theme.spacing(1),
  },
})

const QRPopper = ({ classes, ingredients  }) => {
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopover',
  })

  return (
    <div>
      <CropFreeOutlinedIcon fontSize='small' variant="contained" {...bindTrigger(popupState)}>
      </CropFreeOutlinedIcon>
      <Popover 
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
        <QRCode value={ getQRcode(ingredients) } />
        </Typography>
      </Popover>
    </div>
  )
}

QRPopper.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(QRPopper)