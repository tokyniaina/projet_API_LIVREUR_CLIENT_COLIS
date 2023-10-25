const { Lieu } = require("../../db/sequelize")



module.exports =(app) =>{
    app.delete('/api/lieu/:id', (req,res) =>{
        Lieu.findByPk(req.params.id)
        .then(lieu =>{
            if(lieu === null){
                const message = `Le lieus demodé n'existe pas.Essayer une autre identifiant`
                return res.status(404).json({message})
            }
            const lieuDeleted =  lieu;
            return Lieu.destroy({
                where: {id:lieu.id}
            })
            .then(_ => {
                const message = `Le lieu avec l'identifiant n°${lieuDeleted.id} a bien été suprimer`
                res.json({message, data:lieuDeleted})
            })
        })
        .catch(error =>{
            const message =`Le lieu n'a pas pu supprimer, Réessayer dans quelque instant`
            res.status(500).json({message, data: error})
        })

    })
}