import React, { useEffect, useState, useRef }  from 'react';

import { Box, BasicImage } from 'ui';

import FilterIcon from './img/filter.png';

export const HeaderFilter = React.memo(({ name = '', items = [], onFilter} = {}) => {
    const [isShow, setShow] = useState(false);

    const popup = useRef(null);

    useEffect(() => {
        const close = (event) => {
            if (isShow && (!popup?.current?.contains(event.target))) {
                setShow(false);
            }
        };

        document.addEventListener('click', close);

        return () => {
            document.removeEventListener('click', close);
        }
    }, [isShow, popup.current]);

    return (
        <>
            <Box
                position="absolute"
                flexDirection="column" 
                bg="yellow"
                width="200px"
                height="100px"
                justifyContent="space-evenly"
                top="100%"
                ref={popup}
                display={isShow ? 'flex' : 'none'}
            >
                {items?.map((x) => <Box
                    key={x.title}
                    onClick={() => {
                        onFilter && onFilter({ name, value: x.value });
                        setShow(false);
                    }}
                    cursor="pointer"
                >
                    {x.title}
                </Box>)}
            </Box>
            <BasicImage 
                src={FilterIcon}
                height="100%"
                cursor="pointer"
                onClick={() => setShow((value) => !value)}
            />
        </>
    );
});