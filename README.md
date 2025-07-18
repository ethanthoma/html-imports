# html-imports

A lightweight JavaScript library that implements HTML Imports, allowing you to include HTML content from external files directly into your web pages.

An implementation of the depreciated [HTML Imports](https://www.w3.org/TR/html-imports/) feature.

## Installation

### CDN

```html
<script src="https://cdn.jsdelivr.net/gh/ethanthoma/html-imports@main/html-imports.min.js"></script>
```

### Download

Download html-imports.js or html-imports.min.js and include it in your project:

```html
<script src="html-imports.min.js"></script>
```

## Usage

Create an HTML file to import (e.g., `header.html`):

```html
<header>
    <h1>My Website</h1>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </nav>
</header>
```

Import it in your main HTML file:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
    <script src="html-imports.min.js"></script>
</head>
<body>
    <link rel="import" href="header.html"/>
    <main>
        <p>Page content here...</p>
    </main>
</body>
</html>
```

The content of `header.html` will be automatically loaded and displayed inside the `<link>` tag:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
    <script src="html-imports.min.js"></script>
</head>
<body>
    <link rel="import" href="header.html">
        <header>
            <h1>My Website</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
            </nav>
        </header>
    </link>
    <main>
        <p>Page content here...</p>
    </main>
</body>
</html>
```
