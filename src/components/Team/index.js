import avatar from '../../images/myAvatar.png';
import './team.css';

const members = [
    {
        image: avatar,
        name: 'Dwight Schrute',
        position: 'Assistant Manager',
        description: [
            'There was something in the tree. It was difficult to tell from the ground, but Rachael could see movement. ',
            'She squinted her eyes and peered in the direction of the movement, trying to decipher exactly what she had spied. '
        ]
    },
    {
        image: avatar,
        name: 'Michael Scott',
        position: 'Program Manager',
        description: [
            "It was a concerning development that he couldn't get out of his mind. ",
            "He'd had many friends throughout his early years and had fond memories of playing with them, but he couldn't understand how it had all stopped. ",
            "There was some point as he grew up that he played with each of his friends for the very last time, and he had no idea that it would be the last."
        ]
    },
    {
        image: avatar,
        name: 'Dwight Schrute',
        position: 'Assistant Manager',
        description: [
            'There was something in the tree. It was difficult to tell from the ground, but Rachael could see movement. ',
            'She squinted her eyes and peered in the direction of the movement, trying to decipher exactly what she had spied. '
        ]
    },
    {
        image: avatar,
        name: 'Michael Scott',
        position: 'Program Manager',
        description: [
            "It was a concerning development that he couldn't get out of his mind. ",
            "He'd had many friends throughout his early years and had fond memories of playing with them, but he couldn't understand how it had all stopped. ",
            "There was some point as he grew up that he played with each of his friends for the very last time, and he had no idea that it would be the last."
        ]
    },
    {
        image: avatar,
        name: 'Dwight Schrute',
        position: 'Assistant Manager',
        description: [
            'There was something in the tree. It was difficult to tell from the ground, but Rachael could see movement. ',
            'She squinted her eyes and peered in the direction of the movement, trying to decipher exactly what she had spied. '
        ]
    },
    {
        image: avatar,
        name: 'Michael Scott',
        position: 'Program Manager',
        description: [
            "It was a concerning development that he couldn't get out of his mind. ",
            "He'd had many friends throughout his early years and had fond memories of playing with them, but he couldn't understand how it had all stopped. ",
            "There was some point as he grew up that he played with each of his friends for the very last time, and he had no idea that it would be the last."
        ]
    },
    {
        image: avatar,
        name: 'Dwight Schrute',
        position: 'Assistant Manager',
        description: [
            'There was something in the tree. It was difficult to tell from the ground, but Rachael could see movement. ',
            'She squinted her eyes and peered in the direction of the movement, trying to decipher exactly what she had spied. '
        ]
    },
    {
        image: avatar,
        name: 'Michael Scott',
        position: 'Program Manager',
        description: [
            "It was a concerning development that he couldn't get out of his mind. ",
            "He'd had many friends throughout his early years and had fond memories of playing with them, but he couldn't understand how it had all stopped. ",
            "There was some point as he grew up that he played with each of his friends for the very last time, and he had no idea that it would be the last."
        ]
    },
]

const Team = () => {
    return ( 
        <div id="Team">
            <div className="header container-fluid">
                <div className="header-content row d-flex align-items-end text-start">
                    <p className="display-1" style={{padding: '20px'}}>Oasis Vive Team</p>
                </div>
            </div>
            <div className="team-body container">
                <div className="row body-section">
                {members.map((member, ndx) => {
                    return (
                        <div className="col-md-4 col-sm-12" key={ndx}>
                            <img className="circle" src={member.image} alt="avatar" />
                            <div className="text-center member-desc">
                                <p className="fs-2">{member.name}</p>
                                <p className="fs-4">{member.position}</p>
                                <p className="fs-6">{member.description}</p>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Team;