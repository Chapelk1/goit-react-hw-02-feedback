import { Description } from 'components/Notification/Notification.styled'
import PropTypes from 'prop-types'

export const Notification = (props) => {
    return <Description>{props.message}</Description>;
}



Notification.propTypes = {
    message: PropTypes.string,
}