// creating an array and passing the number, questions, options, and answers
let questions = [

  {    numb: 1,    question: "Was ist das Verb in diesem Satz? 'Ich spiele gern Fußball.'",    answer: "spiele",    options: [      "gern",      "Fußball",      "spiele",      "Ich"    ]
  },
  {
    numb: 2,
    question: "Was ist das Subjekt in diesem Satz? 'Mein Hund bellt laut.'",
    answer: "Mein Hund",
    options: [
      "bellt",
      "Mein Hund",
      "laut",
      "Mein"
    ]
  },
  {
    numb: 3,
    question: "Wie nennt man die Grundform des Verbs? (z.B. 'gehen' statt 'ging')",
    answer: "Infinitiv",
    options: [
      "Konjunktiv",
      "Futur",
      "Präteritum",
      "Infinitiv"
    ]
  },
  {
    numb: 4,
    question: "Was ist das Akkusativobjekt in diesem Satz? 'Ich esse einen Apfel.'",
    answer: "einen Apfel",
    options: [
      "Ich",
      "esse",
      "einen Apfel",
      "Apfel"
    ]
  },
  {
    numb: 5,
    question: "Welches Wort ist ein Artikel? (z.B. 'der', 'die', 'das')",
    answer: "die",
    options: [
      "gehen",
      "schnell",
      "die",
      "schön"
    ]
  },
  {
    numb: 6,
    question: "Was ist ein Adjektiv?",
    answer: "ein Wort, das ein Substantiv oder Pronomen näher beschreibt",
    options: [
      "ein Wort, das eine Handlung beschreibt",
      "ein Wort, das eine Person beschreibt",
      "ein Wort, das eine Frage stellt",
      "ein Wort, das ein Substantiv oder Pronomen näher beschreibt"
    ]
  },
  {
    numb: 7,
    question: "Was ist ein Pronomen?",
    answer: "ein Wort, das ein Nomen ersetzen kann",
    options: [
      "ein Wort, das eine Handlung beschreibt",
      "ein Wort, das eine Person beschreibt",
      "ein Wort, das eine Frage stellt",
      "ein Wort, das ein Nomen ersetzen kann"
    ]
  },

  {
    numb: 8,
    question: "Was ist das Subjekt in diesem Satz? 'Meine Eltern sind sehr nett.'",
    answer: "Meine Eltern",
    options: [
      "Meine",
      "Eltern",
      "sind",
      "Meine Eltern sind sehr nett."
    ]
  },

  {
    numb: 9,
    question: "Was ist das Prädikat in diesem Satz? 'Ich trinke gerne Kaffee.'",
    answer: "trinke gerne Kaffee",
    options: [
      "Ich",
      "trinke",
      "gerne",
      "trinke gerne Kaffee"
    ]
  },
  {
    numb: 10,
    question: "Was ist ein Nomen?",
    answer: "ein Wort, das eine Person, einen Ort oder eine Sache bezeichnet",
    options: [
      "ein Wort, das eine Handlung beschreibt",
      "ein Wort, das eine Person beschreibt",
      "ein Wort, das eine Frage stellt",
      "ein Wort, das eine Person, einen Ort oder eine Sache bezeichnet"
    ]
  },
  {
    numb: 11,
    question: "Was ist ein Verb?",
    answer: "ein Wort, das eine Handlung oder einen Zustand ausdrückt",
    options: [
      "ein Wort, das eine Person beschreibt",
      "ein Wort, das eine Frage stellt",
      "ein Wort, das eine Sache bezeichnet",
      "ein Wort, das eine Handlung oder einen Zustand ausdrückt"
    ]
  },
  {
    numb: 12,
    question: "Was ist ein Adverb?",
    answer: "ein Wort, das ein Verb, Adjektiv oder Adverb näher beschreibt",
    options: [
      "ein Wort, das eine Handlung beschreibt",
      "ein Wort, das eine Person beschreibt",
      "ein Wort, das eine Frage stellt",
      "ein Wort, das ein Verb, Adjektiv oder Adverb näher beschreibt"
    ]
  },
  {
    numb: 13,
    question: "Was ist ein Präposition?",
    answer: "ein Wort, das eine räumliche oder zeitliche Beziehung ausdrückt",
    options: [
      "ein Wort, das eine Handlung beschreibt",
      "ein Wort, das eine Person beschreibt",
      "ein Wort, das eine Frage stellt",
      "ein Wort, das eine räumliche oder zeitliche Beziehung ausdrückt"
    ]
  },
  {
    numb: 14,
    question: "Was ist ein Konjunktion?",
    answer: "ein Wort, das Wörter, Sätze oder Satzteile verbindet",
    options: [
      "ein Wort, das eine Handlung beschreibt",
      "ein Wort, das eine Person beschreibt",
      "ein Wort, das eine Frage stellt",
      "ein Wort, das Wörter, Sätze oder Satzteile verbindet"
    ]
  },
  {
    numb: 15,
    question: "Was ist ein Satz?",
    answer: "eine grammatische Einheit, die aus einem Subjekt und einem Prädikat besteht",
    options: [
      "eine Person, ein Ort oder eine Sache",
      "eine Handlung oder ein Zustand",
      "eine grammatische Einheit, die aus einem Subjekt und einem Prädikat besteht",
      "ein Wort, das ein Verb, Adjektiv oder Adverb näher beschreibt"
    ]
  }

];

/*
I need 3 English questions with 4 options each. The topic is: simple grammar questions for begginers. 
The following structure must be followed:

{
    numb: "number",
    question: "question goes here",
    answer: "correct answer goes here, exactly how it is in the option",
    options: [
    "option 1",
    "option 2",
    "option 3",
    "option 4"
    ]
    },

    */