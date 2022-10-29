import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@mantine/core';
import { useStyles } from './styles';

const GlassCard = forwardRef(({
  children,
  hovered,
  animation,
  ...restProps 
}, ref) => {
  const { classes, cx } = useStyles();

  return (
    <Paper
      className={cx(classes.glass, {
        [classes.hovered]: hovered && !animation,
        [classes.jiggle]: animation === 'jiggle',
        [classes.jiggle2]: animation === 'jiggle2',
        [classes.animated]: animation !== null,
      })}
      ref={ref}
      {...restProps}
    >
      {children}
    </Paper>
  );
});

GlassCard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  hovered: PropTypes.bool,
  animtaion: PropTypes.oneOf(['jiggle', 'jiggle2']),
};

GlassCard.defaultProps = {
  hovered: false,
  animation: null,
};

export default GlassCard;
