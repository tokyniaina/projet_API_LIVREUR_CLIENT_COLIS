const { Colis } = require("../../db/sequelize")


module.exports =(app) =>{
    app.delete('/api/coli/:id', (req,res) =>{
        Colis.findByPk(req.params.id)
        .then(coli =>{
            if(coli === null){
                const message = `Le colis demodé n'existe pas.Essayer une autre identifiant`
                return res.status(404).json({message})
            }
            const coliDeleted =  coli;
            return Colis.destroy({
                where: {id:coli.id}
            })
            .then(_ => {
                const message = `Le coli avec l'identifiant n°${coliDeleted.id} a bien été suprimer`
                res.json({message, data:coliDeleted})
            })
        })
        .catch(error =>{
            const message =`Le coli n'a pas pu supprimer, Réessayer dans quelque instant`
            res.status(500).json({message, data: error})
        })

    })
}