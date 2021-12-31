const itemsUseCases = require("../../../usecases/items"); 
const errorHandler = require("../../../util/errorHandler"); 

exports.getAllItems = async(req, res, next) => { 
    try {
        const allItems = await itemsUseCases.getAllItems(); 
        return res.status(200).json({ 
            message: "items fetched", 
            status: 1, 
            data: allItems,
        })
    } catch (err) {
       const error = errorHandler.handleError(err); 
       next(error);  
    }
} 

exports.addItem = async(req, res, next) => { 
    try {
        const addedItem = await itemsUseCases.addItem(req.body); 
        return res.status(200).json({ 
            message: "item added", 
            status: 1, 
            data: addedItem,
        })        
    } catch (err) {
       const error = errorHandler.handleError(err); 
       next(error); 
    }
} 

exports.getItem = async(req, res, next) => { 
    try {
        const id = req.params.id;  
        console.log(id); 
        const itemFound = await itemsUseCases.getItem(id); 
        return res.status(200).json({ 
            message: "item fetched", 
            status: 1, 
            data: itemFound,
        })    
    } catch (err) {
       const error = errorHandler.handleError(err); 
       next(error);  
    }
}   

exports.updateItem = async(req, res, next) => { 
    try {
        const id = req.params.id; 
        const updatedItem = await itemsUseCases.updateItem(id, req.body); 
        return res.status(200).json({ 
            message: "item updated", 
            status: 1, 
            data: updatedItem,
        })  
    } catch (err) {
       const error = errorHandler.handleError(err); 
       next(error);  
    }
}

exports.deleteItem = async(req, res, next) => { 
    try {  
        const itemId = req.params.id; 
        await itemsUseCases.deleteItem(itemId);
        return res.status(200).json({ 
            message: "item deleted ", 
            status: 1, 
            data: null,
        })    
    } catch (err) {
       const error = errorHandler.handleError(err); 
       next(error);  
    }
}