const { Service } = require("../../db/sequelize")



module.exports =(app) =>{
    app.delete('/api/date/:id', (req,res) =>{
        Service.findByPk(req.params.id)
        .then(service =>{
            if(service === null){
                const message = `Le colis demodé n'existe pas.Essayer une autre identifiant`
                return res.status(404).json({message})
            }
            const serviceDeleted =  service;
            return Date.destroy({
                where: {id:service.id}
            })
            .then(_ => {
                const message = `Le date avec l'identifiant n°${serviceDeleted.id} a bien été suprimer`
                res.json({message, data:serviceDeleted})
            })
        })
        .catch(error =>{
            const message =`Le date n'a pas pu supprimer, Réessayer dans quelque instant`
            res.status(500).json({message, data: error})
        })

    })
}