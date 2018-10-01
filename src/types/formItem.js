import PropTypes from "prop-types";

const formItemProp = PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string),
  secure: PropTypes.bool
});

const FormItemTypes = {
  BOOL: "BOOL",
  CHECKBOX: "CHECKBOX",
  SHORT_RESPONSE: "SHORT_RESPONSE",
  LONG_RESPONSE: "LONG_RESPONSE"
};

export { formItemProp, FormItemTypes };
