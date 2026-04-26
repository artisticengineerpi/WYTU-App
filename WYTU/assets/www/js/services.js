angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'မျဖဴ',
    lastText: 'စာရလား??',
    face: 'img/anonymous_female.png',
  },
  {
    id: 1,
    name: 'ေမာင္နီ',
    lastText: 'ေက်ာင္းပိတ္သြားျပီေနာ္??',
    face: 'img/anonymous_male.png'
  }
  ];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
