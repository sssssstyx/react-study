export default function topics( topics = {
    loading: true,
    data: []
}, action) { 
    switch(action.type) {
        case "topics_loading":
            return {
                loading: true,
                data: []
            }
        case "topics_loadover":
            return {
                load: false,
                data: action.data
            }
        default:
            return topics;
    }
}