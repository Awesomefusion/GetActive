import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, ItemGroup, Label, Segment } from 'semantic-ui-react';
import { Activity } from '../../../models/activity';
import { useStore } from '../../../stores/store';

interface Props {
    activity: Activity
}

export default function ActivityListItem({activity}: Props) {

    const {activityStore} = useStore();
    const {deleteActivity, loading} = activityStore;
    const [target, setTarget] = useState();

    function handleActivityDelete(e: any, id: string){
        setTarget(e.target.name);
        deleteActivity(id);
}
    return (
        <Segment.Group>
            <Segment>
                <ItemGroup>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png'/>
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`}>
                                {activity.title}
                            </Item.Header>
                        <Item.Description>Hosted by Bob</Item.Description>
                        </Item.Content>
                    </Item>
                </ItemGroup>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {activity.date}
                    <Icon name='marker'/> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                Attendees go here
            </Segment>
            <Segment>
                <span>{activity.description}</span>
                <Button
                    as={Link}
                    to={`/activities/${activity.id}`}
                    color='teal'
                    floated='right'
                    content='View'
                />
            </Segment>
        </Segment.Group>
    )
}