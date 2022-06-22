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

CREATE TABLE followers(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    seguidor_id INT,
    seguido_id INT,
    FOREIGN KEY (seguido_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (seguidor_id) REFERENCES users (id) ON DELETE CASCADE
    );
    INSERT INTO `products` ( id,id_users, name_product, product_description, image_product, fecha_producto) VALUES
(DEFAULT,1,'Guitarra acústica Fender FA-235', 'Construcción totalmente laminada; estilo de cuerpo de concierto. Parte superior de arce con parte trasera y laterales de caoba. Fishman Electronics. Diapasón de nogal y puente vikingo. Orientación de la mano: derecha','/images/img1.jpg','2002-09-27'),
(DEFAULT, 2, 'Guitarra Criolla clásica Yamaha C40', 'Top de abeto europeo sólido. Parte trasera y laterales de palisandro. Cuello OTAN. Diapasón de ébano', '/images/img2.jpg', '2022-08-15'),
(DEFAULT, 3,  'Teclado Musical Yamaha PSR Series PSR-E373 61 teclas negro', 'Con 622 tonos y 205 ritmos. Tipo de alimentación: corriente eléctrica y pilas.Terminales de entrada y salida: auriculares, pedal, alimentación externa. Posee 154 canciones cargadas. Suenan hasta 48 notas simultáneamente. Con pantalla LCD. Efectos: coros, retraso, dsp, hall virtual, master eq, armonía, reverberación' ,'/images/img3', '2013-08-21' ),
(DEFAULT, 4, 'Armonica Stagg', 'Ideal para quienes comienzan a estudiar armónica. Afinada en Re (D). Diatónica, de 10 celdas / agujeros, 20 voces. Armónica de Blues. Su cuerpo (peine) plástico producen un tono claro y brillante. Placa de caña de cobre de 0,9 mm', '/images/img4.jpg','2019-04-22'),
(DEFAULT, 'Flauta Dulce Soprano Yamaha Yrs23 Yrs 23' , 'YRS-23. Material: Plastico. Digitación Alemana. Color: Ivory. Con funda Original', '/images/img5.jpg', '2018-01-25'),
(DEFAULT, 'Cajón Peruano Flamenco con Bordona', 'cuerpo eucalipto 8mm.Tapas 3mm guatambú. Cuerpo encolado. Bordes fresados (redondeados). Entablillado interior frontal en el que va montada la tapa batidora', '/images/img6.jpg', '2009-08-16'),
(DEFAULT, 'Batería de 5 cuerpos + banqueta y PLatillos Dna negra', 'La batería NATAL DNA viene completa, con hardware, platillos, pedal para el bombo, butaca e incluso baquetas; todo lo que necesitas para tocar la batería directamente de la caja', '/images/img7.jpg', '2020-06-04' ),
(DEFAULT, 'Trompeta en Bb Dorada Lincoln Wind + Estuche Cuero Jytr 1401', 'Modelo JYTR1401. Afinada en Bb (si bemol). Cuerpo yellow brass. 3 pistones de acero inoxidable. Diámetro de campana de 125 mm', '/images/img8', '2015-11-29'),
(DEFAULT, 'Triangulo Metálico de 10 Cm Stagg Musical con Golpeador', '10 cm de alto. Material: Acero. Con golpeador de acero. En blister cerrado', '/images/img9', '2018-06-06'),
(DEFAULT, 'Violin Palatino 4/4 Madera estudio con estuche Arco Resina', 'Tapa de abeto tallada a mano maciza. Sólida mano tallada arce espalda, lados y cuello. Accesorios ebonizados. Máquinas de afinación anodizadas Tailpiece. Accesorios incluidos. Arco incluido', '/images/img10.jpg', '2022-05-21' );



