import React, { useState, useEffect } from 'react';

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/vishnukallam/repos?sort=updated&per_page=6');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="content-section active" id="github-repos">
      <div className="section-container">
        <h2 className="section-title">GitHub Repositories</h2>

        {loading && <p style={{ color: 'var(--text-secondary)' }}>Loading repositories...</p>}
        {error && <p style={{ color: '#ff4444' }}>Error: {error}</p>}

        <div className="projects-grid">
          {!loading && !error && repos.map(repo => (
            <div className="project-card" key={repo.id}>
              <h3>{repo.name}</h3>
              <p>
                {repo.description || 'No description available for this repository.'}
              </p>
              <div className="project-tags">
                {repo.language && <span className="project-tag">{repo.language}</span>}
                <span className="project-tag">⭐ {repo.stargazers_count}</span>
                <span className="project-tag">🍴 {repo.forks_count}</span>
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                style={{ marginTop: '1rem', display: 'inline-flex' }}
              >
                <i className="fab fa-github"></i>
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubRepos;
