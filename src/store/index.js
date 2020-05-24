import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playInfo: [{
      place: null,
      aSureThing: null,
    }],
    count: 0,
    items: ["Foo", "Bar", "Fizz", "Buzz"],
    playPlaces: ["そとであそぶ", "なかであそぶ"],
    playCards: [{
        "id": 1,
        "timestamps": "",
        "inout": "in",
        "category": "げーむ",
        "kanji_name": "Switch どうぶつの森",
        "display_name": "Switch どうぶつのもり",
        "image_url": "http://img.youtube.com/vi/YO-wTijsPcs/hqdefault.jpg",
        "refe_link": "https://www.youtube.com/watch?v=YO-wTijsPcs&t=53s",
        "number": 1,
        "tool_tags": "switch",
        "recommend_min_age": 5,
        "time_minutes": 30,
        "description": "test"
      },
      {
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
      }
    ]
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