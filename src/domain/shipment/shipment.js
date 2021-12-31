function makeShipmentFactory(errorHandler) { 
    return function shipmentFactory( 
        { 
            id, 
            item_id, 
            arrival_date = new Date(),
            arrived = false, 
            address,     
            address_lat, 
            address_lng,
            shipment_mode,
        }) { 
        if(id == null) { 
            errorHandler.createAndThrowError("id is required", 404);  
        } 
        if(item_id == null) { 
            errorHandler.createAndThrowError("item id is required", 404);  
        } 

        if(address == null) { 
            errorHandler.createAndThrowError("address is required", 404);  
        }  

        if(address_lat == null) { 
            errorHandler.createAndThrowError("address_lat is required", 404);  
        }  

        if(address_lng == null) { 
            errorHandler.createAndThrowError("address_lng is required", 404);  
        } 

        
        
        return Object.freeze({ 
            id, 
            item_id, 
            arrival_date, 
            arrived, 
            address, 
            address_lat, 
            address_lng, 
            shipment_mode
        })
    }
} 

module.exports = makeShipmentFactory; 