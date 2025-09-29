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
            Bareey is committed to protecting user confidentiality and safety. This policy details how we access, collect, use, store, and share your personal data, especially data obtained through Google services.
        </p>

        <h3>1. Data Collection and Usage Practices</h3>
        <p>We collect and process the following categories of data for the purposes described:</p>

        <div style="margin-left: 20px;">
            <p><strong>a) Account & Profile Data:</strong></p>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li><b>Data Collected:</b> Email, Username, Password (encrypted), and self-submitted profile information (e.g., bio, name).</li>
                <li><b>Usage:</b> To create, maintain, and secure your Bareey account, enable platform interactions, and send essential service communications.</li>
            </ul>

            <p><strong>b) Usage & Device Data:</strong></p>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li><b>Data Collected:</b> IP address, device type, browser information, and activity logs.</li>
                <li><b>Usage:</b> To monitor platform stability, prevent fraudulent activity, protect against cyber threats, and optimize the overall user experience.</li>
            </ul>
        </div>
        
        <h3>2. Handling of Google User Data (Required for OAuth Verification)</h3>
        <p>When you choose to sign up or connect to Bareey using your Google Account, we access specific, limited information from Google solely to establish and manage your Bareey account.</p>
        
        <div style="margin-left: 20px;">
            <p><strong>a) Data Accessed:</strong></p>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>We access only the <b>Google basic profile information</b> (Name, Email Address, and Profile Picture) via the Google Sign-in process.</li>
                <li>We <b>do not</b> access, request, or use any other sensitive Google services data, such as Google Drive, Contacts, Calendar, or any data outside of the basic profile scope.</li>
            </ul>

            <p><strong>b) Data Usage:</strong></p>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>The Google Name and Email are used <b>only</b> for account authentication, login validation, and internal verification purposes.</li>
                <li>This data is <b>not</b> used to serve personalized advertisements or for any non-essential services.</li>
            </ul>

            <p><strong>c) Data Sharing:</strong></p>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>We <b>do not share, sell, or rent Google user data</b> (including your Google email and name) with any third-party advertisers, partners, or outside organizations.</li>
                <li>Your Google data remains confidential and is used solely by Bareey to provide the core services you signed up for.</li>
            </ul>
        </div>

        <h3>3. Data Storage, Protection, Retention, and Deletion</h3>
        <p>We prioritize user data security and apply strict policies for data management:</p>

        <div style="margin-left: 20px;">
            <p><strong>a) Storage & Protection:</strong></p>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>All data is stored on secure, access-controlled, and encrypted servers.</li>
                <li>We use industry-standard security measures, including <b>encryption (e.g., SSL/TLS)</b>, to protect data both in transit and at rest.</li>
                <li>We proactively monitor activities and report threats related to cybercrime or any illegal activity to legal authorities.</li>
            </ul>

            <p><strong>b) Data Retention & Deletion:</strong></p>
            <ul style="list-style-type: disc; padding-left: 20px;">
                <li>We retain your account data for as long as your Bareey account remains active.</li>
                <li>You can delete your account and all associated data directly through your Account Settings.</li>
                <li>Alternatively, you may submit a formal request for data deletion by contacting our support team at <b>bareeyinc@gmail.com</b>. Upon verification, we will delete all personal data (including any associated Google data) within <b>30 days</b>, unless retention is legally required.</li>
            </ul>
        </div>
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
