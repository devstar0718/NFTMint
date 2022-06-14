/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3307
 Source Server Type    : MySQL
 Source Server Version : 100138
 Source Host           : localhost:3307
 Source Schema         : unique

 Target Server Type    : MySQL
 Target Server Version : 100138
 File Encoding         : 65001

 Date: 07/01/2022 20:58:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` bigint(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `parent_id` bigint(11) UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `parent_id`(`parent_id`) USING BTREE,
  INDEX `ix_hierarchy_parent`(`parent_id`, `id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 'Cat Name 1', 0);
INSERT INTO `category` VALUES (2, 'Cat Name 2', 0);
INSERT INTO `category` VALUES (3, 'Cat Name 3', 2);
INSERT INTO `category` VALUES (4, 'Cat Name 4', 2);
INSERT INTO `category` VALUES (7, 'Cat Name 5', 4);
INSERT INTO `category` VALUES (8, 'Cat Name 6', 4);
INSERT INTO `category` VALUES (9, 'Cat Name 7', 4);
INSERT INTO `category` VALUES (10, 'Cat Name 8', 4);
INSERT INTO `category` VALUES (11, 'Cat Name 9', 4);
INSERT INTO `category` VALUES (12, 'Cat Name 10', 4);
INSERT INTO `category` VALUES (13, 'Cat Name 11', 2);
INSERT INTO `category` VALUES (16, 'Cat Name 12', 13);
INSERT INTO `category` VALUES (17, 'Cat Name 13', 13);
INSERT INTO `category` VALUES (18, 'Cat Name 14', 13);
INSERT INTO `category` VALUES (19, 'Cat Name 15', 13);
INSERT INTO `category` VALUES (20, 'Cat Name 16', 13);
INSERT INTO `category` VALUES (21, 'Cat Name 17', 13);

-- ----------------------------
-- Table structure for heart_image
-- ----------------------------
DROP TABLE IF EXISTS `heart_image`;
CREATE TABLE `heart_image`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `wallet` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `imageUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `flag` tinyint(1) NULL DEFAULT 1,
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of heart_image
-- ----------------------------

-- ----------------------------
-- Table structure for nfts
-- ----------------------------
DROP TABLE IF EXISTS `nfts`;
CREATE TABLE `nfts`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `imageUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `rating` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ether` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `category` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `creator` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '',
  `owner` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `views` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `contact_address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `token_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `token_standard` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `blockchain` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `description` varchar(300) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `tx` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT 'mint nft token history',
  `tx_market` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'inert token to marketplace history',
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of nfts
-- ----------------------------
INSERT INTO `nfts` VALUES (1, 'Monkey Annoyed', 'https://ipfs.infura.io/ipfs/QmZJTZM5dFcsvNx49ReFsuFKdcm91HfZT6WB7bXmbki5mk', '0', '0.1', '$10000', 'Axie Infinity AXS>General>Beast>', '0x8B04DC009601767279EB4392b382b8a917F7B1EF', '0xf6E88aCab213957f05EF223A11dD7DD37Ae0bbEA', '0', '0x54e1BFcA186eA2EB2A1b0Dc16785Dd128e5833ad', '1', 'ERC-721', 'Ethereum', 'This is test NFT smart contract.', '0x58d4fad394de22cef90a218f6355be46ec1bb9cf5e2447608f455b3f963e6aac', '0xb4db54462158b52de65076b07f832b370cf43df096eb4ce3b838e406ae0996b8', '2022-01-07 00:00:00', '2022-01-07 00:00:00');
INSERT INTO `nfts` VALUES (2, 'Cap NFT', 'https://ipfs.infura.io/ipfs/QmSzPMLyv24ECAbCvSyL43ktvMfRqtyJxk8znN8YBpApdF', '0', '1000', '$3217000', 'Axie Infinity AXS>General>Beast>', '0x8B04DC009601767279EB4392b382b8a917F7B1EF', '0x8B04DC009601767279EB4392b382b8a917F7B1EF', '0', '0x54e1BFcA186eA2EB2A1b0Dc16785Dd128e5833ad', '6', 'ERC-721', 'Ethereum', 'cap', '0x2dd3ed8d0b807179734866610c9c4b19ad2701cc2c6c815e5fc7e52da79d64d8', '0xf92a7e25c7c56e7b1542c9fd6fe558ec530fdcf959151c820acf6cdf62f4be47', '2022-01-07 00:00:00', '2022-01-07 00:00:00');
INSERT INTO `nfts` VALUES (3, 'Tom Monkey', 'https://ipfs.infura.io/ipfs/QmddYk8HkDay5uY7Mx7mwgfArrFB9Yd3rhnmoJ3WN1C7zw', '0', '1000', '$3217000', 'Axie Infinity AXS>General>Beast>', '0xf6E88aCab213957f05EF223A11dD7DD37Ae0bbEA', '0x8b04dc009601767279eb4392b382b8a917f7b1ef', '0', '0x54e1BFcA186eA2EB2A1b0Dc16785Dd128e5833ad', '6', 'ERC-721', 'Ethereum', 'Tom', '0x90184b75d10d33aeb9aba6beef25b77ddb65360caa6f755fd79cb6cfc5e87c3b', '0x70dc6edad3a3f0998761b1446cc4c42ad8b339c706ff045616fb8bae8f79b339', '2022-01-07 00:00:00', '2022-01-07 00:00:00');
INSERT INTO `nfts` VALUES (4, 'Annoyed Money', 'https://ipfs.infura.io/ipfs/QmRwxKuFXDmmcSjgmftW6BgZQvK17JjbtkRkE4HbYtWZLo', '0', '10', '$32170', 'Axie Infinity AXS>General>Beast>', '0x8B04DC009601767279EB4392b382b8a917F7B1EF', '0x8B04DC009601767279EB4392b382b8a917F7B1EF', '0', '0x54e1BFcA186eA2EB2A1b0Dc16785Dd128e5833ad', '7', 'ERC-721', 'Ethereum', 'annoyed', '0xaf85405731477412e7f0112c731380e8436aff611df6ac16470eaaf07d6e2018', '0xea216e352755046e62c1c9d481bb5d524e8d9c8e548c9fdec1909006cd7d923c', '2022-01-07 00:00:00', '2022-01-07 00:00:00');
INSERT INTO `nfts` VALUES (5, 'basketball monkey', 'https://ipfs.infura.io/ipfs/QmRX3fPAxgmdfc4PCGwABh5a38NTUySU78cjkf9x3vtcZY', '0', '1', '$3217', 'Axie Infinity AXS>General>Beast>', '0xf6E88aCab213957f05EF223A11dD7DD37Ae0bbEA', '0x8B04DC009601767279EB4392b382b8a917F7B1EF', '0', '0x54e1BFcA186eA2EB2A1b0Dc16785Dd128e5833ad', '12', 'ERC-721', 'Ethereum', 'hello', '0x0c2e5a361eba9acdf4ab8ef3eb9a466d4a9138772f668b6a8a5ffe9250287cfa', '0x19b6baffe3c32b36d51b34feba0bc3206186f170ca64902f018f1f98d689c558', '2022-01-07 00:00:00', '2022-01-07 00:00:00');

-- ----------------------------
-- Function structure for hierarchy_connect_by_parent_eq_prior_id
-- ----------------------------
DROP FUNCTION IF EXISTS `hierarchy_connect_by_parent_eq_prior_id`;
delimiter ;;
CREATE FUNCTION `hierarchy_connect_by_parent_eq_prior_id`(value BIGINT)
 RETURNS int(11)
  READS SQL DATA 
BEGIN
        DECLARE _id BIGINT;
        DECLARE _parent_id BIGINT;
        DECLARE _next BIGINT;
        DECLARE CONTINUE HANDLER FOR NOT FOUND SET @id = NULL;

        SET _parent_id = @id;
        SET _id = -1;

        IF @id IS NULL THEN
                RETURN NULL;
        END IF;

        LOOP
                SELECT  MIN(id)
                INTO    @id
                FROM    `Category`
                WHERE   parent_id = _parent_id
                        AND id > _id;
                IF @id IS NOT NULL OR _parent_id = @start_with THEN
                        SET @level = @level + 1;
                        RETURN @id;
                END IF;
                SET @level := @level - 1;
                SELECT  id, parent_id
                INTO    _id, _parent_id
                FROM    `Category`
                WHERE   id = _parent_id;
        END LOOP;       
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
