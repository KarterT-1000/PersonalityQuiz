import Link from "next/link";
import Image from "next/image";
import React from "react";
import { results } from "../../data/results";

export default async function ResultPage({ params }: { params: { type: string } }) {
    const { type } = await params;
    const result = results[type as keyof typeof results];

    if (!result) {
        return <div className="text-white">エラー：不明なタイプです。</div>
    }

    return (
        <div className="w-full max-w-4xl mx-auto px-4 whitespace-pre-line">
            <div className="bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-700">

                <div className={`bg-gradient-to-r ${result.color} px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 text-white text-center`}>
                    <div className="flex justify-center mb-6">
                        <Image
                            src={result.image}
                            alt={result.title}
                            width={300}
                            height={300}
                        />
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-2">{result.title}</h1>
                    <p className="text-xl sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed px-4">
                        {result.description}
                    </p>
                </div>

                <div className="p-4 sm:p-6 md:p-8">
                    <h2 className={`text-2xl font-bold text-gray-100 mb-6 text-center border-b-2 ${result.color2} inline-block pb-1`}>
                        あなたの特徴
                    </h2>
                    <div className="text-white text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed px-4 whitespace-pre-line">
                        {result.moredes}
                    </div>

                    <h2 className={`text-2xl font-bold text-gray-100 my-8 text-center border-b-2 ${result.color2} inline-block pb-1`}>
                        あなたの成長過程
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-3 text-lg font-semibold text-gray-100">
                        {result.tips.map((tip, index) => (
                            <React.Fragment key={index}>
                                <span>{tip}</span>
                                {index < result.tips.length - 1 && <span className="text-sky-500 text-2xl">→</span>}
                            </React.Fragment>
                        ))}
                    </div>

                    <h2 className={`text-2xl font-bold text-gray-100 my-8 text-center border-b-2 ${result.color2} inline-block pb-1`}>
                        あなたとの相性
                    </h2>

                    <div className="mt-6 grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-100 mb-3 text-center">
                                相性の悪いタイプ
                            </h3>
                            <div className="flex flex-col items-center gap-3">
                                {result.bad.map((key) => {
                                    const target = results[key as keyof typeof results];
                                    return (
                                        <Link
                                            key={key}
                                            href={`/result/${key}`}
                                            className="flex items-center px-4 py-2 bg-gray-700 rounded-xl hover:bg-gray-600 transition"
                                        >
                                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${result.color} mr-3`} />
                                            <span className="text-gray-100 font-medium text-base">
                                                {target.title}
                                            </span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-100 mb-3 text-center">
                                相性の良いタイプ
                            </h3>
                            <div className="flex flex-col items-center gap-3">
                                {result.good.map((key) => {
                                    const target = results[key as keyof typeof results];
                                    return (
                                        <Link
                                            key={key}
                                            href={`/result/${key}`}
                                            className="flex items-center px-4 py-2 bg-gray-700 rounded-xl hover:bg-gray-600 transition"
                                        >
                                            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${result.color} mr-3`} />
                                            <span className="text-gray-100 font-medium text-base">
                                                {target.title}
                                            </span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <h2 className={`text-2xl font-bold text-gray-100 my-8 text-center border-b-2 ${result.color2} inline-block pb-1`}>
                        このタイプへの謝り方
                    </h2>
                    <div className="text-white text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed text-center">
                        {result.sorry}
                    </div>

                    <div className="flex justify-center mt-10">
                        <Link
                            href="/"
                            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition"
                        >
                            もう一度テストする
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}