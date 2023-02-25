// creating an array and passing the number, questions, options, and answers
let questions = [

  {
    numb: 1,
    question: "Qual o nome da língua utilizada pelos surdos no Brasil?",
    answer: "Língua Brasileira de Sinais",
    options: [
    "Língua Gestual Portuguesa",
    "Língua de Sinais Americana",
    "Língua Brasileira de Sinais",
    "Língua de Sinais Espanhola"
    ]
    },
    
    {
    numb: 2,
    question: "Quantas pessoas utilizam a Língua Brasileira de Sinais no Brasil?",
    answer: "cerca de 2 milhões",
    options: [
    "cerca de 100 mil",
    "cerca de 500 mil",
    "cerca de 1 milhão",
    "cerca de 2 milhões"
    ]
    },
    
    {
    numb: 3,
    question: "Em que ano foi reconhecida a Língua Brasileira de Sinais como oficial no Brasil?",
    answer: "2002",
    options: [
    "1990",
    "1995",
    "2002",
    "2010"
    ]
    },
    
    {
    numb: 4,
    question: "Qual é a diferença entre a Língua Brasileira de Sinais e a Língua Gestual Portuguesa?",
    answer: "são línguas diferentes com sinais diferentes",
    options: [
    "são a mesma língua com sinais diferentes",
    "são línguas diferentes com sinais diferentes",
    "são a mesma língua com sinais iguais",
    "são línguas diferentes com sinais iguais"
    ]
    },
    
    {
    numb: 5,
    question: "Qual a importância da Língua Brasileira de Sinais na inclusão social dos surdos?",
    answer: "permite a comunicação e a participação na sociedade",
    options: [
    "não tem importância",
    "é apenas uma curiosidade",
    "permite a comunicação e a participação na sociedade",
    "é uma barreira para a inclusão social"
    ]
    },
    
    {
    numb: 6,
    question: "Qual a diferença entre a Língua Brasileira de Sinais e a mímica?",
    answer: "a Língua Brasileira de Sinais é uma língua com gramática e estrutura próprias, enquanto a mímica é uma linguagem gestual improvisada",
    options: [
    "a Língua Brasileira de Sinais é uma língua internacional, enquanto a mímica é uma língua local",
    "a Língua Brasileira de Sinais é uma língua com gramática e estrutura próprias, enquanto a mímica é uma linguagem gestual improvisada",
    "a Língua Brasileira de Sinais é uma língua escrita, enquanto a mímica é uma língua falada",
    "a Língua Brasileira de Sinais é uma língua antiga, enquanto a mímica é uma linguagem moderna"
    ]
    },
    
    {
    numb: 7,
    question: "Qual é a importância do intérprete de Libras na inclusão social dos surdos?",
    answer: "facilita a comunicação entre surdos e ouvintes em situações diversas",
    options: [
    "não tem importância",
    "é apenas uma opção para os surdos",
    "dificulta a comunicação dos surdos",
    "facilita a comunicação entre surdos e ouvintes em situações diversas"
    ]
    },
    
    {
    numb: 8,
    question: "Quais os benefícios de aprender a Língua Brasileira de Sinais?",
    answer: "amplia a comunicação e promove a inclusão social",
    options: [
    "não tem benefícios",
    "é apenas uma curiosidade",
    "dificulta a comunicação",
    "amplia a comunicação e promove a exclusão social"
    ]
    },
    
    {
    numb: 9,
    question: "Qual a importância da Língua Brasileira de Sinais na educação dos surdos?",
    answer: "permite que os surdos tenham acesso à educação de qualidade",
    options: [
    "não tem importância",
    "é apenas uma opção",
    "dificulta a educação dos surdos",
    "permite que os surdos tenham acesso à educação de qualidade"
    ]
    },
    
    {
    numb: 10,
    question: "Quais os desafios enfrentados pelos surdos na sociedade?",
    answer: "a falta de acessibilidade e de compreensão da língua de sinais",
    options: [
    "não há desafios",
    "são tratados com igualdade",
    "a falta de acessibilidade e de compreensão da língua de sinais",
    "são tratados com exclusividade"
    ]
    },
    
    {
    numb: 11,
    question: "Qual o papel do governo na promoção da inclusão social dos surdos?",
    answer: "garantir o acesso à educação, saúde, trabalho e outros direitos",
    options: [
    "não tem papel",
    "apenas fornecer intérpretes de Libras",
    "garantir o acesso à educação, saúde, trabalho e outros direitos",
    "promover a exclusão social"
    ]
    },
    
    {
    numb: 12,
    question: "O que é o alfabeto manual da Língua Brasileira de Sinais?",
    answer: "um sistema de sinais que representam as letras do alfabeto",
    options: [
    "um sistema de números em sinais",
    "um sistema de sinais que representam as cores",
    "um sistema de sinais que representam as emoções",
    "um sistema de sinais que representam as letras do alfabeto"
    ]
    },
    
    {
    numb: 13,
    question: "Qual a importância da Língua Brasileira de Sinais na cultura surda?",
    answer: "é uma forma de expressão e identidade cultural",
    options: [
    "não tem importância",
    "é uma forma de imitação da cultura ouvinte",
    "dificulta a comunicação",
    "é uma forma de expressão e identidade cultural"
    ]
    },
    
    {
    numb: 14,
    question: "Qual a origem da Língua Brasileira de Sinais?",
    answer: "é uma língua autóctone, criada e desenvolvida pelos surdos brasileiros",
    options: ["uma língua estrangeira, importada de outros países",
    "uma língua criada pelos ouvintes para os surdos",
    "uma língua criada pelos índios brasileiros",
    "é uma língua autóctone, criada e desenvolvida pelos surdos brasileiros"
    ]
    },
    
    {
    numb: 15,
    question: "Quais os direitos dos surdos garantidos pela lei brasileira?",
    answer: "o direito à acessibilidade e à inclusão social",
    options: [
    "nenhum direito é garantido por lei",
    "o direito de serem excluídos da sociedade",
    "o direito de não terem acesso à educação",
    "o direito à acessibilidade e à inclusão social"
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