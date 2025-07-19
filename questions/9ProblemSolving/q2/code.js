/**
 * You are given an array of file names to be saved.
 *
 * Since two files cannot have the same name, if you enter a file name that was previously used,
 * the system will add ONE suffix addition to its name in the form of (k), where, k is the smallest positive integer such that the obtained name remains unique.
 * If the file name to be added already has a suffix, the system will add a new suffix to it instead of overwriting the existing one.
 *
 * @param {string[]} files - An array of strings where each string is a file name.
 * @returns {string[]} - An array of strings where each string is the unique file name after saving.
 *
 * @example
 * getFilenames(['file', 'file', 'file']);
 * Output: ['file', 'file(1)', 'file(2)']
 *
 * getFilenames(['onepiece','onepiece(1)','onepiece(2)','onepiece(3)','onepiece'])
 * Output: ['onepiece','onepiece(1)','onepiece(2)','onepiece(3)','onepiece(4)']
 *
 * getFilenames(['gta','gta(2)','gta','gta']])
 * Output: ['gta','gta(2)','gta(1)','gta(4)']
 *
 * getFilenames(['pikachu', 'pikachu(1)', 'pikachu(1)', 'pikachu(1)'])
 * Output: ['pikachu', 'pikachu(1)', 'pikachu(1)(1)', 'pikachu(1)(2)']
 *
 * @explanation
 * For the first example:
 * - "file" --> not assigned before, remains "file"
 * - "file" --> already assigned, becomes "file(1)"
 * - "file" --> already assigned, system adds (k), since "file(1)" is also assigned, system puts k=2, becoming "file(2)"
 *
 * For the second example:
 * - "onepiece" --> not assigned before, remains "onepiece"
 * - "onepiece(1)" --> not assigned before, remains "onepiece(1)"
 * - "onepiece(2)" --> not assigned before, remains "onepiece(2)"
 * - "onepiece(3)" --> not assigned before, remains "onepiece(3)"
 * - "onepiece" --> already assigned, system adds (k), the smallest positive valid k is 4, becoming "onepiece(4)"
 *
 * For the third example:
 * - "gta" --> not assigned before, remains "gta"
 * - "gta(2)" --> not assigned before, remains "gta(2)"
 * - "gta" --> already assigned, system adds (k), the smallest positive valid k is 1, becoming "gta(1)"
 * - "gta" --> already assigned, system adds (k), the smallest positive valid k is 3, becoming "gta(3)"
 *
 * For the fourth example:
 * - "pikachu" --> not assigned before, remains "pikachu"
 * - "pikachu(1)" --> not assigned before, remains "pikachu(1)"
 * - "pikachu(1)" --> already assigned, system adds (k), the smallest positive valid k is 1, becoming "pikachu(1)(1)"
 * - "pikachu(1)" --> already assigned, system adds (k), the smallest positive valid k is 2, becoming "pikachu(1)(2)"
 * Note: When a conflict is found, it does not modify any existing suffix but adds a new suffix.
 */
function getFilenames(files) {}

// Your own test cases
// e.g.;

console.log(getFilenames(['file', 'file', 'file'])); //['file', 'file(1)', 'file(2)']

module.exports = getFilenames;
