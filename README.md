<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cashout Management App - README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
            color: #333;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
        }
        header {
            background: #333;
            color: #fff;
            padding: 1rem 0;
            text-align: center;
        }
        h1 {
            margin: 0;
        }
        section {
            padding: 1rem 0;
        }
        h2 {
            color: #0070f3;
        }
        pre {
            background: #f4f4f4;
            padding: 1rem;
            border-radius: 5px;
            overflow-x: auto;
        }
        a {
            color: #0070f3;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <header>
        <h1>Cashout Management App</h1>
    </header>
    <div class="container">
        <section>
            <h2>Overview</h2>
            <p>The Cashout Management App is a comprehensive solution for managing earnings, cashout options, and cashback history. Built with React and Chakra UI, this application provides a user-friendly interface to track earnings, perform cashouts, and view detailed cashback history. its For an Intern Program in <h2>Belancee</h2>h2></p>
        </section>
        <section>
            <h2>Features</h2>
            <ul>
                <li><strong>Earnings Overview</strong>: Displays total cashback earned and current balance.</li>
                <li><strong>Direct Cashout</strong>: Allows users to cash out their earnings directly to their bank account.</li>
                <li><strong>Promo Code Generation</strong>: Converts earnings into promo codes for users.</li>
                <li><strong>Cashback History</strong>: Provides a detailed history of cashback transactions.</li>
                <li><strong>Responsive Design</strong>: Ensures a professional and accessible experience on both desktop and mobile devices.</li>
            </ul>
        </section>
        <section>
            <h2>Installation</h2>
            <ol>
                <li><strong>Clone the Repository</strong>
                    <pre><code>git clone https://github.com/samuelsuu/-Balancee_Intern.git</code></pre>
                </li>
                <li><strong>Navigate to the Project Directory</strong>
                    <pre><code>cd -Balancee_Intern</code></pre>
                </li>
                <li><strong>Install Dependencies</strong>
                    <pre><code>npm install</code></pre>
                </li>
                <li><strong>Start the Development Server</strong>
                    <pre><code>npm run dev</code></pre>
                    The app will be available at <a href="http://localhost:5173">http://localhost:5173</a>.
                </li>
            </ol>
        </section>
        <section>
            <h2>Usage</h2>
            <p>Once the development server is running, open your browser and navigate to <a href="http://localhost:5173">http://localhost:5173</a>. You will see the application interface where you can:</p>
            <ul>
                <li>View earnings overview.</li>
                <li>Perform direct cashouts.</li>
                <li>Generate and view promo codes.</li>
                <li>Access cashback history.</li>
            </ul>
        </section>
        <section>
            <h2>Project Structure</h2>
            <ul>
                <li><strong>src/</strong>: Contains the application's source code.
                    <ul>
                        <li><strong>components/</strong>: Reusable components such as <code>EarningsOverview</code>, <code>CashoutOptions</code>, and <code>CashbackHistory</code>.</li>
                        <li><strong>mockData.js</strong>: Simulated data for development and testing.</li>
                        <li><strong>App.jsx</strong>: Main application component integrating other components.</li>
                        <li><strong>index.js</strong>: Entry point for the React application.</li>
                    </ul>
                </li>
            </ul>
        </section>
        <section>
            <h2>Contributing</h2>
            <p>Contributions are welcome! To contribute:</p>
            <ol>
                <li>Fork the repository.</li>
                <li>Create a new branch (<code>git checkout -b feature-branch</code>).</li>
                <li>Commit your changes (<code>git commit -am 'Add new feature'</code>).</li>
                <li>Push to the branch (<code>git push origin feature-branch</code>).</li>
                <li>Open a Pull Request.</li>
            </ol>
        </section>
        <section>
            <h2>License</h2>
            <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
        </section>
        <section>
            <h2>Contact</h2>
            <p>For any questions or feedback, please contact:</p>
            <ul>
                <li><strong>Your Name</strong>: uwaemesamuel5@gmal.com</li>
                <li><strong>GitHub</strong>: <a href="https://github.com/samuelsuu">samuelsuu</a></li>
            </ul>
        </section>
    </div>
</body>
</html>
