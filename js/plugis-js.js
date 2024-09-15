var newcommands = {
    sdl: "是大佬",
    ssb: "是傻逼",
    sds: "是大神",
    tql: "太强了"
}

// 互动指令
mc.listen("onServerStarted", function () {
    for (let command in newcommands) {
        const cmds = mc.newCommand(`${command}`, `${newcommands[command]}`, PermType.Any)
        cmds.optional('Player', ParamType.Player)
        cmds.overload(['Player']);
        cmds.setCallback(function (_cmd, ori, out, res) {
            try {
                if (res.Player != undefined) {
                    let pl_name = res.Player[0].realName
                    mc.broadcast(` ${pl_name} ${newcommands[command]}`, 1)
                } else {
                    mc.broadcast(`${newcommands[command]}`, 1)
                }
            } catch (error) {
                let name = ori.player.name;
                name.tell("此玩家不存在")
            }
        });
        cmds.setup();
    }
})

var newcommands2 = {
    wbs: "我不是",
    awsl: "啊我死了",
    shen: "神!",
    pa: "啪!",
    damn: "damn!",
}


mc.listen("onServerStarted", function () {
    for (let command in newcommands2) {
        const cmds = mc.newCommand(`${command}`, `${newcommands2[command]}`, PermType.Any)
        cmds.setCallback(function (_cmd, ori, out, _res) {
            mc.broadcast(newcommands2[command])
        });
        cmds.overload([]);
        cmds.setup();
    }
})
