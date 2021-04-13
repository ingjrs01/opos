from bs4 import BeautifulSoup
import wget
import time

def readfile():
    fp=open("anali.html",'r+');
    contenido = fp.read()
    return contenido

def analize():
    enlaces = []
    contenido = readfile()
    res = BeautifulSoup(contenido,"html.parser")

    tabla = res.find("table",{'class','MsoNormalTable'})
    filas = tabla.findAll("tr")
    del(filas[0])
    i = 0
    for fila in filas: 
        #print("---------------------------------------------------------------------------------")
        i += 1
        celdas = fila.findAll("td")
        year = celdas[0].getText()
        name = celdas[1].getText()
        date = celdas[3].getText()
        #enlace = celdas[2].findAll("a")
        #link = enlace[0]
        #if ('href' in celdas[2].p.a):
        if (celdas[2].p.a is not None):
            link = celdas[2].p.a['href'] 
            enlaces.append(link)
            #print(link)
    print (i)

    return enlaces

        #print (year + "   -   " + name + "  -  " + date + " -> ")

    #    # lalala
    #    print(actividad)
    #return True


enlaces = analize()
print(enlaces[0])
for i in range(50):
    print(enlaces[i])
    wget.download(enlaces[i])
    time.sleep(50)
#