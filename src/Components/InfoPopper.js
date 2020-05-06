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
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

// function renderRow {
//     const {index, style} = props;

//     return (
//         <ListItem>
//             <ListItemText primary=
//         </ListItem>
//     )
// }

const styles = theme => ({
  typography: {
    margin: theme.spacing(1),
  },
})

const InfoPopper = ({ classes, ingredients }) => {
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopover',
  })

  return (
    <div>
      <InfoOutlinedIcon fontSize='small' variant="contained" {...bindTrigger(popupState)}>
      </InfoOutlinedIcon>
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
            {ingredients.map(i =>  i.name.concat(' '))}
        </Typography>
      </Popover>
    </div>
  )
}

InfoPopper.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(InfoPopper)