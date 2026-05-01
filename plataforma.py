import platform
import sys
import os

def sistema():
    return platform.system()

def arquitectura():
    return platform.architecture()[0]

def user():
    return platform.node()

def procesador():
    return platform.processor()

def makedir(nombre:str):
    os.mkdir(nombre)
    return True


comando = sys.argv[1]

if comando == "sistema":
    print(sistema())

elif comando == "arquitectura":
    print(arquitectura())

elif comando == "user":
    print(user())
elif comando == "procesador":
    print(procesador())
elif comando == "makedir":
    nombre = sys.argv[2]
    print(makedir(nombre))