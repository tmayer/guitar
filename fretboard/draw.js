// Music
var allNotes = [
    "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"
];
var allNotesEnh = [
    "c", "db", "d", "eb", "e", "f", "gb", "g", "ab", "a", "bb", "b"
];
var colors = ["red", "green", "steelblue", "black", "purple", "orange", "sienna", "hotpink"];

var noteColors = {"c": "red",
                  "d": "green",
                  "e": "steelblue",
                  "f": "black",
                  "g": "purple",
                  "a": "orange",
                  "b": "sienna"}

var Scales = {
    // scales
    lydian: "c d e f# g a b",
    major: "c d e f g a b",
    mixolydian: "c d e f g a bb",
    dorian: "c d eb f g a bb",
    aeolian: "c d eb f g ab bb",
    phrygian: "c db eb f g ab bb",
    locrian: "c db eb f gb ab bb",
    "minor-pentatonic": "c eb f g bb",
    "minor-blues": "c eb f f# g bb",
    "major-pentatonic": "c d e g a",
    "major-blues": "c d d# e g a",
    "dom-pentatonic": "c e f g bb",
    japanese: "c db f g ab",
    // chords
    maj: "c e g",
    aug: "c e g#",
    min: "c eb g",
    dim: "c eb gb",
    maj7: "c e g b",
    7: "c e g bb",
    min7: "c eb g bb",
    m7b5: "c eb gb bb",
    dim7: "c eb gb a",
    bead: "a b d e",
    gcf: "c f g",
    be: "b e",
    gc: "c g",
    _: function(scale) { return Scales[scale].split(" "); },
};


function asOffset(note) {
    note = note.toLowerCase();
    var offset = allNotes.indexOf(note);
    if(offset === -1) {
        offset = allNotesEnh.indexOf(note);
    }
    return offset;
}


function absNote(note) {
    var octave = note[note.length - 1];
    var pitch = asOffset(note.slice(0, -1));
    if (pitch > -1) {
        return pitch + octave * 12;
    }
}


function asNotes(scale) {
    let [root, type] = scale.split(" ");
    var scaleInC = Scales._(type);
    var offset = asOffset(root);
    var scaleTransposed = scaleInC.map(function(note) {
        return allNotes[(asOffset(note) + offset) % 12];
    });
    return scaleTransposed.join(" ");
}

function renderNotes(note_s, width){

    VF = Vex.Flow;

    // Create an SVG renderer and attach it to the DIV element named "boo".
    d3.select("#boo").selectAll("*").remove();
    var div = document.getElementById("boo")
    var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
    
    // Configure the rendering context.
    renderer.resize(1600, 700);
    var context = renderer.getContext();
    
    context.setViewBox(width/1.5, 40, width, width); //size
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    var stave = new VF.Stave(40, 100, 1000);
    // Add a clef and time signature.
    stave.addClef("treble");
    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();

    var noteColors = {"c": "red",
                    "d": "green",
                    "e": "steelblue",
                    "f": "black",
                    "g": "purple",
                    "a": "orange",
                    "b": "sienna"};

    var note_names = ['e', 'f', 'g', 'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'a', 'b', 'c', 'd',
    'e'
    ];
    var note_pos = [3, 3, 3, 3, 3, 4, 4,
                    4, 4, 4, 4, 4, 5, 5,
                    5, 5, 5, 5, 5, 6, 6,
                    6, 6, 6, 6, 6, 7, 7,
                    7];

    var notes_all = note_names.map(function(e, i){
        return [e, note_pos[i]];
    });

    var notes = [];

    notes_all.forEach(function(note, i){
        let n = {keys: [note[0] + '/' + note[1]], duration: '4'};

            let sn = new VF.StaveNote(n);
            if(note_s.length > 0){
                if((note_s[0][0] != note[0]) || (parseInt(note_s[0][1]) != parseInt(note[1]))){
                    sn = new VF.GhostNote(n);
                }
            }
            sn.setStyle({fillStyle: noteColors[note[0]], strokeStyle: noteColors[note[0]]});
            let pos_note = parseInt(note[1])-1;
            sn.setAttribute('id', 'stave ' + note[0] + ' ' + pos_note);

            notes.push(sn);
    });

    VF.Formatter.FormatAndDraw(context, stave, notes, false);

    let notesevent = document.getElementsByClassName("vf-stavenote");

    for (var i = 0; i < notesevent.length; i++) {

        let info = notesevent[i].id.split(" ");
        notesevent[i].addEventListener("mouseenter", function() {

            d3.selectAll(".note").classed('hidden', true);
            d3.selectAll("." + info[1] + "" + info[2])
            .classed('hidden', false)
            .each(function(d, i){
                let pos = this.classList[2];

                d3.select(this).text(pos);
            })
            ;
            
        });
       
        notesevent[i].addEventListener("mouseleave", function(){
            d3.selectAll(".note")
            .classed('hidden', false)
            .each(function(d, i){
              let note = this.classList[1];
              d3.select(this).text(note.toUpperCase());
            });
        });
    }
}

var verbatim = function(d) { return d; };

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////  
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// Fretboard
var Tunings = {
    E_4ths: ["e2", "a2", "d3", "g3", "c4", "f4"],
    E_std: ["e2", "a2", "d3", "g3", "b3", "e4"],
    Drop_D: ["d2", "a2", "d3", "g3", "b3", "e4"],
    G_open: ["d2", "g2", "d3", "g3", "b4", "d4"]
};


var Fretboard = function(config) {
    config = config || {};
    var id = "fretboard-" + Math.floor(Math.random() * 1000000);

    var instance = {
        frets: config.frets || 12,
        strings: config.strings || 6,
        tuning: config.tuning || Tunings.E_4ths,
        fretWidth: config.fretWidth || 60,
        fretHeight: config.fretHeight || 24
    };

    instance.fretsWithDots = function () {
        var allDots = [3, 5, 7, 9, 15, 17, 19, 21];
        return allDots.filter(function(v) { return v <= instance.frets; });
    };

    instance.fretsWithDoubleDots = function () {
        var allDots = [12, 24];
        return allDots.filter(function(v) { return v <= instance.frets; });
    };

    instance.fretboardHeight = function () {
        return (instance.strings - 1) * instance.fretHeight + 2;
    };

    instance.fretboardWidth = function() {
        return instance.frets * instance.fretWidth + 2;
    };

    instance.XMARGIN = function() { return instance.fretWidth; };
    instance.YMARGIN = function() { return instance.fretHeight; };

    instance.makeContainer = function() {
        d3.select("#fretboard").selectAll("*").remove();
        return d3
            .select("#fretboard")
            //.select("body")
            //.append("div")
            //.attr("class", "fretboard")
            //.attr("id", id)
            .append("svg")
            .attr("width", instance.fretboardWidth() + instance.XMARGIN() * 2)
            .attr("height", instance.fretboardHeight() + instance.YMARGIN() * 2 + 30);
    };

    instance.svgContainer = instance.makeContainer();

    instance.drawFrets = function() {
        for(i=0; i<=instance.frets; i++) {
            let x = i * instance.fretWidth + 1 + instance.XMARGIN();
            instance.svgContainer
                .append("line")
                .attr("x1", x)
                .attr("y1", instance.YMARGIN())
                .attr("x2", x)
                .attr("y2", instance.YMARGIN() + instance.fretboardHeight())
                .attr("stroke", "lightgray")
                .attr("stroke-width", i==0? 8:2);
            d3.select("#fretboard")
                .append("p")
                .attr("class", "fretnum")
                .style("top", (instance.fretboardHeight() + instance.YMARGIN() + 18) + "px")
                .style("left", x - 10 + "px")
                .text(i)
                ;
        }
    }


    instance.drawStrings = function() {
        for(i=0; i<instance.strings; i++) {
            instance.svgContainer
                .append("line")
                .attr("x1", instance.XMARGIN())
                .attr("y1", i * instance.fretHeight + 1 + instance.YMARGIN())
                .attr("x2", instance.XMARGIN() + instance.fretboardWidth())
                .attr("y2", i * instance.fretHeight + 1 + instance.YMARGIN())
                .attr("stroke", "black")
                .attr("stroke-width", 1)
                ;
        }
        var placeTuning = function(d, i) {
            return (instance.strings - i) * instance.fretHeight - 5 + "px";
        };
        d3.select("#" + id)
            .selectAll(".tuning")
            .data(instance.tuning.slice(0, instance.strings))
            .style("top", placeTuning)
            .text(verbatim)
            .enter()
            .append("p")
            .attr("class", "tuning")
            .style("top", placeTuning)
            .text(verbatim)
            ;
    };


    instance.drawDots = function() {
        var p = instance.svgContainer
            .selectAll("circle")
            .data(instance.fretsWithDots());

        p.enter()
            .append("circle")
            .attr("cx", function(d) { return (d - 1) * instance.fretWidth + instance.fretWidth/2 + instance.XMARGIN(); })
            .attr("cy", instance.fretboardHeight()/2 + instance.YMARGIN())
            .attr("r", instance.fretWidth/9).style("fill", "#ddd");

        var p = instance.svgContainer
            .selectAll(".octave")
            .data(instance.fretsWithDoubleDots);

        p.enter()
            .append("circle")
            .attr("class", "octave")
            .attr("cx", function(d) { return (d - 1) * instance.fretWidth + instance.fretWidth/2 + instance.XMARGIN(); })
            .attr("cy", instance.fretHeight * 3/2 + instance.YMARGIN())
            .attr("r", instance.fretWidth/9).style("fill", "#ddd");
        p.enter()
            .append("circle")
            .attr("class", "octave")
            .attr("cx", function(d) { return (d - 1) * instance.fretWidth + instance.fretWidth/2 + instance.XMARGIN(); })
            .attr("cy", instance.fretHeight * 7/2 + instance.YMARGIN())
            .attr("r", instance.fretWidth/9).style("fill", "#ddd");
    };


    instance.draw = function() {
        instance.drawFrets();
        instance.drawStrings();
        instance.drawDots();
    };


    // Notes on fretboard

    instance.addNoteOnString = function(note, string, color) {

        color = noteColors[note[0]];

        var superscript = "⁰¹²³⁴⁵⁶⁷⁸⁹";

        var absPitch = absNote(note);
        color = color || "black";
        var absString = (instance.strings - string);
        var basePitch = absNote(instance.tuning[absString]);
        if((absPitch >= basePitch) && (absPitch <= basePitch + instance.frets)) {

           

                var group = instance.svgContainer.append('g');

                group.append("circle")
                .attr("class", "note " + note.charAt(0) + " " + note.charAt(1) + " " + note.charAt(0) + note.charAt(1))
                .attr("stroke-width", 1)
                // 0.75 is the offset into the fret (higher is closest to fret)
                .attr("cx", (absPitch - basePitch + 0.75) * instance.fretWidth)
                .attr("cy", (string - 1) * instance.fretHeight + 1 + instance.YMARGIN())
                .attr("r", instance.fretWidth/6).style("stroke", color).style("fill", color)
                .style("cursor", "pointer")
                .on("mouseover", function(d) {
                    d3.selectAll(".note").classed('hidden', true);
                    let note = this.classList[1];
                    //console.log(note);
                    d3.selectAll("." + note)
                      .classed('hidden', false)
                      .each(function(d, i){
                          let pos = this.classList[2];
                          d3.select(this).text(pos);
                      })
                      ;
                      var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                      width = width > 1600 ? 1600 : width;
                      var notesWidth = 800000/width;
                    renderNotes([[this.classList[1], parseInt(this.classList[2])+1]], notesWidth);
                })
                .on("mouseout", function(d) {
                    d3.selectAll(".note")
                      .classed('hidden', false)
                      .each(function(d, i){
                        let note = this.classList[1];
                        d3.select(this).text(note.toUpperCase());
                      });
                      var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                      width = width > 1600 ? 1600 : width;
                      var notesWidth = 800000/width;
                    renderNotes([], notesWidth);
                })
                .append("title").text(note[0].toUpperCase() + superscript[note[1]])
                ;

                group.append("text")
                .attr("class", "note " + note.charAt(0) + " " + note[1] + " " + note.charAt(0) + note.charAt(1))
                .attr("stroke-width", 1)
                // 0.75 is the offset into the fret (higher is closest to fret)
                .attr("x", (absPitch - basePitch + 0.75) * instance.fretWidth)
                .attr("y", (string - 1) * instance.fretHeight + 1 + instance.YMARGIN())
                .attr("dy", 5)
                .attr("dx", -5)
                .attr("font-size", function(){ return instance.fretWidth/4.5 + "px";})
                //.attr("r", 8).style("stroke", color).style("fill", color)
                .text(note[0].toUpperCase()) // + superscript[note[1]])
                .style("fill", "white")
                .style("font-family", "Arial")
                //.style("font-weight", "bold")
                .style("cursor", "pointer")
                .on("mouseover", function(d) {
                    d3.selectAll(".note").classed('hidden', true);
                    let note = this.classList[1];
                    //console.log(note);
                    d3.selectAll("." + note)
                      .classed('hidden', false)
                      .each(function(d, i){
                          let pos = this.classList[2];
                          d3.select(this).text(pos);
                      })
                      ;
                      var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                      width = width > 1600 ? 1600 : width;
                      var notesWidth = 800000/width;
                    renderNotes([[this.classList[1], parseInt(this.classList[2])+1]], notesWidth);
                })
                .on("mouseout", function(d) {
                    d3.selectAll(".note")
                      .classed('hidden', false)
                      .each(function(d, i){
                        let note = this.classList[1];
                        d3.select(this).text(note.toUpperCase());
                      });
                      var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                      width = width > 1600 ? 1600 : width;
                      var notesWidth = 800000/width;
                      renderNotes([], notesWidth);
                })
                .append("title").text(note[0].toUpperCase() + superscript[note[1]])
                ;
            
        }
    };


    instance.addNote = function(note, color) {
        for(string=1; string<=instance.strings; string++) {
            instance.addNoteOnString(note, string, color);
        }
    };


    instance.addNotes = function(notes, color) {
        var allNotes = notes.split(" ");
        for (i=0; i<allNotes.length; i++) {
            var showColor = color || colors[i];
            var note = allNotes[i];
            for (octave=2; octave<7; octave++) {
                instance.addNote(note + octave, showColor);
            }
        }
    };


    instance.scale = function(scaleName) {
        instance.clear();
        instance.addNotes(asNotes(scaleName));
    };


    instance.placeNotes = function(sequence) {
        // Sequence of string:note
        // e.g. "6:g2 5:b2 4:d3 3:g3 2:d4 1:g4"
        instance.clear();
        var pairs = sequence.split(" ");
        pairs.forEach(function(pair, i) {
            let [string, note] = pair.split(":");
            string = parseInt(string);
            instance.addNoteOnString(note, string, i==0? "red":"black");
        });
    };


    instance.clearNotes = function() {
        instance.svgContainer
            .selectAll(".note")
            .remove();
    };


    instance.clear = function() {
        d3.select("#" + id).selectAll(".fretnum,.tuning").remove();
        instance.svgContainer
            .selectAll("line")
            .remove();
        instance.svgContainer
            .selectAll("circle")
            .remove();
        instance.draw();
    };

    instance.delete = function() {
        d3.select("#" + id).remove();
    };

    instance.draw();

    return instance;
};

