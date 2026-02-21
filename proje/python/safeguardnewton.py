import numpy as np;
import sympy as sp;

print("f(x) fonksiyonunu giriniz:(x**2+3*x+5 gibi)")
fx=input()

print(" Bir aralık belirleyiniz. Aralığınızın başlangıç değerini giriniz:")
baslangıç=int(input())

print("aralığınızın bitiş değerini giriniz:")
bitiş=int(input())

print("Aralığın içinden bir ilk değer giriniz:")
ilkdeger=float(input())

print("iterasyon sayısını giriniz:")
iterasyon=int(input())

x=sp.symbols('x')
fonk=sp.simpify(fx)
fonk1=sp.lambdify(x,fonk,'numpy')
fonk1t=sp.diff(fonk,x)
fonkt1=sp.lambdify(x,fonk1t,'numpy')
fonk2t=sp.diff(fonkt1,x)
fonkt2=sp.lambdify(x,fonk2t,'numpy')

if fonkt2(ilkdeger)>0 :
 landa=-fonkt1(ilkdeger)/fonk2t(ilkdeger)
else:
    landa=-fonkt1(ilkdeger)
    
if landa<0 :
    if(baslangıç-ilkdeger)/landa<1:
        alfa=(baslangıç-ilkdeger)/landa
    else:    
     alfa=1
else landa>0 :
    if(bitiş-ilkdeger)/landa<1:
        alfa=(bitiş-ilkdeger)/landa
    else:    
     alfa=1
ilkalfa=alfa    
j=0
while fonk1(ilkdeger+alfa*landa)>=fonk(ilkdeger):
      
    if fonk1(ilkdeger+alfa*landa)>=fonk(ilkdeger):
     alfa=(0,5**j)*ilkalfa
     j=j+1
     