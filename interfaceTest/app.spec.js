//接口测试
const request = require('supertest')
//断言库
const chai = require('chai');  
const assert = chai.assert;    // Using Assert style
// var expect = chai.expect;    // Using Expect style
// var should = chai.should();
const app = require('./app');

//mocha做异步测试

describe('接口测试', function () {

    before((done) => {
        //接口测试之前 如登录之后才能测试
    })

    beforeEach((done) => {
        //每次测试之前都需要执行一次
    })

	it('首页测试', function (done) {
		request(app)
            .get('/')
            .expect(res => {
                // console.log(res);
                assert.equal(res.text,'hello kaka1')
            })
			.expect(200, done)
	})
})
