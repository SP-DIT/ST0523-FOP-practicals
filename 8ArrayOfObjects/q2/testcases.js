module.exports = {
    testcases: [
        {
            input: [
                [
                    { name: 'Alice', age: 20, grade: 'A' },
                    { name: 'Bob', age: 22, grade: 'B' },
                ],
            ],
            expected:
                '<table><tr><th>name</th><th>age</th><th>grade</th></tr><tr><td>Alice</td><td>20</td><td>A</td></tr><tr><td>Bob</td><td>22</td><td>B</td></tr></table>',
            isPublic: true,
            description: 'Builds table string for two standard student objects',
        },
        {
            input: [
                [
                    { name: 'Charlie', age: 19, grade: 'A' },
                    { name: 'David', age: 21, grade: 'C' },
                ],
            ],
            expected:
                '<table><tr><th>name</th><th>age</th><th>grade</th></tr><tr><td>Charlie</td><td>19</td><td>A</td></tr><tr><td>David</td><td>21</td><td>C</td></tr></table>',
            isPublic: true,
            description: 'Builds table with different student values correctly',
        },
        {
            input: [[{ name: 'Eve', age: 18, grade: 'B' }]],
            expected:
                '<table><tr><th>name</th><th>age</th><th>grade</th></tr><tr><td>Eve</td><td>18</td><td>B</td></tr></table>',
            isPublic: true,
            description: 'Builds table string for a single student object',
        },
        {
            input: [
                [
                    { name: 'Fiona', age: 25, grade: 'A' },
                    { name: 'Gabe', age: 24, grade: 'B' },
                    { name: 'Hui', age: 23, grade: 'C' },
                ],
            ],
            expected:
                '<table><tr><th>name</th><th>age</th><th>grade</th></tr><tr><td>Fiona</td><td>25</td><td>A</td></tr><tr><td>Gabe</td><td>24</td><td>B</td></tr><tr><td>Hui</td><td>23</td><td>C</td></tr></table>',
            isPublic: false,
            description: 'Builds table with three rows in original order',
        },
        {
            input: [
                [
                    { age: 20, name: 'Ian', grade: 'A' },
                    { age: 21, name: 'Jia', grade: 'B' },
                ],
            ],
            expected:
                '<table><tr><th>age</th><th>name</th><th>grade</th></tr><tr><td>20</td><td>Ian</td><td>A</td></tr><tr><td>21</td><td>Jia</td><td>B</td></tr></table>',
            isPublic: false,
            description: 'Uses key order based on first object property order',
        },
        {
            input: [
                [
                    { name: 'Ken', grade: 'A+', age: 22 },
                    { name: 'Lia', grade: 'B+', age: 23 },
                ],
            ],
            expected:
                '<table><tr><th>name</th><th>grade</th><th>age</th></tr><tr><td>Ken</td><td>A+</td><td>22</td></tr><tr><td>Lia</td><td>B+</td><td>23</td></tr></table>',
            isPublic: false,
            description: 'Supports grade values with plus symbols',
        },
        {
            input: [
                [
                    { name: 'Mia Tan', age: 20, grade: 'A' },
                    { name: 'Noah Lee', age: 21, grade: 'B' },
                ],
            ],
            expected:
                '<table><tr><th>name</th><th>age</th><th>grade</th></tr><tr><td>Mia Tan</td><td>20</td><td>A</td></tr><tr><td>Noah Lee</td><td>21</td><td>B</td></tr></table>',
            isPublic: false,
            description: 'Handles names with spaces correctly',
        },
        {
            input: [
                [
                    { name: "O'Neil", age: 19, grade: 'A' },
                    { name: 'Pia', age: 20, grade: 'B' },
                ],
            ],
            expected:
                "<table><tr><th>name</th><th>age</th><th>grade</th></tr><tr><td>O'Neil</td><td>19</td><td>A</td></tr><tr><td>Pia</td><td>20</td><td>B</td></tr></table>",
            isPublic: false,
            description: 'Handles apostrophe in name values correctly',
        },
        {
            input: [
                [
                    { name: 'Quin', age: 17, grade: 'C' },
                    { name: 'Ray', age: 16, grade: 'B' },
                    { name: 'Sara', age: 15, grade: 'A' },
                ],
            ],
            expected:
                '<table><tr><th>name</th><th>age</th><th>grade</th></tr><tr><td>Quin</td><td>17</td><td>C</td></tr><tr><td>Ray</td><td>16</td><td>B</td></tr><tr><td>Sara</td><td>15</td><td>A</td></tr></table>',
            isPublic: false,
            description: 'Keeps input row sequence exactly as provided',
        },
        {
            input: [
                [
                    { name: 'Tim', age: 30, grade: 'A', class: 'X1' },
                    { name: 'Uma', age: 29, grade: 'B', class: 'X2' },
                ],
            ],
            expected:
                '<table><tr><th>name</th><th>age</th><th>grade</th><th>class</th></tr><tr><td>Tim</td><td>30</td><td>A</td><td>X1</td></tr><tr><td>Uma</td><td>29</td><td>B</td><td>X2</td></tr></table>',
            isPublic: false,
            description: 'Handles objects with an additional class column',
        },
        {
            input: [
                [
                    { name: 'Vic', age: 40, grade: 'A' },
                    { name: 'Wen', age: 41, grade: 'A' },
                    { name: 'Xiu', age: 42, grade: 'B' },
                    { name: 'Yan', age: 43, grade: 'C' },
                ],
            ],
            expected:
                '<table><tr><th>name</th><th>age</th><th>grade</th></tr><tr><td>Vic</td><td>40</td><td>A</td></tr><tr><td>Wen</td><td>41</td><td>A</td></tr><tr><td>Xiu</td><td>42</td><td>B</td></tr><tr><td>Yan</td><td>43</td><td>C</td></tr></table>',
            isPublic: false,
            description: 'Builds table correctly for four student rows',
        },
        {
            input: [[{ name: 'Zed', age: 0, grade: 'N/A' }]],
            expected:
                '<table><tr><th>name</th><th>age</th><th>grade</th></tr><tr><td>Zed</td><td>0</td><td>N/A</td></tr></table>',
            isPublic: false,
            description: 'Handles zero age value and symbolic grade text',
        },
        {
            input: [
                [
                    { name: 'Amy', age: 64, grade: 'B' },
                    { name: 'Ben', age: 65, grade: 'C' },
                ],
            ],
            expected:
                '<table><tr><th>name</th><th>age</th><th>grade</th></tr><tr><td>Amy</td><td>64</td><td>B</td></tr><tr><td>Ben</td><td>65</td><td>C</td></tr></table>',
            isPublic: false,
            description: 'Handles adjacent boundary-like numeric ages correctly',
        },
        {
            input: [
                [
                    { name: 'Cal', age: 21, grade: 'A-', homeroom: 'H1' },
                    { name: 'Dan', age: 22, grade: 'B-', homeroom: 'H2' },
                ],
            ],
            expected:
                '<table><tr><th>name</th><th>age</th><th>grade</th><th>homeroom</th></tr><tr><td>Cal</td><td>21</td><td>A-</td><td>H1</td></tr><tr><td>Dan</td><td>22</td><td>B-</td><td>H2</td></tr></table>',
            isPublic: false,
            description: 'Handles hyphenated grade values and extra column',
        },
        {
            input: [
                [
                    { id: 1, name: 'Eli', age: 20, grade: 'A' },
                    { id: 2, name: 'Fay', age: 20, grade: 'B' },
                ],
            ],
            expected:
                '<table><tr><th>id</th><th>name</th><th>age</th><th>grade</th></tr><tr><td>1</td><td>Eli</td><td>20</td><td>A</td></tr><tr><td>2</td><td>Fay</td><td>20</td><td>B</td></tr></table>',
            isPublic: false,
            description: 'Handles numeric id column along with student fields',
        },
        {
            input: [[{ id: 10, grade: 'B', name: 'Gia', age: 19 }]],
            expected:
                '<table><tr><th>id</th><th>grade</th><th>name</th><th>age</th></tr><tr><td>10</td><td>B</td><td>Gia</td><td>19</td></tr></table>',
            isPublic: false,
            description: 'Preserves non-standard key ordering for single row',
        },
        {
            input: [
                [
                    { name: 'Hal', age: 18, grade: 'A' },
                    { name: 'Ivy', age: 18, grade: 'A' },
                ],
            ],
            expected:
                '<table><tr><th>name</th><th>age</th><th>grade</th></tr><tr><td>Hal</td><td>18</td><td>A</td></tr><tr><td>Ivy</td><td>18</td><td>A</td></tr></table>',
            isPublic: false,
            description: 'Handles duplicate value rows without merging them',
        },
        {
            input: [
                [
                    { name: 'Jay', age: 27, grade: 'Pass' },
                    { name: 'Kay', age: 26, grade: 'Merit' },
                    { name: 'Leo', age: 28, grade: 'Distinction' },
                ],
            ],
            expected:
                '<table><tr><th>name</th><th>age</th><th>grade</th></tr><tr><td>Jay</td><td>27</td><td>Pass</td></tr><tr><td>Kay</td><td>26</td><td>Merit</td></tr><tr><td>Leo</td><td>28</td><td>Distinction</td></tr></table>',
            isPublic: false,
            description: 'Handles longer grade words as cell values',
        },
        {
            input: [
                [
                    { name: 'May', age: 31, grade: 'A', section: 'North', campus: 'Main' },
                    { name: 'Ned', age: 30, grade: 'B', section: 'South', campus: 'Main' },
                ],
            ],
            expected:
                '<table><tr><th>name</th><th>age</th><th>grade</th><th>section</th><th>campus</th></tr><tr><td>May</td><td>31</td><td>A</td><td>North</td><td>Main</td></tr><tr><td>Ned</td><td>30</td><td>B</td><td>South</td><td>Main</td></tr></table>',
            isPublic: false,
            description: 'Handles five-column objects and repeated campus value',
        },
        {
            input: [[]],
            expected: '<table></table>',
            isPublic: false,
            description: 'Returns empty table tags for empty input array',
        },
    ],
};
