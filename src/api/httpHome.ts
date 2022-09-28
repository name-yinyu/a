import request from "@/utils/request";
export let home_http=function(){
    return request.get('/api/v2/activity/news',{params:{'uid':121014,'api-version':2}})
}