import PropTypes from "prop-types";

const formItem = PropTypes.shape({
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string),
  secure: PropTypes.bool
});

export default formItem;
