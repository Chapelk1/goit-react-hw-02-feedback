import {Btn} from 'components/FeedbackOptions/FeedbackOptions.styled'
import PropTypes from 'prop-types'


export const FeedbackOptions = (props) => {
    const optionsName = Object.keys(props.options);
    
    return optionsName.map(option => (
      <Btn type="button" key={option} onClick={props.onLeaveFeedback}>
        {option}
      </Btn>
    ));
}


FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func,
};