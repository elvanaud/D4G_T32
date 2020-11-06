-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : jeu. 05 nov. 2020 à 11:13
-- Version du serveur :  10.3.25-MariaDB-0+deb10u1
-- Version de PHP : 7.3.19-1~deb10u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `BaseIndicateurs`
--

-- --------------------------------------------------------

--
-- Structure de la table `Communes`
--

CREATE TABLE `Communes` (
  `Nom` varchar(50) NOT NULL,
  `CodePostal` varchar(6) NOT NULL,
  `IdDept` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Communes`
--

INSERT INTO `Communes` (`Nom`, `CodePostal`, `IdDept`) VALUES
('Aigrefeuille-d\'Aunis', '17290', 17),
('Jonzac', '17500', 17),
('La Rochelle', '17000', 17);

-- --------------------------------------------------------

--
-- Structure de la table `Departements`
--

CREATE TABLE `Departements` (
  `NumDept` varchar(3) NOT NULL,
  `NomDept` varchar(30) NOT NULL,
  `ScoreDept` decimal(10,5) NOT NULL,
  `ScoreDeptAccesInfo` decimal(10,5) NOT NULL,
  `ScoreDeptAccesNum` decimal(10,5) NOT NULL,
  `ScoreDeptUsageNum` decimal(10,5) NOT NULL,
  `ScoreDeptCompAdmin` decimal(10,5) NOT NULL,
  `IdRegion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Departements`
--

INSERT INTO `Departements` (`NumDept`, `NomDept`, `ScoreDept`, `IdRegion`) VALUES
(16, 'Charente', '5.60000', 5),
(17, 'Charente-Maritime', '5.10000', 5);

-- --------------------------------------------------------

--
-- Structure de la table `Iris`
--

CREATE TABLE `Iris` (
  `NomIris` varchar(50) NOT NULL,
  `IdIris` varchar(10) NOT NULL,
  `ScoreGlobal` decimal(10,5) NOT NULL,
  `ScoreAccesInfo` decimal(10,5) NOT NULL,
  `ScoreAccesNum` decimal(10,5) NOT NULL,
  `ScoreUsageNum` decimal(10,5) NOT NULL,
  `ScoreCompAdmin` decimal(10,5) NOT NULL,
  `IdCommune` varchar(50) NOT NULL,
  `IdCodePostal` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------

--
-- Structure de la table `Regions`
--

CREATE TABLE `Regions` (
  `NumRegion` int(11) NOT NULL,
  `NomRegion` varchar(50) NOT NULL,
  `ScoreRegion` decimal(10,5) NOT NULL,
  `ScoreRegAccesInfo` decimal(10,5) NOT NULL,
  `ScoreRegAccesNum` decimal(10,5) NOT NULL,
  `ScoreRegUsageNum` decimal(10,5) NOT NULL,
  `ScoreRegCompAdmin` decimal(10,5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Regions`
--

INSERT INTO `Regions` (`NumRegion`, `NomRegion`, `ScoreRegion`) VALUES
(5, 'Nouvelle-Aquitaine', '1.00000'),
(6, 'Occitanie', '2.50000');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Communes`
--
ALTER TABLE `Communes`
  ADD PRIMARY KEY (`Nom`,`CodePostal`),
  ADD KEY `fk_commune_dept` (`IdDept`);

--
-- Index pour la table `Departements`
--
ALTER TABLE `Departements`
  ADD PRIMARY KEY (`NumDept`),
  ADD UNIQUE KEY `Nom` (`NomDept`),
  ADD KEY `fk_dept_region` (`IdRegion`);

--
-- Index pour la table `Iris`
--
ALTER TABLE `Iris`
  ADD PRIMARY KEY (`IdIris`);

--
-- Index pour la table `Regions`
--
ALTER TABLE `Regions`
  ADD PRIMARY KEY (`NumRegion`),
  ADD UNIQUE KEY `Nom` (`NomRegion`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Communes`
--
ALTER TABLE `Communes`
  ADD CONSTRAINT `fk_commune_dept` FOREIGN KEY (`IdDept`) REFERENCES `Departements` (`NumDept`);

--
-- Contraintes pour la table `Departements`
--
ALTER TABLE `Departements`
  ADD CONSTRAINT `fk_dept_region` FOREIGN KEY (`IdRegion`) REFERENCES `Regions` (`NumRegion`);

--
-- Contraintes pour la table `Iris`
--
ALTER TABLE `Iris`
  ADD CONSTRAINT `fk_iris_commune` FOREIGN KEY (`IdCommune`,`IdCodePostal`) REFERENCES `Communes` (`Nom`,`CodePostal`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
