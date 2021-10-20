import React from 'react';

interface Props {
    inverted: boolean;
    content: string;
}

export default function LoadingComponent({inverted = true, content = 'Loading...'}: Props) {
    return (
        <Dimmer active={true} inverted={inverted} />

        </Dimmer>
    )
}