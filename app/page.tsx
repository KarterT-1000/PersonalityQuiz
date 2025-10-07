//import Image from "next/image";
import Link from "next/link";
import { FaceSmileIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="w-full max-w-2xl p-6 mx-auto text-center px-4">
      <div className="bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border border-gray-700">
        <div className="mb-8">
          <div>
            <FaceSmileIcon className="text-blue-400 mx-auto w-auto h-auto" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-300 mb-4">
            4タイプ診断テスト
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed px-2">
            あなたの性格タイプが4タイプのどれか判定しましょう
          </p>
        </div>

        <div className="mb-8 space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-300">
            <div className="flex items-center text-sm sm:text-base">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
              <span>所要時間: 約3分</span>
            </div>
            <div className="flex items-center text-sm sm:text-base">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
              <span>11問の質問</span>
            </div>
          </div>
          <p className="text-gray-300 text-sm sm:text-base px-2">
            各質問に直感的に答えることで、より正確な結果が得られます
          </p>
        </div>

        <Link href="/quiz">
          <button className="flex items-center justify-center mx-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium text-base sm:text-lg shadow-lg hover:shadow-xl w-full sm:w-auto">
            テストを始める
          </button>
        </Link>
      </div>
    </div>
  );
}
