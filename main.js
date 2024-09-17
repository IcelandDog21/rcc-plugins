const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const webDir = path.join(__dirname, 'web');

const newCommand = require("./modules/commands");
const menu = require("./modules/menu");

// 根据文件扩展名设置Content-Type
function getContentType(ext) {
    const types = {
        '.html': 'text/html',
        '.css': 'text/css',
    };
    return types[ext] || 'text/plain';
}

// 创建服务器
const server = http.createServer(async (req, res) => {
    try {
        res.setHeader('Content-Type', 'text/html');

        // 构建文件路径
        let filePath = path.join(webDir, req.url === '/' ? 'index.html' : decodeURIComponent(req.url));

        // 检查文件是否存在
        await fs.access(filePath);

        // 读取文件内容
        const data = await fs.readFile(filePath);
        const ext = path.extname(filePath).toLowerCase();
        res.setHeader('Content-Type', getContentType(ext));
        res.end(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            res.writeHead(404);
            res.end('没有找到文件');
        } else {
            res.writeHead(500);
            res.end('内部服务器错误');
        }
    }
});

server.listen(port, hostname, () => {
    console.log(`网页在 http://${hostname}:${port}/ 开放`);
});

mc.listen("onServerStarted", () => {
    console.log(`
██████╗ ███████╗██████╗ ███████╗████████╗ ██████╗ ███╗   ██╗███████╗
██╔══██╗██╔════╝██╔══██╗██╔════╝╚══██╔══╝██╔═══██╗████╗  ██║██╔════╝
██████╔╝█████╗  ██║  ██║███████╗   ██║   ██║   ██║██╔██╗ ██║█████╗
██╔══██╗██╔══╝  ██║  ██║╚════██║   ██║   ██║   ██║██║╚██╗██║██╔══╝
██║  ██║███████╗██████╔╝███████║   ██║   ╚██████╔╝██║ ╚████║███████╗
╚═╝  ╚═╝╚══════╝╚═════╝ ╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚══════╝
 ██████╗██╗██████╗  ██████╗██╗   ██╗██╗████████╗
██╔════╝██║██╔══██╗██╔════╝██║   ██║██║╚══██╔══╝
██║     ██║██████╔╝██║     ██║   ██║██║   ██║
██║     ██║██╔══██╗██║     ██║   ██║██║   ██║
╚██████╗██║██║  ██║╚██████╗╚██████╔╝██║   ██║
 ╚═════╝╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═╝   ╚═╝
 ██████╗ ██████╗ ███╗   ███╗███╗   ███╗██╗   ██╗███╗   ██╗██╗ ██████╗ █████╗ ████████╗██╗ ██████╗ ███╗   ██╗
██╔════╝██╔═══██╗████╗ ████║████╗ ████║██║   ██║████╗  ██║██║██╔════╝██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║
██║     ██║   ██║██╔████╔██║██╔████╔██║██║   ██║██╔██╗ ██║██║██║     ███████║   ██║   ██║██║   ██║██╔██╗ ██║
██║     ██║   ██║██║╚██╔╝██║██║╚██╔╝██║██║   ██║██║╚██╗██║██║██║     ██╔══██║   ██║   ██║██║   ██║██║╚██╗██║
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║╚██████╔╝██║ ╚████║██║╚██████╗██║  ██║   ██║   ██║╚██████╔╝██║ ╚████║
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝ ╚═════╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝`)
})