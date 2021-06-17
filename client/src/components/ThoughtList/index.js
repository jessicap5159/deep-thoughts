import { Link } from 'react-router-dom';

const ThoughtList = ({ thoughts, title }) => { // thoughts component will receive two props: title, and thought array
    // destructured so we don't have to do props.title and props.thoughts the whole time
    if (!thoughts.length) { // check if any data in thoughts array and return h3 if so
        return <h3>No Thoughts Yet</h3>;
    }
    return (
        <div>
            <h3>{title}</h3>
            {thoughts &&
            thoughts.map(thought => ( // returns list of thoughts using .map() method; key prop helps React track 
            // which data needs to be re-rendered if something changes
                <div key={thought._id} className="card mb-3"> 
                    <p className="card-header">
                        <Link
                        to={`/profile/${thought.username}`}
                        style={{ fontWeight: 700 }}
                        className="text-light"
                        >
                        {thought.username}
                        </Link>{' '}
                        thought on {thought.createdAt}
                    </p>
                    <div className="card-body">
                        <Link to={`/thought/${thought._id}`}>
                            <p>{thought.thoughtText}</p>
                            <p className="mb-0">
                        
                            Reactions: {thought.reactionCount} || Click to{' '} 
                            {thought.reactionCount ? 'see' : 'start'} the discussion!
                        </p> 
                        </Link>
                    </div> 

        </div>
   ))}
   </div>
    );
};

export default ThoughtList;

// line 20 and following checks value of thought.reactionCount and conditionally
// displays message to contextualize what the call to action should be
// if no reactions, user adds first reaction
// if there are reactions, user views or adds own to existing list