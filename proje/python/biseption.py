#fonksiyonumuz x^3-3x^2 olsun 
print("fonksiyonunuz x^3-3x^2 'dir.bu fonksiyon için seçtiğiniz iterasyona göre kritik nokta bulacak kodu çalıştırıyorsunuz.")

gecer=False
while gecer==False:
 print("başlangıç değerini giriniz:")
 bs=float(input())

 print("bitiş değerini giriniz:")
 ss=float(input())

 print("iterasyon sayısını seçiniz")
 iterasyonsayisi=int(input())

 o=(bs+ss)/2
 io=(bs+o)/2
 ikio=(o+ss)/2
 yaie=0

 dizi=[bs,io,o,ikio,ss]
 sonuc=[None]*5

 ilkkosul=pow(bs,3)-3*pow(bs,2)
 ikincikosul=pow(ss,3)-3*pow(ss,2)

 if ((ilkkosul)*(ikincikosul))<=0:
    for y in range(0,iterasyonsayisi):
     for x in range(0,5):
      sonuc[x]=pow(dizi[x],3)-3*pow(dizi[x],2)
 
     min1=sonuc[0]
 
     for z in range(0,5):
         print(str(z+1)+". değer:"+str(sonuc[z]))
 
     for t in range(0,5):
      if sonuc[t]<min1:
        min1=sonuc[t]
        min=dizi[t]
        yaie=t
     
     print(str(y+1)+". iterasyona göre kritik nokta:"+str(min)+"'dir.")
     print("yeni aralık:["+str(dizi[yaie-1])+","+str(dizi[yaie+1])+"] dır.")
 
     dizi[0]=dizi[yaie-1]
     dizi[4]=dizi[yaie+1]
     dizi[2]=(dizi[4]+dizi[0])/2
     dizi[1]=(dizi[2]+dizi[0])/2
     dizi[3]=(dizi[4]+dizi[2])/2
     x=0
     z=0
     t=0
     min=dizi[0]
     
    gecer=True
    break

 else:
       print("fonksiyonun ["+str(dizi[0])+","+str(dizi[4])+"] aralığında işaret değişmediği için kök yoktur adam akıllı kok seç adamı hasta etme!")
       gecer=False