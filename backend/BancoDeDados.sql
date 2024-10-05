CREATE DATABASE IF NOT EXISTS `cybercores` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `cybercores`;

-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: cybercores
-- ------------------------------------------------------
-- Server version	8.0.36
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

CREATE TABLE
  `categorias` (
    `id` int NOT NULL AUTO_INCREMENT,
    `nome` varchar(45) NOT NULL,
    `descricao` text NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

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

CREATE TABLE
  `enderecos` (
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
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

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

CREATE TABLE
  `favoritos` (
    `id` int NOT NULL AUTO_INCREMENT,
    `Usuarios_id` int NOT NULL,
    `Produtos_id` int NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

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

CREATE TABLE
  `pagamentos` (
    `id` int NOT NULL,
    `usuarios_id` int NOT NULL,
    `valor` decimal(10, 2) NOT NULL,
    `metodoPagamento` varchar(50) NOT NULL,
    `statusPagamento` varchar(20) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

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

CREATE TABLE
  `produtos` (
    `id` int NOT NULL AUTO_INCREMENT,
    `nome` varchar(255) NOT NULL,
    `descricao` text NOT NULL,
    `preco` decimal(10, 2) NOT NULL,
    `estoque` int NOT NULL,
    `categoria` varchar(255) NOT NULL,
    `imagem` varchar(255) NOT NULL,
    `marca` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `idProdutos_UNIQUE` (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--
LOCK TABLES `produtos` WRITE;

/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;

/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;

UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--
DROP TABLE IF EXISTS `usuarios`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `usuarios` (
    `id` int NOT NULL AUTO_INCREMENT,
    `nome` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `senha` varchar(255) NOT NULL,
    `endereco` varchar(225),
    `telefone` varchar(20),
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--
LOCK TABLES `usuarios` WRITE;

/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;

INSERT INTO
  `usuarios`
VALUES
  (
    1,
    'Pedro',
    'Pedrogamer123@gmail.com',
    'Pedro123',
    'blumenau',
    '47 99999-9999'
  );

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

-- Dump completed on 2024-09-24 20:53:06