const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rafay Ahmad - Portfolio</title>
        <style>
          :root {
            --bg-1: #0f172a;
            --bg-2: #1e293b;
            --card: rgba(255, 255, 255, 0.08);
            --text: #e2e8f0;
            --accent: #22d3ee;
            --accent-green: #10b981;
            --accent-purple: #8b5cf6;
          }

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
            color: var(--text);
            background: radial-gradient(circle at top right, #0ea5e9 0%, transparent 35%),
              linear-gradient(135deg, var(--bg-1), var(--bg-2));
          }

          .container {
            width: min(92vw, 900px);
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          .card {
            padding: 2rem;
            border-radius: 18px;
            background: var(--card);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.18);
            box-shadow: 0 12px 35px rgba(2, 6, 23, 0.45);
          }

          .header {
            text-align: center;
          }

          h1 {
            margin: 0 0 0.5rem;
            font-size: clamp(2rem, 5vw, 3rem);
            line-height: 1.2;
            color: var(--accent);
          }
          
          h2 {
            font-size: 1.6rem;
            margin-top: 0;
            margin-bottom: 1.5rem;
            color: var(--text);
            border-bottom: 2px solid var(--accent);
            padding-bottom: 0.5rem;
            display: inline-block;
          }

          p {
            margin: 0 0 1rem;
            font-size: 1.1rem;
            color: #cbd5e1;
            line-height: 1.6;
          }

          .subtitle {
            font-size: 1.3rem;
            color: #94a3b8;
            margin-bottom: 1.5rem;
          }

          .accent { color: var(--accent); font-weight: 700; }
          .accent-green { color: var(--accent-green); font-weight: 700; }
          .accent-purple { color: var(--accent-purple); font-weight: 700; }

          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
          }
          
          ul {
            margin: 0;
            padding-left: 1.5rem;
            color: #cbd5e1;
            line-height: 1.6;
          }
          
          li {
            margin-bottom: 0.8rem;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header class="card header">
            <h1>Rafay Ahmad</h1>
            <p class="subtitle">Computer Science Student | Lahore | Aspiring DevOps & Cloud Engineer</p>
            <p>Currently in my last semester, seeking opportunities to build scalable systems, robust CI/CD pipelines, and cloud-native infrastructure.</p>
          </header>

          <main class="grid">
            <section class="card">
              <h2><span class="accent-green">☁️</span> Cloud & DevOps Projects</h2>
              <ul>
                <li><strong>AWS Static Website:</strong> Hosted a highly available static website using AWS cloud infrastructure.</li>
                <li><strong>Portfolio:</strong> Designed this hands-on Kubernetes pipeline and deployment project integrating security best practices.</li>
                <li><strong>Portfolio Hosting:</strong> Created and deployed this beautiful portfolio website inside a K8s cluster via Docker!</li>
              </ul>
            </section>

            <section class="card">
              <h2><span class="accent-purple">🤖</span> Machine Learning & AI</h2>
              <ul>
                <li><strong>Language Learning App:</strong> Fine-tuned XLM-RoBERTa on a 2500+ dataset for Urdu/Punjabi language integration.</li>
                <li><strong>Citrus Disease Detection:</strong> Trained a model using Gradient Boosting on a 2000+ dataset to achieve high-accuracy disease detection.</li>
                <li><strong>Smart Study Companion:</strong> Developed an AI app directly integrating the Gemini API for intelligent, contextual tutoring.</li>
              </ul>
            </section>
          </main>
        </div>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
