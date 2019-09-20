var controllers = require('./controllers')
const path = require('path')

module.exports = function(app) {
    app.get('/pets', controllers.getallPets)
    app.get('/pets/:id', controllers.getpet)
    app.post('/pets', controllers.addpet)
    app.put ('/pets/:id', controllers.updatepet)
    app.delete('/pets/:id', controllers.deletepet)
  

    app.put('/petslikes/:id', controllers.addlikes)

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
}