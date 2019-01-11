# pathToRegexp-demo

### 乌龙

目标是找到譬如'/whole-2B126'路劲中的2、126参数，如果使用‘/whole-:id(\d+)B:dd(\d+)’是不管用的，
生成的正则都是d+而不是我们所期待\d+

如果换成/whole-:id(\\d+)B:dd(\\d+)，恭喜你，变成了\\d+，就是这么的不尽人意

so...只能用/whole-:id([0-9]+)B:dd([0-9]+)

问题何在？
'(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
发现多次采用非捕获性分组？：先无视它
'(\\:(\\w+)(\\(((\\\\.|[^\\\\()])+)\\))?|\\(((\\\\.|[^\\\\()])+)\\))([+*?])?'
依旧不清楚，把转义去掉
'(\:(\w+)(\(((\\.|[^\\()])+)\))?|\(((\\.|[^\\()])+)\))([+*?])?'
我们似乎看到了\(和\)的配对，这个正是自定义正则的内容
((\\.|[^\\()])+)
貌似没问题啊，如果我用\\d+应该可以输出\d+呀

为此特地在浏览器的console下试了一遍
/(\\.|[^\\()])+/g.exec('\\d+')
输出
 ["\d+", "+", index: 0, input: "\d+", groups: undefined]
完美！！

But，在node下运行同样的代码结果：
[ '\\d+', '+', index: 0, input: '\\d+' ]

原来，终端打印的转义\的时候会再加一层转义
为此特地增加
console.log('\d')
console.log('\\d')
加以测试
输出
d
\d

我们再把原来的模板改成/whole-:id(\\d+)B:dd(\\d+)
输出
[ { name: 'type',
    prefix: '/',
    delimiter: '/',
    optional: false,
    repeat: false,
    partial: true,
    pattern: '[^\\/]+?' },
  { name: 'city',
    prefix: '',
    delimiter: '/',
    optional: false,
    repeat: false,
    partial: false,
    pattern: '\\d+' },
  { name: 'dir',
    prefix: '',
    delimiter: '/',
    optional: false,
    repeat: false,
    partial: false,
    pattern: '\\d+' } ]

至此这段乌龙结束


