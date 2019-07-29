var prettyDate = {
    format: function(now, time) {
        var date = new Date(time || "");
        var diff = (((new Date(now)).getTime() - date.getTime())/ 1000);
        var dayDiff = Math.floor(diff / 86400);

    if (isNaN(dayDiff) || dayDiff < 0 || dayDiff >= 31) {
        return;
    }

    return formatDate(dayDiff, diff);
    }
}