import Mock from 'mockjs';

Mock.mock('http://homelist', {
    'data|1-5': [{
        'href' : '@url',
        'age|1-100': 100,
        'imagename': '@img("320x160",@color,@word)'
    }]
})
Mock.mock('http://homehotmerchant', {
    'data|9': [{
        'merchantid': '@guid',
        'href' : '@url',
        'imagename': '@img("60x60",@color,@word)'
    }]
})
Mock.mock('http://merchantList', {
    'data|1-10': [{
        'merchantid': '@guid',
        'merchantshortname': '@ctitle',
        'businessscopename': '@ctitle',
        'imageid': '@img("320x160",@color,@word)',
        'saleremark1': '@ctitle',
        'saleremark2': '@ctitle'
    }]
})

Mock.mock('http://queryinfo', {
    'data': {
        'merchantshortname': '@ctitle',
        'businessscopename': '@ctitle',
        'imageid': '@img("60x60",@color,@word)',
        'address': '@county(true)',
        'linktel': '@id'
    }
})
Mock.mock('http://dzjList', {
    'data|1-10': [{
        'imageid': '@img("60x60",@color,@word)',
        'ticketshortname': '@ctitle',
        'linktel': '@id',
        'ticketprice': '@float(10, 20, 2, 2)',
        'ticketactprice': '@float(20, 50, 2, 2)',
        'ticketnumber|50-100': 50,
        'cardprice': '@float(20, 50, 2, 2)',
        'ticketbatchid': '@id',
        'merchantid': '@id'
    }]
})
Mock.mock('http://yfkList', {
    'data|1-10': [{
        'imageid': '@img("60x60",@color,@word)',
        'cardshortname': '@ctitle',
        'linktel': '@id',
        'cardprice|+2': 1,
        'radio|+1': 1,
        'cardprice': '@float(20, 50, 2, 2)',
        'cardbatchid': '@id',
        'merchantid': '@id'
    }]
})