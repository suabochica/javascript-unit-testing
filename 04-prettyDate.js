function prettyDate(now, time) {
    var date = new Date(time || "");
    var diff = (((new Date(now)).getTime() - date.getTime())/ 1000);
    var dayDiff = Math.floor(diff / 86400);

    if (isNaN(dayDiff) || dayDiff < 0 || dayDiff >= 31) {
        return;
    }

    return formatDate(dayDiff, diff);
}

function formatDate(dayDiff, diff) {
    switch(true) {
        case dayDiff === 0 && diff < 60:
            return 'Just now';
        case dayDiff === 0 && diff < 120:
            return '1 minute ago';
        case dayDiff === 0 && diff < 3600:
            return Math.floor(diff / 60) + ' minutes ago';
        case dayDiff === 0 && diff < 7200:
            return '1 hour ago';
        case dayDiff === 0 && diff < 86400:
            return Math.floor(diff / 3600) + ' hours ago';
        case dayDiff === 0 || dayDiff === 1:
            return 'Yesterday';
        case dayDiff === 0 || dayDiff < 7:
            return dayDiff + ' days ago';
        case dayDiff === 0 || dayDiff < 31:
            return Math.ceil(dayDiff / 7) + ' days ago';
        default:
            return;
    }
}