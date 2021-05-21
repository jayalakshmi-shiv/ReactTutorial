import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles({
    root: {
        width: 275,
        margin: '10px'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const TraineeList = (props) => {
    const classes = useStyles();

    let trainees = props.trainees;
    return (
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", }}>
                {trainees.map((trainee) =>
                (<Card className={classes.root} variant="outlined">
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" >
                                {trainee.name.charAt(0)}
                            </Avatar>
                        }
                        title={trainee.name}
                        subheader={`ID: ${trainee.id}`}
                    />

                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Session Attended
                        </Typography>
                        <br />
                        <Typography className={classes.pos} color="textSecondary">
                            Day1 (React Basics): <b>Yes</b>
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Day2 (Creatingok your first react component): <b>Yes</b>
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Day3 (React Life Cycle): <b>No</b>
                        </Typography>
                    </CardContent>
                </Card>)
                )}

            </div>
    )
}
const TrainerDetail = () => {
    const [name, setName] = React.useState("Shruthi")

    return (
        <div>
            <TextField id="outlined-basic" label="Trainer" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
            <h1>Today's Trainer is: {name}</h1>
        </div>
    )
}

const TrainingInfo = (props) => {

    return (
        <div style={{ textAlign: "left" }}>
            <TrainerDetail />
            <TraineeList trainees={props.trainees} />

        </div>
    )
}

TrainingInfo.prototype = {
    trainees: PropTypes.object.isRequired
}

export default TrainingInfo;