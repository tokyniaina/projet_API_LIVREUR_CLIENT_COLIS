const { Date } = require("../../db/sequelize")



module.exports =(app) =>{
    app.delete('/api/date/:id', (req,res) =>{
        Date.findByPk(req.params.id)
        .then(date =>{
            if(date === null){
                const message = `Le colis demodé n'existe pas.Essayer une autre identifiant`
                return res.status(404).json({message})
            }
            const dateDeleted =  date;
            return Date.destroy({
                where: {id:date.id}
            })
            .then(_ => {
                const message = `Le date avec l'identifiant n°${dateDeleted.id} a bien été suprimer`
                res.json({message, data:dateDeleted})
            })
        })
        .catch(error =>{
            const message =`Le date n'a pas pu supprimer, Réessayer dans quelque instant`
            res.status(500).json({message, data: error})
        })

    })
}