const { LivreurStatu } = require("../../db/sequelize")


module.exports =(app) =>{
    app.delete('/api/livreurstatu/:id', (req,res) =>{
        LivreurStatu.findByPk(req.params.id)
        .then(livstatu =>{
            if(livstatu === null){
                const message = `Le lieus demodé n'existe pas.Essayer une autre identifiant`
                return res.status(404).json({message})
            }
            const livstatuDeleted =  livstatu;
            return LivreurStatu.destroy({
                where: {id:livstatu.id}
            })
            .then(_ => {
                const message = `Le lieu avec l'identifiant n°${livstatuDeleted.id} a bien été suprimer`
                res.json({message, data:livstatuDeleted})
            })
        })
        .catch(error =>{
            const message =`Le lieu n'a pas pu supprimer, Réessayer dans quelque instant`
            res.status(500).json({message, data: error})
        })

    })
}