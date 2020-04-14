TDD: 测试驱动开发 （Test-Driven Development） 先写测试用例 再开发
BDD: 行为驱动开发 (Behavior-Driven Development) 先开发 再写测试用例

断言库：保证最小单元是否正常运行的方法

单元测试：生命周期 使用其在测试前mock数据
    - before
    - beforeEach
    - it
    - after
    - afterEach

自动化单元测试：Karma

生成测试覆盖率：karma-coverage

http接口测试：
    - mocha：测试框架
    - superTest：模拟http请求
    - chai：断言库



mochawesome: 将测试报告以html的形式存放在项目中   ？
    - https://github.com/adamgruber/mochawesome/blob/master/test-programmatic/index.js
glob：   
    - https://www.npmjs.com/package/glob


E2E测试：端到端测试  ?
    - selenium-webdriver 
UI测试：
    - backstopjs
    - f2etest  https://github.com/alibaba/f2etest