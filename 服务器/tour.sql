SET NAMES UTF8;
DROP DATABASE IF EXISTS tour;
CREATE DATABASE tour CHARSET=UTF8;
USE tour;
#创建优选旅程表
CREATE TABLE youxuan(
 id INT PRIMARY KEY AUTO_INCREMENT, 
 yname VARCHAR(10),
 title VARCHAR(50),
 img_url VARCHAR(255),
 classify VARCHAR(10)
);
INSERT INTO youxuan VALUES(null,'曼谷芭提雅','【狮航航班 加享特惠】曼谷芭提雅5晚6日游',
"img/home/man.jpg",'线路');
INSERT INTO youxuan VALUES(null,'厦门','厦门+鼓浪屿双飞4日跟团游',
"img/home/xia.jpg",'线路');
INSERT INTO youxuan VALUES(null,'西沙群岛','长乐公主号 西沙群岛 4日3晚直奔原味之旅',
"img/home/xi.jpg",'邮轮');
INSERT INTO youxuan VALUES(null,'日本签证','日本个人旅游签证',
"img/home/japan.jpg",'签证');
INSERT INTO youxuan VALUES(null,'稻城亚丁','稻城亚丁风景区',
"img/home/dao.jpg",'景区门票');
INSERT INTO youxuan VALUES(null,'法国WIFI','法国WIFI租赁',
"img/home/french.jpg",'WIFI');
#创建景区门票表
CREATE TABLE ticket(
 id INT PRIMARY KEY AUTO_INCREMENT, 
 title VARCHAR(15),
 adress VARCHAR(10),
 img VARCHAR(255),
 price decimal(10,2)
);
INSERT INTO ticket VALUES(null,'稻城亚丁风景区','稻城县',"img/home/dao.jpg",277);
INSERT INTO ticket VALUES(null,'武当山','十堰',"img/ticket/wu.jpg",230);
INSERT INTO ticket VALUES(null,'云台山景区','焦作',"img/ticket/yun.jpg",210);
INSERT INTO ticket VALUES(null,'成都大熊猫繁育研究基地','成都',"img/ticket/panda.jpg",54);
INSERT INTO ticket VALUES(null,'上海欢乐谷','松江',"img/ticket/huan.jpg",103);
INSERT INTO ticket VALUES(null,'石林国家地质公园','石林彝族自治县',"img/ticket/shi.jpg",90);
INSERT INTO ticket VALUES(null,'故宫','北京',"img/ticket/gu.jpg",18);
#创建邮轮表
CREATE TABLE liner(
 id INT PRIMARY KEY AUTO_INCREMENT, 
 title VARCHAR(50),
 adress VARCHAR(10),
 img VARCHAR(255),
 price1 decimal(10,2),
 price2 decimal(10,2),
 ltype VARCHAR(20),
 destination VARCHAR(10),
 routing VARCHAR(10),
 classify1 VARCHAR(10),
 classify2 VARCHAR(10),
 classify3 VARCHAR(10)
);
INSERT INTO liner VALUES(null,'歌诗达邮轮维多利亚号 广州出发 越南芽庄+岘港 6日5晚跟团游','广州',"liner/1.jpg",4888,5888,'歌诗达邮轮维多利亚号','芽庄','6天5晚','美食','摄影','一价全含');
INSERT INTO liner VALUES(null,'丽星邮轮处女星号 上海出发 日本东京+富士山 8日7晚跟团游','上海',"liner/2.jpg",3999,4999,'丽星邮轮处女星号','东京','8天7晚','美食','摄影','名山');
INSERT INTO liner VALUES(null,'维京游轮奥丁号 北京出发 巴塞尔-阿姆斯特丹 6日5晚莱茵河4国之旅','北京',"liner/3.jpg",12888,15888,'维京游轮奥丁号','科隆','6天5晚','美食','岸上游览','一价全含');
INSERT INTO liner VALUES(null,'塞洛斯邮轮涅斐勒号 北京出发 希腊-土耳其 8日7晚浪漫爱琴海之旅','北京',"liner/4.jpg",14999,15999,'塞洛斯邮轮涅斐勒号','雅典','8天7晚','海岛游','岸上游览','一价全含');
INSERT INTO liner VALUES(null,'维多利亚号 上海出发 日本长崎 6日5晚跟团游','上海',"liner/5.jpg",3599,4599,'维多利亚号','东京','6天5晚','美食','摄影','岸上游览');
INSERT INTO liner VALUES(null,'长乐公主号 澳大利亚+新西兰 13日12晚探索之旅','北京',"liner/6.jpg",9723,11000,'长乐公主号','阿卡罗阿','13天12晚','美食','亲子','摄影');
INSERT INTO liner VALUES(null,'海洋灿烂号 西沙群岛 4日3晚直奔原味之旅','北京',"liner/7.jpg",4680,6000,'海洋灿烂号','三沙','4天3晚','海岛游','潜水','摄影');
INSERT INTO liner VALUES(null,'美国公主盛世公主号 日本冲绳+那霸+八重山诸岛 6日5晚跟团游','广州',"liner/8.jpg",2824,4000,'美国公主盛世公主号','冲绳','6天5晚','海岛游','潜水','摄影');
#创建用户表
CREATE TABLE user(
 id INT PRIMARY KEY AUTO_INCREMENT, 
 uname VARCHAR(15),
 phone CHAR(11),
 people INT,
 godate DATETIME,
 price decimal(10,2)
);



