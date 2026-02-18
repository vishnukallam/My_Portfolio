import React, { useState, useEffect } from 'react';

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      const repoNames = ['C_Preprocessing', 'TensorFlow', 'Employee_Database'];
      try {
        const repoData = await Promise.all(
          repoNames.map(async (name) => {
            const repoRes = await fetch(`https://api.github.com/repos/vishnukallam/${name}`);
            if (!repoRes.ok) return null;
            const repo = await repoRes.json();

            // Fetch README for description
            try {
              const readmeRes = await fetch(`https://api.github.com/repos/vishnukallam/${name}/readme`);
              if (readmeRes.ok) {
                const readmeData = await readmeRes.json();
                const content = atob(readmeData.content);
                // Simple summary extraction: strip common markdown and get first meaningful line
                const summary = content
                  .split('\n')
                  .map(line => line.replace(/[#*`\[\]]/g, '').trim()) // Strip markdown chars
                  .filter(line => line && !line.startsWith('!')) // Filter out empty or image lines
                  [0] || repo.description;
                repo.readmeSummary = summary;
              }
            } catch (e) {
              console.error("Failed to fetch README for", name);
            }

            return repo;
          })
        );
        setRepos(repoData.filter(r => r !== null));
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
          <div className="project-card profile-card">
            <h3>GitHub Profile</h3>
            <p>Visit my main GitHub profile to see all my work and contributions.</p>
            <a
              href="https://github.com/vishnukallam"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              style={{ marginTop: '1rem', display: 'inline-flex' }}
            >
              <i className="fab fa-github"></i>
              @vishnukallam
            </a>
          </div>

          {!loading && !error && repos.map(repo => (
            <div className="project-card" key={repo.id}>
              <h3>{repo.name}</h3>
              <p>
                {repo.readmeSummary || repo.description || 'No description available for this repository.'}
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
