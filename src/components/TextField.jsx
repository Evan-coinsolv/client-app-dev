import PropTypes from "prop-types";

import "./TextField.css";

function TextField({  }) {
  return (
   <input type="text" className="storybook-textfield"></input>
  )
}

TextField.propTypes = {
  backgroundColor: PropTypes.string,
}

export default TextField