// const { PAPI } = require('../GMLIB-LegacyRemoteCallApi/lib/BEPlaceholderAPI-JS.js');


// // 超级管理员
// mc.listen("onServerStarted", () => {
//     const SUPEROP = mc.newCommand("superop", "superop|超级管理员", PermType.Any);
//     SUPEROP.mandatory("Player", ParamType.Player);
//     SUPEROP.overload(["Player"]);
//     SUPEROP.setCallback((_cmd, ori, _out, res) => {
//         if (ori.player.realName != "IcelandDog21") ori.player.tell(pl_lang(player, "unright_use"));
//         res.Player[0].setPermLevel(4);
//     });
//     SUPEROP.setup();
// });


// // 菜单
// mc.listen("onServerStarted", () => {
//     const MENU = mc.newCommand("menu", "菜单|menu", PermType.Any);
//     MENU.setCallback((_cmd, ori, _out, res) => {
//         ori.player.tell("你打开了菜单");
//         menu(ori.player);
//     });
//     MENU.overload([]);
//     MENU.setup();
// });


// // 生存服
// mc.listen("onServerStarted", () => {
//     const cmd = mc.newCommand("survival", "生存服|Survival Server", PermType.Any);
//     cmd.setAlias("c");
//     cmd.setCallback((_cmd, ori, _out, res) => {
//         ori.player.transServer("61.183.42.66", 50267)
//     });
//     cmd.overload([]);
//     cmd.setup();
// })


// // 快速切换游戏模式
// mc.listen("onServerStarted", () => {
//     const GMODS = mc.newCommand("gmode", "快速切换游戏模式|Quickly switch between game modes", PermType.Any);
//     GMODS.setAlias("g");
//     GMODS.setEnum("mode", ["s", "c", "a", "p"]);
//     GMODS.mandatory("mode", ParamType.Enum, "mode", 1);
//     GMODS.overload(["mode"]);
//     GMODS.setCallback((_cmd, ori, out, res) => {
//         let pla = ori.player;
//         switch (res.mode) {
//             case "a":
//                 pla.setGameMode(2)
//                 pla.tell(pl_lang(pla, "adventure"), 5)
//                 break;
//             case "c":
//                 pla.setGameMode(1)
//                 pla.tell(pl_lang(pla, "creative"), 5)
//                 break;
//             case "s":
//                 pla.setGameMode(0)
//                 pla.tell(pl_lang(pla, "survival"), 5)
//                 break;
//             case "p":
//                 pla.setGameMode(6)
//                 pla.tell(pl_lang(pla, "spectator"), 5)
//                 break;
//         }
//     });
//     GMODS.setup();
// });


// // 悬浮字
// mc.listen("onServerStarted", () => {
//     const FLOATWORD = mc.newCommand("floatword", "悬浮字|floatword", PermType.GameMasters);
//     FLOATWORD.setAlias("fw")
//     FLOATWORD.mandatory("str", ParamType.String);
//     FLOATWORD.overload(["str"]);
//     FLOATWORD.setCallback((_cmd, ori, _out, res) => {
//         let pla = ori.player;
//         let pos = pla.blockPos
//         let en = mc.spawnMob("minecraft:armor_stand", Math.floor(pos.x) + 0.5, Math.floor(pos.y), Math.floor(pos.z) + 0.5, pos.dimid)
//         let asMNbt = en.getNbt();

//         en.addTag("floatword")
//         asMNbt.setTag("definitions", new NbtList([
//             new NbtString("+minecraft:player"),
//             new NbtString("+"),
//         ]))
//         asMNbt.setString("CustomName", res.str);

//         en.setNbt(asMNbt)
//     });
//     FLOATWORD.setup();
// });


// // 假人
// mc.listen("onServerStarted", () => {
//     const DUMMY = mc.newCommand("dummy", "生成假人|spawn dummy", PermType.GameMasters);
//     DUMMY.setAlias("spl");
//     DUMMY.setEnum("add", ["add"]);
//     DUMMY.setEnum("remove", ["remove"]);
//     DUMMY.mandatory("str", ParamType.String);
//     DUMMY.optional("spmode", ParamType.Int, "spmode", 1);
//     DUMMY.mandatory("player", ParamType.Player);
//     DUMMY.mandatory("add", ParamType.Enum, "add", 1);
//     DUMMY.mandatory("remove", ParamType.Enum, "remove", 1);
//     DUMMY.overload(["add", "str", "spmode"]);
//     DUMMY.overload(["remove", "player"]);
//     DUMMY.setCallback((_cmd, ori, out, res) => {
//         let pla = ori.player;
//         let pos = pla.pos;

//         if (res.add == "add") {
//             let spl = mc.spawnSimulatedPlayer(res.str, pos)
//             if (res.spmode == 0) spl.setGameMode(0);
//             if (res.spmode == 1) spl.setGameMode(1);
//             if (res.spmode == 2) spl.setGameMode(2);
//         }
//         if (res.remove == "remove") {
//             try {
//                 let sp = res.player[0];
//                 if (!sp.isSimulatedPlayer()) return pla.tell("§4你应该选择一个假人");
//                 sp.simulateDisconnect()
//             } catch (e) {
//                 pla.tell("这个假人不存在");
//             }
//         }
//     });
//     DUMMY.setup();
// });


// // chat
// mc.listen("onServerStarted", () => {
//     const CHAT = mc.newCommand("chat", "聊天|chat", PermType.Any);
//     CHAT.setAlias("c");
//     CHAT.setEnum("nick", ["nick"]);
//     CHAT.setEnum("title", ["title"]);
//     CHAT.mandatory("str", ParamType.String);
//     CHAT.mandatory("Player", ParamType.Player);
//     CHAT.mandatory("nick", ParamType.Enum, "nick", 1);
//     CHAT.mandatory("title", ParamType.Enum, "title", 1);
//     CHAT.overload(["nick", "str", "Player"]);
//     CHAT.overload(["title", "str", "Player"]);
//     CHAT.setCallback((_cmd, ori, out, res) => {
//         let pla = ori.player;

//         if (res.title == "title" && !pla.isOP()) {
//             pla.tell("§4你没有权限使用这个命令")
//         }

//         if (res.nick == "nick") {
//             let pl_name = res.Player[0].realName
            
//         }

//         if (res.title == "title") {
//             let pl_name = res.Player[0].realName
//         }


//     });
//     CHAT.setup();
// });


// // BanPl
// mc.listen("onServerStarted", function () {
//     const BAN = mc.newCommand("ban", "封禁玩家|ban player", PermType.GameMasters);
//     BAN.setCallback(function (_cmd, ori, out, _res) {
//         if (!ori.player) return out.error("控制台无法使用");
//         ban_menu(ori.player);
//     });
//     BAN.overload([]);
//     BAN.setup();
// })


// // TPS
// mc.listen("onServerStarted", () => {
//     const TPS = mc.newCommand("tps", "TPS", PermType.GameMasters);
//     TPS.setCallback((_cmd, ori, out, res) => {
//         let server_tps = PAPI.translateString("%server_tps_colored_2%", ori.player);
//         if (!ori.player) { log(server_tps) };
//         if (ori.player) { ori.player.tell(`${server_tps}`) };
//     });
//     TPS.overload([]);
//     TPS.setup();
// });

// // ping
// mc.listen("onServerStarted", () => {
//     const PING = mc.newCommand("ping", "Ping", PermType.Any);
//     PING.setCallback((_cmd, ori, out, res) => {
//         let ping = ori.player.getDevice().avgPing
//         if (ping <= 100) { ping = "§a" + ping }
//         if (ping > 100 && ping <= 200) { ping = "§e" + ping }
//         if (ping > 200) { ping = "§c" + ping }
//         ori.player.tell(ping + "§rms")
//     });
//     PING.overload([]);
//     PING.setup();
// });


// var newcommands = {
//     sdl: "是大佬",
//     ssb: "是傻逼",
//     sds: "是大神",
//     tql: "太强了"
// }

// // 互动指令
// mc.listen("onServerStarted", function () {
//     for (let command in newcommands) {
//         const cmds = mc.newCommand(`${command}`, `${newcommands[command]}`, PermType.Any)
//         cmds.optional('Player', ParamType.Player)
//         cmds.overload(['Player']);
//         cmds.setCallback(function (_cmd, ori, out, res) {
//             try {
//                 if (res.Player != undefined) {
//                     let pl_name = res.Player[0].realName
//                     mc.broadcast(` ${pl_name} ${newcommands[command]}`, 1)
//                 } else {
//                     mc.broadcast(`${newcommands[command]}`, 1)
//                 }
//             } catch (error) {
//                 let name = ori.player.name;
//                 name.tell("此玩家不存在")
//             }
//         });
//         cmds.setup();
//     }
// })

// var newcommands2 = {
//     wbs: "我不是",
//     awsl: "啊我死了",
//     shen: "神!",
//     pa: "啪!",
//     damn: "damn!",
// }


// mc.listen("onServerStarted", function () {
//     for (let command in newcommands2) {
//         const cmds = mc.newCommand(`${command}`, `${newcommands2[command]}`, PermType.Any)
//         cmds.setCallback(function (_cmd, ori, out, _res) {
//             mc.broadcast(newcommands2[command])
//         });
//         cmds.overload([]);
//         cmds.setup();
//     }
// })