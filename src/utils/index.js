export const parseStyles = (stylesObject) => {
    const styles = stylesObject || {}; // Handle missing object gracefully

    const styleString = Object.entries(styles)
        .map(([key, value]) => `${kebabCase(key)}: ${value};`) // Use kebabCase for CSS
        .join("");

    return styleString.trim(); // Remove trailing semicolon if any
}

// Helper function to convert camelCase to kebab-case
export const kebabCase = (str) => {
    return str.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
}

export const repeatFunction = (interval, callBack = () => { }) => {
    const timerId = setInterval(() => {
        // Your code to be executed repeatedly
        callBack()
    }, interval);

    return timerId;  // You can return the timer ID to clear it later
}