function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Heading from "rsg-components/Heading";
import Styled from "rsg-components/Styled";

function SectionHeadingRenderer(_ref) {
  var classes = _ref.classes,
    children = _ref.children,
    toolbar = _ref.toolbar,
    id = _ref.id,
    href = _ref.href,
    // depth = _ref.depth,
    deprecated = _ref.deprecated;

  var headingLevel = 1; // Math.min(6, depth);
  var sectionNameClasses = cx(
    classes.sectionName,
    _defineProperty({}, classes.isDeprecated, deprecated)
  );

  return React.createElement(
    "div",
    { className: classes.wrapper },
    React.createElement(
      Heading,
      { level: headingLevel, id: id },
      React.createElement(
        "a",
        { href: href, className: sectionNameClasses },
        children
      )
    ),
    React.createElement("div", { className: classes.toolbar }, toolbar)
  );
}

var styles = function styles(_ref2) {
  var color = _ref2.color,
    space = _ref2.space;
  return {
    wrapper: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: space[1]
    },
    toolbar: {
      marginLeft: "auto"
    },
    sectionName: {
      "&:hover, &:active": {
        isolate: false,
        textDecoration: "underline",
        cursor: "pointer"
      }
    },
    isDeprecated: {
      color: color.light,
      "&, &:hover": {
        textDecoration: "line-through"
      }
    }
  };
};

SectionHeadingRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  toolbar: PropTypes.node,
  id: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  depth: PropTypes.number.isRequired,
  deprecated: PropTypes.bool
};

export default Styled(styles)(SectionHeadingRenderer);
