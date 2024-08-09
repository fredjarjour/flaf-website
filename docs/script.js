function timeStringToSeconds(timeString) {
    const [minutes, seconds] = timeString.split(':').map(Number);
    return minutes * 60 + seconds;
}

// Leaderboards

fh_5l_ns = [

].sort((a, b) => {
    const timeA = timeStringToSeconds(a[1]);
    const timeB = timeStringToSeconds(b[1]);
    return timeA - timeB;
});

fh_fl_ns = [

].sort((a, b) => {
    const timeA = timeStringToSeconds(a[1]);
    const timeB = timeStringToSeconds(b[1]);
    return timeA - timeB;
});

fh_5l_sc = [

].sort((a, b) => {
    const timeA = timeStringToSeconds(a[1]);
    const timeB = timeStringToSeconds(b[1]);
    return timeA - timeB;
});

fh_fl_sc = [

].sort((a, b) => {
    const timeA = timeStringToSeconds(a[1]);
    const timeB = timeStringToSeconds(b[1]);
    return timeA - timeB;
});

fh_5l_us = [

].sort((a, b) => {
    const timeA = timeStringToSeconds(a[1]);
    const timeB = timeStringToSeconds(b[1]);
    return timeA - timeB;
});

fh_fl_us = [
    
].sort((a, b) => {
    const timeA = timeStringToSeconds(a[1]);
    const timeB = timeStringToSeconds(b[1]);
    return timeA - timeB;
});


mm_5l_ns = [

].sort((a, b) => {
    const timeA = timeStringToSeconds(a[1]);
    const timeB = timeStringToSeconds(b[1]);
    return timeA - timeB;
});

mm_fl_ns = [

].sort((a, b) => {
    const timeA = timeStringToSeconds(a[1]);
    const timeB = timeStringToSeconds(b[1]);
    return timeA - timeB;
});

mm_5l_sc = [

].sort((a, b) => {
    const timeA = timeStringToSeconds(a[1]);
    const timeB = timeStringToSeconds(b[1]);
    return timeA - timeB;
});

mm_fl_sc = [

].sort((a, b) => {
    const timeA = timeStringToSeconds(a[1]);
    const timeB = timeStringToSeconds(b[1]);
    return timeA - timeB;
});

mm_5l_us = [

].sort((a, b) => {
    const timeA = timeStringToSeconds(a[1]);
    const timeB = timeStringToSeconds(b[1]);
    return timeA - timeB;
});

mm_fl_us = [
        
].sort((a, b) => {
    const timeA = timeStringToSeconds(a[1]);
    const timeB = timeStringToSeconds(b[1]);
    return timeA - timeB;
});


sh_5l_ns = [

].sort((a, b) => {
    const timeA = timeStringToSeconds(a[1]);
    const timeB = timeStringToSeconds(b[1]);
    return timeA - timeB;
});

sh_fl_ns = [

].sort((a, b) => {
    const timeA = timeStringToSeconds(a[1]);
    const timeB = timeStringToSeconds(b[1]);
    return timeA - timeB;
});

sh_5l_sc = [
    
].sort((a, b) => {
    const timeA = timeStringToSeconds(a[1]);
    const timeB = timeStringToSeconds(b[1]);
    return timeA - timeB;
});

sh_fl_sc = [
    
].sort((a, b) => {
    const timeA = timeStringToSeconds(a[1]);
    const timeB = timeStringToSeconds(b[1]);
    return timeA - timeB;
});

sh_5l_us = [
    
].sort((a, b) => {
    const timeA = timeStringToSeconds(a[1]);
    const timeB = timeStringToSeconds(b[1]);
    return timeA - timeB;
});

sh_fl_us = [
        
].sort((a, b) => {
    const timeA = timeStringToSeconds(a[1]);
    const timeB = timeStringToSeconds(b[1]);
    return timeA - timeB;
});

// Leaderboards

function fh_load() {
    var ih = "<h2>5lap - No Shortcut</h2><table><tr><th>Player</th><th>Time</th></tr>";
    for (i = 0; i < fh_5l_ns.length; i++) {
        ih += "<tr><td><a href='" + fh_5l_ns[i][2] + "'>" + (i + 1) + ". " + fh_5l_ns[i][0] + "</a></td><td><a href='" + fh_5l_ns[i][2] + "'>" + fh_5l_ns[i][1] + "</a></td></tr>";
    }
    ih += "</table>";

    document.getElementById("fh-ns-5l").innerHTML = ih;

    ih = "<h2>Flap - No Shortcut</h2><table><tr><th>Player</th><th>Time</th></tr>";
    for (i = 0; i < fh_fl_ns.length; i++) {
        ih += "<tr><td><a href='" + fh_fl_ns[i][2] + "'>" + (i + 1) + ". " + fh_fl_ns[i][0] + "</a></td><td><a href='" + fh_fl_ns[i][2] + "'>" + fh_fl_ns[i][1] + "</a></td></tr>";
    }
    ih += "</table>";

    document.getElementById("fh-ns-fl").innerHTML = ih;

    ih = "<h2>5lap - Shortcut</h2><table><tr><th>Player</th><th>Time</th></tr>";
    for (i = 0; i < fh_5l_sc.length; i++) {
        ih += "<tr><td><a href='" + fh_5l_sc[i][2] + "'>" + (i + 1) + ". " + fh_5l_sc[i][0] + "</a></td><td><a href='" + fh_5l_sc[i][2] + "'>" + fh_5l_sc[i][1] + "</a></td></tr>";
    }
    ih += "</table>";

    document.getElementById("fh-sc-5l").innerHTML = ih;

    ih = "<h2>Flap - Shortcut</h2><table><tr><th>Player</th><th>Time</th></tr>";
    for (i = 0; i < fh_fl_sc.length; i++) {
        ih += "<tr><td><a href='" + fh_fl_sc[i][2] + "'>" + (i + 1) + ". " + fh_fl_sc[i][0] + "</a></td><td><a href='" + fh_fl_sc[i][2] + "'>" + fh_fl_sc[i][1] + "</a></td></tr>";
    }
    ih += "</table>";

    document.getElementById("fh-sc-fl").innerHTML = ih;

    ih = "<h2>5lap - Ultra Shortcut</h2><table><tr><th>Player</th><th>Time</th></tr>";
    for (i = 0; i < fh_5l_us.length; i++) {
        ih += "<tr><td><a href='" + fh_5l_us[i][2] + "'>" + (i + 1) + ". " + fh_5l_us[i][0] + "</a></td><td><a href='" + fh_5l_us[i][2] + "'>" + fh_5l_us[i][1] + "</a></td></tr>";
    }
    ih += "</table>";

    document.getElementById("fh-us-5l").innerHTML = ih;

    ih = "<h2>Flap - Ultra Shortcut</h2><table><tr><th>Player</th><th>Time</th></tr>";
    for (i = 0; i < fh_fl_us.length; i++) {
        ih += "<tr><td><a href='" + fh_fl_us[i][2] + "'>" + (i + 1) + ". " + fh_fl_us[i][0] + "</a></td><td><a href='" + fh_fl_us[i][2] + "'>" + fh_fl_us[i][1] + "</a></td></tr>";
    }
    ih += "</table>";

    document.getElementById("fh-us-fl").innerHTML = ih;
}

function mm_load() {
    var ih = "<h2>5lap - No Shortcut</h2><table><tr><th>Player</th><th>Time</th></tr>";
    for (i = 0; i < mm_5l_ns.length; i++) {
        ih += "<tr><td><a href='" + mm_5l_ns[i][2] + "'>" + (i + 1) + ". " + mm_5l_ns[i][0] + "</a></td><td><a href='" + mm_5l_ns[i][2] + "'>" + mm_5l_ns[i][1] + "</a></td></tr>";
    }
    ih += "</table>";

    document.getElementById("mm-ns-5l").innerHTML = ih;

    ih = "<h2>Flap - No Shortcut</h2><table><tr><th>Player</th><th>Time</th></tr>";
    for (i = 0; i < mm_fl_ns.length; i++) {
        ih += "<tr><td><a href='" + mm_fl_ns[i][2] + "'>" + (i + 1) + ". " + mm_fl_ns[i][0] + "</a></td><td><a href='" + mm_fl_ns[i][2] + "'>" + mm_fl_ns[i][1] + "</a></td></tr>";
    }
    ih += "</table>";

    document.getElementById("mm-ns-fl").innerHTML = ih;

    ih = "<h2>5lap - Shortcut</h2><table><tr><th>Player</th><th>Time</th></tr>";
    for (i = 0; i < mm_5l_sc.length; i++) {
        ih += "<tr><td><a href='" + mm_5l_sc[i][2] + "'>" + (i + 1) + ". " + mm_5l_sc[i][0] + "</a></td><td><a href='" + mm_5l_sc[i][2] + "'>" + mm_5l_sc[i][1] + "</a></td></tr>";
    }
    ih += "</table>";

    document.getElementById("mm-sc-5l").innerHTML = ih;

    ih = "<h2>Flap - Shortcut</h2><table><tr><th>Player</th><th>Time</th></tr>";
    for (i = 0; i < mm_fl_sc.length; i++) {
        ih += "<tr><td><a href='" + mm_fl_sc[i][2] + "'>" + (i + 1) + ". " + mm_fl_sc[i][0] + "</a></td><td><a href='" + mm_fl_sc[i][2] + "'>" + mm_fl_sc[i][1] + "</a></td></tr>";
    }
    ih += "</table>";

    document.getElementById("mm-sc-fl").innerHTML = ih;

    ih = "<h2>5lap - Ultra Shortcut</h2><table><tr><th>Player</th><th>Time</th></tr>";
    for (i = 0; i < mm_5l_us.length; i++) {
        ih += "<tr><td><a href='" + mm_5l_us[i][2] + "'>" + (i + 1) + ". " + mm_5l_us[i][0] + "</a></td><td><a href='" + mm_5l_us[i][2] + "'>" + mm_5l_us[i][1] + "</a></td></tr>";
    }
    ih += "</table>";

    document.getElementById("mm-us-5l").innerHTML = ih;

    ih = "<h2>Flap - Ultra Shortcut</h2><table><tr><th>Player</th><th>Time</th></tr>";
    for (i = 0; i < mm_fl_us.length; i++) {
        ih += "<tr><td><a href='" + mm_fl_us[i][2] + "'>" + (i + 1) + ". " + mm_fl_us[i][0] + "</a></td><td><a href='" + mm_fl_us[i][2] + "'>" + mm_fl_us[i][1] + "</a></td></tr>";
    }
    ih += "</table>";

    document.getElementById("mm-us-fl").innerHTML = ih;
}

function sh_load() {
    var ih = "<h2>5lap - No Shortcut</h2><table><tr><th>Player</th><th>Time</th></tr>";
    for (i = 0; i < sh_5l_ns.length; i++) {
        ih += "<tr><td><a href='" + sh_5l_ns[i][2] + "'>" + (i + 1) + ". " + sh_5l_ns[i][0] + "</a></td><td><a href='" + sh_5l_ns[i][2] + "'>" + sh_5l_ns[i][1] + "</a></td></tr>";
    }
    ih += "</table>";

    document.getElementById("sh-ns-5l").innerHTML = ih;

    ih = "<h2>Flap - No Shortcut</h2><table><tr><th>Player</th><th>Time</th></tr>";
    for (i = 0; i < sh_fl_ns.length; i++) {
        ih += "<tr><td><a href='" + sh_fl_ns[i][2] + "'>" + (i + 1) + ". " + sh_fl_ns[i][0] + "</a></td><td><a href='" + sh_fl_ns[i][2] + "'>" + sh_fl_ns[i][1] + "</a></td></tr>";
    }
    ih += "</table>";

    document.getElementById("sh-ns-fl").innerHTML = ih;

    ih = "<h2>5lap - Shortcut</h2><table><tr><th>Player</th><th>Time</th></tr>";
    for (i = 0; i < sh_5l_sc.length; i++) {
        ih += "<tr><td><a href='" + sh_5l_sc[i][2] + "'>" + (i + 1) + ". " + sh_5l_sc[i][0] + "</a></td><td><a href='" + sh_5l_sc[i][2] + "'>" + sh_5l_sc[i][1] + "</a></td></tr>";
    }
    ih += "</table>";

    document.getElementById("sh-sc-5l").innerHTML = ih;

    ih = "<h2>Flap - Shortcut</h2><table><tr><th>Player</th><th>Time</th></tr>";
    for (i = 0; i < sh_fl_sc.length; i++) {
        ih += "<tr><td><a href='" + sh_fl_sc[i][2] + "'>" + (i + 1) + ". " + sh_fl_sc[i][0] + "</a></td><td><a href='" + sh_fl_sc[i][2] + "'>" + sh_fl_sc[i][1] + "</a></td></tr>";
    }
    ih += "</table>";

    document.getElementById("sh-sc-fl").innerHTML = ih;

    ih = "<h2>5lap - Ultra Shortcut</h2><table><tr><th>Player</th><th>Time</th></tr>";
    for (i = 0; i < sh_5l_us.length; i++) {
        ih += "<tr><td><a href='" + sh_5l_us[i][2] + "'>" + (i + 1) + ". " + sh_5l_us[i][0] + "</a></td><td><a href='" + sh_5l_us[i][2] + "'>" + sh_5l_us[i][1] + "</a></td></tr>";
    }
    ih += "</table>";

    document.getElementById("sh-us-5l").innerHTML = ih;

    ih = "<h2>Flap - Ultra Shortcut</h2><table><tr><th>Player</th><th>Time</th></tr>";
    for (i = 0; i < sh_fl_us.length; i++) {
        ih += "<tr><td><a href='" + sh_fl_us[i][2] + "'>" + (i + 1) + ". " + sh_fl_us[i][0] + "</a></td><td><a href='" + sh_fl_us[i][2] + "'>" + sh_fl_us[i][1] + "</a></td></tr>";
    }
    ih += "</table>";

    document.getElementById("sh-us-fl").innerHTML = ih;
}