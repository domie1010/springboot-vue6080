const base = {
    get() {
        return {
            url : "http://localhost:8080/tushufenxiangpingtai/",
            name: "tushufenxiangpingtai",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/tushufenxiangpingtai/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "闲置图书分享平台"
        } 
    }
}
export default base
