import styled from 'styled-components';
import propTypes from '@styled-system/prop-types';
import {
    space,
    color,
    layout,
    typography,
    flexbox,
    border,
    background,
    position,
    grid,
    boxShadow,
} from 'styled-system';

import {
    textDecoration,
    whiteSpace,
    textOverflow,
    textTransform,
    transform,
    cursor,
    outline,
    animation,
    filter,
    wordBreak,
    visibility,
    transition,
} from '../../styleProps';

export const Box = styled('div')(
    typography,
    transform,
    textTransform,
    cursor,
    outline,
    animation,
    filter,
    wordBreak,
    visibility,
    textDecoration,
    whiteSpace,
    textOverflow,
    space,
    color,
    border,
    layout,
    flexbox,
    boxShadow,
    background,
    position,
    grid,
    transition,
);

Box.propTypes = {
    ...propTypes.space,
    ...propTypes.color,
    ...propTypes.layout,
    ...propTypes.typography,
    ...propTypes.flexbox,
    ...propTypes.border,
    ...propTypes.background,
    ...propTypes.backgroundImage,
    ...propTypes.position,
    ...propTypes.grid,
    ...propTypes.transition,
    ...propTypes.textTransform,
};

Box.defaultProps = {
};

Box.displayName = 'Box';
