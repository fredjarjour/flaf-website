function timeStringToSeconds(timeString) {
    // If it doesnt have a colon, it's just seconds
    if (!timeString.includes(':')) {
        return Number(timeString);
    }

    const timeParts = timeString.split(':');
    const minutes = Number(timeParts[0]);
    const seconds = Number(timeParts[1]);
    return minutes * 60 + seconds;
}

// Leaderboards


// Fazbear Hills

fh_5l_ns = [
    ["Decoy", "2:10.901", ""],
    ["Silhouette", "2:13.276", ""],
    ["Rinify", "2:05.049", "https://www.youtube.com/watch?v=3lV6rkiNaOo"],
    ["Fred", "2:17.933", ""]
];

fh_fl_ns = [
    ["Decoy", "24.025", ""],
    ["Silhouette", "24.772", ""],
    ["Fred", "25.882", ""]
];

fh_5l_sc = [

];

fh_fl_sc = [

];

fh_5l_us = [
    ["Weasel", "38.627", ""]
];

fh_fl_us = [
    ["Weasel", "3.628", ""]
];


// Midnight Motorist

mm_5l_ns = [
    ["Silhouette", "3:55.899", ""]
];

mm_fl_ns = [
    ["Silhouette", "43.883", "https://www.youtube.com/watch?v=GBuF2FYzmY4"],
    ["Decoy", "44.634", ""]
];

mm_5l_sc = [
    ["Rinify", "3:10.999", ""]
];

mm_fl_sc = [
    ["Stascious", "34.745", "https://youtu.be/8zSDnKhZY-E"],
    ["MyntiFresh", "34.262", "https://youtu.be/gaXgvwPLkS8"]
];

mm_5l_us = [
    ["dxtrpog", "25.591",  "https://youtu.be/HBaMMVBdt5o"],
    ["Silhouette", "47.938",  "https://youtu.be/e-4qPSoF-7c"]
];

mm_fl_us = [
    ["Esse", "22.329", ""],
    ["dxtrpog", "1.367",  "https://youtu.be/EoSNctH5PbQ"],
    ["Silhouette", "2.150",  "https://youtu.be/49-gAHGvNAA"]
];


// Sinkhole

sh_5l_ns = [
    ["Decoy", "3:23.581", ""]
];

sh_fl_ns = [
    ["Decoy", "38.745", ""]
];

sh_5l_sc = [
    
];

sh_fl_sc = [
    
];

sh_5l_us = [
    ["Silhouette", "54.793", ""]
];

sh_fl_us = [
    ["Silhouette", "3.589", ""]
];

// Sort all lists by time

all_lists = [fh_5l_ns, fh_fl_ns, fh_5l_sc, fh_fl_sc, fh_5l_us, fh_fl_us, mm_5l_ns, mm_fl_ns, mm_5l_sc, mm_fl_sc, mm_5l_us, mm_fl_us, sh_5l_ns, sh_fl_ns, sh_5l_sc, sh_fl_sc, sh_5l_us, sh_fl_us];
all_lists.forEach(list => {
    list.sort((a, b) => {
        const timeA = timeStringToSeconds(a[1]);
        const timeB = timeStringToSeconds(b[1]);
        return timeA - timeB;
    });
});


// Home page WRs

function load_home_wrs(lists, categories, name) {
    var ih = "<h3>World Records</h3><table><tr><th>Category</th><th>Player</th><th>Time</th></tr>";
    for (i = 0; i < lists.length; i++) {
        if (lists[i].length == 0) {
            continue;
        }

        ih += "<tr><td>" + categories[i] + "</td><td>" + lists[i][0][0] + "</td><td>" + lists[i][0][1] + "</td></tr>";
    }
    ih += "</table>";

    document.getElementById(name).innerHTML = ih;
}

function load_home() {
    load_home_wrs(
        [fh_5l_ns, fh_5l_sc, fh_5l_us, fh_fl_ns, fh_fl_sc, fh_fl_us],
        ["5lap - No Shortcut", "5lap - Shortcut", "5lap - Ultra Shortcut", "Flap - No Shortcut", "Flap - Shortcut", "Flap - Ultra Shortcut"],
        "wrs_fh"
    );

    load_home_wrs(
        [mm_5l_ns, mm_5l_sc, mm_5l_us, mm_fl_ns, mm_fl_sc, mm_fl_us],
        ["5lap - No Shortcut", "5lap - Shortcut", "5lap - Ultra Shortcut", "Flap - No Shortcut", "Flap - Shortcut", "Flap - Ultra Shortcut"],
        "wrs_mm"
    );

    load_home_wrs(
        [sh_5l_ns, sh_5l_sc, sh_5l_us, sh_fl_ns, sh_fl_sc, sh_fl_us],
        ["5lap - No Shortcut", "5lap - Shortcut", "5lap - Ultra Shortcut", "Flap - No Shortcut", "Flap - Shortcut", "Flap - Ultra Shortcut"],
        "wrs_sh"
    );
}


// Load leaderboards

function load_backend(lists, names, titles) {
    for (i = 0; i < lists.length; i++) {
        var seenNames = [];

        var ih = "<h2>"+ titles[i] + "</h2><table><tr><th>Player</th><th>Time</th></tr>";
        for (j = 0; j < lists[i].length; j++) {
            if (seenNames.includes(lists[i][j][0])) {
                continue;
            }
            if (lists[i][j][2] == "") {
                ih += "<tr><td>" + (j + 1) + ". " + lists[i][j][0] + "</td><td>" + lists[i][j][1] + "</td></tr>";
            } else {
                ih += "<tr><td><a href='" + lists[i][j][2] + "' target='_blank'>" + (j + 1) + ". " + lists[i][j][0] + "</a></td><td><a href='" + lists[i][j][2] + "'>" + lists[i][j][1] + "</a></td></tr>";
            }
        }
        ih += "</table>";

        document.getElementById(names[i]).innerHTML = ih;
    }
}

function fh_load() {
    load_backend(
        [fh_5l_ns, fh_fl_ns, fh_5l_sc, fh_fl_sc, fh_5l_us, fh_fl_us], 
        ["fh-ns-5l", "fh-ns-fl", "fh-sc-5l", "fh-sc-fl", "fh-us-5l", "fh-us-fl"], 
        ["5lap - No Shortcut", "Flap - No Shortcut", "5lap - Shortcut", "Flap - Shortcut", "5lap - Ultra Shortcut", "Flap - Ultra Shortcut"]
    );
}

function mm_load() {
    load_backend(
        [mm_5l_ns, mm_fl_ns, mm_5l_sc, mm_fl_sc, mm_5l_us, mm_fl_us],
        ["mm-ns-5l", "mm-ns-fl", "mm-sc-5l", "mm-sc-fl", "mm-us-5l", "mm-us-fl"],
        ["5lap - No Shortcut", "Flap - No Shortcut", "5lap - Shortcut", "Flap - Shortcut", "5lap - Ultra Shortcut", "Flap - Ultra Shortcut"]
    );
}

function sh_load() {
    load_backend(
        [sh_5l_ns, sh_fl_ns, sh_5l_sc, sh_fl_sc, sh_5l_us, sh_fl_us],
        ["sh-ns-5l", "sh-ns-fl", "sh-sc-5l", "sh-sc-fl", "sh-us-5l", "sh-us-fl"],
        ["5lap - No Shortcut", "Flap - No Shortcut", "5lap - Shortcut", "Flap - Shortcut", "5lap - Ultra Shortcut", "Flap - Ultra Shortcut"]
    )
}