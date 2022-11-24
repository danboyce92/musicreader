import React, { useState } from 'react';

export const questionsArr = 
['Ab1', 'Ab2', 'Ab3', 'A1', 'A2', 'A3', 'A#1', 'A#2', 'A#3', 
'Bb1', 'Bb2', 'Bb3', 'B1', 'B2', 'B3', 
'C1', 'C2', 'C3', 'C#1', 'C#2', 'C#3', 
'Db1', 'Db2', 'D1', 'D2', 'D#1', 'D#2',
'Eb1', 'Eb2', 'E1', 'E2',
'F1', 'F2', 'F#1', 'F#2',
'Gb1', 'Gb2', 'G1', 'G2', 'G#1', 'G#2'
]

export function randomize() {
    let random = Math.floor(Math.random() * 41)
    let result = questionsArr[random];
    let correctAnswer = result.replace(/[0-9]/g, '');
    
    return result;
}
