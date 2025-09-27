<script>
    // Assuming you might need the current year for a copyright notice
    const currentYear = new Date().getFullYear();

    // Define the application name from your header
    const appName = "Bareey";
</script>

<footer class="app-footer">
    <div class="footer-content">
        <div class="footer-brand">
            <span class="norican-text">{appName}</span>
            <p class="tagline">Connecting communities, one chat at a time.</p>
        </div>

        <div class="footer-links">
            <a href="/check/privacy#privacy-policy">Privacy Policy</a>
            <a href="/check/privacy#terms">Terms & Conditions</a>
            <a href="/check/privacy#about-bareey">About {appName}</a>
        </div>

        <div class="footer-copyright">
            &copy; {currentYear} {appName} Inc. All rights reserved.
        </div>
    </div>
</footer>

<style>
    /*
     * The footer is designed to be pushed to the bottom of the page content,
     * not necessarily fixed at the bottom of the screen (unlike your bottom-nav).
     */
    .app-footer {
        background-color: #f9f9f9;
        color: #333;
        padding: 30px 20px;
        text-align: center;
    }

    .footer-content {
        max-width: 600px; /* Optional: Keep the content centered and readable on large screens */
        margin: 0 auto;
    }

    /* Reuse the stylish font from your header */
    .norican-text {
        font-family: 'Norican', cursive;
        font-size: 30px;
        letter-spacing: 1.5px;
        color: #000; /* Use a strong color for the brand name */
        display: block; /* Make it take up its own line */
        margin-bottom: 5px;
    }

    .tagline {
        font-size: 14px;
        color: #666;
        margin: 0 0 20px 0;
    }

    .footer-links {
        display: flex;
        flex-direction: column; /* Stack links vertically for mobile */
        gap: 10px;
        margin-bottom: 20px;
        padding: 0 10%; /* Add horizontal padding to center the links */
    }

    .footer-links a {
        color: #007bff; /* A standard blue for links */
        text-decoration: none;
        font-size: 15px;
        padding: 5px 0;
        border-bottom: 1px dashed #ccc; /* Subtle separation for stacked links */
        transition: color 0.2s;
    }

    .footer-links a:last-child {
        border-bottom: none; /* Remove the dashed line on the last link */
    }

    .footer-links a:hover {
        color: #0056b3;
    }

    .footer-copyright {
        font-size: 13px;
        color: #888;
        padding-top: 10px;
    }

    /* Desktop/Tablet view: Arrange links horizontally */
    @media (min-width: 600px) {
        .footer-links {
            flex-direction: row; /* Change to horizontal on wider screens */
            justify-content: center;
            gap: 25px;
            padding: 0;
        }

        .footer-links a {
            border-bottom: none; /* Remove dashed line when horizontal */
            padding: 0;
        }
    }
</style>