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

var notesPerFret = {
    0: [["e", 3], ["a", 3], ["d", 4], ["g", 4], ["b", 4], ["e", 5]],
    1: [["f", 3], ["c", 5], ["f", 5]], 
    2: [["b", 3], ["e", 4], ["a", 4]],
    3: [["g", 3], ["c", 4], ["f", 4], ["d", 5], ["g", 5]],
    4: [["b", 4]],
    5: [["a", 3], ["d", 4], ["g", 4], ["c", 5], ["e", 5], ["a", 5]],
    6: [["f", 5]],
    7: [["b", 3], ["e", 4], ["a", 4], ["d", 5], ["b", 5]],
    8: [["c", 4], ["f", 4], ["g", 4], ["c", 5]],
    9: [["b", 4], ["e", 5]],
   10: [["d", 4], ["g", 4], ["c", 5], ["f", 5], ["a", 5], ["d", 6]],
   11: [[]],
   12: [["e", 4], ["a", 4], ["d", 5], ["g", 5], ["b", 5], ["e", 6]],
   13: [["f", 4], ["c", 6], ["f", 6]], 
   14: [["b", 4], ["e", 5], ["a", 5]],
   15: [["g", 4], ["c", 5], ["f", 5], ["d", 6], ["g", 6]],
   16: [["b", 5]],
   17: [["a", 4], ["d", 5], ["g", 5], ["c", 6], ["e", 6], ["a", 6]],
   18: [["f", 6]],
   19: [["b", 4], ["e", 5], ["a", 5], ["d", 6], ["b", 6]],
   20: [["c", 5], ["f", 5], ["g", 5], ["c", 6]],
   21: [["b", 5], ["e", 5]],
   22: [["d", 5], ["g", 5], ["c", 6], ["f", 6], ["a", 6], ["d", 7]],
   23: [[]],
   24: [["e", 5], ["a", 5], ["d", 6], ["g", 6], ["b", 6], ["e", 7]],

};

var notesPerString = {
    "6:e2": 0, "6:f2": 1, "6:g2": 3, "6:a2": 5, "6:b2": 7, "6:c3": 8,
    "6:d3": 10, "6:e3": 12, "6:f3": 13, "6:g3": 15, "6:a3": 17, "6:b3": 19,
    "6:c4": 20, "6:d4": 22, "6:e4": 24,
    "5:a2": 0, "5:b2": 2, "5:c3": 3, "5:d3": 5, "5:e3": 7, "5:f3": 8,
    "5:g3": 10, "5:a3": 12, "5:b3": 14, "5:c4": 15, "5:d4": 17, "5:e4": 19,
    "5:f4": 20, "5:g4": 22, "5:a4": 24,
    "4:d3": 0, "4:e3": 2, "4:f3": 3, "4:g3": 5, "4:a3": 7, "4:b3": 9,
    "4:c4": 10, "4:d4": 12, "4:e4": 14, "4:f4": 15, "4:g4": 17, "4:a4": 19,
    "4:b4": 21, "4:c5": 22, "4:d5": 24,
    "3:g3": 0, "3:a3": 2, "3:b3": 4, "3:c4": 5, "3:d4": 7, "3:e4": 9, "3:f4": 10,
    "3:g4": 12, "3:a4": 14, "3:b4": 16, "3:c5": 17, "3:d5": 19, "3:e5": 21,
    "3:f5": 22, "3:g5": 24,
    "2:b3": 0, "2:c4": 1, "2:d4": 3, "2:e4": 5, "2:f4": 6, "2:g4": 8, "2:a4": 10,
    "2:b4": 12, "2:c5": 13, "2:d5": 15, "2:e5": 17, "2:f5": 18, "2:g5": 20,
    "2:a5": 22, "2:b5": 24,
    "1:e4": 0, "1:f4": 1, "1:g4": 3, "1:a4": 5, "1:b4": 7, "1:c5": 8,
    "1:d5": 10, "1:e5": 12, "1:f5": 13, "1:g5": 15, "1:a5": 17, "1:b5": 19,
    "1:c6": 20, "1:d6": 22, "1:e6": 24
};

var notesPerRange = {
    "e2": 1, "f2": 1, "g2": 1,
    "a2": 1, "b2": 1, "c3": 2, "d3": 2, "e3": 2, "f3": 2, "g3": 2,
    "a3": 2, "b3": 2, "c4": 3, "d4": 3, "e4": 3, "f4": 3, "g4": 3,
    "a4": 3, "b4": 3, "c5": 4, "d5": 4, "e5": 4, "f5": 4, "g5": 4,
    "a5": 4, "b5": 4, "c6": 5, "d6": 5, "e6": 5
}

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

function renderNotes(note_s, width, frets){

    VF = Vex.Flow;
    width = width > 1530 ? 1530 : width;

    // Create an SVG renderer and attach it to the DIV element named "boo".
    d3.select("#boo").selectAll("*").remove();
    d3.select("#boo").style("margin-top", function(){
        return "-" + (360/frets) + "px";
    });
    var div = document.getElementById("boo");
    var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
    
    // Configure the rendering context.
    renderer.resize(width-20, 200);
    var context = renderer.getContext();
    
    //context.setViewBox(-50 + width/40, 40, 1000 + width*0.8, width*2); //size
    //context.setViewBox(0, 0, 200, 100);
    //context.setFont("Arial", 0, "").setBackgroundFillStyle("#eed");

    var stave = new VF.Stave(55, 60, width-85);
    // Add a clef and time signature.
    //stave.addClef("treble");
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
    var notes_to_be_removed_mapping = {
        5: 11,
        6: 11,
        7: 10,
        8: 9, 
        9: 9,
        10: 8,
        11: 8,
        12: 7,
        13: 6,
        14: 6,
        15: 5,
        16: 5,
        17: 4,
        18: 4,
        19: 3,
        20: 2,
        21: 2,
        22: 1,
        23: 1,
        24: 0
    }
    var notes_to_be_removed = notes_to_be_removed_mapping[frets];
    notes_all.splice(-notes_to_be_removed, notes_to_be_removed);

    $("#text").html(notes_to_be_removed + "###" + notes_all);

    var notes = [];

    notes_all.forEach(function(note, i){
        let n = {keys: [note[0] + '/' + note[1]], duration: '4'};
            

            let sn = new VF.StaveNote(n);
            if(note_s.length > 0){
                var found = false;
                note_s.forEach(function(currNote, k){
                    //console.log('note', note, 'currNote', currNote);
                    if(((currNote[0] == note[0]) && (parseInt(currNote[1]) == parseInt(note[1])))){
                        //console.log("found", currNote, note);
                        found = true;
                        //sn = new VF.GhostNote(n);
                    }
                });
                if(found == false){
                    sn = new VF.GhostNote(n);
                }

            }
            sn.setStyle({fillStyle: noteColors[note[0]], strokeStyle: noteColors[note[0]]});
            let pos_note = parseInt(note[1])-1;
            sn.setAttribute('id', 'stave ' + note[0] + ' ' + pos_note);
            //sn.addModifier(newAnnotation("(8va)"));

            notes.push(sn);
    });

    VF.Formatter.FormatAndDraw(context, stave, notes, false);

    let notesevent = document.getElementsByClassName("vf-stavenote");

    for (var i = 0; i < notesevent.length; i++) {

        let info = notesevent[i].id.split(" ");
        notesevent[i].addEventListener("mouseover", function() {

            d3.selectAll(".note").classed('hidden', true);
            d3.selectAll("." + info[1] + "" + info[2])
            .classed('hidden', false)
            .each(function(d, i){
                let pos = this.classList[2];

                d3.select(this).text(pos);
            })
            ;
            d3.selectAll(".vf-stavenote").style("opacity", 0.2);
            d3.select(this).style("opacity", 1);
            
        });
       
        notesevent[i].addEventListener("mouseout", function(){
            d3.selectAll(".note")
            .classed('hidden', false)
            .each(function(d, i){
              let note = this.classList[1];
              d3.select(this).text(note.toUpperCase());
            });
            d3.selectAll(".vf-stavenote").style("opacity", 1);
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
    //var id = "fretboards-" + Math.floor(Math.random() * 1000000);
    var id = "fretboard";

    var instance = {
        frets: config.frets || 12,
        strings: config.strings || 6,
        tuning: config.tuning || Tunings.E_4ths,
        fretWidth: config.fretWidth || 60,
        fretHeight: config.fretHeight || 24,
        notesWidth: config.notesWidth || 500
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
        d3.select("#fretboard")
                .append("div")
                .attr("id", "fretnumbers");

        var allFrets = [];
        for(j=0; j<=instance.frets; j++) {
            allFrets.push(j);
            let x = j * instance.fretWidth + 1 + instance.XMARGIN();
            instance.svgContainer
                .append("line")
                .attr("x1", x)
                .attr("y1", instance.YMARGIN())
                .attr("x2", x)
                .attr("y2", instance.YMARGIN() + instance.fretboardHeight())
                .attr("stroke", "lightgray")
                .attr("stroke-width", j==0? 8:2);

        }

        instance.svgContainer
                .selectAll('text')
                .data(allFrets)
                .enter()
                .append('text').attr("x", function(d, i) {
                    let x = i * instance.fretWidth + 1 + instance.XMARGIN();
                    let offset = i < 10 ? 33 : 35;
                    if(i == 0){ offset = 20;}
                    return x-offset; 
                })
                .attr("y", function(d, i) { return 170; })
                .text(function(d, i){ return i; })
                .on("mouseover", function(d, i){
                    d3.selectAll(".note").classed('hidden', true);
                    //console.log(".fret" + i);
                    d3.selectAll(".fret" + i).classed('hidden', false);
                    //renderNotes(notesPerFret[5], instance.notesWidth, instance.frets);
                    renderNotes(notesPerFret[i], instance.notesWidth, instance.frets);
                    
                })
                .on("mouseout", function(d, i){
                    d3.selectAll(".note").classed('hidden', false);
                    renderNotes([], instance.notesWidth, instance.frets);
                })
                .attr("cursor", "pointer")
                ;
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
            .attr("cy", instance.fretHeight * 1.57 + instance.YMARGIN())
            .attr("r", instance.fretWidth/9).style("fill", "#ddd");
        p.enter()
            .append("circle")
            .attr("class", "octave")
            .attr("cx", function(d) { return (d - 1) * instance.fretWidth + instance.fretWidth/2 + instance.XMARGIN(); })
            .attr("cy", instance.fretHeight * 3.5 + instance.YMARGIN())
            .attr("r", instance.fretWidth/9).style("fill", "#ddd");
    };


    instance.draw = function() {
        instance.drawFrets();
        instance.drawStrings();
        instance.drawDots();
    };


    // Notes on fretboard

    instance.addNoteOnString = function(note, string, color, posFret) {

        color = noteColors[note[0]];

        var absPitch = absNote(note);
        color = color || "black";
        var absString = (instance.strings - string);
        var basePitch = absNote(instance.tuning[absString]);
        if((absPitch >= basePitch) && (absPitch <= basePitch + instance.frets)) {

           

                var group = instance.svgContainer.append('g')
                                                 .attr("class", "notegroup");

                group.append("circle")
                .attr("class",  function(){
                    var pattern = 'bead';
                    if(note[0] == 'g' || note[0] == 'c' || note[0] == 'f'){ pattern = 'gcf'; }
                    return "note " + note.charAt(0) + " " + note[1] + " " + 
                           note.charAt(0) + note.charAt(1) + " " + pattern + " fret" + posFret
                           + " scale" + notesPerRange[note];
                })
                .attr("stroke-width", 1)
                // 0.75 is the offset into the fret (higher is closest to fret)
                .attr("cx", (absPitch - basePitch + 0.75) * instance.fretWidth)
                .attr("cy", (string - 1) * instance.fretHeight + 1 + instance.YMARGIN())
                .attr("r", instance.fretWidth/6).style("stroke", color).style("fill", color)
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
                    renderNotes([[this.classList[1], parseInt(this.classList[2])+1]], instance.notesWidth, instance.frets);
                })
                .on("mouseout", function(d) {
                    d3.selectAll(".note")
                      .classed('hidden', false)
                      .each(function(d, i){
                        let note = this.classList[1];
                        d3.select(this).text(note.toUpperCase());
                      });
                      renderNotes([], instance.notesWidth, instance.frets);
                })
                .attr("cursor", "pointer")
                ;

                group.append("text")
                .attr("class", function(){
                    var pattern = 'bead';
                    if(note[0] == 'g' || note[0] == 'c' || note[0] == 'f'){ pattern = 'gcf'; }
                    return "note " + note.charAt(0) + " " + note[1] + " " + 
                           note.charAt(0) + note.charAt(1) + " " + pattern + " fret" + posFret
                           + " scale" + notesPerRange[note];
                })
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
                .attr('pointer-events', 'none')
                ;

            
        }
    };


    instance.addNote = function(note, color) {
        for(string=1; string<=instance.strings; string++) {
            var posFret = notesPerString[string + ":" + note];
            instance.addNoteOnString(note, string, color, posFret);
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

    var beadNotes = [
        ['b', 2], ['b', 3], ['b', 4], ['b', 5], ['b', 6],
        ['e', 2], ['e', 3], ['e', 4], ['e', 5], ['e', 6], ['e', 7],
        ['a', 2], ['a', 3], ['a', 4], ['a', 5], ['a', 6],
        ['d', 2], ['d', 3], ['d', 4], ['d', 5], ['d', 6], ['d', 7]
    ];
    var gcfNotes = [
        ['g', 2], ['g', 3], ['g', 4], ['g', 5], ['g', 6],
        ['c', 2], ['c', 3], ['c', 4], ['c', 5], ['c', 6], ['c', 7],
        ['f', 2], ['f', 3], ['f', 4], ['f', 5], ['f', 6]
    ]
    
    d3.select("#bead")
    .on("mouseover", function(){
        d3.selectAll(".note").classed('hidden', true);
        d3.selectAll(".bead").classed('hidden', false);
        renderNotes(beadNotes, instance.notesWidth, instance.frets);
    })
    .on("mouseout", function(){
          d3.selectAll(".note").classed('hidden', false);
          renderNotes([], instance.notesWidth, instance.frets);
    })
    .style('cursor', 'pointer');
    
    d3.select("#gcf")
    .on("mouseover", function(){
          d3.selectAll(".note").classed('hidden', true);
          d3.selectAll(".gcf").classed('hidden', false);
          renderNotes(gcfNotes, instance.notesWidth, instance.frets);
    })
    .on("mouseout", function(){
          d3.selectAll(".note").classed('hidden', false);
          renderNotes([], instance.notesWidth, instance.frets);
    })
    .style('cursor', 'pointer');
    
    d3.select("#enote")
    .on("mouseover", function(){
          d3.selectAll(".note").classed('hidden', true);
          d3.selectAll(".e").classed('hidden', false);
          renderNotes([['e', 3], ['e', 4], ['e', 5], ['e', 6], ['e', 7]], instance.notesWidth, instance.frets);
    })
    .on("mouseout", function(){
          d3.selectAll(".note").classed('hidden', false);
          renderNotes([], instance.notesWidth, instance.frets);
    })
    .style('cursor', 'pointer');

    d3.select("#scale1")
    .on("mouseover", function(){
        d3.selectAll(".note").classed('hidden', true);
        d3.selectAll(".scale1").classed('hidden', false);
        renderNotes([['e', 3], ['f', 3], ['g', 3], ['a', 3], ['b', 3]], instance.notesWidth, instance.frets);
    })
    .on("mouseout", function(){
        d3.selectAll(".note").classed('hidden', false);
        renderNotes([], instance.notesWidth, instance.frets);
    })
    .style('cursor', 'pointer');

    d3.select("#scale2")
    .on("mouseover", function(){
        d3.selectAll(".note").classed('hidden', true);
        d3.selectAll(".scale2").classed('hidden', false);
        renderNotes([['c', 4], ['d', 4], ['e', 4], ['f', 4], ['g', 4], ['a', 4], ['b', 4]], instance.notesWidth, instance.frets);
    })
    .on("mouseout", function(){
        d3.selectAll(".note").classed('hidden', false);
        renderNotes([], instance.notesWidth, instance.frets);
    })
    .style('cursor', 'pointer');

    d3.select("#scale3")
    .on("mouseover", function(){
        d3.selectAll(".note").classed('hidden', true);
        d3.selectAll(".scale3").classed('hidden', false);
        renderNotes([['c', 5], ['d', 5], ['e', 5], ['f', 5], ['g', 5], ['a', 5], ['b', 5]], instance.notesWidth, instance.frets);
    })
    .on("mouseout", function(){
        d3.selectAll(".note").classed('hidden', false);
        renderNotes([], instance.notesWidth, instance.frets);
    })
    .style('cursor', 'pointer');

    d3.select("#scale4")
    .on("mouseover", function(){
        d3.selectAll(".note").classed('hidden', true);
        d3.selectAll(".scale4").classed('hidden', false);
        renderNotes([['c', 6], ['d', 6], ['e', 6]], instance.notesWidth, instance.frets);
    })
    .on("mouseout", function(){
        d3.selectAll(".note").classed('hidden', false);
        renderNotes([], instance.notesWidth, instance.frets);
    })
    .style('cursor', 'pointer');

    d3.select("#scale5")
    .on("mouseover", function(){
        d3.selectAll(".note").classed('hidden', true);
        d3.selectAll(".scale5").classed('hidden', false);
        renderNotes([['a', 6], ['b', 6], ['c', 7], ['d', 7], ['e', 7]], instance.notesWidth, instance.frets);
    })
    .on("mouseout", function(){
        d3.selectAll(".note").classed('hidden', false);
        renderNotes([], instance.notesWidth, instance.frets);
    })
    .style('cursor', 'pointer');

    return instance;
};


