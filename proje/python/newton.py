#newton yöntemini yapınız.
import sympy as sp
import numpy as np

calis=True
while calis==True:
 print("bir fonksiyon giriniz: (x**2+5*x-65 gibi)")
 fonk=input()
 print("bir ilk değer giriniz:")
 ilkdeger=float(input())

 x=sp.Symbol('x')
 sembfonk=sp.sympify(fonk)

 birincit=sp.diff(sembfonk,x)
 ikincit=sp.diff(birincit,x)
 ikincitsm=sp.lambdify(x,ikincit,'numpy')
 newton=x-(birincit/ikincit)
 newtonr=sp.lambdify(x,newton,'numpy')
 
 sonuc=ikincitsm(ilkdeger)

 if sonuc>0 or sonuc<0:
  print("kaçıncı iterasyona kadar devam etmek istersiniz:")
  iterasyon=int(input())

  dizi=[None]*(iterasyon)

  for a in range(0,iterasyon):
   dizi[a]=newtonr(ilkdeger)
   ilkdeger=newtonr(ilkdeger)
   sonuciki=ikincitsm(ilkdeger)
   print(str(a+1)+".iterasyonuuzdaki yaklaşık değer:"+str(dizi[a]))
   if sonuciki==0:
        print("ikinci türev 0'a eşit payda 0 ise çözümsüzdür.")
        a=iterasyon
  calis=False
  break
  
 else:
      print("ikinci türev 0'a eşit payda 0 ise çözümsüzdür tekrar bir başlangıç değeri belirleyiniz:")
      calis=True


