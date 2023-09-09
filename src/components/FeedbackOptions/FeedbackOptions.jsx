import {Btn} from 'components/FeedbackOptions/FeedbackOptions.styled'

export const FeedbackOptions = (props) => {
    const optionsName = Object.keys(props.options)
    
    
    return optionsName.map(option => (
        <Btn
            type="button" key={option}
            onClick={props.handlClick}>
        {option}
      </Btn>
    ));
}