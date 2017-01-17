import React from 'react';

export const linkStyle = {
  normal: {
    borderBottom: '1px dotted rgb(0, 168, 0)',
  },
  hover: {
    borderBottom: '1px solid rgb(0, 168, 0)',
    color: 'black',
  },
  active: 'hover',
  touchActive: {
    borderBottom: '1px dashed rgb(0, 168, 0)',
    color: 'black',
  },
  focusFromTab: {
    outline: '2px solid rgb(0, 152, 0)',
    outlineOffset: '2px',
    color: 'black',
  },
  touchActiveTapOnly: true,
};

export const childLinkStyle = {
  onParentNormal: linkStyle.normal,
  onParentHover: linkStyle.hover,
  onParentActive: linkStyle.active,
  onParentTouchActive: linkStyle.touchActive,
  onParentFocusFromTab: linkStyle.focusFromTab,
};


export const li = content => (
  <li
    style={{
      paddingLeft: '18px',
      textIndent: '-15px',
      margin: '0.5vh 0',
      listStyle: 'none',
    }}
  >
    <span style={{ paddingRight: '7px' }}>&ndash;</span>
    {content}
  </li>
);
