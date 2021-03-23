import styled from 'styled-components';

import { Box } from '../Box';

export const Input = styled(Box.withComponent('input')).attrs((props) => ({
    type: props?.type || 'text',
}))``;

Input.displayName = 'Input';

export const Checkbox = styled(Input).attrs({
    type: 'checkbox',
})``;

export const FileInput = styled(Input).attrs({
    type: 'file',
})``;

export const AbsoluteBox = styled(Box)`
  position: absolute;
`;

export const RelativeBox = styled(Box)`
  position: relative;
`;

export const FlexBox = styled(Box)`
  display: flex;
`;

FlexBox.displayName = 'FlexBox';

export const FlexBoxRow = styled(FlexBox)`
  flex-direction: row;
`;

export const FlexBoxColumn = styled(FlexBox)`
  flex-direction: column;
`;

export const FixedBox = styled(Box)`
  position: fixed;
`;

export const MarkedList = styled(Box.withComponent('ul'))``;

export const ListItem = styled(Box.withComponent('li'))``;

export const Label = styled(Box.withComponent('label'))``;

export const GridBox = styled(Box)`
  display: grid;
`;

export const Image = styled(Box.withComponent('img'))``;

export const Span = styled(Box.withComponent('span'))``;

export const Hr = styled(Box.withComponent('hr'))``;

export const Link = styled(Box.withComponent('a'))``;

export const Button = styled(Box.withComponent('button'))``;

export const Svg = styled(Box.withComponent('svg'))``;

export const Use = styled(Box.withComponent('use'))``;
