CREATE DATABASE  IF NOT EXISTS `cybercores` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cybercores`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cybercores
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) NOT NULL,
  `descricao` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enderecos`
--

DROP TABLE IF EXISTS `enderecos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enderecos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `endereco` varchar(45) NOT NULL,
  `cliente_id` int NOT NULL,
  `rua` varchar(255) NOT NULL,
  `numero` varchar(10) NOT NULL,
  `complemento` varchar(255) DEFAULT NULL,
  `bairro` varchar(255) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `cep` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idendereco_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enderecos`
--

LOCK TABLES `enderecos` WRITE;
/*!40000 ALTER TABLE `enderecos` DISABLE KEYS */;
/*!40000 ALTER TABLE `enderecos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favoritos`
--

DROP TABLE IF EXISTS `favoritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favoritos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Usuarios_id` int NOT NULL,
  `Produtos_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoritos`
--

LOCK TABLES `favoritos` WRITE;
/*!40000 ALTER TABLE `favoritos` DISABLE KEYS */;
/*!40000 ALTER TABLE `favoritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagamentos`
--

DROP TABLE IF EXISTS `pagamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pagamentos` (
  `id` int NOT NULL,
  `usuarios_id` int NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `metodoPagamento` varchar(50) NOT NULL,
  `statusPagamento` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagamentos`
--

LOCK TABLES `pagamentos` WRITE;
/*!40000 ALTER TABLE `pagamentos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pagamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `descricao` text NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  `estoque` int NOT NULL,
  `categoria` varchar(255) NOT NULL,
  `imagem` varchar(255) NOT NULL,
  `marca` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idProdutos_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'NVIDIA GeForce RTX 4090','Placa de vídeo de alta performance, ideal para games e trabalhos gráficos exigentes.',14999.99,5,'Placas de Vídeo','img/placa de video 4090.jpg','NVIDIA'),(2,'PC Gamer Ultra RTX 4090','PC Gamer de altíssimo desempenho, equipado com a mais recente placa de vídeo NVIDIA RTX 4090, ideal para games AAA e trabalhos de renderização 3D. Inclui processador Intel i9, 32GB RAM, SSD de 1TB.',25999.99,3,'Computadores','img/pcgamer.jpeg','Custom Build'),(3,'Mouse Gamer Redragon Cobra','Mouse gamer com RGB, 10000 DPI, 7 botões programáveis, design ergonômico. Modelo: M711 V2.',99.89,23,'mouse gamer','img/mousegamer.jpg','Redragon'),(4,'Teclado Mecânico HyperX Alloy FPS Pro','Teclado mecânico compacto com switches Cherry MX Red, ideal para jogos FPS. RGB personalizável.',299.90,15,'teclado gamer','img/tecladogamer.png','HyperX'),(5,'Monitor Gamer AOC Hero 24G2','Monitor gamer de 24 polegadas com 144Hz, 1ms de tempo de resposta, Full HD e painel IPS.',1249.90,8,'monitor gamer','img/monitorgamer.jpg','AOC'),(6,'Headset Gamer Logitech G Pro X','Headset gamer com som surround 7.1, microfone removível e almofadas em espuma de memória.',649.99,12,'headset gamer','img/headsetgamer.png','Logitech'),(7,'Fonte Corsair CV550 80 Plus Bronze','Fonte de alimentação com 550W, certificação 80 Plus Bronze, eficiência energética e PFC ativo.',349.90,20,'fonte de alimentação','img/fonte.jpg','Corsair'),(8,'SSD Kingston A2000 1TB M.2 NVMe','SSD NVMe de 1TB com alta velocidade de leitura de 2000MB/s e gravação de 1000MB/s.',499.90,30,'SSD','img/ssd.jpg','Kingston'),(9,'Gabinete Gamer NZXT H510','Gabinete mid-tower com painel lateral em vidro temperado, suporte para resfriamento líquido e design minimalista.',499.00,10,'gabinete gamer','img/gabinete.jpg','NZXT'),(10,'Webcam Logitech C920 HD Pro','Webcam Full HD 1080p com autofoco e microfone embutido, ideal para streaming e videoconferências.',399.90,18,'webcam','img/webcam.jpg','Logitech'),(11,'Memória RAM Corsair Vengeance LPX 16GB','Kit de memória RAM DDR4 de 16GB (2x8GB), 3200MHz, otimizada para desempenho em jogos.',469.90,22,'memória RAM','img/memoriaram.jpg','Corsair'),(12,'Microfone Condensador USB Blue Yeti','Microfone USB com qualidade de estúdio, ideal para streaming, podcasts e gravações de voz. Possui quatro padrões polares.',899.90,10,'microfone','img/microfone.jpg','Blue'),(13,'Teclado Mecânico Razer BlackWidow V3','Teclado mecânico com switches Razer Green, retroiluminação RGB, e teclas macro programáveis. Ideal para gamers e escritores.',499.90,10,'teclado mecânico','img/teclado_blackwidow.jpg','Razer'),(14,'Monitor Ultrawide LG 34WN80C-B','Monitor ultrawide de 34 polegadas, resolução WQHD, painel IPS, com suporte a HDR10, ideal para produtividade e jogos.',3199.90,5,'monitor ultrawide','img/monitor_ultrawide.jpg','LG');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `endereco` varchar(225) DEFAULT NULL,
  `telefone` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Pedro','Pedrogamer123@gmail.com','Pedro123','blumenau','47 99999-9999'),(2,'Gustavo','virges.gustavo@gmail.com','1234',NULL,NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-13 13:22:50
