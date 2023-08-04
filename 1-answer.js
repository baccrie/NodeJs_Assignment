process = require('process')
path = require('path')
os = require('os')


console.log(process.cwd())
console.log(path.sep)
console.log(path.basename('yusuf.jpg', '.jpg'))
console.log(process.pid);
console.log(os.userInfo());
console.log(os.platform());
