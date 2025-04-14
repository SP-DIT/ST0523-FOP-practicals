/**
 * Given a root note, return the notes of the major scale.
 * The major scale is a diatonic scale made up of seven distinct notes.
 * The pattern for a major scale is:
 * 1. Whole step
 * 2. Whole step
 * 3. Half step
 * 4. Whole step
 * 5. Whole step
 * 6. Whole step
 * 7. Half step
 *
 * Examples of half step: C -> C#, D -> D#, F -> F#, G -> G#, A -> A#
 * Examples of whole step: C -> D, D -> E, F -> G, G -> A, A -> B
 * The list of notes are: C, C#, D, D#, E, F, F#, G, G#, A, A#, B
 * Note that there is no E# and B#.
 *
 * You can think of whole step as moving two steps to the right and half step as moving one step to the right.
 * The list of notes is circular, so after B, it goes back to C.
 *
 * @param {string} rootNote - The root note of the scale.
 * @returns {string[]} - The notes of the major scale.
 *
 * @example
 * musicScale('C'); // ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']
 * musicScale('G'); // ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G']
 * musicScale('D'); // ['D', 'E', 'F#', 'G', 'A', 'B', 'C#', 'D]
 *
 * @hint
 * Whole step = +2
 * Half step = +1
 * The list of notes are: C, C#, D, D#, E, F, F#, G, G#, A, A#, B
 * Whole step:     C-->D
 * Half step :     C->C#
 * Whole step:     E-->F#
 * Half step :     G->G#
 */
function musicScale(rootNote) {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const steps = [2, 2, 1, 2, 2, 2, 1];
    const scale = [];
    const rootIndex = notes.indexOf(rootNote);
    let currentIndex = rootIndex;
    scale.push(notes[currentIndex]);
    for (let i = 0; i < steps.length; i++) {
        currentIndex += steps[i];
        if (currentIndex >= notes.length) {
            currentIndex -= notes.length;
        }
        scale.push(notes[currentIndex]);
    }
    return scale;
}

// Your own test cases
// e.g.;

console.log(musicScale('C')); // ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];

// To test your code against the test cases: node run.js q3
// To test your code against custom input: node ./q3/code.js

module.exports = musicScale;
