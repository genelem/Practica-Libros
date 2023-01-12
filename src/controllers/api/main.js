const db = require("../../database/models")

module.exports = {
    listBooks: (req, res) => {
        db. Book. findAll()
            . then(books => {
                return res.json({
                    meta: {
                        estado: 200,
                        Total: books. longitud,
                        URL: "API/Books"
                    }, 
                    Datos: books
                })
            })
    
    },
    listAuthors: (req, res) => {
    db. Author. findAll()
    . then(authors => {
        return res.json({
            meta: {
                estado: 200,
                Total: authors. longitud,
                URL: "API/Authors"
            }, 
            Datos: authors
        })
    })

}
 }