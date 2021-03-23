import React from 'react';

import { Box, FlexBox, BasicImage } from 'ui';

import ActiveUserIcon from './img/26-512.png';

export const Rows = React.memo(({ items = [], onOpen, ml = '0px'} = {}) => {
    const leftMargin = parseInt(ml, 10);

    return items.map((x) => (
        <Box key={x.id}>
            <FlexBox 
                ml={ml}
                cursor="pointer"
                flexDirection="column"
                mt="5px"
            >
                <FlexBox
                    onClick={(e) => {
                        e.stopPropagation();
                        
                        onOpen({ id: x.id});
                    }}
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Box width="24px" height="24px" mr="10px">
                        {x.isActive && <BasicImage src={ActiveUserIcon} height="100%" />}
                    </Box>
                    <Box flex={1}>{x.name}</Box>
                    <Box ml={!!leftMargin && -(leftMargin) + 'px'} flex={1}>{x.balance}</Box>
                    <Box flex={1}>{x.email}</Box>
                </FlexBox>
            </FlexBox>
            {!!x.items?.length && <Rows
                items={x.items}
                onOpen={onOpen}
                ml={(leftMargin + 10) + 'px'}
            />}
        </Box>
    ));
});