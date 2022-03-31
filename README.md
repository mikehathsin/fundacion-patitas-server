Fundación Patitas.
Construya una aplicación usando la Arquitectura orientada a Servicios orientada a gestionar un refugio de animales domesticos. La aplicación debe:

1. Registrar los animales rescatados y llevar un registro con sus característica, sitio de rescate, la persona, personas o institucuón que lo rescató

2. Llevar un registro de las condiciones de salud del animal, cuidados aplicados y su evolución ( historia clinica) Incluye también vacunas, medico tratante, t

3. Llevar registro de los posibles dueños de mascota.

4. Un aspirante a dueño de mascota puede llevarse una macota por tres meses de prueba. Se debe asignar un supervisor del proceso de adopción y verificar la factibilidad de la misma mediante visitas al hogar asignado

5. Llevar un registro de los trabajadores de la Fundación: Veterinarios, cuidadores, entrenadores y personal administrativo.

6. Puede usar una BD relacional o una BD No-sql. En cualquier caso, presente los diagramas descriptivos de la base de datos pertinentes: Relacional si es BD SQL, si n una descripción del mdel de datos para BD no-SQL

7. Genere reportes para:
   1. Registro de los datos
   2. Presente un mapa con la ubicación de los sitios de rescate de las mascotas. Use openmap como servicio de mapas
   3. Otras consultas pertinentes.
8. API, de manera que puedan elaborarse consultas a otros requerimientos.

Debe entregar:

1. Informe con el diseño de la aplicación en .pdf
2. Código (Gitlab). Colocar enlace en el informe
3. Vídeo mostrando ejecución de la aplicación. Puede subirlo a la plataforma o colocar un enlace al vídeo

Puntuación

- Informe 40 - Caso de Uso, Diagramas de Clases, Modelo ER y Diccionario de Datos. Diagrama de Interaccion, Diagrama de Actividad, Arquitectura

- Video 40 - Explicacin del diseño, codigo y la ejecucion. Debe quedar expuesto como aplicó la arquitectura de servicios en la aplicación.

- Codigo 20 - codigo publicado en Github o Gitlab

# Datos de prueba

## Animal

id_Animal: 1001
id_Resc1:28304
id_hist1: 20211
nombre: Scooby
Tipo: Perro
Color: Marron claro
lugar_Rescate: Av. Las Americas - Ciudad Guayana
fecha_Rescate: 01/03/2021

id_Animal : 1002
id_Resc1: 28301
id_hist1: 20212
Nombre: Snow
Tipo: Gato
Color: BLanco
Lugar_Rescate: Av. Caroni - Ciudad Guayana
Fecha_rescate: 22/02/2022

id_Animal: 1003
id_Resc1: 28303
id_hist1: 20214
Nombre: Sony
Tipo: conejo
Color: gris
Lugar_Rescate : Av. Upata - Ciudad Guayana
Fecha_rescate: 28/11/2020

id_Animal : 1004
id_Resc1: 28302
id_hist1: 20215
Nombre: Cobaya
Tipo: Hamster
Color: blanco con marron
Lugar_Rescate : Urb. Los Altos - Ciudad Guayana
Fecha_rescate: 16/08/2021

id_Animal : 1005
id_Resc1: 28302
id_hist1: 20213
Nombre: Cookie
Tipo: Perro
Color: Marron con negro
Lugar_Rescate : La churuata - Ciudad Guayana
Fecha_rescate: 01/10/2020

## Rescatista

Id_resc:28301
Nombre:Fatima Gonzalez
Tipo: Persona
Telefono: 0414-389-5874
Correo: fatgo@gmail.com

Id_resc:28302
Nombre: Fundacion Lilo
Tipo: Fundacion
Telefono: 286-9318541
Correo: lilofundacion@gmail.com

Id_resc:28303
Nombre: Miguel Padrino
Tipo: Persona
Telefono: 0424-9853342
Correo: miguelP@gmail.com

Id_resc:28304
Nombre: Romeo y Julieta
Tipo: Asociacion
Telefono: 0426-3697514
Correo:ryjAsoc@gmail.com

## HistoriaClinica

Id_hist:20211
id_animal1:1001
id_Trab1: 0901
Condicion_salud: Deshidratado
Cuidados: Suero hidratante y baño
Vacunas: antirabico, leptospira
Evolución: En 8 dias la mascota se recupero totalmente

Id_hist:20212
id_animal1:1002
id_Trab1: 0901
Condicion_salud: Deshidratacion y sarna
Cuidados: Afeitado, baño especial, medicacion antisarna
Vacunas: ivermectina,
Evolución: en 30 dias mostro mejorias notables

Id_hist:20213
id_animal1:1005
id_Trab1: 0902
Condicion_salud: Pata fracturada
Cuidados: Baño, yeso, calmante, desinflamatorio, terapia
Vacunas: trivalente, antirabico
Evolución: en 74 dias volvio a caminar normalmente

Id_hist:20214
id_animal1:1003
id_Trab1: 0901
Condicion_salud: perfecto estado
Cuidados: baño
Vacunas:mixomatosis
Evolución: mascota con buena salud

Id_hist:20215
id_animal1:1004
id_Trab1: 0902
Condicion_salud: Resfriado
Cuidados: antivirales, mentol
Vacunas: ninguna
Evolución: mejoro en un laptop de 15 dias, sin embargo su capacidad respiratoria bajo de por vida.

## Trabajadores

Id_Trab: 0900
Nombre: Jose Martinez
Teléfono: 0412-2580058
Correo: Josemm@gmail.ocm
Tipo: Entrenador
Horario: Matutino (7 - 12)

Id_Trab: 0901
Nombre: Samaria Valdez
Teléfono:0412-2978008
Correo:Svaldez@gmail.com
Tipo: Veterinaria
Horario: Mixto (7 - 5)

Id_Trab: 0902
Nombre: Raul Leandro
Teléfono: 0412-5416632
Correo: Leandrore@gmail.com
Tipo: Veterinario
Horario: Vespertino

Id_Trab: 0903
Nombre: Maria Rojas
Teléfono: 0416-7829959
Correo: Lic.mrojas@gmail.com
Tipo: Personal Administrativo
Horario: Matutino

Id_Trab: 0904
Nombre: Luis España
Teléfono: 0416-7875116
Correo: EspañaL@gmail.com
Tipo: Cuidador
Horario: Vespertino

Id_Trab: 0904
Nombre: Jesus Ortiz
Teléfono: 0412-5482235
Correo: Chuchi@gmail.com
Tipo: Cuidador
Horario: Matutino

## SupervisorAdopcion

Id_super:0810
Nombre: Jorge Reyes
Telefono: 0412-0086574
Correo:Reyesj1@gmail.com
Horario: matutino

Id_super:0811
Nombre: Luis Alfonzo
Telefono:0416-5429878
Correo:Luisfonzo@gmail.com
Horario: vespertino

Id_super:0812
Nombre: Pedro Marin
Telefono:0424-3875641
Correo:ppmarin@gmail.com
Horario: matutino

## Adoptante

Id_Adop:3201
id_Animal2:1004
id_super1:0810
Nombre:Anibal Moron
Direccion:Las Garzas - Puerto Ordaz
Telefono:0416-7895479
Correo:Amoron@gmail.com

Id_Adop:3202
id_Animal2:1001
id_super1:0812
Nombre:Jose Salazar
Direccion:Moreno de Mendoza - San felix
Telefono:0416-7908654
Correo:Josejs@gmail.com

Id_Adop:3203
id_Animal2:
id_super1:
Nombre: Alejandro Ramirez
Direccion: Los Olivos - Puerto Ordaz
Telefono: 0414-6542855
Correo:AleRam@gmail.com

Id_Adop:3204
id_Animal2:1003
id_super1:0811
Nombre: Gustavo Ferrer
Direccion: Altavista - Puerto Ordaz
Telefono: 0412-3587741
Correo:GustavoAF@gmail.com
