const sqlite3 = require("sqlite3").verbose() // inportação

// Criar Banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

/* db.serialize(() => {
    // Criar tabela
   db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items Text
        );
    `)
    
    const query = `
            INSERT INTO places(
                image,
                name,
                address,
                address2,
                state,
                city,
                items

            ) VALUES(?,?,?,?,?,?,?);
        `
        // inserindo dados
    const values = [
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        "Colectoria",
        "Guilherme Gamballa, Jardim America",
        "Nº 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }
        console.log("Cadastrado com Sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)

    // consultar banco de dados
    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }
        console.log("Seus registros")
        console.log(rows)
    })

    //deletar
    db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
        if(err){
            return console.log(err)
        }
        console.log("Registro deletado com sucesso!")
    })

    
})
*/

