export function formatPostDate(dateString) {
    const postDate = new Date(dateString);
    const now = new Date();

    const diffMs = now - postDate; // difference in milliseconds
    const diffMinutes = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMinutes < 60) {
        return diffMinutes <= 1 ? "Just now" : `${diffMinutes}m`;
    }

    if (diffHours < 24) {
        return `${diffHours}h`;
    }

    if (diffDays < 10) {
        return `${diffDays}d`;
    }

    const options = { month: 'long', day: 'numeric' };

    if (diffDays < 365) {
        return postDate.toLocaleDateString(undefined, options); // e.g., "March 21"
    }

    // More than 1 year
    const fullOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    return postDate.toLocaleDateString(undefined, fullOptions); // e.g., "March 2, 2025"
}