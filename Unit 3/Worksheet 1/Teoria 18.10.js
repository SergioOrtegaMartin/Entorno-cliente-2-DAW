/*Guarda en un array la lista de la compra con Peras, Manzanas, Kiwis, Plátanos y Mandarinas. Haz los siguiente con splice:
Elimina las manzanas (debe quedar Peras, Kiwis, Plátanos y Mandarinas)
Añade detrás de los Plátanos Naranjas y Sandía (debe quedar Peras, Kiwis, Plátanos, Naranjas, Sandía y Mandarinas)
Quita los Kiwis y pon en su lugar Cerezas y Nísperos (debe quedar Peras, Cerezas, Nísperos, Plátanos, Naranjas, Sandía y Mandarinas)*/

lista = ['Peras', 'Manzanas','Kiwis', 'Platanos','Mandarinas']

lista.splice (1,1)

lista.splice(3,0,'Naranjas','Sandia')
lista.splice(1,1,'Cerezas','Nisperos')
