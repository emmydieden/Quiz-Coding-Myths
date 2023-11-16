import { create } from "zustand";

// The array of questions for the quiz.
export const questions = [
  {
    id: 1,
    questionText:
      "You Need To Be A Genius To Code",
    options: [
      "Truth", "Myth"
    ],
    correctAnswerIndex: 1,
    answerType: "a myth", 
    answerText: "Anyone with the desire and willingness to work hard can learn to code. It's more about dedication, creativity, and problem-solving."
  },
  {
    id: 2,
    questionText:
      "Coding Is Boring",
    options: [
      "Truth", "Myth"
    ],
    correctAnswerIndex: 1,
    answerType: "a myth", 
    answerText: "Coding is about creativity and building useful things. It can be applied to various industries, making it far from boring."
  },
  {
    id: 3,
    questionText:
      "It's never too Late To Learn To Code",
    options: [
      "Truth", "Myth"
    ],
    correctAnswerIndex: 0,
    answerType: "true", 
    answerText: "It’s never too late to learn to code, as the demand for coding skills continues to rise. There are resources and bootcamps available for people of all ages."
  },
  {
    id: 4,
    questionText:
      "You Need To Be Good At Math",
    options: [
      "Truth", "Myth"
    ],
    correctAnswerIndex: 1,
    answerType: "a myth", 
    answerText: "While math is important in some areas of coding, you don't need to be a math expert for most coding tasks. Basic algebra is usually sufficient."
  },
  {
    id: 5,
    questionText:
      "Once You Master A Language, You’re Done Learning",
    options: [
      "Truth", "Myth"
    ],
    correctAnswerIndex: 1,
    answerType: "true", 
    answerText: "Coding is continuously evolving, and you must keep learning and adapting to stay current with best practices."
  },
  {
    id: 6,
    questionText:
      "One Language Is Better Than The Rest",
    options: [
      "Truth", "Myth"
    ],
    correctAnswerIndex: 1,
    answerType: "a myth", 
    answerText: "Each programming language has its purpose and strengths. The choice of language depends on the specific task and personal preference."
  },
  {
    id: 7,
    questionText:
      "I don’t have To Go To A University To Learn Code",
    options: [
      "Truth", "Myth"
    ],
    correctAnswerIndex: 0,
    answerType: "true", 
    answerText: " While university degrees can be valuable, there are many online resources, interactive learning platforms, and coding bootcamps that can help you learn coding efficiently and effectively."
  },
  
];

export const responses = [
  { score: 0, text: "You've encountered some coding myths. Time to debunk them with more learning! Learn more about coding myths by reading these articles." },
  { score: 1, text: "You're on the right track, but there's more to discover in the world of coding! Explore further by reading articles on coding myths." },
  { score: 2, text: "Not bad! You've got a good grasp of coding myths, but there's always more to explore. Enhance your knowledge by reading articles on coding myths." },
  { score: 3, text: "Great job! You've successfully navigated through coding myths. Keep expanding your knowledge! Consider reading more articles on coding myths for deeper insights." },
  { score: 4, text: "Impressive! You're well-informed about coding myths. Keep up the good work! Dive deeper into the subject by reading additional articles on coding myths." },
  { score: 5, text: "Fantastic! You've mastered the knowledge about coding myths. Keep challenging yourself! Stay updated by reading the latest articles on coding myths." },
  { score: 6, text: "Exceptional! Your understanding of coding myths is commendable. Keep advancing in your coding journey! Explore advanced topics by reading insightful articles on coding myths." },
  { score: 7, text: "Bravo! You're a coding myth buster. Your knowledge is outstanding! Share your expertise and continue learning by reading more articles on coding myths." },
];

// This is the main state store for the quiz. It contains the variable "questions", an array empty for the answers, a default index of 0 for the "currentQuestionIndex" and a default state of false for the variable "quizOver"
export const useQuizStore = create((set) => ({
  questions,
  responses,
  answers: [],
  showNextButton: false, 
  setShowNextButton: (state) => set({showNextButton: state}),
  showAnswer: false, //DELETE LATER? 
  setShowAnswer: (state) => set({ showAnswer: state}), //DELETE LATER? 
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