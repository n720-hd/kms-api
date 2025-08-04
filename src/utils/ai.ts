
export const generateConversationTitle = (prompt: string) => {
    if (!prompt || prompt.trim().length === 0) {
        return "New Conversation";
    }

    // Clean the prompt
    let cleanedPrompt = prompt
        .trim()
        .replace(/[^\w\s\-_.?!]/g, '') // Remove special chars except basic punctuation
        .replace(/\s+/g, ' '); // Replace multiple spaces with single space

    // Remove common stop words for better titles
    const stopWords = [
        'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 
        'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be',
        'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did',
        'will', 'would', 'could', 'should', 'may', 'might', 'can',
        'please', 'tell', 'me', 'about', 'what', 'how', 'why', 'when', 'where'
    ];

    const words = cleanedPrompt.toLowerCase().split(' ');
    const meaningfulWords = words.filter(word => 
        word.length > 2 && !stopWords.includes(word)
    );

    // Use meaningful words if we have enough, otherwise use original words
    const titleWords = meaningfulWords.length >= 3 
        ? meaningfulWords.slice(0, 5)  // Take first 5 meaningful words
        : words.slice(0, 7);           // Take first 7 original words

    let title = titleWords.join(' ');

    // Capitalize first letter of each word (title case)
    title = title.replace(/\b\w/g, char => char.toUpperCase());

    // Handle different prompt types
    if (prompt.toLowerCase().includes('how to') || prompt.toLowerCase().includes('how do')) {
        title = 'How to ' + title.replace(/^How\s*(To|Do)\s*/i, '');
    } else if (prompt.toLowerCase().includes('what is') || prompt.toLowerCase().includes('what are')) {
        title = 'About ' + title.replace(/^What\s*(Is|Are)\s*/i, '');
    } else if (prompt.includes('?')) {
        title = title + (title.endsWith('?') ? '' : '?');
    }

    // Ensure reasonable length
    if (title.length > 50) {
        title = title.substring(0, 47) + '...';
    }

    // Fallback if title is too short or empty
    if (title.length < 3) {
        const firstWords = prompt.trim().split(' ').slice(0, 4).join(' ');
        title = firstWords.length > 30 
            ? firstWords.substring(0, 27) + '...'
            : firstWords || 'New Conversation';
    }

    return title;
};
