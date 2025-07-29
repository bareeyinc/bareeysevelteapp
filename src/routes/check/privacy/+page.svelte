<script>
    // Set loading to false once the component is mounted
	import { onMount } from 'svelte';

    // Optional: smooth scroll behavior
    onMount(() => {
        document.documentElement.style.scrollBehavior = "smooth";
    });
</script>

<style>
    .bareey-policy-container {
        max-width: 800px;
        margin: 2rem auto;
        padding: 2rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: #fff;
        border-radius: 1rem;
    }

    .bareey-policy-nav {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        margin-bottom: 2rem;
        flex-wrap: wrap;
    }

    .bareey-policy-nav a {
        color: #007bff;
        text-decoration: none;
        font-weight: bold;
    }

    .bareey-policy-nav a:hover {
        text-decoration: underline;
    }

    .bareey-policy-section {
        margin-bottom: 3rem;
    }

    .bareey-policy-section h2 {
        margin-bottom: 0.5rem;
        color: #222;
        font-size: 1.5rem;
        border-bottom: 2px solid #007bff;
        padding-bottom: 0.3rem;
    }

    .bareey-policy-section p {
        color: #333;
        line-height: 1.6;
    }

    @media (max-width: 600px) {
        .bareey-policy-container {
            padding: 1rem;
        }
    }
</style>

<div class="bareey-policy-container">
    <div class="bareey-policy-nav">
        <a href="#terms">Terms</a>
        <a href="#privacy-policy">Privacy Policy</a>
        <a href="#about-bareey">About Bareey</a>
    </div>

    <section id="terms" class="bareey-policy-section">
        <h2>Terms of Use</h2>
        <p>
            Bareey’s terms apply to all registered users and visitors on <strong>bareey.com</strong>.
            Users are fully responsible for their activities, which include creating posts and interacting with others.
            All users must respect regional laws and limitations as they are accountable for their actions.
            Bareey monitors account activities to ensure safety and to protect user data from threats.
            We may collect certain confidential data like IP addresses and geolocation to improve the platform experience and for advertiser targeting purposes.
        </p>
    </section>

    <section id="privacy-policy" class="bareey-policy-section">
        <h2>Privacy Policy</h2>
        <p>
            Bareey is committed to protecting user confidentiality and safety.
            We collect personal information including email, username, password, device information, and IP address.
            We prioritize user data security and proactively report threats related to terrorism, cybercrime, or any illegal activity.
            Your data is handled with care, and Bareey may update this policy as necessary over time.
        </p>
    </section>

    <section id="about-bareey" class="bareey-policy-section">
        <h2>About Bareey</h2>
        <p>
            Bareey is an all-in-one Entertainment, Business, and Messaging platform.
            It features a fast messaging system that enables users to interact, post, manage, buy, sell, and explore communities.
            Bareey bridges the gap between fun, business, and communication, making it a powerful and modern tool for everyone.
        </p>
    </section>
</div>
