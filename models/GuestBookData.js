var randomID = require('random-id')

function GuestBookData(){
    this._items = []
}

GuestBookData.prototype = {
    getComments: function (){
        return this._items
    },
    addComment: function (name, comment) {
     this._items.push({
         id: randomID(),
         name: name,
         comment: comment
     })       
    },
    removeComment: function (id) {
        this._items = this._items.filter(function (name){
            return name.id !== id
        })
    }
}

var guestBookDatas = new GuestBookData()

/*
guestBookDatas.addItem('Ant Woodcock','Lorem ipsum dolor sit amet, consectetur adipiscing elit')
guestBookDatas.addItem('John Smith', 'Donec lacinia pretium lacus et elementum. Mauris lacinia ')
guestBookDatas.addItem('Mary Jane', 'at nulla. Maecenas hendrerit lacinia dolor, id eleme')
*/
module.exports = guestBookDatas