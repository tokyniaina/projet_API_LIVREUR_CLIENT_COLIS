const { Course } = require("../../db/sequelize")

module.exports =(app) =>{
    app.delete('/api/date/:id', (req,res) =>{
        Course.findByPk(req.params.id)
        .then(course =>{
            if(course === null){
                const message = `Le course demodé n'existe pas.Essayer une autre identifiant`
                return res.status(404).json({message})
            }
            const courseDeleted =  course;
            return Course.destroy({
                where: {id:date.id}
            })
            .then(_ => {
                const message = `Le course avec l'identifiant n°${courseDeleted.id} a bien été suprimer`
                res.json({message, data:courseDeleted})
            })
        })
        .catch(error =>{
            const message =`Le course n'a pas pu supprimer, Réessayer dans quelque instant`
            res.status(500).json({message, data: error})
        })

    })
}