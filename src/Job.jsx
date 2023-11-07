import './Job.css';

function Job(props) {
    return (
    <div id="job-info">
        <h2>{props.salary}</h2>
        <h2>{props.position}</h2>
        <h2>{props.company}</h2>
    </div>
    );
}

export default Job