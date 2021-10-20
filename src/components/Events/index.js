import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import eventImage from '../../images/event-image.jpg';
import './events.css';

const events = [
    {
        image: eventImage,
        title: "Event Title",
        date: 'July 8, 2021',
        description: [
            "Colors bounced around in her head. ",
            "They mixed and threaded themselves together. ",
            "Even colors that had no business being together. ",
            "They were all one, yet distinctly separate at the same time. "
        ]
    },
    {
        image: eventImage,
        title: "Event Title",
        date: 'June 3, 2021',
        description: [
            "Colors bounced around in her head. ",
            "They mixed and threaded themselves together. ",
            "Even colors that had no business being together. ",
            "They were all one, yet distinctly separate at the same time. "
        ]
    },
    {
        image: eventImage,
        title: "Event Title",
        date: 'May 24, 2021',
        description: [
            "Colors bounced around in her head. ",
            "They mixed and threaded themselves together. ",
            "Even colors that had no business being together. ",
            "They were all one, yet distinctly separate at the same time. "
        ]
    },
    {
        image: eventImage,
        title: "Event Title",
        date: 'May 5, 2021',
        description: [
            "Colors bounced around in her head. ",
            "They mixed and threaded themselves together. ",
            "Even colors that had no business being together. ",
            "They were all one, yet distinctly separate at the same time. "
        ]
    },
    {
        image: eventImage,
        title: "Event Title",
        date: 'April 4, 2021',
        description: [
            "Colors bounced around in her head. ",
            "They mixed and threaded themselves together. ",
            "Even colors that had no business being together. ",
            "They were all one, yet distinctly separate at the same time. "
        ]
    },
    {
        image: eventImage,
        title: "Event Title",
        date: 'March 3, 2021',
        description: [
            "Colors bounced around in her head. ",
            "They mixed and threaded themselves together. ",
            "Even colors that had no business being together. ",
            "They were all one, yet distinctly separate at the same time. "
        ]
    },
]

const Events = () => {

    return ( 
        <div id="Events">
            <div className="header container-fluid">
                <div className="header-content row d-flex align-items-center text-center">
                    <p className="display-1" style={{padding: '20px'}}>Upcoming and Past <br />Events</p>
                </div>
            </div>
            <div className="events-body container">
                <div className="row">
                {events.map((event, index) => {
                    return (
                        <div className="col-md-4 col-sm-12 event-card" key={index}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        className="media"
                                        image={event.image}
                                        title={event.title}
                                    />
                                    <CardContent className="text-start">
                                        <h4>{event.title}</h4>
                                        <hr />
                                        <p>{event.date}</p>
                                        <p>{event.description}</p>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    );
                })}
                </div>
            </div>
        </div>
        
    )
}

export default Events;