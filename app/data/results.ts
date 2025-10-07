import type { PersonalityType } from "../types";

export const results: Record<PersonalityType, {
    title: string;
    description: string;
    color: string;
    color2: string;
    image: string;
    moredes: string;
    good: string[]
    bad: string[];
    tips: string[];
    sorry: string;
}> = {
    friendly: {
        title: "注目型-タヌキ-",
        description: "あなたは人と関わることが好きで、誰とでもすぐ打ち解ける性格です。",
        color: "from-green-500 to-teal-600",
        color2: "border-green-500",
        image: "/tanuki.png",
        moredes: "みんなと仲良くしたい、人から尊敬されたり好かれたい欲望があります\n感情豊かで相手の感情にも鋭敏です。平和主義的な性格で意識的に人を怒らせることはなく、周囲への気配りやサポートが得意です\n嫌なことや思い出を溜め込む傾向があり、ため込みすぎると爆発することがあります ➡ 激しく怒る又は鬱へ",
        good: ["commander"],
        bad: ["freedom"],
        tips: ["泣き虫タヌキ", "みんなのタヌキ", "親分たぬき"],
        sorry: "注目型への謝罪方法は泣きおどしです\nこのタイプに対しては感情的に謝罪し続けると相手に悪気が生まれくるので和解が早い傾向があります",
    },
    commander: {
        title: "司令型-ヘビ-",
        description: "あなたはリーダーシップがあり、決断力が高く周囲を引っ張ります。",
        color: "from-blue-500 to-indigo-600",
        color2: "border-blue-500",
        image: "/cobra.png",
        moredes: "勝ち負けをはっきりさせる性格、負けるのが大嫌いです\nむやみに人間関係は広げません。友人との話し合いでも率先してしゃべることはありませんが一言のセンスが鋭い傾向があります\nツンデレ気質の仲間思いです。最終的には上手く相手の懐に入り込んでいます",
        good: ["freedom"],
        bad: ["ideal"],
        tips: ["腰ぎんちゃくヘビ", "牙を隠したヘビ", "指導者の蛇"],
        sorry: "司令型への謝罪方法は物か金をもって深く謝る\nこのタイプは金や物で貸し借りを作って納得させるのが一番早いです",
    },
    freedom: {
        title: "法則型-サル-",
        description: "あなたは束縛を嫌い 自分の理論や感覚を大切にするマイペース型です",
        color: "from-purple-500 to-pink-600",
        color2: "border-purple-500",
        image: "/saru.png",
        moredes: "理由や合理性がないことは苦手、言語化が得意で立ち回りが上手です\n基本的に自由を求め行動します\n自分の意思をしっかりもっていて物事の割り切りが早いです\nその一方で人や物事への見切りも早い傾向があります",
        good: ["ideal"],
        bad: ["friendly"],
        tips: ["嫌味なサル", "世渡り上手なサル", "賢者猿"],
        sorry: "法則型への謝罪方法は原因と対策を考え理論的に伝えることです\nこのタイプは泣きおどしや金銭では通用しません\n納得してもらうには事前に対策を考えておく必要があります",
    },
    ideal: {
        title: "理想型-トラ-",
        description: "あなたは理想を掲げ正々堂々と戦います。",
        color: "from-orange-500 to-red-600",
        color2: "border-orange-500",
        image: "/tora.png",
        moredes: "上下関係や礼儀を重んじます。嘘や見栄で語るより本音で語るほうが楽です\n自分なりの理想像(内なる神)を持っており、その理想に近づきたい欲求があります。また同じ理想を持つ人に対して仲間意識が強いです",
        good: ["friendly"],
        bad: ["commander"],
        tips: ["気難しいトラ ", "不屈のトラ", "思想家の虎"],
        sorry: "理想型への謝罪方法は、\n「私はどうしてあなたの気持ちを理解できていなかったんだ！」\nと共感・理解を伝えることです\nこのタイプは怒っている原因がわかりずらいです、たいてい知らない間に相手の理想や理念を汚したことが原因になるので理解を主軸に謝り倒すようにしましょう",
    },
};
