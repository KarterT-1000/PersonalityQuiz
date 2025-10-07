"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { questions } from "../data/questions";
import QuestionCard from "./QuestionCard";

export default function QuizPage() {
    const [current, setCurrent] = useState(1);
    const [answers, setAnswers] = useState<string[]>([]);
    const router = useRouter();

    useEffect(() => {
        if (current > questions.length) {
            //集計して最も多いタイプを計算する
            const typeCount: Record<string, number> = {};
            answers.forEach((type) => {
                typeCount[type] = (typeCount[type] || 0) + 1;
            });

            //頻出するタイプを抽出
            const topType = Object.entries(typeCount).sort((a, b) => b[1] - a[1])[0][0];

            //結果ページに移動
            router.push(`/result/${topType}`);
        }
    }, [current, answers, router]);

    const handeleAnswer = (type: string) => {
        setAnswers((prev) => [...prev, type]);
        setCurrent(current + 1);
    };

    if (current > questions.length) {
        return <div className="text-center text-white">診断結果へ移動中...</div>;
    }

    return (
        <QuestionCard
            question={questions[current - 1]}
            onAnswer={handeleAnswer}
            currentQuestion={current}
            totalQuestions={questions.length}
        />
    );
}