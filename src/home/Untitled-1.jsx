/** eslint-disable react/button-has-type */
import cx from 'classnames';
import { Fade, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles';

const useStyles = makeStyles(styles);

export function Button({
  children,
  classes,
  color,
  isDisabled,
  tooltip,
  type,
  variant,
  ...rest
}) {
  const ownClasses = useStyles({color, isDisabled});

  return (
    <Tooltip
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 300 }}
      title={tooltip}
    >
      <span className={classes.container}>
        <button
        className={cx(ownClasses.button, classes.button, {
          [ownClassescontained]: variant === 'contained',
          [ownClasses.outined]: variant === 'outlined',
          [ownClasses.text]: variant === 'text'
        })}
        disabled={isDisabled}
        type={type}
        {...rest}
        >
          {children}
        </button>
      </span>
    </Tooltip>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({
    container: PropTypes.string,
    button: PropTypes.string,
  }),
  color: PropTypes.oneOf(['default', 'error', 'primary', 'secondary']),
  isDisabled: PropTypes.bool,
  tooltip: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
};

Button.defaultProps = {
  classes: {
    container: '',
    button: '',
  },
  color: 'default',
  isDisabled: false,
  tooltip: '',
  type: 'button',
  variant: 'contained',
};