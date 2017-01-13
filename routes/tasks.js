module.exports = app => {

  const Tasks = app.db.models.Tasks;
  
  app.route('/tasks')
    .get((req, res) => {
      // '/tasks': Lista Tarefas
      Tasks.findAll({})
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    })
    .post((req, res) => {
      // '/tasks': Cadastra uma nova tarefa
      Tasks.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    });

  app.route('/tasks/:id')
    .get((req, res) => {
      // '/tasks': Lista Tarefas
      Tasks.findOne({where: req.params})
        .then(result => {
          if(result){
            res.json(result);
          }else{
            res.sendStatus(404);
          }
        })
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    })
    .put((req, res) => {
      // '/tasks': Cadastra uma nova tarefa
      Tasks.update(req.body, {where: req.params})
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    })
    .delete((req, res) => {
      // '/tasks': Cadastra uma nova tarefa
      Tasks.destroy({where: req.params})
        .then(result => res.sendStatus(204))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    });

};