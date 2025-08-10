<script>
    import { onMount } from 'svelte';
    let confirmDelete = false;
    let loading = false;

    onMount(() => {
        document.documentElement.style.scrollBehavior = "smooth";
    });

    async function handleDeleteRequest(event) {
        event.preventDefault();
        const username = event.target.username.value.trim();
        const password = event.target.password.value.trim();

        if (!username || !password) {
            alert("Please fill in both username and password.");
            return;
        }

        loading = true;

        try {
            const res = await fetch("https://bareeyapiendpoint.azurewebsites.net/removeaccount/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();
            if (data.success) {
                alert("Your account has been scheduled for deletion.");
                event.target.reset();
                confirmDelete = false;
            } else {
                alert(data.message || "Invalid username or password.");
            }
        } catch {
            alert("An error occurred. Please try again later.");
        } finally {
            loading = false;
        }
    }
</script>

<style>
    .bareey-delete-container {
        max-width: 800px;
        margin: 2rem auto;
        padding: 2rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: #fff;
        border-radius: 1rem;
        text-align: center;
        line-height: 1.6;
    }

    .bareey-delete-title {
        font-size: 2rem;
        font-weight: bold;
        color: #222;
        margin-bottom: 1rem;
    }

    .bareey-delete-message {
        font-size: 1.1rem;
        color: #333;
        margin-bottom: 1.5rem;
    }

    .bareey-delete-date {
        display: inline-block;
        background: #fff3cd;
        color: #856404;
        padding: 0.8rem 1.5rem;
        border-radius: 0.5rem;
        font-weight: bold;
        border: 1px solid #ffeeba;
        margin-top: 1rem;
    }

    .bareey-delete-form {
        margin-top: 2rem;
        text-align: left;
    }

    .bareey-delete-form label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.3rem;
    }

    .bareey-delete-form input[type="text"],
    .bareey-delete-form input[type="password"] {
        width: 100%;
        padding: 0.6rem;
        margin-bottom: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.4rem;
        font-size: 1rem;
    }

    .bareey-delete-form button {
        background: #dc3545;
        color: #fff;
        padding: 0.7rem 1.5rem;
        font-size: 1rem;
        border: none;
        border-radius: 0.4rem;
        cursor: pointer;
    }

    .bareey-delete-form button:hover {
        background: #c82333;
    }

    .bareey-confirm {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .loader {
        border: 4px solid #f3f3f3;
        border-top: 4px solid #007bff;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        animation: spin 1s linear infinite;
        display: inline-block;
        margin-left: 10px;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    @media (max-width: 600px) {
        .bareey-delete-container {
            padding: 1rem;
        }
        .bareey-delete-title {
            font-size: 1.5rem;
        }
        .bareey-delete-message {
            font-size: 1rem;
        }
    }
</style>

<div class="bareey-delete-container">
    <div class="bareey-delete-title">Account Deletion</div>
    <div class="bareey-delete-message">
        We are currently in a limited testing phase with family and close friends to ensure all features in Bareey work smoothly and securely before launching to the public.  
        We are ensuring that user data removal works flawlessly before public release.  
        The in-app account deletion feature will be available starting on:
    </div>
    <div class="bareey-delete-date">25th August 2025</div>
    <div class="bareey-delete-message">
        By this date, Bareey will be opened to hundreds of users, and the account deletion option will be fully integrated within the app’s settings.  
        Until then, you can request account deletion below via this temporary form.
    </div>

    <form class="bareey-delete-form" on:submit={handleDeleteRequest}>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required>

        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required>

        <div class="bareey-confirm">
            <input type="checkbox" id="confirmDelete" bind:checked={confirmDelete}>
            <label for="confirmDelete">I understand my account & datas will be deleted</label>
        </div>

        {#if confirmDelete}
            <button type="submit" disabled={loading}>
                {#if loading}
                    Deleting... <span class="loader"></span>
                {:else}
                    Request Deletion
                {/if}
            </button>
        {/if}
    </form>
</div>
