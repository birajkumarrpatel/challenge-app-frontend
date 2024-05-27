import Challenge from "./Challenge";

function ChallengeList({ challenges }) {
    return (
        <div class="list-group">
            {challenges.map(challenge => (
                <Challenge key={challenge.id} 
                challenge={challenge}/>
            ))}
        </div>
    );
}

export default ChallengeList;