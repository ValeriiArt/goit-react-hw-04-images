import PropTypes from 'prop-types';
import s from './Button.module.css'

const Button = ({ nameButton, Click }) => {
    return (
        <div className={s.bntContainer}>
            <button className={s.button} type="button" onClick={Click}>{ nameButton}</button>
        </div>
    )
}
Button.propTypes = {
    nameButton: PropTypes.string.isRequired,
    Click: PropTypes.func.isRequired,
}

export default Button;