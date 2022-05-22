import PropTypes from 'prop-types';

function Section(props) {
    const {title, children} = props
    return (
        <div>
            {<h5>{title}</h5>}
            {children}
        </div>
    )
};

Section.propTypes = {
    
}

export default Section;