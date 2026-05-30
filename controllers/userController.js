import User from "../models/User.js";
import listControl from "../models/ListControl.js";

export const createUser = async (req, res) => {
    try {
        const { name } = req.body;
        
        if (!name) {
            return res.status(400).json({
                message: "El nombre es requerido"
            });
        }
        
        const user = new User({ name });
        await user.save();
        
        res.status(201).json({
            message: "Usuario creado exitosamente",
            data: {
                id: user._id,
                name: user.name
            }
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export const addToWhitelist = async (req, res) => {
    try {
        const { userId } = req.body;
        
        if (!userId) {
            return res.status(400).json({
                message: "El userId es requerido"
            });
        }
        
        const userExists = await User.findById(userId);
        if (!userExists) {
            return res.status(404).json({
                message: "Usuario no encontrado en la base de datos"
            });
        }
        
        const result = listControl.addToWhitelist(userId);
        
        res.status(200).json({
            message: result ? "Usuario agregado a whitelist" : "Usuario ya está en whitelist",
            lists: listControl.getLists()
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const addToBlacklist = async (req, res) => {
    try {
        const { userId } = req.body;
        
        if (!userId) {
            return res.status(400).json({
                message: "El userId es requerido"
            });
        }
        
        const userExists = await User.findById(userId);
        if (!userExists) {
            return res.status(404).json({
                message: "Usuario no encontrado en la base de datos"
            });
        }
        
        const result = listControl.addToBlacklist(userId);
        
        res.status(200).json({
            message: result ? "Usuario agregado a blacklist" : "Usuario ya está en blacklist",
            lists: listControl.getLists()
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getLists = (req, res) => {
    try {
        res.status(200).json({
            lists: listControl.getLists()
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}