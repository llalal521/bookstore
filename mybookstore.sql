-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: mybookstore
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `id` int NOT NULL AUTO_INCREMENT,
  `isbn` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `description` text NOT NULL,
  `number` int NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `book_id_name_index` (`id`,`name`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,'1','Java核心技术卷II','编程','凯S.霍斯特曼',95,'本书是Java领域有影响力和价值的著作之一，由拥有20多年教学与研究经验的Java技术专家撰写（获Jolt大奖），与《Java编程思想》齐名，10余年全球畅销不衰，广受好评。第10版根据JavaSE8全面更新，同时修正了第9版中的不足，系统全面讲解了Java语言的核心概念、语法、重要特性和开发方法，包含大量案例，实践性强。',1000,'http://img3m9.ddimg.cn/12/36/1546133799-1_w_1.jpg'),(2,'2','深入理解计算机系统','编程','兰德尔·E·布莱恩特',136,'程序员必读经典著作！理解计算机系统*书目，10万程序员共同选择。第二版销售突破100000册，第三版重磅上市！',1198,'http://img3m7.ddimg.cn/48/0/24106647-1_w_6.jpg'),(3,'3','Effective C++','编程','梅耶',51,'大师名著纵横二十载，稳居任一荐书单三甲；称职程序员傍身绝学，通向C++精微奥妙之门。',998,'http://img3m6.ddimg.cn/96/25/21000966-1_u_12.jpg'),(4,'4','小王子','儿童文学','圣-埃克苏佩里',8,'豆瓣9.7高分推荐！旅法翻译家梅子涵之女梅思繁法文直译，舒朗大开本，央美教授高精度还原原作插画。首次收录全球舞台剧、音乐会、电影、动画片等对《小王子》的精彩诠释，通晓名作的前世今生。',1000,'http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg'),(5,'5','Java编程思想','编程','Bruce Eckel',91,'Java学习必读经典,殿堂级著作！赢得了全球程序员的广泛赞誉。',9094,'http://img3m0.ddimg.cn/4/24/9317290-1_w_5.jpg'),(6,'6','魔兽世界编年史套装(全三卷)','魔幻小说','克里斯˙梅森',449,'暴雪官方历时二十年编纂而成的史料！三卷《魔兽世界编年史》将呈现大量从未公布的精美原画和插图，读者在阅读故事之余，更能享受一次视觉上的饕餮盛宴，是魔兽粉丝收藏的优选。',120,'http://img3m7.ddimg.cn/43/9/25352557-1_w_3.jpg'),(7,'7','三体：全三册','科幻小说','刘慈欣',50,'刘慈欣代表作，亚洲首部“雨果奖”获奖作品！',14409,'http://img3m4.ddimg.cn/32/35/23579654-1_u_3.jpg'),(8,'8','悲惨世界（上中下）（精装版）','世界名著','雨果',104,'《悲惨世界》是雨果在流亡期间写的长篇小说，是他的代表作，也是世界文学宝库的珍品之一。\r\n    《悲惨世界》通过冉阿让等人的悲惨遭遇以及冉阿让被卞福汝主教感化后一系列令人感动的事迹，深刻揭露和批判了19世纪法国封建专制社会的腐朽本质及其罪恶现象，对穷苦人民在封建重压下所遭受的剥削欺诈和残酷迫害表示了悲悯和同情。',387,'http://img3m7.ddimg.cn/13/15/27912667-1_u_1.jpg'),(9,'9','动物农场','社会小说','乔治·奥威尔',20,'也译“动物庄园”，是“一代人的冷峻良知”乔治·奥威尔经典的讽喻之作。虽然这一场荒诞的动物革命走向歧途，但正是因为这样我们才了解“把权力关进制度的笼子”的重要性。',123,'http://img3m1.ddimg.cn/82/3/25229341-1_w_2.jpg'),(10,'10','机器学习','编程','周志华',61,'击败AlphaGo的武林秘籍，赢得人机大战的必由之路：人工智能大牛周志华教授巨著，全面揭开机器学习的奥秘。',2524,'http://img3m0.ddimg.cn/20/24/23898620-1_w_3.jpg'),(11,'11','纳尼亚传奇','魔幻小说','刘易斯',86,'刘易斯基金会独家授权插图！翻译家吴岩，陈良廷，刘文澜经典译本！',120,'http://img3m7.ddimg.cn/1/32/22474387-1_u_2.jpg'),(12,'12','老人与海','世界名著','海明威',27,'收录诺贝尔文学奖获奖作品《老人与海》《乞力马扎罗的雪》，深深影响了马尔克斯、塞林格等文学家的创作理念。',2414,'http://img3m6.ddimg.cn/94/11/27891166-1_u_2.jpg'),(13,'13','魔力的胎动','悬疑/推理小说','东野圭吾',35,'喜欢《解忧杂货店》，就一定要读这本书。珍藏印签。有了想要守护的东西，生命就会变得有力量。悲凉的人生、千疮百孔的命运、一桩桩悲剧的发生与救赎，读来令人喟叹不已。',1232,'http://img3m4.ddimg.cn/68/35/28484744-2_u_6.jpg'),(14,'14','我不怕这漫长黑夜','青春文学','苑子豪',37,'七篇寻光故事，七种奇遇人生，送给成长路上孤独前行的你，每个人的生活都有被困在井里一样的绝望时刻，而这本书就想做点亮黑夜的那束光芒。耐心一些，保持相信，我们终会穿越漫长黑夜，抵达属于自己的黎明。',1141,'http://img3m0.ddimg.cn/9/18/28486170-1_u_8.jpg'),(15,'15','永久记录','传记文学','爱德华·斯诺登',56,'美国政府不想让全世界读到这本书，欧美上市当日作者便被美国司法部起诉！“棱镜门”主角爱德华·斯诺登首次亲自披露美国政府滥用NSA系统监控世界的真相，袒露从“爱国者”到“叛国者”的心路历程。',124,'http://img3m5.ddimg.cn/86/22/28475555-2_u_9.jpg'),(16,'16','探索月球','儿童文学','安妮·詹克利奥维奇',133,'嫦娥五号探测器系统副总设计师彭兢诚意推荐！纪念人类登月50周年，五大精妙立体机关直观呈现月球的运行轨迹，全方位揭秘人类探月登月的过程，普及基本的航天知识，与孩子一起解读月球的奥秘，种下探索宇宙的种子。',1515,'http://img3m4.ddimg.cn/13/30/28481224-1_w_3.jpg'),(17,'17','高考英语 五年高考三年模拟','中小学教辅','曲一线',70,'五年高考三年模拟，英语五三高考练习册，五三高中同步53全练全解，你值得拥有！',12332,'http://img3m4.ddimg.cn/62/14/27883214-1_w_2.jpg'),(18,'18','红楼梦','世界名著','曹雪芹',18,'中国古典小说佳作，影响整个华人世界的经典！轻松易学、国家教育部推荐读物！',2439,'http://img3m6.ddimg.cn/31/22/23828836-1_w_8.jpg'),(19,'19','草房子','儿童文学','曹文轩',22,'人民文学出版社天天出版社出品，经典作品，教师推荐，已有超过150000读者给予好评！',1231,'http://img3m2.ddimg.cn/32/4/23662022-1_w_9.jpg'),(20,'20','追风筝的人','世界名著','卡勒德·胡赛尼',35,'“许多年过去了，人们说陈年旧事可以被埋葬，然而我终于明白这是错的，因为往事会自行爬上来。回首前尘，我意识到在过去二十六年里，自己始终在窥视着那荒芜的小径。”',14141,'http://img3m5.ddimg.cn/26/14/25238195-1_w_3.jpg'),(21,'21','软件工程原理','编程','沈备军、陈昊鹏、陈雨亭',35,'从软件工程的本质出发、结合实际案例，系统全面地介绍软件过程、软件建模技术与方法及软件工程管理同时介绍一些热点新技术和新方法。',1024,'http://img3m6.ddimg.cn/32/30/1204489076-1_w_1.jpg'),(22,'22','数据库系统概念','编程','西尔伯沙茨',74,'本书内容丰富，不仅讨论了关系数据模型和关系语言、数据库设计过程、关系数据库理论、数据库应用设计和开发、数据存储结构、数据存取技术、查询优化方法、事务处理系统和并发控制、故障恢复技术、数据仓库和数据挖掘，而且对性能调整、性能评测标准、数据库应用测试和标准化等高级应用主题进行了广泛讨论。',241,'http://img3m2.ddimg.cn/83/5/22632572-1_w_1.jpg'),(23,'23','算法导论','编程','科尔曼',77,'全书选材经典、内容丰富、结构合理、逻辑清晰，对本科生的数据结构课程和研究生的算法课程都是非常实用的教材，在IT专业人员的职业生涯中，本书也是一本案头必备的参考书或工程实践手册。',144,'http://img3m8.ddimg.cn/89/15/1517005898-1_w_1.jpg'),(24,'24','史记（文白对照本）','古籍','司马迁',237,'荣获商务印书馆2019人文社科十大好书，张大可先生《史记》研究的集成之作，精细考证，廓清原书真伪；题解语译，展现著者史观，是一部人人都能读懂、人人都会爱读的文白对照本《史记》。',4141,'http://img3m7.ddimg.cn/14/14/27915737-1_w_3.jpg'),(25,'25','天龙八部(全五册)','武侠小说','金庸',102,'《天龙八部》一书以北宋、辽、西夏、大理并立的历史为宏大背景，将儒释道、琴棋书画等中国传统文化融会贯通其中，书中人物繁多，个性鲜明，情节离奇，尽显芸芸众生百态。',74743,'http://img3m2.ddimg.cn/84/17/23273202-1_w_1.jpg'),(26,'26','笑傲江湖(全四册)','武侠小说','金庸',80,'一部《辟邪剑谱》引发灭门血案，阴险狡诈，机关算尽，只为争霸武林，真相往往出人意表。酒后高歌磨剑，梦中快意恩仇，一曲《笑傲江湖》，传一段天荒地老。 ',2522,'http://img3m0.ddimg.cn/82/15/23273200-1_w_1.jpg'),(27,'27','楚留香传奇(全三册)','武侠小说','古龙',224,'《楚留香传奇》无疑乃古龙诸作中*为烩炙人口之作，此作固成就古龙之盛名，更成为武侠文学之重要里程碑。楚留香有西方007罗杰摩尔之冷静、优雅、明快及幽默，更因他没有复仇及情爱之纠葛（例如他从来不杀人）而超越007，颇有“本来无一物，何处惹尘埃”的意境。',550,'http://img3m4.ddimg.cn/4/22/1592963464-1_w_1.jpg'),(28,'28','哈利波特与魔法石','魔幻小说','J·K·罗琳',30,'“沉湎于虚幻的梦想，而忘记现实的生活，这是毫无益处的，千万记住。”                                ——阿不思·邓布利多',1000,'http://img3m1.ddimg.cn/88/0/25479421-1_w_1.jpg'),(29,'29','哈利·波特与死亡圣器','魔幻小说','J·K·罗琳',56,'两个人不能都活着，只有一个生存下来，我们中的一个将要永远离开……',1550,'http://img3m4.ddimg.cn/71/20/25479404-1_w_1.jpg');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_order`
--

DROP TABLE IF EXISTS `book_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book_order` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `create_time` datetime NOT NULL,
  PRIMARY KEY (`order_id`),
  KEY `FKhom18uhrx4lj8p8ebqdmkieos` (`user_id`),
  CONSTRAINT `FKhom18uhrx4lj8p8ebqdmkieos` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_order`
--

LOCK TABLES `book_order` WRITE;
/*!40000 ALTER TABLE `book_order` DISABLE KEYS */;
INSERT INTO `book_order` VALUES (27,2,'2021-09-04 15:23:30'),(28,2,'2021-09-04 15:25:58'),(29,2,'2021-09-04 16:29:33'),(30,2,'2021-09-04 16:31:16'),(31,2,'2021-09-04 16:41:30'),(32,2,'2021-09-04 16:43:30'),(33,2,'2021-09-04 16:43:39'),(34,1,'2021-09-05 07:34:07'),(35,2,'2021-09-05 08:33:57'),(36,2,'2021-09-05 09:20:57'),(37,2,'2021-09-05 09:21:10'),(38,2,'2021-09-06 06:36:54'),(39,2,'2021-09-06 06:39:24'),(40,2,'2021-09-06 07:37:04'),(41,2,'2021-09-06 07:37:04'),(42,2,'2021-09-06 08:49:02'),(43,1,'2021-09-09 07:34:58'),(44,3,'2021-09-21 07:30:01'),(45,3,'2021-09-21 07:30:32'),(46,3,'2021-09-21 07:30:32'),(47,3,'2021-09-21 11:28:01'),(48,3,'2021-09-21 13:28:50'),(49,3,'2021-09-21 13:30:44'),(50,3,'2021-09-21 13:43:57'),(51,3,'2021-09-21 14:11:24'),(52,3,'2021-09-21 14:16:39'),(53,3,'2021-09-21 14:18:25'),(54,3,'2021-09-21 14:21:53'),(55,3,'2021-09-21 14:34:53'),(56,3,'2021-09-21 15:15:07'),(57,3,'2021-09-21 15:16:39'),(58,3,'2021-09-21 15:22:09'),(59,3,'2021-09-21 15:26:29'),(60,3,'2021-09-21 15:29:09'),(61,2,'2021-09-25 08:17:58'),(62,2,'2021-09-25 08:31:19'),(63,2,'2021-09-25 11:43:38'),(64,3,'2021-09-25 12:02:00');
/*!40000 ALTER TABLE `book_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKl70asp4l4w0jmbm1tqyofho4o` (`user_id`),
  CONSTRAINT `FKl70asp4l4w0jmbm1tqyofho4o` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
INSERT INTO `cart` VALUES (37,2),(41,2),(42,2),(46,3),(47,3);
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_item`
--

DROP TABLE IF EXISTS `cart_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cart_id` int NOT NULL,
  `book_id` int NOT NULL,
  `item_number` int NOT NULL,
  `price` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKis5hg85qbs5d91etr4mvd4tx6` (`book_id`),
  KEY `FK1uobyhgl1wvgt1jpccia8xxs3` (`cart_id`),
  CONSTRAINT `FK1uobyhgl1wvgt1jpccia8xxs3` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`),
  CONSTRAINT `FKis5hg85qbs5d91etr4mvd4tx6` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_item`
--

LOCK TABLES `cart_item` WRITE;
/*!40000 ALTER TABLE `cart_item` DISABLE KEYS */;
INSERT INTO `cart_item` VALUES (37,37,15,1,56),(41,41,14,1,37),(42,42,23,1,77),(46,46,10,1,61),(47,47,3,1,51);
/*!40000 ALTER TABLE `cart_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `homevisit`
--

DROP TABLE IF EXISTS `homevisit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `homevisit` (
  `id` int NOT NULL AUTO_INCREMENT,
  `count` int DEFAULT NULL,
  `visit_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `homevisit`
--

LOCK TABLES `homevisit` WRITE;
/*!40000 ALTER TABLE `homevisit` DISABLE KEYS */;
INSERT INTO `homevisit` VALUES (1,164,'2021-12-05 03:14:47');
/*!40000 ALTER TABLE `homevisit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `order_Item_id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL,
  `book_id` int NOT NULL,
  `item_number` int DEFAULT NULL,
  `total_price` int DEFAULT NULL,
  PRIMARY KEY (`order_Item_id`),
  KEY `FKb033an1f8qmpbnfl0a6jb5njs` (`book_id`),
  KEY `FKpsi7jut8p2eombb9xuh51d5mn` (`order_id`),
  CONSTRAINT `FKb033an1f8qmpbnfl0a6jb5njs` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`),
  CONSTRAINT `FKpsi7jut8p2eombb9xuh51d5mn` FOREIGN KEY (`order_id`) REFERENCES `book_order` (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
INSERT INTO `order_item` VALUES (25,27,3,1,51),(26,28,3,1,51),(27,29,6,1,449),(28,30,7,1,50),(29,31,5,1,91),(30,32,5,1,91),(31,33,7,1,50),(32,34,11,1,86),(33,35,11,1,86),(34,36,16,1,133),(35,37,7,1,50),(36,38,19,1,22),(37,39,8,1,104),(38,40,14,1,37),(39,41,18,1,18),(40,42,2,1,136),(41,43,7,1,50),(42,44,2,1,136),(43,45,11,1,86),(44,46,19,1,22),(45,47,10,1,61),(46,48,6,1,449),(47,49,19,1,22),(48,50,27,1,224),(49,51,22,1,74),(50,52,22,1,74),(51,53,25,1,102),(52,54,25,1,102),(53,55,25,1,102),(54,56,23,1,77),(55,57,22,1,74),(56,58,22,1,74),(57,59,29,1,56),(58,60,18,1,18),(59,61,7,1,50),(60,62,6,1,449),(61,63,19,1,22),(62,64,25,1,102);
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` int NOT NULL DEFAULT '0',
  `email` varchar(255) DEFAULT NULL,
  `active` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_username_uindex` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'ylq','yang123',1,'123456798@qq.com',1),(2,'yj','123456',0,'2512618003@qq.com',1),(3,'123','123456',0,'1115483353@qq.com',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-05 13:43:37
