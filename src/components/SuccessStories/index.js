import { useState, useEffect } from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../../images/myAvatar.png';
import classNames from 'classnames';
import './spotlight.css';

const members = [
    {
        name: 'Brandon Moreno',
        age: '22',
        date: 'Jun 2021',
        profession: 'student',
        description: 'hello world',
        image: avatar
    },
    {
        name: 'Brandon Moreno',
        age: '22',
        date: 'May 2021',
        profession: 'student',
        description: 'hello world',
        image: avatar
    },
    {
        name: 'Brandon Moreno',
        age: '22',
        date: 'Apr 2021',
        profession: 'student',
        description: 'hello world',
        image: avatar
    },

    {
        name: 'Brandon Moreno',
        age: '22',
        date: 'Mar 2021',
        profession: 'student',
        description: 'hello world',
        image: avatar
    },
    {
        name: 'Brandon Moreno',
        age: '22',
        date: 'Feb 2021',
        profession: 'student',
        description: 'hello world',
        image: avatar
    },
]

const useStyles = makeStyles({
    root: {
        flex: 'none',
    },
    content: {
        textAlign: 'center',
    }
})

const Success = () => {

    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', getWindowSize);

        return () => {
            window.removeEventListener('resize', getWindowSize);
        }
    }, []);

    const getWindowSize = () => {
        setScreenSize(window.innerWidth);
    }

    const classes = useStyles();

    return ( 
        <div id="Success">
            <div className="header container-fluid">
                <div className="header-content row d-flex align-items-end text-start">
                    <p className="display-1" style={{padding: '20px'}}>Community Spotlights</p>
                </div>
            </div>
            <div className={classNames("content", {"container": screenSize > 900})}>
                <div className="spotlight-description">
                    <p className="fs-5">
                        Each month, we select an outstanding community member to elaborate on their success and accomplishments.
                        <br />
                        To be on this page, do something cool, and live in Oasis, CA
                    </p>
                </div>
                <Timeline>
                {members.map(member => {
                    return (
                        <TimelineItem>
                            <TimelineOppositeContent classes={{ root: classes.root }}>
                                {member.date}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3}>
                                    <div className={classNames("d-flex flex-wrap", {'justify-content-center': screenSize < 622})}>
                                        <img 
                                            src={member.image} 
                                            width="auto" 
                                            height="auto" 
                                            alt={member.name} 
                                            style={{
                                                padding: '10px',
                                                borderRadius: '50%',
                                            }}
                                        />
                                        <div className={classNames("success-paper text-start", {'text-center': screenSize < 622})}>
                                            <h3>{member.name}</h3>
                                            <p className="fs-5">{member.profession}, {member.age}</p>
                                            <p className="fs-6">{member.description}</p>
                                        </div>
                                    </div>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    );
                })}
                </Timeline>
            </div>
        </div>
    )
}

export default Success;