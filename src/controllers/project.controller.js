import Project from '../models/Project';

export async function getProjects(req, res) {
    try {
    const projects = await Project.findAll();
        res.json({
            data: projects
        });
    } catch(e) {
        console.log(e);
    }
};

export async function createProject(req, res) {
    const { name, priority, description, datecreate } = req.body;
    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            datecreate
        }, {
            fields: ['name', 'priority', 'description', 'datecreate']
        });
        if (newProject) {
           return res.json({
                message: 'Criado com sucesso',
                data: newProject
        });
    }
    } catch(error) {
        res.status(500).json({
                message: 'Algo deu errado',
                data: {}
        });
    }
};

export async function getOneProject(req, res) {
    const { id } = req.params;
    const project = await Project.findOne({
        where: {
            id
        }
    });
    res.json(project);
};

export async function deleteProject(req, res) {
    const { id } = req.params;
    const deleteRowCount = await Project.destroy({
        where: {
            id
        }
    });
    res.json({
        message: 'Deletado com sucesso!',
        count: deleteRowCount
    });
};

export async function updateProject(req, res) {
    const { id } = req.params;
    const { name, priority, description, datecreate } = req.body;

    const projects = await Project.findAll({
        attributes: ['id', 'name', 'priority', 'description', 'datecreate'],
        where: {
            id
        }
    });

    if(projects.lenght > 0) {
        projects.forEach(async project => {
            name,
            priority,
            description,
            datecreate
        });
    }

    return res.json({
        message: 'Atualizado com sucesso!',
        data: projects
    })
}