import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
      aSureThing: null,
    }],
    count: 0,
    items: ["一人", "二人以上"],
    playPlaces: ["そとであそぶ", "なかであそぶ"],
    playCards: [{
        "id": 2,
        "timestamps": "",
        "inout": "in",
        "category": "うんどう",
        "kanji_name": "筋肉ラジオ体操",
        "display_name": "きんにく らじおたいそう",
        "image_url": "http://img.youtube.com/vi/jPeHKtiFXIg/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=jPeHKtiFXIg",
        "number": 2,
        "tool_tags": "",
        "recommend_min_age": 2,
        "time_minutes": 10,
        "description": "description text"
      },
      {
        "id": 3,
        "timestamps": "",
        "inout": "out",
        "category": "うんどう",
        "kanji_name": "縄跳び",
        "display_name": "なわとび",
        "image_url": "http://img.youtube.com/vi/2NNFyE3AtVg/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=2NNFyE3AtVg&t=2s",
        "number": 1,
        "tool_tags": "縄跳び",
        "recommend_min_age": 3,
        "time_minutes": 15,
        "description": "description text"
      },
      {
        "id": 4,
        "timestamps": "",
        "inout": "in",
        "category": "うんどう",
        "kanji_name": "【ポケモン公式】「ラジオ体操第一」ピカチュウ＆イシツブテver. -ポケモン Kids TV",
        "display_name": "ポケモンらじおたいそう",
        "image_url": "http://img.youtube.com/vi/f1T5rUipf2M/mqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=f1T5rUipf2M",
        "number": 1,
        "tool_tags": "",
        "recommend_min_age": 2,
        "time_minutes": 10,
        "description": ""
      },
      {
        "id": 5,
        "timestamps": "",
        "inout": "in",
        "category": "おえかき",
        "kanji_name": "簡単！ミッキーマウス描き方 | How to draw Mickey Mouse ｜ディズニー",
        "display_name": "おえかき みっきー",
        "image_url": "http://img.youtube.com/vi/zaoo8zWT8ek/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=zaoo8zWT8ek&t=8s",
        "number": 1,
        "tool_tags": "",
        "recommend_min_age": 2,
        "time_minutes": 10,
        "description": ""
      },
      {
        "id": 6,
        "timestamps": "",
        "inout": "out",
        "category": "うんどう",
        "kanji_name": "カーズ三輪車でお散歩！生後10ヶ月赤ちゃん。Emma Channel. Cars-tricycle for baby.",
        "display_name": "さんりんしゃ",
        "image_url": "http://img.youtube.com/vi/TWE8cjkNNj0/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=TWE8cjkNNj0&t=1s",
        "number": 1,
        "tool_tags": "三輪車",
        "recommend_min_age": 1,
        "time_minutes": 15,
        "description": ""
      },
      {
        "id": 7,
        "timestamps": "",
        "inout": "out",
        "category": "うんどう",
        "kanji_name": "ストライダー",
        "display_name": "すとらいだー",
        "image_url": "http://img.youtube.com/vi/lfQpg0a06XE/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=lfQpg0a06XE",
        "number": 1,
        "tool_tags": "ストライダー",
        "recommend_min_age": 3,
        "time_minutes": 30,
        "description": ""
      },
      {
        "id": 8,
        "timestamps": "",
        "inout": "in",
        "category": "おりがみ",
        "kanji_name": "折り紙『手裏剣』の折り方をどこよりもわかりやすく解説",
        "display_name": "おりがみ しゅりけん",
        "image_url": "http://img.youtube.com/vi/0_Ex9uXFI_A/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=0_Ex9uXFI_A&t=57s",
        "number": 1,
        "tool_tags": "折り紙",
        "recommend_min_age": 3,
        "time_minutes": 15,
        "description": ""
      },
      {
        "id": 9,
        "timestamps": "",
        "inout": "in",
        "category": "おやつ",
        "kanji_name": "お店のふわふわパンケーキ【ホットケーキミックスで簡単♪】Fluffy thick pancake",
        "display_name": "おやつ ほっとけーき",
        "image_url": "http://img.youtube.com/vi/cmAEu9gZQE0/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=cmAEu9gZQE0",
        "number": 1,
        "tool_tags": "ホットケーキ粉",
        "recommend_min_age": 3,
        "time_minutes": 30,
        "description": ""
      },
      {
        "id": 10,
        "timestamps": "",
        "inout": "out",
        "category": "うんどう",
        "kanji_name": "ハウステンボスの巨大プール！わいわいビーチで遊んだよ♪",
        "display_name": "ぷーる",
        "image_url": "http://img.youtube.com/vi/wX-SLZ25Dy8/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=wX-SLZ25Dy8",
        "number": 2,
        "tool_tags": "プール",
        "recommend_min_age": 3,
        "time_minutes": 60,
        "description": ""
      },
      {
        "id": 11,
        "timestamps": "",
        "inout": "out",
        "category": "うんどう",
        "kanji_name": "新宿御苑",
        "display_name": "こうえん",
        "image_url": "http://img.youtube.com/vi/23gqL41YZdg/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=23gqL41YZdg",
        "number": 1,
        "tool_tags": "",
        "recommend_min_age": 2,
        "time_minutes": 60,
        "description": ""
      },
      {
        "id": 12,
        "timestamps": "",
        "inout": "in",
        "category": "おやつ",
        "kanji_name": "バナナケーキ",
        "display_name": "ばななけーき",
        "image_url": "http://img.youtube.com/vi/pktkAKsTsyU/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=pktkAKsTsyU",
        "number": 1,
        "tool_tags": "",
        "recommend_min_age": 3,
        "time_minutes": 15,
        "description": ""
      },
      {
        "id": 13,
        "timestamps": "",
        "inout": "in",
        "category": "おもちゃ",
        "kanji_name": "はじめてのレゴ",
        "display_name": "れご",
        "image_url": "http://img.youtube.com/vi/pjBhEj5DCeI/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=pjBhEj5DCeI",
        "number": 1,
        "tool_tags": "レゴ",
        "recommend_min_age": 3,
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
    // getters内でgetterを参照する
    // getPlayCardsByRandom: (state, getters) => num => {
    //   getters.aaa + num
    // }
  },
  mutations: {
    increment: function (state) {
      state.count++;
    }
  },
  actions: {
    incrementOne: function (context) {
      context.commit('increment');
    }
  },
  modules: {}
})