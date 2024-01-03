function timeWords(timeString) {
    // Extract hours and minutes from the input string
    const hours = parseInt(timeString.slice(0, 2), 10);
    const minutes = parseInt(timeString.slice(3), 10);

    // Define arrays for words
    const hoursWords = [
        "Midnight", "One", "Two", "Three", "Four", "Five", "Six",
        "Seven", "Eight", "Nine", "Ten", "Eleven", "Noon"
    ];

    const minutesWords = [
        "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
        "Seventeen", "Eighteen", "Nineteen"
    ];

    const tensWords = ["", "", "Twenty", "Thirty", "Forty", "Fifty"];

    // Function to convert minutes to words
    function minutesToWords(minutes) {
        if (minutes < 20) {
            return minutesWords[minutes];
        } else {
            const tens = Math.floor(minutes / 10);
            const ones = minutes % 10;
            return tensWords[tens] + (ones !== 0 ? " " + minutesWords[ones] : "");
        }
    }

    // Determine AM or PM
    const period = hours < 12 ? "AM" : "PM";

    // Convert hours to 12-hour format
    const formattedHours = hours % 12 || 12;

    // Create the time in words
    const timeInWords = `${hoursWords[formattedHours]} ${minutesToWords(minutes)} ${period}`;

    return timeInWords;
}


function timeToWords(timeString) {
    // Extract hours and minutes from the input string
    const hours = parseInt(timeString.slice(0, 2), 10);
    const minutes = parseInt(timeString.slice(3), 10);

    // Define arrays for words
    const hoursWords = [
        "Midnight", "One", "Two", "Three", "Four", "Five", "Six",
        "Seven", "Eight", "Nine", "Ten", "Eleven", "Noon"
    ];

    const minutesWords = [
        "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
        "Seventeen", "Eighteen", "Nineteen"
    ];

    const tensWords = ["", "", "Twenty", "Thirty", "Forty", "Fifty"];

    // Function to convert minutes to words
    function minutesToWords(minutes) {
        if (minutes < 20) {
            return minutesWords[minutes];
        } else {
            const tens = Math.floor(minutes / 10);
            const ones = minutes % 10;
            return tensWords[tens] + (ones !== 0 ? " " + minutesWords[ones] : "");
        }
    }

    // Determine AM or PM
    const period = hours < 12 ? "AM" : "PM";

    // Convert hours to 12-hour format
    const formattedHours = hours % 12 || 12;

    // Create the time in words
    const timeInWords = `${hoursWords[formattedHours]} ${minutesToWords(minutes)} ${period}`;

    return timeInWords;
}

function timeToWords(timeString) {
    // Extract hours and minutes from the input string
    const hours = parseInt(timeString.slice(0, 2), 10);
    const minutes = parseInt(timeString.slice(3), 10);

    // Define arrays for words
    const hoursWords = [
        "Midnight", "One", "Two", "Three", "Four", "Five", "Six",
        "Seven", "Eight", "Nine", "Ten", "Eleven", "Noon"
    ];

    const minutesWords = [
        "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
        "Seventeen", "Eighteen", "Nineteen"
    ];

    const tensWords = ["", "", "Twenty", "Thirty", "Forty", "Fifty"];

    // Function to convert minutes to words
    function minutesToWords(minutes) {
        if (minutes < 20) {
            return minutesWords[minutes];
        } else {
            const tens = Math.floor(minutes / 10);
            const ones = minutes % 10;
            return tensWords[tens] + (ones !== 0 ? " " + minutesWords[ones] : "");
        }
    }

    // Determine AM or PM
    const period = hours < 12 ? "AM" : "PM";

    // Convert hours to 12-hour format
    const formattedHours = hours % 12 || 12;

    // Create the time in words
    const timeInWords = `${hoursWords[formattedHours]} ${minutesToWords(minutes)} ${period}`;

    return timeInWords;
}

module.export = timeWords;





