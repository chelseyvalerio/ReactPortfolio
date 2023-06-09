
function RepoCard({ repository }) {
    return (
      <div>
        <h3>{repository.name}</h3>
        <p>{repository.description}</p>
        <a href={repository.html_url}>View on GitHub</a>
      </div>
    );
  }
  
  export default RepoCard;