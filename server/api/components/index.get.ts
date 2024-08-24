

export default defineEventHandler(async (event) => {
	
    if(!event.context.user){

        return [
            {...marketing},
            {...ecommerce},
            {...applicationUI}
        ];
    }


});