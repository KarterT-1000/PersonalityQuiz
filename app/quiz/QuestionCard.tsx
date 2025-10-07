import { Question } from "../types";

interface QuestionCardProps {
    question: Question;
    onAnswer: (type: string) => void;
    currentQuestion: number;
    totalQuestions: number;
}

export default function QuestionCard({ question, onAnswer, currentQuestion, totalQuestions }: QuestionCardProps) {
    return (
        <div className="w-full p-6 max-w-2xl mx-auto px-4">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-200 mb-2">
                    <span>質問 {currentQuestion}</span>
                    <span>{totalQuestions} 問中</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
                    />
                </div>
            </div>

            {/* Question Card */}
            <div className="bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-700">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-100 mb-6 sm:mb-8 text-center leading-relaxed px-2">
                    {question.text}
                </h2>

                <div className="space-y-3 sm:space-y-4">
                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => onAnswer(option.type)}
                            className="w-full p-4 sm:p-5 md:p-6 text-left bg-gray-700 hover:bg-gradient-to-r hover:from-blue-900/50 hover:to-purple-900/50 rounded-xl border-2 border-transparent hover:border-blue-400 transition-all duration-300 group"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-sm sm:text-base md:text-lg text-gray-100 group-hover:text-blue-200 font-medium pr-4 leading-relaxed">
                                    {option.text}
                                </span>
                                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-gray-500 group-hover:border-blue-400 transition-colors duration-300 flex-shrink-0" />
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};