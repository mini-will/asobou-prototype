import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: ["一人", "二人以上", "test"],
    todos: [{
        id: 1,
        text: '...',
        done: true
      },
      {
        id: 2,
        text: '...',
        done: false
      }
    ],
    playInfo: [{
      place: null,
      aSureThing: null, // 鉄板遊び
    }],
    count: 0,
    items: ["一人", "二人以上"],
    playPlaces: ["そとであそぶ", "なかであそぶ"],
    playCards: [{
        "id": 1,
        "timestamps": "",
        "inout": "in",
        "category": "うんどう",
        "kanji_name": "筋肉ラジオ体操",
        "display_name": "きんにく らじおたいそう",
        "image_url": "http://img.youtube.com/vi/jPeHKtiFXIg/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=jPeHKtiFXIg",
        "videoId": "jPeHKtiFXIg",
        "number": 2,
        "tool_tags": "",
        "recommend_min_age": 2,
        "time_minutes": 10,
        "description": "description text"
      },
      {
        "id": 2,
        "timestamps": "",
        "inout": "out",
        "category": "うんどう",
        "kanji_name": "縄跳び",
        "display_name": "なわとび",
        "image_url": "http://img.youtube.com/vi/2NNFyE3AtVg/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=2NNFyE3AtVg&t=2s",
        "videoId": "2NNFyE3AtVg",
        "number": 1,
        "tool_tags": "縄跳び",
        "recommend_min_age": 3,
        "time_minutes": 15,
        "description": "description text"
      },
      {
        "id": 3,
        "timestamps": "",
        "inout": "in",
        "category": "うんどう",
        "kanji_name": "【ポケモン公式】「ラジオ体操第一」ピカチュウ＆イシツブテver. -ポケモン Kids TV",
        "display_name": "ポケモンらじおたいそう",
        "image_url": "http://img.youtube.com/vi/f1T5rUipf2M/mqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=f1T5rUipf2M",
        "videoId": "f1T5rUipf2M",
        "number": 1,
        "tool_tags": "",
        "recommend_min_age": 2,
        "time_minutes": 10,
        "description": ""
      },
      {
        "id": 4,
        "timestamps": "",
        "inout": "in",
        "category": "おえかき",
        "kanji_name": "簡単！ミッキーマウス描き方 | How to draw Mickey Mouse ｜ディズニー",
        "display_name": "おえかき みっきー",
        "image_url": "http://img.youtube.com/vi/zaoo8zWT8ek/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=zaoo8zWT8ek&t=8s",
        "videoId": "zaoo8zWT8ek",
        "number": 1,
        "tool_tags": "",
        "recommend_min_age": 2,
        "time_minutes": 10,
        "description": ""
      },
      {
        "id": 5,
        "timestamps": "",
        "inout": "out",
        "category": "うんどう",
        "kanji_name": "カーズ三輪車でお散歩！生後10ヶ月赤ちゃん。Emma Channel. Cars-tricycle for baby.",
        "display_name": "さんりんしゃ",
        "image_url": "http://img.youtube.com/vi/TWE8cjkNNj0/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=TWE8cjkNNj0&t=1s",
        "videoId": "TWE8cjkNNj0",
        "number": 1,
        "tool_tags": "三輪車",
        "recommend_min_age": 1,
        "time_minutes": 15,
        "description": ""
      },
      {
        "id": 6,
        "timestamps": "",
        "inout": "out",
        "category": "うんどう",
        "kanji_name": "ストライダー",
        "display_name": "すとらいだー",
        "image_url": "http://img.youtube.com/vi/lfQpg0a06XE/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=lfQpg0a06XE",
        "videoId": "lfQpg0a06XE",
        "number": 1,
        "tool_tags": "ストライダー",
        "recommend_min_age": 3,
        "time_minutes": 30,
        "description": ""
      },
      {
        "id": 7,
        "timestamps": "",
        "inout": "in",
        "category": "おりがみ",
        "kanji_name": "折り紙『手裏剣』の折り方をどこよりもわかりやすく解説",
        "display_name": "おりがみ しゅりけん",
        "image_url": "http://img.youtube.com/vi/0_Ex9uXFI_A/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=0_Ex9uXFI_A&t=57s",
        "videoId": "0_Ex9uXFI_A",
        "number": 1,
        "tool_tags": "折り紙",
        "recommend_min_age": 3,
        "time_minutes": 15,
        "description": ""
      },
      {
        "id": 8,
        "timestamps": "",
        "inout": "in",
        "category": "おやつ",
        "kanji_name": "お店のふわふわパンケーキ【ホットケーキミックスで簡単♪】Fluffy thick pancake",
        "display_name": "おやつ ほっとけーき",
        "image_url": "http://img.youtube.com/vi/cmAEu9gZQE0/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=cmAEu9gZQE0",
        "videoId": "cmAEu9gZQE0",
        "number": 1,
        "tool_tags": "ホットケーキ粉",
        "recommend_min_age": 3,
        "time_minutes": 30,
        "description": ""
      },
      {
        "id": 9,
        "timestamps": "",
        "inout": "out",
        "category": "うんどう",
        "kanji_name": "ハウステンボスの巨大プール！わいわいビーチで遊んだよ♪",
        "display_name": "ぷーる",
        "image_url": "http://img.youtube.com/vi/wX-SLZ25Dy8/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=wX-SLZ25Dy8",
        "videoId": "wX-SLZ25Dy8",
        "number": 2,
        "tool_tags": "プール",
        "recommend_min_age": 3,
        "time_minutes": 60,
        "description": ""
      },
      {
        "id": 10,
        "timestamps": "",
        "inout": "out",
        "category": "うんどう",
        "kanji_name": "新宿御苑",
        "display_name": "こうえん",
        "image_url": "http://img.youtube.com/vi/23gqL41YZdg/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=23gqL41YZdg",
        "videoId": "23gqL41YZdg",
        "number": 1,
        "tool_tags": "",
        "recommend_min_age": 2,
        "time_minutes": 60,
        "description": ""
      },
      {
        "id": 11,
        "timestamps": "",
        "inout": "in",
        "category": "おやつ",
        "kanji_name": "バナナケーキ",
        "display_name": "ばななけーき",
        "image_url": "http://img.youtube.com/vi/pktkAKsTsyU/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=pktkAKsTsyU",
        "videoId": "pktkAKsTsyU",
        "number": 1,
        "tool_tags": "",
        "recommend_min_age": 3,
        "time_minutes": 15,
        "description": ""
      },
      {
        "id": 12,
        "timestamps": "",
        "inout": "in",
        "category": "おもちゃ",
        "kanji_name": "はじめてのレゴ",
        "display_name": "れご",
        "image_url": "http://img.youtube.com/vi/pjBhEj5DCeI/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=pjBhEj5DCeI",
        "videoId": "pjBhEj5DCeI",
        "number": 1,
        "tool_tags": "レゴ",
        "recommend_min_age": 3,
        "time_minutes": 30,
        "description": ""
      },
      {
        "id": 13,
        "timestamps": "",
        "inout": "in",
        "category": "げーむ",
        "kanji_name": "【人生初】あつまれどうぶつの森遊んでみた！ハート池の島厳選したら地獄でしたw【あつ森】【ヒカキンゲームズ】",
        "display_name": "どうぶつのもり",
        "image_url": "http://img.youtube.com/vi/tM1eKXldWdk/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=tM1eKXldWdk&t=16s",
        "videoId": "tM1eKXldWdk",
        "number": 1,
        "tool_tags": "switch",
        "recommend_min_age": 5,
        "time_minutes": 30,
        "description": "【人生初】あつまれどうぶつの森遊んでみた！ハート池の島厳選したら地獄でしたw【あつ森】【ヒカキンゲームズ】"
      },
      {
        "id": 14,
        "timestamps": "",
        "inout": "in",
        "category": "おりがみ",
        "kanji_name": "ギネス認定[折り紙origami]世界一飛行時間が長い紙飛行機の折り方 The best in the world paper airplane",
        "display_name": "おりがみ ひこうき",
        "image_url": "http://img.youtube.com/vi/A6g5cKAwSRA/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=A6g5cKAwSRA",
        "videoId": "A6g5cKAwSRA",
        "number": 1,
        "tool_tags": "折り紙",
        "recommend_min_age": 3,
        "time_minutes": 15,
        "description": "この紙飛行機は飛行時間がギネスに認定されてる物です！是非みなさんも飛ばしてみたらいかがでしょうか？"
      },
      {
        "id": 15,
        "timestamps": "",
        "inout": "in",
        "category": "うんどう",
        "kanji_name": "【赤ちゃん大喜び】ふれあい遊びうた👶🏻🍼💞【保育園】",
        "display_name": "あそびうた",
        "image_url": "http://img.youtube.com/vi/sLw_W4vnYdw/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=sLw_W4vnYdw",
        "videoId": "sLw_W4vnYdw",
        "number": 1,
        "tool_tags": "",
        "recommend_min_age": 1,
        "time_minutes": 10,
        "description": "★赤ちゃんの首がすわってから\n行ってください！強く握りすぎたり\n無理に関節を曲げたりせずに優しく\nふれあい体操を楽しんでください☺️💓\n赤ちゃんの機嫌が良い時に行いましょう！\n★目と目を合わせたり微笑みかけたり\n語りかけたりしながらスキンシップを\nとることで安心感を与えることができます🐣\n★適度な身体刺激により､こどもの成長に関わる\n手足や指の機能、運動能力などを向上させます💡"
      },
      {
        "id": 16,
        "timestamps": "",
        "inout": "in",
        "category": "うんどう",
        "kanji_name": "赤ちゃんのリトミック体操/ミッキーマウスマーチ①",
        "display_name": "ミッキーマウスマーチ",
        "image_url": "http://img.youtube.com/vi/86hIgLVOAkM/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=86hIgLVOAkM",
        "videoId": "86hIgLVOAkM",
        "number": 1,
        "tool_tags": "",
        "recommend_min_age": 1,
        "time_minutes": 10,
        "description": "0歳からできるリトミックのご紹介です。\n慣れてきたら、音楽に合わせずお母さんのかけ声で触る部位を変えていきましょう。\nタイミングやテンポなどを変え応用していくことによりリトミックの要素が増えていきます！"
      },
      {
        "id": 17,
        "timestamps": "",
        "inout": "in",
        "category": "うんどう",
        "kanji_name": "＜NHK＞2020応援ソング「パプリカ」ダンス ミュージックビデオ",
        "display_name": "ぱぷりか",
        "image_url": "http://img.youtube.com/vi/T0valuAksuo/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=T0valuAksuo",
        "videoId": "T0valuAksuo",
        "number": 1,
        "tool_tags": "",
        "recommend_min_age": 1,
        "time_minutes": 10,
        "description": "「＜NHK＞2020応援ソング プロジェクト」https://sports.nhk.or.jp/dream/song/?...\n「NHK for School＜NHK＞2020応援ソング『パプリカ』」http://www.nhk.or.jp/school/paprika/?...\n\n米津玄師プロデュース！＜NHK＞2020応援ソング「パプリカ」\nこの曲を歌う子どもユニットFoorin（フーリン）によるダンスミュージックビデオ！\n詞・曲・編 ： 米津玄師　　振付 ： 辻本知彦＋菅原小春\nうた ： Foorin\n\n2020年とその先の未来に向かって頑張っているすべての人に贈る応援ソング！\nこのプロジェクトは「東京オリンピック・パラリンピック競技大会組織委員会」によって認証された「東京2020公認プログラム」です。"
      },
      {
        "id": 18,
        "timestamps": "",
        "inout": "in",
        "category": "おえかき",
        "kanji_name": "【0~2歳】汚れない！超簡単！フィンガーペイントとは？【保育園でのやり方・ねらい】",
        "display_name": "ふぃんがーぺいんと",
        "image_url": "http://img.youtube.com/vi/F34N1E2yeE8/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=F34N1E2yeE8",
        "videoId": "F34N1E2yeE8",
        "number": 1,
        "tool_tags": "",
        "recommend_min_age": 1,
        "time_minutes": 30,
        "description": "【0~2歳】汚れない！超簡単！フィンガーペイントとは？【保育園でのやり方・ねらい】"
      },
      {
        "id": 19,
        "timestamps": "",
        "inout": "in",
        "category": "おえかき",
        "kanji_name": "【にじみ絵】超簡単！可愛い！ひなまつり製作【2~3歳児向け】",
        "display_name": "ひなまつり",
        "image_url": "http://img.youtube.com/vi/wKx1L-v16Mw/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=wKx1L-v16Mw",
        "videoId": "wKx1L-v16Mw",
        "number": 1,
        "tool_tags": "",
        "recommend_min_age": 2,
        "time_minutes": 30,
        "description": "【にじみ絵】超簡単！可愛い！ひなまつり製作【2~3歳児向け】"
      },
      {
        "id": 20,
        "timestamps": "",
        "inout": "in",
        "category": "うた",
        "kanji_name": "星野源 - ドラえもん（Live at Tokyo Dome 2019）",
        "display_name": "うた どらえもん",
        "image_url": "http://img.youtube.com/vi/I_Na3ZUUooM/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=I_Na3ZUUooM",
        "videoId": "I_Na3ZUUooM",
        "number": 1,
        "tool_tags": "",
        "recommend_min_age": 1,
        "time_minutes": 10,
        "description": "Netflixにて全世界配信中。星野源『DOME TOUR \"POP VIRUS\" at TOKYO DOME』\nhttp://www.netflix.com/title/81171871\n（LIVE本編のみ配信）\n\n星野源 Blu-ray & DVD 『DOME TOUR “POP VIRUS” at TOKYO DOME』\n https://jvcmusic.lnk.to/dometourpopvi..."
      },
      {
        "id": 21,
        "timestamps": "",
        "inout": "in",
        "category": "おりがみ",
        "kanji_name": "折り紙 ぱくぱく",
        "display_name": "おりがみ ぱくぱく",
        "image_url": "http://img.youtube.com/vi/Do8FX9D2Sac/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=Do8FX9D2Sac",
        "videoId": "Do8FX9D2Sac",
        "number": 1,
        "tool_tags": "折り紙",
        "recommend_min_age": 1,
        "time_minutes": 10,
        "description": "折り紙で「パクパク（ぱくぱく）」を折ってみました。日本伝統の折り紙で、とても簡単に折る事が出来るので、お子様にもオススメです。顔を描くともっとかわいくなるパクパクの折り紙です。ここで使っている折り紙は15cm×15cmの片面折り紙となります。\n\n☆よろしければ動画の評価とコメントをお願いします！"
      },
      {
        "id": 22,
        "timestamps": "",
        "inout": "in",
        "category": "おやつ",
        "kanji_name": "フルーチェ",
        "display_name": "ふるーちぇ",
        "image_url": "http://img.youtube.com/vi/kIqPkaRj90o/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=kIqPkaRj90o",
        "videoId": "kIqPkaRj90o",
        "number": 1,
        "tool_tags": "フルーチェ",
        "recommend_min_age": 1,
        "time_minutes": 15,
        "description": ""
      },
      {
        "id": 23,
        "timestamps": "",
        "inout": "in",
        "category": "おえかき",
        "kanji_name": "アンパンマン♬ 天才脳おしゃべりらくがき教室DXでおえかきしたよ！おとがなるペン！？ばいきんまんもお絵描き♬",
        "display_name": "あんぱんまん おえかき",
        "image_url": "http://img.youtube.com/vi/lAtuSxjQn2c/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=lAtuSxjQn2c",
        "videoId": "lAtuSxjQn2c",
        "number": 1,
        "tool_tags": "",
        "recommend_min_age": 3,
        "time_minutes": 15,
        "description": ""
      },
      {
        "id": 24,
        "timestamps": "",
        "inout": "in",
        "category": "おりがみ",
        "kanji_name": "超簡単！可愛い♡折り紙1枚で牛乳パック風紙袋の作り方",
        "display_name": "おりがみ かみぶくろ",
        "image_url": "http://img.youtube.com/vi/6ZBMe5ZLogI/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=6ZBMe5ZLogI",
        "videoId": "6ZBMe5ZLogI",
        "number": 1,
        "tool_tags": "折り紙",
        "recommend_min_age": 3,
        "time_minutes": 15,
        "description": ""
      },
      {
        "id": 25,
        "timestamps": "",
        "inout": "out",
        "category": "うんどう",
        "kanji_name": "自転車",
        "display_name": "じてんしゃ",
        "image_url": "http://img.youtube.com/vi/GKtlw3w3YHE/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=GKtlw3w3YHE",
        "videoId": "GKtlw3w3YHE",
        "number": 1,
        "tool_tags": "自転車",
        "recommend_min_age": 3,
        "time_minutes": 30,
        "description": ""
      },
      {
        "id": 26,
        "timestamps": "",
        "inout": "out",
        "category": "うんどう",
        "kanji_name": "公園 ブランコ",
        "display_name": "ぶらんこ",
        "image_url": "http://img.youtube.com/vi/47RafczeJ8k/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=47RafczeJ8k",
        "videoId": "47RafczeJ8k",
        "number": 1,
        "tool_tags": "公園",
        "recommend_min_age": 2,
        "time_minutes": 30,
        "description": ""
      },
      {
        "id": 27,
        "timestamps": "",
        "inout": "out",
        "category": "うんどう",
        "kanji_name": "公園 滑り台",
        "display_name": "すべりだい",
        "image_url": "http://img.youtube.com/vi/p37xK5xjL98/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=p37xK5xjL98",
        "videoId": "p37xK5xjL98",
        "number": 1,
        "tool_tags": "応援",
        "recommend_min_age": 2,
        "time_minutes": 30,
        "description": ""
      }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    },
    getPlayCardsByInOut: (state) => (inout) => {
      return state.playCards.filter(playCards => playCards.inout === inout)
    },
    getPlayCardsById: (state) => (id) => {
      return state.playCards.filter(playCards => playCards.id === id)
    },
    // getters内でgetterを参照する
    // getPlayCardsByRandom: (state, getters) => num => {
    //   getters.aaa + num
    // }
    message(state) {
      return state.message
    }
  },
  mutations: {
    increment: function (state) {
      state.count++;
    },
    setMessage(state, payload) {
      state.message = payload.message
    }
  },
  actions: {
    incrementOne: function (context) {
      context.commit('increment');
    },
    doUpdate({
      commit
    }, message) {
      commit('setMessage', {
        message
      })
    }
  },
  modules: {}
})