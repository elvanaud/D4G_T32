-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : jeu. 05 nov. 2020 à 08:06
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
  `CodePostal` varchar(5) NOT NULL,
  `ScoreGlobal` decimal(10,5) NOT NULL,
  `ScoreAccesInfo` decimal(10,5) NOT NULL,
  `ScoreAccesNum` decimal(10,5) NOT NULL,
  `ScoreUsageNum` decimal(10,5) NOT NULL,
  `ScoreCompAdmin` decimal(10,5) NOT NULL,
  `IdDept` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Communes`
--

INSERT INTO `Communes` (`Nom`, `CodePostal`, `ScoreGlobal`, `ScoreAccesInfo`, `ScoreAccesNum`, `ScoreUsageNum`, `ScoreCompAdmin`, `IdDept`) VALUES
('Aigrefeuille-d\'Aunis', '17290', '6.50000', '6.60000', '6.70000', '6.80000', '6.90000', 2),
('Jonzac', '17500', '7.00000', '7.10000', '7.20000', '7.30000', '7.40000', 2),
('La Rochelle', '17000', '6.00000', '6.10000', '6.20000', '6.30000', '6.40000', 2);

-- --------------------------------------------------------

--
-- Structure de la table `Departements`
--

CREATE TABLE `Departements` (
  `NumDept` int(11) NOT NULL,
  `NomDept` varchar(30) NOT NULL,
  `ScoreDept` decimal(10,5) NOT NULL,
  `IdRegion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `Departements`
--

INSERT INTO `Departements` (`NumDept`, `NomDept`, `ScoreDept`, `IdRegion`) VALUES
(1, 'Charente', '5.60000', 5),
(2, 'Charente-Maritime', '5.10000', 5);

-- --------------------------------------------------------

--
-- Structure de la table `Regions`
--

CREATE TABLE `Regions` (
  `NumRegion` int(11) NOT NULL,
  `NomRegion` varchar(50) NOT NULL,
  `ScoreRegion` decimal(10,5) NOT NULL
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
  ADD PRIMARY KEY (`Nom`),
  ADD UNIQUE KEY `CodePostal` (`CodePostal`);

--
-- Index pour la table `Departements`
--
ALTER TABLE `Departements`
  ADD PRIMARY KEY (`NumDept`),
  ADD UNIQUE KEY `Nom` (`NomDept`),
  ADD KEY `fk_dept_region` (`IdRegion`);

--
-- Index pour la table `Regions`
--
ALTER TABLE `Regions`
  ADD PRIMARY KEY (`NumRegion`),
  ADD UNIQUE KEY `Nom` (`NomRegion`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Departements`
--
ALTER TABLE `Departements`
  MODIFY `NumDept` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `Regions`
--
ALTER TABLE `Regions`
  MODIFY `NumRegion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
