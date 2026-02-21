import sympy as sp;
import numpy as np
print("Bir fonksiyon giriniz: (örneğin: x**3 - 2*x - 5)")
fonk = input()

print("Kaç iterasyon yapılacağını giriniz:")
iterasyon = int(input())

print("x0 değerini giriniz:")
xkeksi1 = float(input()) 

print("x1 değerini giriniz:")
xkarti1 = float(input())

x = sp.symbols('x')

fonk = sp.sympify(fonk)
fonkt=sp.diff(fonk,x)
fonkt= sp.lambdify(x, fonk, 'numpy')

xkarti2 = xkeksi1 - (fonkt(xkeksi1)*(xkarti1 - xkeksi1)) / (fonkt(xkarti1) - fonkt(xkeksi1))
xkarti1 = xkarti2
x

for i in range(0,iterasyon):
