const { User } = require("../../db/sequelize");

module.exports =(app) =>{
    app.delete('/api/user/:id', (req,res) =>{
        User.findByPk(req.params.id)
        .then(util =>{
            if(util === null){
                const message = `L'utilisateur demodé n'existe pas.Essayer une autre identifiant`
                return res.status(404).json({message})
            }
            const utilDeleted =  util;
            return User.destroy({
                where: {id:util.id}
            })
            .then(_ => {
                const message = `L'utilisateur avec l'identifiant n°${utilDeleted.id} a bien été suprimer`
                res.json({message, data:utilDeleted})
            })
        })
        .catch(error =>{
            const message =`Lèutilisateur n'a pas pu supprimer, Réessayer dans quelque instant`
            res.status(500).json({message, data: error})
        })

    })
}