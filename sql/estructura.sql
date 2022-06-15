CREATE TABLE `products` (
`id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
`id_users` int NOT NULL,
`name_product` varchar(45) NOT NULL,
`product_description` varchar(255) NOT NULL,
`image_product` varchar(255) NOT NULL,
`fecha_producto` DATE NOT NULL,
`created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
`updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`deleted_at` DATETIME
);

CREATE TABLE `users` (
`id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
`nombre_users` varchar(255) NOT NULL,
`apellido` varchar(255) NOT NULL,
`email` varchar(255) NOT NULL,
`password` varchar(255) NOT NULL,
`image_users` varchar(255) NOT NULL,
`fecha_nacimiento` DATE NOT NULL,
`created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
`updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`deleted_at` DATETIME,
`numero_documento` varchar(8) NOT NULL

);

CREATE TABLE `comentarios` (
`id` int Primary key NOT NULL AUTO_INCREMENT,
`id_users` int NOT NULL,
`id_product` int NOT NULL,
`texto_comentario` text,
`created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
`updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`deleted_at` DATETIME
);

ALTER TABLE products
ADD foreign key (`id_users`) references users(id);

ALTER TABLE comentarios
ADD foreign key (`id_users`) references users(id),
ADD foreign key (`id_product`) references products(id);