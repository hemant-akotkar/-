<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Personal Website</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: #f4f4f4;
            color: #333;
        }

        header {
            background-color: #1e90ff;
            color: #fff;
            text-align: center;
            padding: 2em;
        }

        nav {
            display: flex;
            justify-content: center;
            background-color: #333;
            padding: 0.5em;
        }

        nav a {
            color: #fff;
            text-decoration: none;
            padding: 0.5em 1em;
            margin: 0 1em;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        nav a:hover {
            background-color: #555;
        }

        main {
            padding: 2em;
        }

        section {
            margin-bottom: 2em;
        }

        footer {
            background-color: #1e90ff;
            color: #fff;
            text-align: center;
            padding: 1em;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <header>
        <h1>Your Name</h1>
        <p>Web Developer & Designer</p>
    </header>

    <nav>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
    </nav>

    <main>
        <section id="about">
            <h2>About Me</h2>
            <p>Hi, I'm [Your Name], a passionate web developer and designer. I love creating beautiful and functional websites.</p>
        </section>

        <section id="portfolio">
            <h2>Portfolio</h2>
            <p>Check out some of my recent projects below:</p>
            <!-- Add your portfolio items here -->
        </section>

        <section id="contact">
            <h2>Contact</h2>
            <p>Feel free to reach out to me:</p>
            <p>Email: your.email@example.com</p>
            <p>LinkedIn: linkedin.com/in/yourprofile</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Your Personal Website. All rights reserved.</p>
    </footer>
</body>
</html>
