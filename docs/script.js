//#region Helper Functions
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
//#endregion Helper Functions

//#region Classes
class Track {
    constructor(name) {
        this.name = name;
        
        this.categories = new Map();
        this.categories.set("5lap - No Shortcut", []);
        this.categories.set("5lap - Shortcut", []);
        this.categories.set("5lap - Ultra Shortcut", []);
        this.categories.set("Flap - No Shortcut", []);
        this.categories.set("Flap - Shortcut", []);
        this.categories.set("Flap - Ultra Shortcut", []);
    }
}

class Category {
    constructor(name) {
        this.name = name;

        this.categories = new Map();
        this.categories.set("No Shortcut", []);
        this.categories.set("Shortcut", []);
        this.categories.set("Ultra Shortcut", []);
    }
}
// #endregion Classes

//#region Demo Version

const fh_demo = new Track("Fazbear Hills");
const mm_demo = new Track("Midnight Motorist");
const sh_demo = new Track("Sinkhole");

const at_demo = new Category("All Tracks");

//#region Fazbear Hills
fh_demo.categories.get("5lap - No Shortcut").push(...[
    ["Decoy", "2:10.901", ""],
    ["Silhouette", "2:13.276", ""],
    ["Rinify", "1:58.199", "https://www.youtube.com/watch?v=oVw5Eg3gQ8k"],
    ["Fred", "2:11.918", "https://www.youtube.com/watch?v=gm57r_DxcfY"],
    ["Gavin", "2:19.847", "https://www.youtube.com/watch?v=HvQ4-pAQLyw"],
    ["JDFRG", "2:29.538", "https://www.youtube.com/watch?v=h4wegL-yhpI"]
]);

fh_demo.categories.get("Flap - No Shortcut").push(...[
    ["Silhouette", "24.772", ""],
    ["Fred", "23.860", "https://www.youtube.com/watch?v=gm57r_DxcfY"],
    ["Decoy", "23.967",  "https://youtu.be/h2Sk5oqIBIc"],
    ["Rinify", "23.200", "https://www.youtube.com/watch?v=oVw5Eg3gQ8k"]
]);

fh_demo.categories.get("5lap - Shortcut").push(...[

]);

fh_demo.categories.get("Flap - Shortcut").push(...[

]);

fh_demo.categories.get("5lap - Ultra Shortcut").push(...[
    ["Weasel", "38.627", ""]
]);

fh_demo.categories.get("Flap - Ultra Shortcut").push(...[
    ["Weasel", "3.628", ""]
]);
//#endregion Fazbear Hills

//#region Midnight Motorist
mm_demo.categories.get("5lap - No Shortcut").push(...[
    ["Silhouette", "3:48.740",  "https://youtu.be/ASFgY8zsQT4"]
]);

mm_demo.categories.get("Flap - No Shortcut").push(...[
    ["Silhouette", "42.300", "https://www.youtube.com/watch?v=dqF-avRpWT8"],
    ["Decoy", "44.634", ""]
]);

mm_demo.categories.get("5lap - Shortcut").push(...[
    ["Rinify", "3:10.999", ""]
]);

mm_demo.categories.get("Flap - Shortcut").push(...[
    ["Stasious", "33.296",  "https://youtu.be/1RPBnmSQ4vo"],
    ["MyntiFresh", "32.719", "https://www.youtube.com/watch?v=s4SFQVI3VWg"]
]);

mm_demo.categories.get("5lap - Ultra Shortcut").push(...[
    ["dxtrpog", "25.591",  "https://youtu.be/HBaMMVBdt5o"],
    ["Silhouette", "47.938",  "https://youtu.be/e-4qPSoF-7c"]
]);

mm_demo.categories.get("Flap - Ultra Shortcut").push(...[
    ["Esse", "22.329", ""],
    ["dxtrpog", "1.367",  "https://youtu.be/EoSNctH5PbQ"],
    ["Silhouette", "2.150",  "https://youtu.be/49-gAHGvNAA"]
]);
//#endregion Midnight Motorist

//#region Sinkhole
sh_demo.categories.get("5lap - No Shortcut").push(...[
    ["Decoy", "3:23.581", ""],
    ["JDFRG", "4:20.310", "https://www.youtube.com/watch?v=SEKfICRoAxQ&t=4970s"]
]);

sh_demo.categories.get("Flap - No Shortcut").push(...[
    ["Decoy", "38.745", ""]
]);

sh_demo.categories.get("5lap - Shortcut").push(...[
    
]);

sh_demo.categories.get("Flap - Shortcut").push(...[
    
]);

sh_demo.categories.get("5lap - Ultra Shortcut").push(...[
    ["Silhouette", "54.793", ""],
    ["The_BLJ_Elite", "28.833",  "https://www.youtube.com/watch?v=AdR5bw3JaRc"]
]);

sh_demo.categories.get("Flap - Ultra Shortcut").push(...[
    ["Silhouette", "3.589", ""],
    ["The_BLJ_Elite", "1.150",  "https://www.youtube.com/watch?v=cmKW_wPXWcY"]
]);
//#endregion Sinkhole

//#region All Tracks
at_demo.categories.get("No Shortcut").push(...[
    ["Weasel", "19:55.867", "https://www.youtube.com/watch?v=FaYo6iWV4wo"]
]);

at_demo.categories.get("Shortcut").push(...[

]);

at_demo.categories.get("Ultra Shortcut").push(...[

]);

//#endregion All Tracks

//#endregion Demo Version

//#region Beta Version

const fh_beta = new Track("Fazbear Hills");
const mm_beta = new Track("Midnight Motorist");
const sh_beta = new Track("Sinkhole");

const at_beta = new Category("All Tracks");

//#region Fazbear Hills
fh_beta.categories.get("5lap - No Shortcut").push(...[
    ["Rinify", "1:51.850", "https://www.youtube.com/watch?v=yFF5Tb5ELbY"]
]);

fh_beta.categories.get("Flap - No Shortcut").push(...[
    
]);

fh_beta.categories.get("5lap - Shortcut").push(...[

]);

fh_beta.categories.get("Flap - Shortcut").push(...[

]);

fh_beta.categories.get("5lap - Ultra Shortcut").push(...[
    ["Weasel", "1:41.544", "https://www.youtube.com/watch?v=QrXIkvano-Y"]
]);

fh_beta.categories.get("Flap - Ultra Shortcut").push(...[
    
]);
//#endregion Fazbear Hills

//#region Midnight Motorist
mm_beta.categories.get("5lap - No Shortcut").push(...[
    ["Silhouette", "3:47.593",  "https://www.youtube.com/watch?v=ItDOKP9f8vw"]
]);

mm_beta.categories.get("Flap - No Shortcut").push(...[
    ["Rinify", "39.667", "https://www.youtube.com/watch?v=-5Q1oVSVqbY"]
]);

mm_beta.categories.get("5lap - Shortcut").push(...[
    
]);

mm_beta.categories.get("Flap - Shortcut").push(...[
    
]);

mm_beta.categories.get("5lap - Ultra Shortcut").push(...[
    
]);

mm_beta.categories.get("Flap - Ultra Shortcut").push(...[
    
]);
//#endregion Midnight Motorist

//#region Sinkhole
sh_beta.categories.get("5lap - No Shortcut").push(...[
    ["Rinify", "2:57.183", "https://www.youtube.com/watch?v=OqNpna3ssHk"]
]);

sh_beta.categories.get("Flap - No Shortcut").push(...[
    
]);

sh_beta.categories.get("5lap - Shortcut").push(...[
    
]);

sh_beta.categories.get("Flap - Shortcut").push(...[
    
]);

sh_beta.categories.get("5lap - Ultra Shortcut").push(...[
    
]);

sh_beta.categories.get("Flap - Ultra Shortcut").push(...[
    
]);
//#endregion Sinkhole

//#region All Tracks
at_beta.categories.get("No Shortcut").push(...[
    
]);

at_beta.categories.get("Shortcut").push(...[

]);

at_beta.categories.get("Ultra Shortcut").push(...[

]);

//#endregion All Tracks

//#endregion Beta Version

//#region Sorting
var all_lists = [fh_demo, mm_demo, sh_demo, at_demo, fh_beta, mm_beta, sh_beta, at_beta];
all_lists.forEach(track => {
    track.categories.forEach((value, key) => {
        value.sort((a, b) => timeStringToSeconds(a[1]) - timeStringToSeconds(b[1]));
    });
});
//#endregion Sorting

//#region Home Pages
function load_home_wrs(track_demo, track_beta, name, trackName) {
    var ih = "<table><tr><th colspan='3'><a href='demo/" + trackName + ".html'>Demo Version</a></th></tr><tr><th>Category</th><th>Player</th><th>Time</th></tr>";

    track_demo.categories.forEach((value, key) => {
        if (value.length == 0) {
            return;
        }

        ih += "<tr><td>" + key + "</td><td>" + value[0][0] + "</td><td>" + value[0][1] + "</td></tr>";
    });

    ih += "<tr><th colspan='3'><a href='beta/" + trackName + ".html'>Beta Version</a></th></tr><tr><th>Category</th><th>Player</th><th>Time</th></tr>"

    track_beta.categories.forEach((value, key) => {
        if (value.length == 0) {
            return;
        }

        ih += "<tr><td>" + key + "</td><td>" + value[0][0] + "</td><td>" + value[0][1] + "</td></tr>";
    });

    ih += "</table>";

    document.getElementById(name).innerHTML = ih;
}

function load_home() {
    load_home_wrs(fh_demo, fh_beta, "wrs_fh", "fazbearhills");

    load_home_wrs(mm_demo, mm_beta, "wrs_mm", "midnightmotorist");

    load_home_wrs(sh_demo, sh_beta, "wrs_sh", "sinkhole");
}

function load_version_wrs(track, name) {
    var ih = "<table><tr><th colspan='3'><u>World Records</u></th><tr><th>Category</th><th>Player</th><th>Time</th></tr>";

    track.categories.forEach((value, key) => {
        if (value.length == 0) {
            return;
        }

        ih += "<tr><td>" + key + "</td><td>" + value[0][0] + "</td><td>" + value[0][1] + "</td></tr>";
    });

    ih += "</table>";

    document.getElementById(name).innerHTML = ih;
}

function load_demo() {
    load_version_wrs(fh_demo, "wrs_fh");

    load_version_wrs(mm_demo, "wrs_mm");

    load_version_wrs(sh_demo, "wrs_sh");
}

function load_beta() {
    load_version_wrs(fh_beta, "wrs_fh");

    load_version_wrs(mm_beta, "wrs_mm");

    load_version_wrs(sh_beta, "wrs_sh");
}
//#endregion Home Page

//#region Leaderboards
const order = ["5lap - No Shortcut", "Flap - No Shortcut", "5lap - Shortcut", "Flap - Shortcut", "5lap - Ultra Shortcut", "Flap - Ultra Shortcut"];
const names = ["ns-5l", "ns-fl", "sc-5l", "sc-fl", "us-5l", "us-fl"];


function load_backend(track) {
    var count = 0;


    order.forEach(key => {
        var value = track.categories.get(key);
        
        var seenNames = [];

        var ih = "<table><tr><th colspan='2'>" + key + "</th></tr><tr><th>Player</th><th>Time</th></tr>";
        for (i = 0; i < value.length; i++) {
            if (seenNames.includes(value[i][0])) {
                continue;
            }
            if (value[i][2] == "") {
                ih += "<tr><td>" + (i + 1) + ". " + value[i][0] + "</td><td>" + value[i][1] + "</td></tr>";
            } else {
                ih += "<tr><td><a href='" + value[i][2] + "' target='_blank'>" + (i + 1) + ". " + value[i][0] + "</a></td><td><a href='" + value[i][2] + "'>" + value[i][1] + "</a></td></tr>";
            }
        }

        ih += "</table>";

        document.getElementById(names[count]).innerHTML = ih;
        count++;
    });
}

function fh_demo_load() {
    load_backend(fh_demo);
}

function mm_demo_load() {
    load_backend(mm_demo);
}

function sh_demo_load() {
    load_backend(sh_demo);
}

function fh_beta_load() {
    load_backend(fh_beta);
}

function mm_beta_load() {
    load_backend(mm_beta);
}

function sh_beta_load() {
    load_backend(sh_beta);
}

//#endregion Leaderboards