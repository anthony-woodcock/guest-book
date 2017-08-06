var comments = document.querySelectorAll('li')

comments.forEach(function (name){
  name.addEventListener('click', function (event) {
    var id = event.target.dataset.id

        var request = new XMLHttpRequest()

            request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                location.href = '/'
            }
            }
            request.open('DELETE', '/')
            request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
            request.send('id=' + id)
  })
})

//delete method is only deleting the name but deletes the comment as well. line 3