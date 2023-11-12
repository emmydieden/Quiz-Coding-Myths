import { create } from "zustand";

// The array of questions for the quiz.
export const questions = [
  {
    id: 1,
    questionText:
      "Coding requires advanced math skills to be successful.",
    options: [
      "Truth", "Myth"
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 2,
    questionText:
      "You can become a proficient coder in just a few days.",
    options: [
      "Truth", "Myth"
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 3,
    questionText:
      "Coding is a solitary activity, and you don't need to collaborate with others.",
    options: [
      "Truth", "Myth"
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 4,
    questionText:
      "Learning to code is a linear process, and you must follow a strict sequence of topics.",
    options: [
      "Truth", "Myth"
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 5,
    questionText:
      "You need a powerful and expensive computer to start coding.",
    options: [
      "Truth", "Myth"
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 6,
    questionText:
      "Learning to code can enhance problem-solving and critical thinking skills.",
    options: [
      "Truth", "Myth"
    ],
    correctAnswerIndex: 0,
  },
  {
    id: 7,
    questionText:
      "There is only one 'best' programming language to learn.",
    options: [
      "Truth", "Myth"
    ],
    correctAnswerIndex: 1,
  },
  
];

export const responses = [
  { score: 0, text: "Boo-hoo! You suck at this spooky quiz🪦" },
  { score: 1, text: "Boo-hoo! Time to haunt the Halloween library 👻📚" },
  { score: 2, text: "Boo-hoo! Time to haunt the Halloween library 👻📚" },
  {
    score: 3, text: "Boo! You can do better with some more Halloween knowledge 👻📚",
  },
  {
    score: 4,
    text: "You're getting there, but the spirits are not impressed 👻",
  },
  {
    score: 5,
    text: "You might need a witch's brew to improve your score! 🧪🧙‍♀️",
  },
  {
    score: 6,
    text: "Your Halloween knowledge is in the cauldron, brewing and improving! 🎃📚⚗️",
  },
  { score: 7, text: "You've got a graveyard of knowledge on Halloween! 🦴🩻🪦" },
  { score: 8, text: "Impressive! You're a Halloween aficionado 🧛🦇" },
  { score: 9, text: "You're so spooky-smart, it's scary! 🤓👻" },
  { score: 10, text: "You're a Halloween wizard! 🫶🎃✨" },
];

// This is the main state store for the quiz. It contains the variable "questions", an array empty for the answers, a default index of 0 for the "currentQuestionIndex" and a default state of false for the variable "quizOver"
export const useQuizStore = create((set) => ({
  questions,
  responses,
  answers: [],
  errorMessage: null, // Adds errorMessage to the store instead of using useState
  setErrorMessage: (message) => set({ errorMessage: message }), // Adds setErrorMessage function to the store instead of using useState
  currentQuestionIndex: 0,
  score: 0, // Adds score to the store
  quizOver: false,

  // q = question - This function takes a question id and an answer index, validates them, and then updates the answers array with the user's answer.
  submitAnswer: (questionId, answerIndex) => {
    const question = questions.find((q) => q.id === questionId);

    // Throws an error if there is no question found
    if (!question) {
      throw new Error(
        "Could not find question! Check to make sure you are passing the question id correctly."
      );
    }

    // Throws an error if the answerIndex isn't in the array of possible answers
    if (question.options[answerIndex] === undefined) {
      throw new Error(
        `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
      );
    }

    // State is updated for the answers array. The set-function takes a callback-function as an argument, which receives the current state as a parameter.
    set((state) => ({
      // Answers array is updated. Creates a new array that includes all the current answers, and adds a new answer to the end of it.
      answers: [
        ...state.answers,
        // Here comes the new answers object
        {
          questionId, // the questions id
          answerIndex, // the index of the selected answer
          question, // the question object
          answer: question.options[answerIndex], // the text of the selected answer, comes from the options using the answerIndex
          isCorrect: question.correctAnswerIndex === answerIndex, // A boolean indicating whether the selected answer is correct. Determined by comparing the answerIndex with the correctAnswerIndex in the question object.
        },
      ],
      // Increase the score if the answer is correct
      score:
        question.correctAnswerIndex === answerIndex
          ? state.score + 1
          : state.score,
    }));
  },

  // This function increments the currentQuestionIndex to move to the next question. If there are no more questions, it sets quizOver to true.
  goToNextQuestion: () => {
    set((state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        return { quizOver: true };
      } else {
        return { currentQuestionIndex: state.currentQuestionIndex + 1 };
      }
    });
  },

  // This function resets the answers array, currentQuestionIndex, and quizOver to their initial states.
  restart: () => {
    set({
      answers: [],
      currentQuestionIndex: 0,
      quizOver: false,
      score: 0,
      responses: responses,
    });
  },
}));