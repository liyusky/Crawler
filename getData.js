const request = require('request');

var options = {
    url: 'https://www.lagou.com/jobs/positionAjax.json?needAddtionalResult=false&isSchoolJob=0',
    headers: {
        'Host': 'www.lagou.com',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh,zh-TW;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        // 'Content-Length': 37,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': '_ga=GA1.2.411841991.1518059177; user_trace_token=20180208110558-fc75824b-0c7c-11e8-af9a-5254005c3644; LGUID=20180208110558-fc758740-0c7c-11e8-af9a-5254005c3644; index_location_city=%E5%85%A8%E5%9B%BD; JSESSIONID=ABAAABAACBHABBI77F5C7C264B11BA4A343AA45005B9908; _gid=GA1.2.1757836318.1518707063; Hm_lvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1518059177,1518707063,1518715757; TG-TRACK-CODE=index_search; Hm_lpvt_4233e74dff0ae5bd0a3d81c6ccf756e6=1518720509; LGRID=20180216024824-cd902bf0-1280-11e8-8a78-525400f775ce; SEARCH_ID=edc49fbc0c3e444da9477ea948332106',    
        'DNT': 1,
        'Origin': 'https://www.lagou.com',
        'Pragma': 'no-cache',
        'Referer': 'https://www.lagou.com/jobs/list_%E5%89%8D%E7%AB%AF?labelWords=&fromSearch=true&suginput=',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
        'X-Anit-Forge-Code': 0,
        'X-Anit-Forge-Token': 'None',
        'X-Requested-With': 'XMLHttpRequest',
    }
};

request(options, (error, response, body) => {
    console.log(error);
    console.log(response);
    console.log(body);
});