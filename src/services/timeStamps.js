const SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
const TIME_CATEGORIES = {
    minute: 60,
    hour: 3600,
    day: 86400,
    twoDays: 172800,
    month: 2592000,
};
const { minute, hour, day, twoDays, month } = TIME_CATEGORIES;

export function abbreviateNumber(number) {
    // what tier? (determines SI symbol)
    var tier = (Math.log10(Math.abs(number)) / 3) | 0;

    // if zero, we don't need a suffix
    if (tier === 0) return number;

    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;

    // format number and add suffix
    return scaled.toFixed(1) + suffix;
}

export function timeSince(timeStamp) {
    let parsedTime = Date.parse(timeStamp);
    parsedTime = new Date(parsedTime);
    let now = new Date(),
        secondsPast = (now.getTime() - parsedTime) / 1000;
    if (secondsPast < minute) {
        return parseInt(secondsPast) + "s";
    }
    if (secondsPast < hour) {
        return parseInt(secondsPast / minute) + "m";
    }
    if (secondsPast <= day) {
        return parseInt(secondsPast / hour) + "h";
    }
    if (secondsPast <= twoDays) {
        return parseInt(secondsPast / day) + " day";
    }
    if (secondsPast <= month) {
        return parseInt(secondsPast / day) + " days";
    }
}
