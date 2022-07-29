import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';

export default function NotFound(){
    return (
        <Segment placeholder>
            <Header icon textAlign='center'>
                <Icon name='search'/>
                Sorry! We have looked everywhere and couldn't find what you wanted.
            </Header>
            <Segment.Inline>
                    <Button as={Link} to='/activities' primary>
                        Return to Activities Page
                    </Button>
            </Segment.Inline>
        </Segment>
    )
}