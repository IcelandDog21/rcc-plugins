const { PAPI } = require('../../GMLIB-LegacyRemoteCallApi/lib/BEPlaceholderAPI-JS');

// 生存服
mc.listen("onServerStarted", () => {
    const cmd = mc.newCommand("survival", "生存服|Survival Server", PermType.Any);
    cmd.setAlias("c");
    cmd.setCallback((_cmd, ori, _out, res) => {
        ori.player.transServer("61.183.42.66", 50267)
    });
    cmd.overload([]);
    cmd.setup();
})

// 假人
mc.listen("onServerStarted", () => {
    const DUMMY = mc.newCommand("dummy", "生成假人|spawn dummy", PermType.GameMasters);
    DUMMY.setAlias("spl");
    DUMMY.setEnum("add", ["add"]);
    DUMMY.setEnum("remove", ["remove"]);
    DUMMY.mandatory("str", ParamType.String);
    DUMMY.optional("spmode", ParamType.Int, "spmode", 1);
    DUMMY.mandatory("player", ParamType.Player);
    DUMMY.mandatory("add", ParamType.Enum, "add", 1);
    DUMMY.mandatory("remove", ParamType.Enum, "remove", 1);
    DUMMY.overload(["add", "str", "spmode"]);
    DUMMY.overload(["remove", "player"]);
    DUMMY.setCallback((_cmd, ori, out, res) => {
        let pla = ori.player;
        let pos = pla.pos;

        if (res.add == "add") {
            let spl = mc.spawnSimulatedPlayer(res.str, pos)
            if (res.spmode == 0) spl.setGameMode(0);
            if (res.spmode == 1) spl.setGameMode(1);
            if (res.spmode == 2) spl.setGameMode(2);
        }
        if (res.remove == "remove") {
            try {
                let sp = res.player[0];
                if (!sp.isSimulatedPlayer()) return pla.tell("§4你应该选择一个假人");
                sp.simulateDisconnect()
            } catch (e) {
                pla.tell("这个假人不存在");
            }
        }
    });
    DUMMY.setup();
});

// TPS
mc.listen("onServerStarted", () => {
    const TPS = mc.newCommand("tps", "TPS", PermType.GameMasters);
    TPS.setCallback((_cmd, ori, out, res) => {
        let server_tps = PAPI.translateString("%server_tps_colored_2%", ori.player);
        if (!ori.player) { log(server_tps) };
        if (ori.player) { ori.player.tell(`${server_tps}`) };
    });
    TPS.overload([]);
    TPS.setup();
});

// ping
mc.listen("onServerStarted", () => {
    const PING = mc.newCommand("ping", "Ping", PermType.Any);
    PING.setCallback((_cmd, ori, out, res) => {
        let ping = ori.player.getDevice().avgPing
        if (ping <= 100) { ping = "§a" + ping }
        if (ping > 100 && ping <= 200) { ping = "§e" + ping }
        if (ping > 200) { ping = "§c" + ping }
        ori.player.tell(ping + "§rms")
    });
    PING.overload([]);
    PING.setup();
});

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
