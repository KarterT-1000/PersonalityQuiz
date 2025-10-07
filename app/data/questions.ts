import { Question } from "../types"

export const questions: Question[] = [
    {
        id: 1,
        text: "みんなとゲームや勝負事をするとき",
        options: [
            { text: "みんなで協力したり一人一人スポットがあたるようにしたい。どうあれ最後はみんな仲良く楽しみたい", type: 'friendly' },
            { text: "負けたくないからちゃんと勝ちを目指すが、それによって負ける人が出ることを忘れがち", type: 'commander' },
            { text: "努力して勝ちを目指すより負けすぎない戦い方をしてゲームのセオリーや楽な勝ち方をさがす", type: 'freedom' },
            { text: "理想的な勝ち方やロマンを追い求める。負けるのは悔しいがそれ以上に納得できる勝利や敗北を好む", type: 'ideal' }
        ]
    },
    {
        id: 2,
        text: "もし大金が入ったら...",
        options: [
            { text: "とりあえず資産価値の高いものを買う", type: 'commander' },
            { text: "でっかい土地を買ってみんなでパーティー！", type: 'friendly' },
            { text: "自分が認めたものにしかお金をかけない。周りからは無駄遣いに見えるようなものでもお金をかけられる", type: 'ideal' },
            { text: "自分が一番住みやすい場所をつくる。そこに自分の好きなものを集める", type: 'freedom' }
        ]
    },
    {
        id: 3,
        text: "あなたの仕事や仲間に対する付き合い方",
        options: [
            { text: "できるだけ仲間とやりたい。頼りたいし頼られたい", type: 'friendly' },
            { text: "効率重視で必要なら周りと協力する", type: 'freedom' },
            { text: "自分の意志は曲げたくない！しかし仲間には優しい", type: 'ideal' },
            { text: "チームでやるなら主導権や意思決定権がほしい。一人でも十分にやれる", type: 'commander' }
        ]
    },
    {
        id: 4,
        text: "性格診断や占いを見聞きしたとき",
        options: [
            { text: "人にきまった型はなく千差万別である", type: 'ideal' },
            { text: "当たっている気がして気にしてしまう", type: 'friendly' },
            { text: "あまり信じないが内容を話題として使ったり、相手に教えたりする", type: 'commander' },
            { text: "怪しさを感じて少し身構える", type: 'freedom' }
        ]
    },
    {
        id: 5,
        text: "あなたに対して後輩がため口のとき",
        options: [
            { text: "なぜ「ため口」がダメなのか説明する。それでもダメならあきらめる", type: 'freedom' },
            { text: "素直に気分が悪くなる。しばらくイライラする", type: 'ideal' },
            { text: "特に気にしない。敬語だと壁を感じてさみしい", type: 'friendly' },
            { text: "心の中で評価を下げた後に理屈的に説明する", type: 'commander' }
        ]
    },
    {
        id: 6,
        text: "相談されたとき",
        options: [
            { text: "解決案をズバッと言う", type: 'commander' },
            { text: "原因を導きだす", type: 'freedom' },
            { text: "「自分なら...」と意見を述べる", type: 'ideal' },
            { text: "とにかく聞き役に徹する", type: 'friendly' }
        ]
    },
    {
        id: 7,
        text: "周りから見たあなたは？",
        options: [
            { text: "ちょっとおせっかいな人", type: 'friendly' },
            { text: "鋭いけど嫌味な人", type: 'commander' },
            { text: "優秀だが頑固者", type: 'ideal' },
            { text: "なんか憎めない人", type: 'freedom' }
        ]
    },
    {
        id: 8,
        text: "この中であなたに近しいのは？",
        options: [
            { text: "効率性が重要で集団行動ではよく周りを見ている", type: 'commander' },
            { text: "効率性が重要で一人でも平気、自分の意思をしっかりもつ", type: 'freedom' },
            { text: "人間関係が重要で集団行動ではサポートが得意", type: 'friendly' },
            { text: "人間関係が重要だが一人でも平気、自分の意思をしっかりもつ", type: 'ideal' }
        ]
    },
    {
        id: 9,
        text: "みんなから頼み事をされると",
        options: [
            { text: "抱え込みすぎて混乱する", type: 'friendly' },
            { text: "無理に抱え込みすぎず適度に断る", type: 'ideal' },
            { text: "できるだけまとめて解決しようとする", type: 'commander' },
            { text: "共通する解決方法をさがす", type: 'freedom' },
        ]
    },
    {
        id: 10,
        text: "相手に褒められると",
        options: [
            { text: "めっちゃよろこぶ", type: 'friendly' },
            { text: "手放しに褒められるのは嫌。きちんと評価されているならとてもうれしい", type: 'freedom' },
            { text: "顔には出さないが内心うれしい。もっと褒められるよう努力する", type: 'commander' },
            { text: "相手によるが、うれしいときは顔にでる", type: 'ideal' }
        ]
    },
    {
        id: 11,
        text: "相手に怒る（キレる）とき",
        options: [
            { text: "なぜ？どうして？完全に理屈的に言い負かす。相手が泣こうが喚こうが意味をもたない", type: "freedom" },
            { text: "感情を基準にして怒る。しかし相手が凹んでしまったら止める。そして相手を激励する", type: "friendly" },
            { text: "ぶちキレる。理屈的に相手を詰めていくし、相手の理屈が正しいなら納得する", type: "commander" },
            { text: "ぶちキレる。理屈、感情の両方から詰めていく。しかしあなたに理屈は通用しない", type: "ideal" },
        ]
    },
];