const viewProject = async (req, res) => {
    const { id } = req.params;
    const { user } = req;

    try {
        const project = await Project.findById(id).populate('user', 'name email');
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        if (project.user.toString() !== user._id.toString()) {
            return res.status(403).json({ message: 'Not authorized to view this project' });
        }

        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

const updateProject = async (req, res) => {
    const { id } = req.params;
    const { user } = req;
    const { name, description } = req.body;

    try {
        const project = await Project.findById(id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        if (project.user.toString() !== user._id.toString()) {
            return res.status(403).json({ message: 'Not authorized to update this project' });
        }

        project.name = name || project.name;
        project.description = description || project.description;

        await project.save();
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

module.exports = {
    viewProject,
    updateProject,
}